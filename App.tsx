import { useState } from "react";
import StartScreen from "./StartScreen";
import GrammarMap from "./grammar-map";
import IntroScreen from "./IntroScreen";
import GameSession from "./GameSession";
import ReviewSession from "./ReviewSession";
import { useConceptProgress } from "./useConceptProgress";
import type { IncorrectQuestion } from "./useConceptProgress";

type Screen = "start" | "map" | "intro" | "game" | "review";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [streak, setStreak] = useState(0);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);

  const { progress, saveSessionResult, clearReviewedQuestions, allIncorrectQuestions, suggestedConceptId } = useConceptProgress();

  const handlePractice = (conceptId: string) => {
    setSelectedConceptId(conceptId);
    setScreen("intro");
  };

  const handleSessionComplete = (passed: boolean, conceptId: string, score: number, incorrectQs: IncorrectQuestion[]) => {
    saveSessionResult(conceptId, score, incorrectQs);
    setStreak(prev => (passed ? prev + 1 : 0));
    setScreen("map");
  };

  const handleReviewComplete = (correctlyAnswered: IncorrectQuestion[]) => {
    clearReviewedQuestions(correctlyAnswered);
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
          onBack={() => setScreen("start")}
          onReview={() => setScreen("review")}
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
          onBack={() => setScreen("map")}
        />
      )}
      {screen === "review" && (
        <ReviewSession
          questions={allIncorrectQuestions}
          onComplete={handleReviewComplete}
          onBack={() => setScreen("map")}
        />
      )}
    </>
  );
}
