import { useState } from "react";
import StartScreen from "./StartScreen";
import GrammarMap from "./grammar-map";
import GameSession from "./GameSession";

type Screen = "start" | "map" | "game";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [streak, setStreak] = useState(14);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);

  const handlePractice = (conceptId: string) => {
    setSelectedConceptId(conceptId);
    setScreen("game");
  };

  const handleSessionComplete = (passed: boolean) => {
    setStreak(prev => (passed ? prev + 1 : 0));
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
    </>
  );
}
