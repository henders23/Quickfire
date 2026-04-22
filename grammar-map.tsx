import { useState, useEffect } from "react";
import { ArrowLeft, Zap, Play, XCircle, CheckCircle } from "lucide-react";
import type { AllProgress, IncorrectQuestion } from "./useConceptProgress";

const W = 1100, H = 920;
const CX = 550, CY = 460;
const CAT_R = 215, NODE_R = 148, SPREAD = 0.52;

export interface Question {
  prompt: string;
  options: [string, string];
  correct: 0 | 1;
  explanation: string;
}

export interface Concept {
  id: string;
  label: string[];
  title: string;
  definition: string;
  example: string;
  use: string;
  tip: string;
  x?: number;
  y?: number;
  catColor?: string;
}

const rawData = [
  // ── 1. Sentence Structure ──────────────────────────────────────
  {
    id: "sentence", label: ["Sentence", "Structure"], color: "#818cf8",
    concepts: [
      { id: "passive", label: ["Passive", "Voice"], title: "Passive Voice",
        definition: "A structure where the subject receives the action rather than performing it, using be + past participle.",
        example: "The data were collected over a six-month period.",
        use: "Foregrounds information and maintains objectivity — especially in methods sections.",
        tip: "Pattern: be + past participle (e.g. was conducted, are considered, have been identified)." },
      { id: "cleft", label: ["Cleft", "Sentences"], title: "Cleft Sentences",
        definition: "A sentence split into two clauses to place emphasis on a specific element.",
        example: "It is the methodology that requires further justification.",
        use: "Guides reader attention and signals what the writer considers most significant.",
        tip: "Common patterns: 'It is X that...' or 'What X does is...'" },
      { id: "fronting", label: ["Fronting"], title: "Fronting",
        definition: "Moving a non-subject element to the front of a sentence for emphasis or cohesion.",
        example: "Particularly striking is the absence of longitudinal evidence.",
        use: "Creates cohesion by linking sentences and highlighting key information.",
        tip: "Can front adjectives, adverbials, or prepositional phrases." },
    ],
  },
  // ── 2. Verb Forms & Tense ─────────────────────────────────────
  {
    id: "verbs", label: ["Verb Forms", "& Tense"], color: "#34d399",
    concepts: [
      { id: "present", label: ["Present", "Simple"], title: "Present Simple",
        definition: "States facts, describes findings, or refers to established knowledge.",
        example: "The results suggest a positive correlation between the variables.",
        use: "Default tense for presenting arguments, describing data, and referencing literature.",
        tip: "Use present simple when describing what a text argues or what data shows." },
      { id: "modals", label: ["Modal", "Verbs"], title: "Modal Verbs",
        definition: "Auxiliary verbs expressing certainty, possibility, necessity, or obligation.",
        example: "These findings may indicate a need for further investigation.",
        use: "Essential for hedging — signalling appropriate caution about claims.",
        tip: "Certainty scale: will → would → should → may → might → could" },
      { id: "perfect", label: ["Present", "Perfect"], title: "Present Perfect",
        definition: "Links past events or research to the present; a key tense in literature reviews.",
        example: "Several studies have examined the link between stress and performance.",
        use: "Describes what has been researched and what gaps remain.",
        tip: "Common with: has shown, have argued, has been demonstrated." },
    ],
  },
  // ── 3. Cohesion & Linking ─────────────────────────────────────
  {
    id: "cohesion", label: ["Cohesion &", "Linking"], color: "#f472b6",
    concepts: [
      { id: "discourse", label: ["Discourse", "Markers"], title: "Discourse Markers",
        definition: "Words or phrases that signal logical relationships between ideas.",
        example: "Furthermore, the evidence suggests a strong causal link.",
        use: "Help readers follow the argument by making relationships between ideas explicit.",
        tip: "Group by function: addition (furthermore); contrast (however); result (therefore)." },
      { id: "reference", label: ["Reference", "Chains"], title: "Reference Chains",
        definition: "Using pronouns or synonyms to refer back to previously mentioned items.",
        example: "The study involved 200 participants. These individuals were recruited from three universities.",
        use: "Prevents repetition while maintaining clarity and linking sentences together.",
        tip: "Check each pronoun (this, these, it, they) has a clear referent in the preceding text." },
      { id: "nominal", label: ["Nominalisa-", "tion"], title: "Nominalisation",
        definition: "Converting verbs or adjectives into noun forms for a formal, condensed style.",
        example: "The investigation of this phenomenon has grown. (cf. Researchers have investigated...)",
        use: "Allows ideas to be 'packed' into noun phrases — a hallmark of academic register.",
        tip: "Watch for suffixes: -tion, -ment, -ance, -ity, -ness." },
    ],
  },
  // ── 4. Clause Types ───────────────────────────────────────────
  {
    id: "clauses", label: ["Clause", "Types"], color: "#fbbf24",
    concepts: [
      { id: "relative", label: ["Relative", "Clauses"], title: "Relative Clauses",
        definition: "A subordinate clause modifying a noun, introduced by who, which, or that.",
        example: "The model proposed by Smith (2019) offers a useful analytical framework.",
        use: "Allows writers to specify or add information about entities within noun phrases.",
        tip: "Defining (no commas): 'the study which...' Non-defining (commas): 'the study, which...'" },
      { id: "adverbial", label: ["Adverbial", "Clauses"], title: "Adverbial Clauses",
        definition: "Subordinate clauses providing information about when, why, how, or under what conditions.",
        example: "Although the sample was small, the findings are nonetheless indicative.",
        use: "Essential for expressing concession, condition, cause, and contrast.",
        tip: "Contrast: although/whereas; Cause: because/since/as; Condition: if/unless." },
      { id: "noun_cl", label: ["Noun", "Clauses"], title: "Noun Clauses",
        definition: "A subordinate clause functioning as a noun — as subject, object, or complement.",
        example: "It is widely acknowledged that sleep plays a critical role in memory consolidation.",
        use: "Used with reporting verbs and in it-constructions for impersonal academic statements.",
        tip: "Common with: It is argued that..., The fact that..., Evidence suggests that..." },
    ],
  },
  // ── 5. Academic Style ─────────────────────────────────────────
  {
    id: "style", label: ["Academic", "Style"], color: "#fb923c",
    concepts: [
      { id: "hedging", label: ["Hedging"], title: "Hedging",
        definition: "Using linguistic features to qualify claims and signal degree of certainty.",
        example: "This appears to suggest a possible link between the two phenomena.",
        use: "Demonstrates intellectual honesty and awareness of limitations.",
        tip: "Toolkit: modal verbs (may, might); adverbs (apparently); verbs (suggest, indicate, appear)." },
      { id: "impersonal", label: ["Impersonal", "Constructions"], title: "Impersonal Constructions",
        definition: "Structures that avoid naming a specific agent, maintaining an objective tone.",
        example: "It can be argued that the results are inconclusive.",
        use: "Creates distance between writer and claim; a key feature of formal academic register.",
        tip: "Common patterns: It is argued that...; There is evidence that...; It has been shown that..." },
      { id: "reporting", label: ["Reporting", "Verbs"], title: "Reporting Verbs",
        definition: "Verbs used to attribute ideas to sources, with varying degrees of endorsement.",
        example: "Jones (2020) argues that existing frameworks fail to account for cultural variation.",
        use: "Allow writers to signal how much they agree with a source — critical for positioning.",
        tip: "Neutral: states, notes. Tentative: suggests, implies. Strong: argues, demonstrates." },
    ],
  },
  // ── 6. Articles & Reference ───────────────────────────────────
  {
    id: "articles", label: ["Articles &", "Reference"], color: "#a78bfa",
    concepts: [
      { id: "definite", label: ["Definite", "Article"], title: "The Definite Article",
        definition: "'The' signals that both writer and reader know which specific thing is being referred to.",
        example: "We conducted a study. The study examined sleep patterns in adolescents.",
        use: "Used when referring to something already mentioned, unique, or specified by context.",
        tip: "First mention → 'a'; second mention → 'the'. Ask: 'Do we both know which one?' If yes, use 'the'." },
      { id: "indefinite", label: ["Indefinite", "Article"], title: "The Indefinite Article",
        definition: "'A/an' introduces something new or refers to one member of a general category.",
        example: "This study proposes a new framework for analysis.",
        use: "Use 'a/an' when introducing a concept for the first time, or classifying something.",
        tip: "First mention → 'a'; second mention → 'the'. A dog came in. The dog sat down." },
      { id: "zero_art", label: ["Zero", "Article"], title: "Zero Article",
        definition: "No article before plural or uncountable nouns when making general statements.",
        example: "Research suggests that exercise improves cognitive function.",
        use: "Use zero article for general statements about categories, substances, and abstract concepts.",
        tip: "No article before: abstract nouns (evidence, knowledge), academic disciplines (linguistics), general plurals." },
    ],
  },
  // ── 7. Conditionals ───────────────────────────────────────────
  {
    id: "conditionals", label: ["Conditionals"], color: "#38bdf8",
    concepts: [
      { id: "real_cond", label: ["Real", "Conditions"], title: "Real Conditions",
        definition: "Conditionals expressing likely or possible situations: if + present simple, will/may/can + infinitive.",
        example: "If the sample size is increased, the findings will be more reliable.",
        use: "Used to discuss likely scenarios, implications of evidence, and recommendations.",
        tip: "Pattern: If + present simple, will/may/can + base form. Both parts refer to present/future." },
      { id: "hypo_cond", label: ["Hypothetical", "Conditions"], title: "Hypothetical Conditions",
        definition: "Conditionals for unlikely or imaginary situations: if + past simple, would + infinitive.",
        example: "If this framework were applied globally, outcomes would differ significantly.",
        use: "Used to discuss theoretical scenarios and the implications of alternative approaches.",
        tip: "Use 'were' (not 'was') for all persons in formal academic English: 'If it were...'" },
      { id: "mixed_cond", label: ["Mixed", "Conditionals"], title: "Mixed Conditionals",
        definition: "A conditional mixing time frames: if + past perfect (past cause), would + base form (present effect).",
        example: "If the methodology had been more robust, the conclusions would be stronger today.",
        use: "Reflects on how past decisions affect present outcomes — common in critical analysis.",
        tip: "Pattern: If + had + past participle, would + base form (present result)." },
    ],
  },
  // ── 8. Comparison & Degree ────────────────────────────────────
  {
    id: "comparison", label: ["Comparison", "& Degree"], color: "#fb7185",
    concepts: [
      { id: "comparative", label: ["Comparative", "Structures"], title: "Comparative Structures",
        definition: "Language used to compare two things, using 'more/less + adjective' or '-er' forms.",
        example: "The second approach proved more effective than the first.",
        use: "Essential for evaluating evidence, comparing studies, and discussing findings.",
        tip: "Two syllables or more → 'more effective'. One syllable → '-er' form (larger, clearer)." },
      { id: "degree", label: ["Degree &", "Emphasis"], title: "Degree and Emphasis",
        definition: "Adverbs and phrases that modify adjectives and verbs to show how much, or how certain.",
        example: "This is a particularly significant finding that substantially alters our understanding.",
        use: "Used to calibrate claims — emphasise important points or downplay minor ones.",
        tip: "Academic emphasis adverbs: particularly, notably, significantly, substantially, considerably, markedly." },
      { id: "parallel", label: ["Parallel", "Structures"], title: "Parallel Structures",
        definition: "Using the same grammatical form for items in a list or comparison.",
        example: "The study aimed to identify patterns, analyse relationships, and evaluate outcomes.",
        use: "Essential for clear, balanced academic sentences — especially in aims, methods, and lists.",
        tip: "If you start with 'to + verb', maintain that form throughout: to identify, to analyse, to evaluate." },
    ],
  },
];

