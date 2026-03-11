import { useState, useMemo } from "react";

const W = 900, H = 760;
const CX = 450, CY = 385;
const CAT_R = 185, NODE_R = 125, SPREAD = 0.65;

const rawData = [
  {
    id: "sentence", label: ["Sentence", "Structure"], color: "#818cf8",
    concepts: [
      { id: "passive", label: ["Passive", "Voice"], title: "Passive Voice",
        definition: "A construction where the subject receives the verb's action rather than performing it.",
        example: "The data were collected over a six-month period.",
        use: "Foregrounds information and maintains objectivity — especially in methods sections.",
        tip: "Pattern: be + past participle (e.g. was conducted, are considered, have been identified)." },
      { id: "cleft", label: ["Cleft", "Sentences"], title: "Cleft Sentences",
        definition: "A sentence split into two clauses to emphasise a specific element.",
        example: "It is the methodology that requires further justification.",
        use: "Guides reader attention and signals what the writer considers most significant.",
        tip: "Common patterns: 'It is X that...' or 'What X does is...'" },
      { id: "fronting", label: ["Fronting"], title: "Fronting",
        definition: "Moving a non-subject element to the front of a sentence for emphasis or cohesion.",
        example: "Particularly striking is the absence of longitudinal evidence.",
        use: "Creates cohesion by linking sentences and highlighting key information.",
        tip: "Can front adjectives, adverbials, or prepositional phrases." },
    ]
  },
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
    ]
  },
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
    ]
  },
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
    ]
  },
  {
    id: "style", label: ["Academic", "Style"], color: "#fb923c",
    concepts: [
      { id: "hedging", label: ["Hedging"], title: "Hedging",
        definition: "Using linguistic features to qualify claims and signal degree of certainty.",
        example: "This appears to suggest a possible link between the two phenomena.",
        use: "Demonstrates intellectual honesty and awareness of limitations — essential in academic writing.",
        tip: "Toolkit: modal verbs (may, might); adverbs (apparently); verbs (suggest, indicate, appear)." },
      { id: "impersonal", label: ["Impersonal", "Constructions"], title: "Impersonal Constructions",
        definition: "Structures that avoid naming a specific agent, maintaining an objective tone.",
        example: "It can be argued that the results are inconclusive.",
        use: "Creates distance between writer and claim; a key feature of formal academic register.",
        tip: "Common patterns: It is argued that...; There is evidence that...; It has been shown that..." },
      { id: "reporting", label: ["Reporting", "Verbs"], title: "Reporting Verbs",
        definition: "Verbs used to attribute ideas or findings to sources, with varying degrees of endorsement.",
        example: "Jones (2020) argues that existing frameworks fail to account for cultural variation.",
        use: "Allow writers to signal how much they agree with a source — critical for academic positioning.",
        tip: "Neutral: states, notes. Tentative: suggests, implies. Strong: argues, demonstrates, proves." },
    ]
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

const allConcepts = layoutData.flatMap(c => c.concepts);

export default function App() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const concept = allConcepts.find(c => c.id === selected);

  return (
    <div style={{ background: "#0b1120", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "14px 20px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 12 }}>
        <div>
          <h1 style={{ color: "#f1f5f9", margin: 0, fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>
            Academic Grammar Explorer
          </h1>
          <p style={{ color: "#475569", margin: "2px 0 0", fontSize: 12 }}>
            Click any concept node to explore its definition, examples, and academic uses
          </p>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* SVG Map */}
        <div style={{ flex: 1, overflow: "auto" }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", minWidth: 480, display: "block" }}>
            <defs>
              {layoutData.map(cat => (
                <radialGradient key={cat.id} id={`glow-${cat.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={cat.color} stopOpacity="0.18" />
                  <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect width={W} height={H} fill="#0b1120" />

            {/* Dot grid */}
            {Array.from({ length: 28 }, (_, i) =>
              Array.from({ length: 20 }, (_, j) => (
                <circle key={`${i}${j}`} cx={i * 34} cy={j * 40} r={0.8} fill="#1e2d45" />
              ))
            )}

            {/* Center → Category lines */}
            {layoutData.map(cat => (
              <line key={`cl-${cat.id}`} x1={CX} y1={CY} x2={cat.x} y2={cat.y}
                stroke={cat.color} strokeWidth={1.5} strokeOpacity={0.2} strokeDasharray="5 4" />
            ))}

            {/* Category → Concept lines */}
            {layoutData.map(cat => cat.concepts.map(c => (
              <line key={`cl-${c.id}`} x1={cat.x} y1={cat.y} x2={c.x} y2={c.y}
                stroke={cat.color} strokeWidth={1} strokeOpacity={selected === c.id ? 0.7 : 0.3} />
            )))}

            {/* Category glow halos */}
            {layoutData.map(cat => (
              <circle key={`h-${cat.id}`} cx={cat.x} cy={cat.y} r={70}
                fill={`url(#glow-${cat.id})`} />
            ))}

            {/* Center node */}
            <circle cx={CX} cy={CY} r={50} fill="#111827" stroke="#334155" strokeWidth={2} />
            <circle cx={CX} cy={CY} r={44} fill="#0b1120" />
            <text x={CX} y={CY - 7} textAnchor="middle" fill="#64748b" fontSize={10} fontWeight={800} letterSpacing={1}>ACADEMIC</text>
            <text x={CX} y={CY + 8} textAnchor="middle" fill="#64748b" fontSize={10} fontWeight={800} letterSpacing={1}>GRAMMAR</text>

            {/* Category nodes */}
            {layoutData.map(cat => (
              <g key={cat.id}>
                <circle cx={cat.x} cy={cat.y} r={44} fill="#111827" stroke={cat.color} strokeWidth={2} />
                <circle cx={cat.x} cy={cat.y} r={52} fill="none" stroke={cat.color} strokeWidth={6} strokeOpacity={0.07} />
                {cat.label.map((line, i) => (
                  <text key={i} x={cat.x} y={cat.y - (cat.label.length - 1) * 7.5 + i * 15}
                    textAnchor="middle" fill={cat.color} fontSize={11} fontWeight={700}>{line}</text>
                ))}
              </g>
            ))}

            {/* Concept nodes */}
            {layoutData.map(cat => cat.concepts.map(c => {
              const isSel = selected === c.id;
              const isHov = hovered === c.id;
              return (
                <g key={c.id} style={{ cursor: "pointer" }}
                  onClick={() => setSelected(isSel ? null : c.id)}
                  onMouseEnter={() => setHovered(c.id)}
                  onMouseLeave={() => setHovered(null)}>
                  {(isSel || isHov) && (
                    <circle cx={c.x} cy={c.y} r={38} fill="none" stroke={cat.color} strokeWidth={8} strokeOpacity={0.18} />
                  )}
                  <circle cx={c.x} cy={c.y} r={31}
                    fill={isSel ? cat.color : "#111827"}
                    stroke={cat.color}
                    strokeWidth={isSel ? 0 : isHov ? 2 : 1.5}
                  />
                  {c.label.map((line, i) => (
                    <text key={i} x={c.x} y={c.y - (c.label.length - 1) * 6 + i * 13}
                      textAnchor="middle"
                      fill={isSel ? "#0b1120" : cat.color}
                      fontSize={9.5} fontWeight={700}>{line}</text>
                  ))}
                </g>
              );
            }))}
          </svg>
        </div>

        {/* Side Panel */}
        <div style={{
          width: 300, background: "#0f1927", borderLeft: "1px solid #1e293b",
          display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto"
        }}>
          {concept ? (
            <div style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <h2 style={{ color: concept.catColor, margin: 0, fontSize: 17, fontWeight: 800, lineHeight: 1.3 }}>
                  {concept.title}
                </h2>
                <button onClick={() => setSelected(null)}
                  style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 22, lineHeight: 1, padding: "0 0 0 8px" }}>×</button>
              </div>

              <Section label="Definition" color="#94a3b8">
                <p style={pStyle}>{concept.definition}</p>
              </Section>

              <div style={{ background: "#070e1a", borderRadius: 8, padding: "12px 14px", borderLeft: `3px solid ${concept.catColor}`, marginBottom: 16 }}>
                <Label color="#64748b">Example</Label>
                <p style={{ ...pStyle, fontStyle: "italic", color: "#cbd5e1" }}>"{concept.example}"</p>
              </div>

              <Section label="Academic Use" color="#94a3b8">
                <p style={pStyle}>{concept.use}</p>
              </Section>

              <div style={{ background: `${concept.catColor}14`, borderRadius: 8, padding: "12px 14px" }}>
                <Label color={concept.catColor}>💡 Tip</Label>
                <p style={{ ...pStyle, color: "#e2e8f0" }}>{concept.tip}</p>
              </div>
            </div>
          ) : (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 32, textAlign: "center", color: "#334155" }}>
              <div style={{ fontSize: 44, marginBottom: 14 }}>🌐</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Select any concept node on the map to explore its definition, examples, and academic uses.
              </p>
              <p style={{ fontSize: 11, lineHeight: 1.6, marginTop: 16, color: "#1e3a5f" }}>
                5 categories · 15 concepts
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const pStyle = { color: "#e2e8f0", fontSize: 13, lineHeight: 1.65, margin: 0 };

function Label({ color, children }) {
  return <div style={{ color, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{children}</div>;
}

function Section({ label, color, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <Label color={color}>{label}</Label>
      {children}
    </div>
  );
}
