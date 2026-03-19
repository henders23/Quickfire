import { ArrowLeft, Play, Zap, Clock, Target } from "lucide-react";
import { allConcepts } from "./grammar-map";

export const QUESTIONS_PER_SESSION = 10;

interface Props {
  conceptId: string;
  streak: number;
  onStart: () => void;
  onBack: () => void;
}

export default function IntroScreen({ conceptId, streak, onStart, onBack }: Props) {
  const concept = allConcepts.find(c => c.id === conceptId)!;
  const color = concept.catColor!;

  return (
    <div style={{
      background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif",
      display: "flex", flexDirection: "column", color: "#fff",
    }}>
      {/* Header */}
      <div style={{ padding: "14px 24px", borderBottom: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "1px solid #222", color: "#555", cursor: "pointer", padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" as const }}
        >
          <ArrowLeft size={13} /> Back
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22d3ee", fontWeight: 900, fontSize: 13, letterSpacing: 1 }}>
          <Zap size={14} fill="#22d3ee" /> {streak} STREAK
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>
        <div style={{ width: "100%", maxWidth: 560 }}>

          {/* Concept title block */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ width: 40, height: 2, background: color, marginBottom: 14 }} />
            <p style={{ color: "#555", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 6px" }}>
              Now practising
            </p>
            <h1 style={{ color, fontSize: 30, fontWeight: 900, fontStyle: "italic", letterSpacing: -1, margin: "0 0 12px", textShadow: `0 0 30px ${color}40` }}>
              {concept.title}
            </h1>
            <p style={{ color: "#fff", fontSize: 13, lineHeight: 1.65, margin: 0, opacity: 0.85 }}>
              {concept.definition}
            </p>
          </div>

          {/* Example */}
          <div style={{ background: "#080808", borderLeft: `3px solid ${color}`, padding: "14px 18px", marginBottom: 16 }}>
            <p style={{ color: "#555", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" as const, margin: "0 0 6px" }}>Example</p>
            <p style={{ color: "#fff", fontSize: 13, fontStyle: "italic", lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
              "{concept.example}"
            </p>
          </div>

          {/* Key tip */}
          <div style={{ background: `${color}0d`, border: `1px solid ${color}20`, padding: "14px 18px", marginBottom: 28 }}>
            <p style={{ color: color, fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" as const, margin: "0 0 6px" }}>Key tip</p>
            <p style={{ color: "#fff", fontSize: 13, lineHeight: 1.65, margin: 0, opacity: 0.85 }}>
              {concept.tip}
            </p>
          </div>

          {/* How to play */}
          <div style={{ borderTop: "1px solid #111", paddingTop: 22, marginBottom: 28 }}>
            <p style={{ color: "#444", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, margin: "0 0 16px" }}>
              How to play
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <Target size={15} color="#22d3ee" />, text: "Choose the correct answer from 2 options." },
                { icon: <Clock size={15} color="#fbbf24" />, text: "You have 20 seconds per question — answer as quickly as you can." },
                { icon: <Zap size={15} color={color} fill={color} />, text: "Speed bonus: the faster you answer correctly, the more points you earn." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
                  <p style={{ color: "#fff", fontSize: 13, lineHeight: 1.5, margin: 0, opacity: 0.75 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Start button */}
          <button
            onClick={onStart}
            style={{
              width: "100%", background: color, color: "#000",
              border: "none", padding: "18px 0", fontWeight: 900, fontSize: 15,
              letterSpacing: 2, textTransform: "uppercase" as const, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}
          >
            <Play size={18} fill="currentColor" />
            Start — {QUESTIONS_PER_SESSION} Questions
          </button>
        </div>
      </div>
    </div>
  );
}