const layoutData = rawData.map((cat, i) => {
  const angle = (i * 2 * Math.PI / rawData.length) - Math.PI / 2;
  const cx = CX + CAT_R * Math.cos(angle);
  const cy = CY + CAT_R * Math.sin(angle);
  const concepts = cat.concepts.map((c, j) => {
    const n = cat.concepts.length;
    const nodeAngle = angle + (j - (n - 1) / 2) * SPREAD;
    return { ...c, x: cx + NODE_R * Math.cos(nodeAngle), y: cy + NODE_R * Math.sin(nodeAngle), catColor: cat.color };
  });
  return { ...cat, x: cx, y: cy, angle, concepts };
});

export const allConcepts = layoutData.flatMap(c => c.concepts);

interface Props {
  streak: number;
  onPractice: (conceptId: string) => void;
  onBack: () => void;
  onReview: () => void;
  progress: AllProgress;
  suggestedConceptId: string | null;
}

export default function GrammarMap({ streak, onPractice, onBack, onReview, progress, suggestedConceptId }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const concept = allConcepts.find(c => c.id === selected);

  useEffect(() => { setShowIncorrect(false); }, [selected]);

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column", color: "#f1f5f9" }}>
      {/* Header */}
      <div style={{ padding: "14px 24px", borderBottom: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={onBack}
            style={{ background: "none", border: "1px solid #222", color: "#555", cursor: "pointer", padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" as const }}
          >
            <ArrowLeft size={13} /> Back
          </button>
          <div>
            <p style={{ color: "#fff", margin: 0, fontSize: 18, fontWeight: 900, fontStyle: "italic", letterSpacing: -1, textShadow: "0 0 20px rgba(34,211,238,0.3)" }}>
              QUICKFIRE
            </p>
            <p style={{ color: "#333", margin: "1px 0 0", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" as const, fontWeight: 700 }}>
              Select a node to practice
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {(() => {
            const total = Object.values(progress).reduce((sum, cp) => sum + cp.lastIncorrect.filter(q => q.conceptId).length, 0);
            return total > 0 ? (
              <button
                onClick={onReview}
                style={{ background: "none", border: "1px solid #ef4444", color: "#ef4444", cursor: "pointer", padding: "6px 12px", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" as const, display: "flex", alignItems: "center", gap: 6 }}
              >
                <XCircle size={13} /> Review {total}
              </button>
            ) : null;
          })()}
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22d3ee", fontWeight: 900, fontSize: 13, letterSpacing: 1 }}>
            <Zap size={14} fill="#22d3ee" /> {streak} STREAK
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* SVG Map */}
        <div style={{ flex: 1, overflow: "auto", background: "#000" }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", minWidth: 520, display: "block" }}>
            <defs>
              {layoutData.map(cat => (
                <radialGradient key={cat.id} id={`glow-${cat.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={cat.color} stopOpacity="0.1" />
                  <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect width={W} height={H} fill="#000" />

            {/* Dot grid */}
            {Array.from({ length: 34 }, (_, i) =>
              Array.from({ length: 28 }, (_, j) => (
                <circle key={`${i}-${j}`} cx={i * 34} cy={j * 34} r={0.6} fill="#111" />
              ))
            )}

            {/* Center → Category lines — thick light grey */}
            {layoutData.map(cat => (
              <line key={`cl-${cat.id}`} x1={CX} y1={CY} x2={cat.x} y2={cat.y}
                stroke="#666" strokeWidth={2} strokeOpacity={0.35} strokeDasharray="6 5" />
            ))}

            {/* Category → Concept lines — thick light grey */}
            {layoutData.map(cat => cat.concepts.map(c => (
              <line key={`nl-${c.id}`} x1={cat.x} y1={cat.y} x2={c.x!} y2={c.y!}
                stroke="#888" strokeWidth={2.5} strokeOpacity={selected === c.id ? 0.9 : 0.45} />
            )))}

            {/* Category glow halos */}
            {layoutData.map(cat => (
              <circle key={`h-${cat.id}`} cx={cat.x} cy={cat.y} r={72} fill={`url(#glow-${cat.id})`} />
            ))}

            {/* Center node — rectangular, no branding */}
            <rect x={CX - 72} y={CY - 26} width={144} height={52} fill="#000" stroke="#fff" strokeWidth={0.8} strokeOpacity={0.22} rx={2} />
            <text x={CX} y={CY - 5} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={700} letterSpacing={1} opacity={0.4}>choose a node</text>
            <text x={CX} y={CY + 10} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={700} letterSpacing={1} opacity={0.4}>to practise</text>

            {/* Category nodes — larger */}
            {layoutData.map(cat => (
              <g key={cat.id}>
                <circle cx={cat.x} cy={cat.y} r={48} fill="#000" stroke={cat.color} strokeWidth={1.5} />
                <circle cx={cat.x} cy={cat.y} r={57} fill="none" stroke={cat.color} strokeWidth={5} strokeOpacity={0.06} />
                {cat.label.map((line, i) => (
                  <text key={i} x={cat.x} y={cat.y - (cat.label.length - 1) * 8 + i * 16}
                    textAnchor="middle" fill={cat.color} fontSize={12} fontWeight={800} letterSpacing={0.3}>{line}</text>
                ))}
              </g>
            ))}

            {/* Concept nodes — larger */}
            {layoutData.map(cat => cat.concepts.map(c => {
              const isSel = selected === c.id;
              const isHov = hovered === c.id;
              const isSugg = suggestedConceptId === c.id;
              const cp = progress[c.id];
              const avgScore = cp && cp.scoreHistory.length > 0
                ? Math.round(cp.scoreHistory.reduce((s, v) => s + v, 0) / cp.scoreHistory.length)
                : null;
              const hasStats = cp && cp.attempts > 0;
              // Shift labels up slightly when showing stats line
              const labelYOffset = hasStats ? -3 : 0;
              const statsY = c.y! + (c.label.length === 1 ? 14 : 18) + labelYOffset;
              return (
                <g key={c.id} style={{ cursor: "pointer" }}
                  onClick={() => setSelected(isSel ? null : c.id)}
                  onMouseEnter={() => setHovered(c.id)}
                  onMouseLeave={() => setHovered(null)}>
                  {isSugg && (
                    <circle cx={c.x} cy={c.y} r={46} fill="none" stroke="#fbbf24"
                      strokeWidth={1.5} strokeDasharray="4 3" strokeOpacity={0.7} />
                  )}
                  {(isSel || isHov) && (
                    <circle cx={c.x} cy={c.y} r={42} fill="none" stroke={cat.color} strokeWidth={7} strokeOpacity={0.14} />
                  )}
                  <circle cx={c.x} cy={c.y} r={34}
                    fill={isSel ? cat.color : "#000"}
                    stroke={cat.color}
                    strokeWidth={isSel ? 0 : isHov ? 2 : 1.2}
                  />
                  {c.label.map((line, i) => (
                    <text key={i} x={c.x} y={c.y! - (c.label.length - 1) * 6 + i * 12 + labelYOffset}
                      textAnchor="middle"
                      fill={isSel ? "#000" : cat.color}
                      fontSize={9.5} fontWeight={800}>{line}</text>
                  ))}
                  {hasStats && (
                    <text x={c.x} y={statsY}
                      textAnchor="middle"
                      fill={isSel ? "#00000088" : "#ffffff66"}
                      fontSize={7.5} fontWeight={700}>
                      L{cp.attempts} · {avgScore}%
                    </text>
                  )}
                  {isSugg && (
                    <text x={c.x! + 27} y={c.y! - 23}
                      textAnchor="middle" fontSize={11} fill="#fbbf24">★</text>
                  )}
                </g>
              );
            }))}
          </svg>
        </div>

        {/* Side Panel */}
        <div style={{
          width: 300, background: "#050505", borderLeft: "1px solid #111",
          display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto",
        }}>
          {concept ? (
            <div style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <h2 style={{ color: concept.catColor, margin: 0, fontSize: 15, fontWeight: 900, lineHeight: 1.3, letterSpacing: -0.3 }}>
                  {concept.title}
                </h2>
                <button onClick={() => setSelected(null)}
                  style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 20, lineHeight: 1, padding: "0 0 0 8px" }}>×</button>
              </div>

              <PanelSection label="Definition" color="#555">
                <p style={pStyle}>{concept.definition}</p>
              </PanelSection>

              <div style={{ background: "#0a0a0a", padding: "10px 12px", borderLeft: `2px solid ${concept.catColor}`, marginBottom: 13 }}>
                <PanelLabel color="#555">Example</PanelLabel>
                <p style={{ ...pStyle, fontStyle: "italic" }}>"{concept.example}"</p>
              </div>

              <PanelSection label="Academic Use" color="#555">
                <p style={pStyle}>{concept.use}</p>
              </PanelSection>

              <div style={{ background: `${concept.catColor}10`, padding: "10px 12px", marginBottom: 20 }}>
                <PanelLabel color={concept.catColor}>Tip</PanelLabel>
                <p style={pStyle}>{concept.tip}</p>
              </div>

              <button
                onClick={() => onPractice(concept.id)}
                style={{
                  width: "100%", background: concept.catColor, color: "#000",
                  border: "none", padding: "14px 0", fontWeight: 900, fontSize: 12,
                  letterSpacing: 1.5, textTransform: "uppercase" as const, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                <Play size={14} fill="currentColor" /> Practice This
              </button>

              {(() => {
                const cp = progress[concept.id];
                return cp && cp.lastIncorrect.length > 0 ? (
                  <button
                    onClick={() => setShowIncorrect(true)}
                    style={{
                      width: "100%", background: "none",
                      border: `1px solid ${concept.catColor}44`,
                      color: concept.catColor, padding: "10px 0",
                      fontWeight: 700, fontSize: 11,
                      letterSpacing: 1.5, textTransform: "uppercase" as const,
                      cursor: "pointer", marginTop: 8,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    }}
                  >
                    <XCircle size={13} /> Review Last Mistakes ({cp.lastIncorrect.length})
                  </button>
                ) : null;
              })()}
            </div>
          ) : (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 14, color: "#222" }}>◎</div>
              <p style={{ fontSize: 12, lineHeight: 1.7, margin: 0, color: "#fff", opacity: 0.25 }}>
                Click any concept node to explore it, then hit Practice to begin.
              </p>
              <p style={{ fontSize: 9, lineHeight: 1.6, marginTop: 14, color: "#fff", opacity: 0.1, letterSpacing: 1.5, textTransform: "uppercase" as const }}>
                8 categories · 24 concepts
              </p>
              <p style={{ fontSize: 9, lineHeight: 1.6, marginTop: 8, color: "#fbbf24", opacity: 0.35, letterSpacing: 1, textTransform: "uppercase" as const }}>
                ★ = suggested next practice
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Incorrect Questions Modal */}
      {showIncorrect && concept && (() => {
        const cp = progress[concept.id];
        if (!cp || cp.lastIncorrect.length === 0) return null;
        return (
          <div
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)",
              zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
              padding: 24,
            }}
            onClick={() => setShowIncorrect(false)}
          >
            <div
              style={{
                background: "#080808", border: "1px solid #1a1a1a",
                maxWidth: 520, width: "100%", maxHeight: "80vh",
                overflowY: "auto", fontFamily: "system-ui, sans-serif",
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{
                padding: "16px 20px", borderBottom: "1px solid #111",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                position: "sticky", top: 0, background: "#080808",
              }}>
                <div>
                  <p style={{ color: concept.catColor, fontWeight: 800, fontSize: 12, margin: 0, letterSpacing: 1, textTransform: "uppercase" }}>
                    {concept.title}
                  </p>
                  <p style={{ color: "#444", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "3px 0 0" }}>
                    Incorrect — last attempt
                  </p>
                </div>
                <button
                  onClick={() => setShowIncorrect(false)}
                  style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 22, lineHeight: 1, padding: "0 0 0 16px" }}
                >×</button>
              </div>

              <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                {cp.lastIncorrect.map((q: IncorrectQuestion, i: number) => (
                  <div key={i} style={{ background: "#000", border: "1px solid #151515" }}>
                    <div style={{ padding: "14px 16px", borderBottom: "1px solid #0d0d0d" }}>
                      <p style={{ color: "#fff", fontSize: 13, margin: "0 0 12px", lineHeight: 1.5, opacity: 0.8 }}>
                        {q.prompt}
                      </p>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                        <XCircle size={14} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
                        <p style={{ color: "#ef4444", fontSize: 13, margin: 0, lineHeight: 1.45 }}>
                          {q.yourAnswer !== null ? q.options[q.yourAnswer] : "No answer — time ran out"}
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
          </div>
        );
      })()}
    </div>
  );
}

const pStyle: React.CSSProperties = { color: "#fff", fontSize: 12, lineHeight: 1.7, margin: 0 };

function PanelLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div style={{ color, fontSize: 9, fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: 1.5, marginBottom: 5 }}>
      {children}
    </div>
  );
}

function PanelSection({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <PanelLabel color={color}>{label}</PanelLabel>
      {children}
    </div>
  );
}
