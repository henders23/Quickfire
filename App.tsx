import { useState } from "react";
import StartScreen from "./StartScreen";
import GrammarMap from "./grammar-map";
import IntroScreen from "./IntroScreen";
import GameSession from "./GameSession";
import { useConceptProgress } from "./useConceptProgress";
import type { IncorrectQuestion } from "./useConceptProgress";
import { allConcepts } from "./grammar-map";
import type { TaggedQuestion } from "./grammar-map";
import { questionBanks } from "./question-banks";
import { QUESTIONS_PER_SESSION } from "./IntroScreen";

type Screen = "start" | "map" | "intro" | "game";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [streak, setStreak] = useState(0);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);
  const [challengePool, setChallengePool] = useState<TaggedQuestion[] | null>(null);

  const { progress, saveSessionResult, suggestedConceptId } = useConceptProgress();

  const handlePractice = (conceptId: string) => {
    setSelectedConceptId(conceptId);
    setScreen("intro");
  };

  const handleChallenge = () => {
    const pool: TaggedQuestion[] = [];
    for (const c of allConcepts) {
      const bank = questionBanks[c.id] ?? [];
      if (bank.length === 0) continue;
      const shuffled = [...bank].sort(() => Math.random() - 0.5);
      // Weaker concepts (avg < 60%) contribute 2 questions; all others contribute 1
      const p = progress[c.id];
      const avg = p && p.scoreHistory.length > 0
        ? p.scoreHistory.reduce((s, v) => s + v, 0) / p.scoreHistory.length
        : null;
      const count = avg !== null && avg < 60 ? 2 : 1;
      pool.push(...shuffled.slice(0, count).map(q => ({ ...q, conceptId: c.id })));
    }
    const finalPool = pool.sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_SESSION);
    setChallengePool(finalPool);
    setSelectedConceptId("challenge");
    setScreen("game"); // skip IntroScreen for challenge
  };

  const handleSessionComplete = (passed: boolean, conceptId: string, score: number, incorrectQs: IncorrectQuestion[]) => {
    if (conceptId !== "challenge") {
      saveSessionResult(conceptId, score, incorrectQs);
    }
    setStreak(prev => (passed ? prev + 1 : 0));
    setChallengePool(null);
    setScreen("map");
  };

  return (
    <>
      {screen === "start" && (
        <StartScreen streak={streak} onStart={() => setScreen("map")} />
      )}
      {screen === "map" && (
        <GrammarMap
          streak={streak}
          onPractice={handlePractice}
          onChallenge={handleChallenge}
          onBack={() => setScreen("start")}
          progress={progress}
          suggestedConceptId={suggestedConceptId}
        />
      )}
      {screen === "intro" && selectedConceptId && (
        <IntroScreen
          conceptId={selectedConceptId}
          streak={streak}
          onStart={() => setScreen("game")}
          onBack={() => setScreen("map")}
        />
      )}
      {screen === "game" && selectedConceptId && (
        <GameSession
          conceptId={selectedConceptId}
          streak={streak}
          onComplete={handleSessionComplete}
          onBack={() => { setChallengePool(null); setScreen("map"); }}
          challengePool={challengePool ?? undefined}
        />
      )}
    </>
  );
}
