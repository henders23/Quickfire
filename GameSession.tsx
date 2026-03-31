import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Zap, CheckCircle, XCircle, RotateCcw, Map } from "lucide-react";
import { allConcepts } from "./grammar-map";
import { questionBanks } from "./question-banks";
import { QUESTIONS_PER_SESSION } from "./IntroScreen";
import type { IncorrectQuestion } from "./useConceptProgress";

type Phase = "playing" | "feedback" | "results";

const QUESTION_TIME = 20;

interface Props {
  conceptId: string;
  streak: number;
  onComplete: (passed: boolean, conceptId: string, score: number, incorrectQs: IncorrectQuestion[]) => void;
  onBack: () => void;
}

export default function GameSession({ conceptId, streak, onComplete, onBack }: Props) {
  const concept = allConcepts.find(c => c.id === conceptId)!;
  const color = concept.catColor!;

  // Pick a fresh random set of questions every session
  const [questions] = useState(() => {
    const bank = questionBanks[conceptId] ?? [];
    const shuffled = [...bank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUESTIONS_PER_SESSION);
  });

  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("playing");
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeBonus, setTimeBonus] = useState(0);
  const [totalTimeBonus, setTotalTimeBonus] = useState(0);

  const currentQ = questions[qIndex];

  // Guard: no questions available for this concept yet
  if (questions.length === 0) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <div style={{ color: "#333", fontSize: 32 }}>✦</div>
        <p style={{ color: "#555", fontSize: 13, margin: 0 }}>No questions available for this concept yet.</p>
        <button onClick={onBack} style={{ marginTop: 8, background: "none", border: "1px solid #222", color: "#555", cursor: "pointer", padding: "8px 18px", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const }}>
          Back to Map
        </button>
      </div>
    );
  }

  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) { handleAnswer(null); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase]);

  const handleAnswer = useCallback((choiceIndex: number | null) => {
    if (phase !== "playing") return;
    const bonus = choiceIndex !== null ? Math.round((timeLeft / QUESTION_TIME) * 3) : 0;
    setTimeBonus(bonus);
    setTotalTimeBonus(prev => prev + bonus);
    setSelected(choiceIndex);
    setAnswers(prev => [...prev, choiceIndex]);
    setPhase("feedback");

  }, [phase, qIndex, questions.length, timeLeft]);

  const handleNext = useCallback(() => {
    if (qIndex + 1 >= questions.length) {
      setPhase("results");
    } else {
      setQIndex(i => i + 1);
      setSelected(null);
      setTimeLeft(QUESTION_TIME);
      setPhase("playing");
    }
  }, [qIndex, questions.length]);

  // ── Results / Feedback screen ─────────────────────────────────
  if (phase === "results") {
    const correctCount = answers.filter((a, i) => a === questions[i].correct).length;
    const passed = correctCount >= Math.ceil(questions.length * 0.6);
    const pct = Math.round((correctCount / questions.length) * 100);
    const wrongItems = questions
      .map((q, i) => ({ q, i, ans: answers[i] }))
      .filter(({ q, ans }) => ans !== q.correct);

    return (
      <div style={{ background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.12) 50%)", backgroundSize: "100% 2px", pointerEvents: "none", zIndex: 99 }} />

        <div style={{ padding: "14px 24px", borderBottom: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <p style={{ color: "#444", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 2px" }}>Session complete</p>
            <h2 style={{ color, margin: 0, fontSize: 15, fontWeight: 900, fontStyle: "italic" }}>{concept.title}</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22d3ee", fontWeight: 900, fontSize: 13 }}>
            <Zap size={14} fill="#22d3ee" /> {passed ? streak + 1 : 0}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>

            {/* Score summary */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, marginBottom: 24, background: "#111" }}>
              {[
                { label: "Score", value: `${pct}%`, col: passed ? color : "#ef4444" },
                { label: "Correct", value: `${correctCount} / ${questions.length}`, col: "#22d3ee" },
                { label: "Speed bonus", value: `+${totalTimeBonus}`, col: "#fbbf24" },
              ].map(stat => (
                <div key={stat.label} style={{ background: "#000", padding: "18px 12px", textAlign: "center" }}>
                  <div style={{ color: stat.col, fontWeight: 900, fontSize: 22, fontStyle: "italic" }}>{stat.value}</div>
                  <div style={{ color: "#444", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase" as const, marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Streak */}
            <div style={{ marginBottom: 28, padding: "12px 16px", borderLeft: `3px solid ${passed ? "#22d3ee" : "#ef4444"}`, background: passed ? "#001a1a" : "#1a0000" }}>
              {passed ? (
                <p style={{ color: "#22d3ee", margin: 0, fontSize: 13, fontWeight: 700 }}>
                  <Zap size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} fill="#22d3ee" />
                  Streak extended to {streak + 1}!
                </p>
              ) : (
                <p style={{ color: "#ef4444", margin: 0, fontSize: 13, fontWeight: 700 }}>
                  Streak reset. Score 60% or more to extend your streak.
                </p>
              )}
            </div>

            {/* What you got wrong */}
            {wrongItems.length > 0 ? (
              <div style={{ marginBottom: 28 }}>
                <p style={{ color: "#444", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 14px" }}>
                  What you got wrong
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {wrongItems.map(({ q, i, ans }) => (
                    <div key={i} style={{ background: "#080808", border: "1px solid #151515" }}>
                      <div style={{ padding: "14px 16px", borderBottom: "1px solid #111" }}>
                        <p style={{ color: "#fff", fontSize: 13, margin: "0 0 12px", lineHeight: 1.5, opacity: 0.8 }}>
                          Q{i + 1}: {q.prompt}
                        </p>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                          <XCircle size={14} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
                          <p style={{ color: "#ef4444", fontSize: 13, margin: 0, lineHeight: 1.45 }}>
                            {ans !== null ? q.options[ans] : "No answer — time ran out"}
                          </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <CheckCircle size={14} style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }} />
                          <p style={{ color: "#22c55e", fontSize: 13, margin: 0, lineHeight: 1.45 }}>
                            {q.options[q.correct]}
                          </p>
                        </div>
                      </div>
                      <div style={{ padding: "10px 16px" }}>
                        <p style={{ color: "#fff", fontSize: 12, margin: 0, lineHeight: 1.6, opacity: 0.6 }}>
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0 28px", borderTop: "1px solid #0d0d0d", borderBottom: "1px solid #0d0d0d", marginBottom: 28 }}>
                <CheckCircle size={32} style={{ color, margin: "0 auto 10px", display: "block" }} />
                <p style={{ color: "#fff", fontSize: 13, margin: 0, opacity: 0.6 }}>Perfect score — no mistakes to review!</p>
              </div>
            )}

            {/* What you got right (subtle) */}
            {correctCount > 0 && wrongItems.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <p style={{ color: "#1d1d1d", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 10px" }}>
                  What you got right
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {questions.map((q, i) => {
                    if (answers[i] !== q.correct) return null;
                    return (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 12px", borderLeft: "2px solid #1a2e1a" }}>
                        <CheckCircle size={12} style={{ color: "#1a3a1a", flexShrink: 0, marginTop: 2 }} />
                        <p style={{ color: "#2a2a2a", fontSize: 11, margin: 0, lineHeight: 1.4 }}>{q.prompt}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingBottom: 8 }}>
              <button
                onClick={onBack}
                style={{ background: "none", border: "1px solid #1a1a1a", color: "#555", padding: "14px 0", cursor: "pointer", fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" as const, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
              >
                <Map size={13} /> Back to Map
              </button>
              <button
                onClick={() => {
                  setQIndex(0); setPhase("playing"); setTimeLeft(QUESTION_TIME);
                  setSelected(null); setAnswers([]); setTotalTimeBonus(0);
                }}
                style={{ background: color, border: "none", color: "#000", padding: "14px 0", cursor: "pointer", fontWeight: 900, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" as const, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
              >
                <RotateCcw size={13} /> Try Again
              </button>
            </div>
          </div>
        </div>

        <ResultNotifier
          passed={passed}
          conceptId={conceptId}
          score={pct}
          incorrectQs={wrongItems.map(({ q, ans }) => ({
            prompt: q.prompt,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation,
            yourAnswer: ans,
          }))}
          onComplete={onComplete}
        />
      </div>
    );
  }

  // ── Question screen ───────────────────────────────────────────
  const timePct = timeLeft / QUESTION_TIME;
  const timerColor = timePct > 0.5 ? "#22d3ee" : timePct > 0.25 ? "#fbbf24" : "#ef4444";
  const isCorrect = selected === currentQ?.correct;

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.12) 50%)", backgroundSize: "100% 2px", pointerEvents: "none", zIndex: 99 }} />

      {/* Timer bar */}
      <div style={{ height: 3, background: "#111" }}>
        <div style={{ height: "100%", background: timerColor, width: `${timePct * 100}%`, transition: "width 1s linear, background 0.3s", boxShadow: `0 0 8px ${timerColor}` }} />
      </div>

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
                  : i === qIndex ? color : "#111",
                boxShadow: i === qIndex ? `0 0 6px ${color}` : "none",
              }} />
            ))}
          </div>
          <span style={{ color: "#333", fontSize: 11, fontWeight: 700 }}>{qIndex + 1} / {questions.length}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#22d3ee", fontWeight: 900, fontSize: 12 }}>
            <Zap size={12} fill="#22d3ee" /> {streak}
          </div>
        </div>
        <div style={{ fontWeight: 900, fontSize: 24, color: timerColor, minWidth: 28, textAlign: "center", fontVariantNumeric: "tabular-nums", fontStyle: "italic" }}>
          {timeLeft}
        </div>
      </div>

      {/* Question body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 20px", maxWidth: 580, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: 22, padding: "4px 14px", borderLeft: `2px solid ${color}`, color, fontSize: 7, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const }}>
          {concept.title}
        </div>

        <h2 style={{ color: "#fff", fontSize: 27, fontWeight: 700, textAlign: "center", lineHeight: 1.5, margin: "0 0 36px", maxWidth: 500 }}>
          {currentQ.prompt}
        </h2>

        {/* 2 options */}
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
                <span style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 900, flexShrink: 0, color: border }}>
                  {["A", "B"][i]}
                </span>
                <span style={{ flex: 1, paddingTop: 3 }}>{option}</span>
                {phase === "feedback" && isCorrectOpt && <CheckCircle size={14} style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }} />}
                {phase === "feedback" && isSelected && !isCorrectOpt && <XCircle size={14} style={{ color: "#ef4444", flexShrink: 0, marginTop: 3 }} />}
              </button>
            );
          })}
        </div>

        {/* Explanation + Next button */}
        {phase === "feedback" && (
          <>
            <div style={{ marginTop: 18, padding: "13px 16px", background: "#080808", borderLeft: `3px solid ${isCorrect ? "#22c55e" : "#ef4444"}`, width: "100%" }}>
              <p style={{ color: "#fff", fontSize: 9, margin: 0, lineHeight: 1.6, opacity: 0.75 }}>
                {currentQ.explanation}
              </p>
              {isCorrect && timeBonus > 0 && (
                <p style={{ color: "#fbbf24", fontSize: 8, margin: "5px 0 0", fontWeight: 700 }}>
                  +{timeBonus} speed bonus
                </p>
              )}
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

function ResultNotifier({
  passed, conceptId, score, incorrectQs, onComplete,
}: {
  passed: boolean;
  conceptId: string;
  score: number;
  incorrectQs: IncorrectQuestion[];
  onComplete: (passed: boolean, conceptId: string, score: number, incorrectQs: IncorrectQuestion[]) => void;
}) {
  useEffect(() => { onComplete(passed, conceptId, score, incorrectQs); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}
