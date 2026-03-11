import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Zap, CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import { allConcepts } from "./grammar-map";

const QUESTION_TIME = 10; // seconds per question

type Phase = "playing" | "feedback" | "results";

interface Props {
  conceptId: string;
  streak: number;
  onComplete: (passed: boolean) => void;
  onBack: () => void;
}

export default function GameSession({ conceptId, streak, onComplete, onBack }: Props) {
  const concept = allConcepts.find(c => c.id === conceptId)!;
  const questions = concept.questions;

  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("playing");
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeBonus, setTimeBonus] = useState(0);
  const [totalTimeBonus, setTotalTimeBonus] = useState(0);

  const currentQ = questions[qIndex];
  const isCorrect = selected === currentQ?.correct;

  // Countdown timer
  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) {
      handleAnswer(null);
      return;
    }
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

    // Auto-advance
    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        setPhase("results");
      } else {
        setQIndex(i => i + 1);
        setSelected(null);
        setTimeLeft(QUESTION_TIME);
        setPhase("playing");
      }
    }, 1500);
  }, [phase, qIndex, questions.length, timeLeft]);

  // ── Results screen ──────────────────────────────────────────────
  if (phase === "results") {
    const correctCount = answers.filter((a, i) => a === questions[i].correct).length;
    const passed = correctCount >= Math.ceil(questions.length * 0.6);
    const pct = Math.round((correctCount / questions.length) * 100);

    return (
      <div style={{ background: "#0b1120", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
        {/* Scanlines */}
        <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.15) 50%), linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))", backgroundSize: "100% 2px, 3px 100%", pointerEvents: "none", zIndex: 99 }} />

        <div style={{ width: "100%", maxWidth: 460, background: "#0f1927", border: `2px solid ${concept.catColor}`, padding: 36, position: "relative" }}>
          {/* Corner accents */}
          <div style={{ position: "absolute", top: -1, left: -1, width: 16, height: 16, borderTop: `2px solid ${concept.catColor}`, borderLeft: `2px solid ${concept.catColor}` }} />
          <div style={{ position: "absolute", top: -1, right: -1, width: 16, height: 16, borderTop: `2px solid ${concept.catColor}`, borderRight: `2px solid ${concept.catColor}` }} />
          <div style={{ position: "absolute", bottom: -1, left: -1, width: 16, height: 16, borderBottom: `2px solid ${concept.catColor}`, borderLeft: `2px solid ${concept.catColor}` }} />
          <div style={{ position: "absolute", bottom: -1, right: -1, width: 16, height: 16, borderBottom: `2px solid ${concept.catColor}`, borderRight: `2px solid ${concept.catColor}` }} />

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Trophy size={40} style={{ color: passed ? concept.catColor : "#475569", margin: "0 auto 12px" }} />
            <h2 style={{ color: concept.catColor, fontWeight: 900, fontSize: 22, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 4px" }}>
              {passed ? "SESSION COMPLETE" : "SESSION FAILED"}
            </h2>
            <p style={{ color: "#475569", fontSize: 12, margin: 0, letterSpacing: 1 }}>{concept.title}</p>
          </div>

          {/* Score ring */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <div style={{ position: "relative", width: 110, height: 110 }}>
              <svg viewBox="0 0 110 110" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="55" cy="55" r="48" fill="none" stroke="#1e293b" strokeWidth="8" />
                <circle cx="55" cy="55" r="48" fill="none" stroke={concept.catColor} strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 48 * pct / 100} ${2 * Math.PI * 48 * (1 - pct / 100)}`}
                  strokeLinecap="round" />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: concept.catColor, fontWeight: 900, fontSize: 26 }}>{pct}%</span>
                <span style={{ color: "#475569", fontSize: 10, letterSpacing: 1 }}>SCORE</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
            {[
              { label: "Correct", value: `${correctCount}/${questions.length}`, color: "#22d3ee" },
              { label: "Speed Bonus", value: `+${totalTimeBonus}`, color: "#fbbf24" },
              { label: "Streak", value: passed ? streak + 1 : 0, color: concept.catColor },
            ].map(stat => (
              <div key={stat.label} style={{ background: "#070e1a", padding: "12px 8px", textAlign: "center", border: "1px solid #1e293b" }}>
                <div style={{ color: stat.color, fontWeight: 900, fontSize: 20 }}>{stat.value}</div>
                <div style={{ color: "#475569", fontSize: 9, letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Per-question breakdown */}
          <div style={{ marginBottom: 28 }}>
            {questions.map((q, i) => {
              const ans = answers[i];
              const correct = ans === q.correct;
              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, padding: "10px 12px", background: "#070e1a", borderLeft: `3px solid ${correct ? "#22c55e" : "#ef4444"}` }}>
                  {correct
                    ? <CheckCircle size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }} />
                    : <XCircle size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
                  }
                  <div>
                    <p style={{ color: "#94a3b8", fontSize: 12, margin: "0 0 3px", lineHeight: 1.4 }}>{q.prompt}</p>
                    {!correct && (
                      <p style={{ color: "#22c55e", fontSize: 11, margin: 0 }}>
                        ✓ {q.options[q.correct]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <button
              onClick={onBack}
              style={{ background: "none", border: "1px solid #1e293b", color: "#64748b", padding: "12px 0", cursor: "pointer", fontWeight: 700, fontSize: 12, letterSpacing: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
            >
              <ArrowLeft size={14} /> MAP
            </button>
            <button
              onClick={() => {
                setQIndex(0);
                setPhase("playing");
                setTimeLeft(QUESTION_TIME);
                setSelected(null);
                setAnswers([]);
                setTotalTimeBonus(0);
              }}
              style={{ background: concept.catColor, border: "none", color: "#0b1120", padding: "12px 0", cursor: "pointer", fontWeight: 900, fontSize: 12, letterSpacing: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
            >
              <RotateCcw size={14} /> RETRY
            </button>
          </div>
        </div>

        {/* Streak update banner */}
        {passed && (
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 8, color: "#22d3ee", fontWeight: 700, fontSize: 14 }}>
            <Zap size={16} fill="#22d3ee" /> Streak extended to {streak + 1}!
          </div>
        )}
        {!passed && streak > 0 && (
          <div style={{ marginTop: 20, color: "#ef4444", fontWeight: 700, fontSize: 13 }}>
            Streak reset. Score 60%+ to extend it.
          </div>
        )}

        {/* Hidden trigger to notify parent */}
        {/* We call onComplete once when showing results */}
        <ResultNotifier passed={passed} onComplete={onComplete} />
      </div>
    );
  }

  // ── Question screen ─────────────────────────────────────────────
  const timePct = timeLeft / QUESTION_TIME;
  const timerColor = timePct > 0.5 ? "#22d3ee" : timePct > 0.25 ? "#fbbf24" : "#ef4444";

  return (
    <div style={{ background: "#0b1120", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Scanlines */}
      <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.15) 50%), linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))", backgroundSize: "100% 2px, 3px 100%", pointerEvents: "none", zIndex: 99 }} />

      {/* Timer bar */}
      <div style={{ height: 4, background: "#1e293b", position: "relative" }}>
        <div style={{
          height: "100%", background: timerColor,
          width: `${timePct * 100}%`,
          transition: "width 1s linear, background 0.3s",
          boxShadow: `0 0 10px ${timerColor}`,
        }} />
      </div>

      {/* Header */}
      <div style={{ padding: "12px 20px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "1px solid #1e293b", color: "#64748b", cursor: "pointer", padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}
        >
          <ArrowLeft size={14} /> ABORT
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ color: "#475569", fontSize: 12, fontWeight: 700 }}>
            {qIndex + 1} / {questions.length}
          </span>
          <div style={{ display: "flex", gap: 4 }}>
            {questions.map((_, i) => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: "50%",
                background: i < answers.length
                  ? (answers[i] === questions[i].correct ? "#22c55e" : "#ef4444")
                  : i === qIndex ? concept.catColor : "#1e293b",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#22d3ee", fontWeight: 700, fontSize: 13 }}>
            <Zap size={13} fill="#22d3ee" /> {streak}
          </div>
        </div>

        {/* Countdown */}
        <div style={{ fontWeight: 900, fontSize: 22, color: timerColor, minWidth: 28, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
          {timeLeft}
        </div>
      </div>

      {/* Question body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", maxWidth: 620, margin: "0 auto", width: "100%" }}>

        {/* Concept badge */}
        <div style={{ marginBottom: 20, padding: "5px 14px", border: `1px solid ${concept.catColor}40`, color: concept.catColor, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" as const }}>
          {concept.title}
        </div>

        {/* Question */}
        <h2 style={{ color: "#f1f5f9", fontSize: 20, fontWeight: 700, textAlign: "center", lineHeight: 1.45, margin: "0 0 32px", maxWidth: 520 }}>
          {currentQ.prompt}
        </h2>

        {/* Options */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {currentQ.options.map((option, i) => {
            const isSelected = selected === i;
            const isCorrectOption = i === currentQ.correct;

            let bg = "#0f1927";
            let border = "#1e293b";
            let color = "#94a3b8";

            if (phase === "feedback") {
              if (isCorrectOption) { bg = "#052e16"; border = "#22c55e"; color = "#22c55e"; }
              else if (isSelected && !isCorrectOption) { bg = "#2d0a0a"; border = "#ef4444"; color = "#ef4444"; }
            } else if (isSelected) {
              border = concept.catColor;
              color = concept.catColor;
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={phase === "feedback"}
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  color,
                  padding: "14px 18px",
                  textAlign: "left" as const,
                  cursor: phase === "feedback" ? "default" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 1.4,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.15s",
                  width: "100%",
                }}
              >
                <span style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, color: border }}>
                  {["A", "B", "C", "D"][i]}
                </span>
                {option}
                {phase === "feedback" && isCorrectOption && <CheckCircle size={16} style={{ marginLeft: "auto", color: "#22c55e" }} />}
                {phase === "feedback" && isSelected && !isCorrectOption && <XCircle size={16} style={{ marginLeft: "auto", color: "#ef4444" }} />}
              </button>
            );
          })}
        </div>

        {/* Explanation (shown during feedback) */}
        {phase === "feedback" && (
          <div style={{ marginTop: 20, padding: "12px 16px", background: "#070e1a", borderLeft: `3px solid ${isCorrect ? "#22c55e" : "#ef4444"}`, width: "100%" }}>
            <p style={{ color: "#94a3b8", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
              {currentQ.explanation}
            </p>
            {isCorrect && timeBonus > 0 && (
              <p style={{ color: "#fbbf24", fontSize: 12, margin: "6px 0 0", fontWeight: 700 }}>
                +{timeBonus} speed bonus!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Calls onComplete exactly once when the results screen mounts
function ResultNotifier({ passed, onComplete }: { passed: boolean; onComplete: (p: boolean) => void }) {
  useEffect(() => {
    onComplete(passed);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}
