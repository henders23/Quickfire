import { useState, useCallback } from "react";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Map } from "lucide-react";
import { allConcepts } from "./grammar-map";
import type { IncorrectQuestion } from "./useConceptProgress";

interface Props {
  questions: IncorrectQuestion[];
  onComplete: (correctlyAnswered: IncorrectQuestion[]) => void;
  onBack: () => void;
}

export default function ReviewSession({ questions, onComplete, onBack }: Props) {
  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<"playing" | "feedback" | "results">("playing");
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const currentQ = questions[qIndex];
  const concept = allConcepts.find(c => c.id === currentQ?.conceptId);
  const color = concept?.catColor ?? "#22d3ee";

  const handleAnswer = useCallback((choiceIndex: number | null) => {
    if (phase !== "playing") return;
    setSelected(choiceIndex);
    setAnswers(prev => [...prev, choiceIndex]);
    setPhase("feedback");
  }, [phase]);

  const handleNext = useCallback(() => {
    if (qIndex + 1 >= questions.length) {
      setPhase("results");
    } else {
      setQIndex(i => i + 1);
      setSelected(null);
      setPhase("playing");
    }
  }, [qIndex, questions.length]);

  // ── Results screen ────────────────────────────────────────────
  if (phase === "results") {
    const correctlyAnswered = questions.filter((q, i) => answers[i] === q.correct);
    const stillWrong = questions.filter((q, i) => answers[i] !== q.correct);
    const pct = Math.round((correctlyAnswered.length / questions.length) * 100);

    return (
      <div style={{ background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.12) 50%)", backgroundSize: "100% 2px", pointerEvents: "none", zIndex: 99 }} />

        <div style={{ padding: "14px 24px", borderBottom: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <p style={{ color: "#444", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 2px" }}>Review complete</p>
            <h2 style={{ color: "#22d3ee", margin: 0, fontSize: 15, fontWeight: 900, fontStyle: "italic" }}>All Topics</h2>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, marginBottom: 24, background: "#111" }}>
              {[
                { label: "Score", value: `${pct}%`, col: pct >= 60 ? "#22c55e" : "#ef4444" },
                { label: "Cleared", value: `${correctlyAnswered.length}`, col: "#22c55e" },
                { label: "Remaining", value: `${stillWrong.length}`, col: stillWrong.length > 0 ? "#fbbf24" : "#22c55e" },
              ].map(stat => (
                <div key={stat.label} style={{ background: "#000", padding: "18px 12px", textAlign: "center" }}>
                  <div style={{ color: stat.col, fontWeight: 900, fontSize: 22, fontStyle: "italic" }}>{stat.value}</div>
                  <div style={{ color: "#444", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase" as const, marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 28, padding: "12px 16px", borderLeft: `3px solid ${correctlyAnswered.length > 0 ? "#22c55e" : "#ef4444"}`, background: correctlyAnswered.length > 0 ? "#001a00" : "#1a0000" }}>
              <p style={{ color: correctlyAnswered.length > 0 ? "#22c55e" : "#ef4444", margin: 0, fontSize: 13, fontWeight: 700 }}>
                {correctlyAnswered.length > 0
                  ? `${correctlyAnswered.length} question${correctlyAnswered.length > 1 ? "s" : ""} cleared from your review queue.`
                  : "No questions cleared — keep practising!"}
              </p>
            </div>

            {/* Still wrong */}
            {stillWrong.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <p style={{ color: "#444", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 14px" }}>
                  Still needs work
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {stillWrong.map((q, i) => {
                    const c = allConcepts.find(x => x.id === q.conceptId);
                    return (
                      <div key={i} style={{ background: "#080808", border: "1px solid #151515", padding: "10px 14px", borderLeft: `3px solid ${c?.catColor ?? "#333"}` }}>
                        <p style={{ color: c?.catColor ?? "#555", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, margin: "0 0 6px" }}>
                          {c?.title ?? "Unknown"}
                        </p>
                        <p style={{ color: "#fff", fontSize: 12, margin: 0, lineHeight: 1.5, opacity: 0.7 }}>{q.prompt}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Cleared */}
            {correctlyAnswered.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <p style={{ color: "#1a3a1a", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 10px" }}>
                  Cleared
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {correctlyAnswered.map((q, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 12px", borderLeft: "2px solid #1a3a1a" }}>
                      <CheckCircle size={12} style={{ color: "#1a3a1a", flexShrink: 0, marginTop: 2 }} />
                      <p style={{ color: "#2a2a2a", fontSize: 11, margin: 0, lineHeight: 1.4 }}>{q.prompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingBottom: 8 }}>
              <button
                onClick={() => onComplete(correctlyAnswered)}
                style={{ background: "none", border: "1px solid #1a1a1a", color: "#555", padding: "14px 0", cursor: "pointer", fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" as const, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
              >
                <Map size={13} /> Back to Map
              </button>
              {stillWrong.length > 0 && (
                <button
                  onClick={() => { setQIndex(0); setPhase("playing"); setSelected(null); setAnswers([]); }}
                  style={{ background: "#22d3ee", border: "none", color: "#000", padding: "14px 0", cursor: "pointer", fontWeight: 900, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" as const, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
                >
                  <RotateCcw size={13} /> Retry Wrong
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Question screen ───────────────────────────────────────────
  const isCorrect = selected === currentQ?.correct;

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.12) 50%)", backgroundSize: "100% 2px", pointerEvents: "none", zIndex: 99 }} />

      {/* Header */}
      <div style={{ padding: "12px 20px", borderBottom: "1px solid #0d0d0d", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={onBack} style={{ background: "none", border: "1px solid #1a1a1a", color: "#555", cursor: "pointer", padding: "5px 10px", display: "flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
          <ArrowLeft size={13} /> Quit
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {questions.map((_, i) => (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: "50%",
                background: i < answers.length
                  ? (answers[i] === questions[i].correct ? "#22c55e" : "#ef4444")
                  : i === qIndex ? "#22d3ee" : "#111",
                boxShadow: i === qIndex ? "0 0 6px #22d3ee" : "none",
              }} />
            ))}
          </div>
          <span style={{ color: "#333", fontSize: 11, fontWeight: 700 }}>{qIndex + 1} / {questions.length}</span>
        </div>
        <div style={{ color: "#22d3ee", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" as const }}>
          Review
        </div>
      </div>

      {/* Question body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 20px", maxWidth: 580, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: 22, padding: "4px 14px", borderLeft: `2px solid ${color}`, color, fontSize: 7, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const }}>
          {concept?.title ?? "Review"}
        </div>

        <h2 style={{ color: "#fff", fontSize: 27, fontWeight: 700, textAlign: "center", lineHeight: 1.5, margin: "0 0 36px", maxWidth: 500 }}>
          {currentQ.prompt}
        </h2>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {currentQ.options.map((option, i) => {
            const isSelected = selected === i;
            const isCorrectOpt = i === currentQ.correct;

            let bg = "#080808";
            let border = "#1a1a1a";
            let textColor = "#fff";
            let textOpacity: number | undefined = 0.65;

            if (phase === "feedback") {
              if (isCorrectOpt) { bg = "#001a00"; border = "#22c55e"; textColor = "#22c55e"; textOpacity = 1; }
              else if (isSelected) { bg = "#1a0000"; border = "#ef4444"; textColor = "#ef4444"; textOpacity = 1; }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={phase === "feedback"}
                style={{
                  background: bg, border: `1px solid ${border}`, color: textColor,
                  opacity: textOpacity,
                  padding: "18px 22px", textAlign: "left" as const,
                  cursor: phase === "feedback" ? "default" : "pointer",
                  fontSize: 20, fontWeight: 600, lineHeight: 1.45,
                  display: "flex", alignItems: "flex-start", gap: 14,
                  transition: "all 0.1s", width: "100%",
                }}
              >
                <span style={{ width: 26, height: 26, borderRadius: "50%", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, flexShrink: 0, color: border }}>
                  {["A", "B"][i]}
                </span>
                <span style={{ flex: 1, paddingTop: 3 }}>{option}</span>
                {phase === "feedback" && isCorrectOpt && <CheckCircle size={14} style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }} />}
                {phase === "feedback" && isSelected && !isCorrectOpt && <XCircle size={14} style={{ color: "#ef4444", flexShrink: 0, marginTop: 3 }} />}
              </button>
            );
          })}
        </div>

        {phase === "feedback" && (
          <>
            <div style={{ marginTop: 18, padding: "13px 16px", background: "#080808", borderLeft: `3px solid ${isCorrect ? "#22c55e" : "#ef4444"}`, width: "100%" }}>
              <p style={{ color: "#fff", fontSize: 14, margin: 0, lineHeight: 1.6, opacity: 0.75 }}>
                {currentQ.explanation}
              </p>
            </div>
            <button
              onClick={handleNext}
              style={{
                marginTop: 12, width: "100%",
                background: isCorrect ? "#22c55e" : "#ef4444",
                border: "none", color: "#000",
                padding: "14px 0", cursor: "pointer",
                fontWeight: 900, fontSize: 11, letterSpacing: 1.5,
                textTransform: "uppercase" as const,
              }}
            >
              {qIndex + 1 >= questions.length ? "See Results →" : "Next Question →"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
