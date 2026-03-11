import { useState } from "react";
import { ArrowLeft, Zap, Play } from "lucide-react";

const W = 900, H = 760;
const CX = 450, CY = 385;
const CAT_R = 185, NODE_R = 125, SPREAD = 0.65;

export interface Question {
  prompt: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
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
  questions: Question[];
  // layout fields added at runtime
  x?: number;
  y?: number;
  catColor?: string;
}

const rawData = [
  {
    id: "sentence", label: ["Sentence", "Structure"], color: "#818cf8",
    concepts: [
      {
        id: "passive", label: ["Passive", "Voice"], title: "Passive Voice",
        definition: "A construction where the subject receives the verb's action rather than performing it.",
        example: "The data were collected over a six-month period.",
        use: "Foregrounds information and maintains objectivity — especially in methods sections.",
        tip: "Pattern: be + past participle (e.g. was conducted, are considered, have been identified).",
        questions: [
          {
            prompt: "Which sentence uses the passive voice?",
            options: [
              "Researchers collected the data over six months.",
              "The data were collected over six months.",
              "The researchers are collecting data now.",
              "Researchers will collect the data tomorrow.",
            ],
            correct: 1,
            explanation: "'Were collected' = be + past participle — the classic passive pattern.",
          },
          {
            prompt: "What is the core pattern of passive voice?",
            options: [
              "will + base verb",
              "have + past participle",
              "be + past participle",
              "be + present participle",
            ],
            correct: 2,
            explanation: "Passive voice always uses a form of 'be' (is/are/was/were) + past participle.",
          },
          {
            prompt: "Why is passive voice preferred in academic Methods sections?",
            options: [
              "It makes sentences shorter and punchier.",
              "It foregrounds the process and maintains objectivity.",
              "It emphasises who carried out the research.",
              "It is required by all academic style guides.",
            ],
            correct: 1,
            explanation: "The passive shifts focus to what was done, removing the need to name an agent — ideal for objectivity.",
          },
          {
            prompt: "Which sentence contains a passive construction?",
            options: [
              "The study examines three variables.",
              "Researchers have argued this point before.",
              "The hypothesis was supported by the data.",
              "The participants completed a survey.",
            ],
            correct: 2,
            explanation: "'Was supported' = be + past participle = passive voice.",
          },
        ] as Question[],
      },
      {
        id: "cleft", label: ["Cleft", "Sentences"], title: "Cleft Sentences",
        definition: "A sentence split into two clauses to emphasise a specific element.",
        example: "It is the methodology that requires further justification.",
        use: "Guides reader attention and signals what the writer considers most significant.",
        tip: "Common patterns: 'It is X that...' or 'What X does is...'",
        questions: [
          {
            prompt: "Which is a cleft sentence?",
            options: [
              "The methodology requires further justification.",
              "It is the methodology that requires justification.",
              "Justification of the methodology is needed.",
              "Further justification could be required.",
            ],
            correct: 1,
            explanation: "'It is X that...' splits the sentence to emphasise 'the methodology'.",
          },
          {
            prompt: "Complete the cleft: '_____ the sample size that limits generalisability.'",
            options: ["There is", "It is", "What is", "Here is"],
            correct: 1,
            explanation: "The 'It is X that...' pattern is the most common cleft structure in academic writing.",
          },
          {
            prompt: "What is the main purpose of a cleft sentence?",
            options: [
              "To make sentences shorter.",
              "To avoid using passive voice.",
              "To emphasise a specific element of the sentence.",
              "To connect two independent clauses.",
            ],
            correct: 2,
            explanation: "Cleft sentences split information into two clauses specifically to foreground one element.",
          },
          {
            prompt: "Which follows the 'What X does is...' cleft pattern?",
            options: [
              "What the data shows is encouraging.",
              "What the data is showing us clearly.",
              "What does the data show exactly?",
              "The data is what it is.",
            ],
            correct: 0,
            explanation: "'What X does is [noun/adjective]' is a standard cleft structure for emphasis.",
          },
        ] as Question[],
      },
      {
        id: "fronting", label: ["Fronting"], title: "Fronting",
        definition: "Moving a non-subject element to the front of a sentence for emphasis or cohesion.",
        example: "Particularly striking is the absence of longitudinal evidence.",
        use: "Creates cohesion by linking sentences and highlighting key information.",
        tip: "Can front adjectives, adverbials, or prepositional phrases.",
        questions: [
          {
            prompt: "Which sentence uses fronting?",
            options: [
              "The absence of longitudinal evidence is particularly striking.",
              "It is particularly striking that evidence is absent.",
              "Particularly striking is the absence of longitudinal evidence.",
              "Evidence is absent, which is particularly striking.",
            ],
            correct: 2,
            explanation: "The adjective phrase 'Particularly striking' is fronted — moved before the subject.",
          },
          {
            prompt: "What is fronted in: 'Of particular importance is the ethical dimension.'?",
            options: [
              "A noun phrase",
              "A prepositional phrase",
              "An adverb clause",
              "A past participle",
            ],
            correct: 1,
            explanation: "'Of particular importance' is a prepositional phrase moved to the front for emphasis.",
          },
          {
            prompt: "Why do academic writers use fronting?",
            options: [
              "To avoid starting sentences with 'The'.",
              "To create cohesion and highlight key information.",
              "To make passive sentences more active.",
              "To reduce sentence length.",
            ],
            correct: 1,
            explanation: "Fronting links back to the previous sentence's theme and signals what matters most.",
          },
          {
            prompt: "Which word is fronted in: 'Rarely has such a finding been replicated.'?",
            options: [
              "Such (adjective)",
              "Finding (noun)",
              "Rarely (adverb)",
              "Replicated (past participle)",
            ],
            correct: 2,
            explanation: "Negative adverbs like 'rarely' can be fronted, which also triggers subject-auxiliary inversion.",
          },
        ] as Question[],
      },
    ],
  },
  {
    id: "verbs", label: ["Verb Forms", "& Tense"], color: "#34d399",
    concepts: [
      {
        id: "present", label: ["Present", "Simple"], title: "Present Simple",
        definition: "States facts, describes findings, or refers to established knowledge.",
        example: "The results suggest a positive correlation between the variables.",
        use: "Default tense for presenting arguments, describing data, and referencing literature.",
        tip: "Use present simple when describing what a text argues or what data shows.",
        questions: [
          {
            prompt: "What is the best use of present simple in academic writing?",
            options: [
              "Describing events that happened before the study.",
              "Describing what a paper argues or what data shows.",
              "Describing what the researcher was doing during the study.",
              "Describing future plans for research.",
            ],
            correct: 1,
            explanation: "Present simple is the default for describing current findings and arguing positions.",
          },
          {
            prompt: "Which is correct when referencing a paper's argument?",
            options: [
              "Smith (2019) argued that...",
              "Smith (2019) was arguing that...",
              "Smith (2019) argues that...",
              "Smith (2019) had argued that...",
            ],
            correct: 2,
            explanation: "Use present simple ('argues') to describe what a published text currently says.",
          },
          {
            prompt: "Complete: 'The results _____ a significant correlation.'",
            options: ["suggested", "were suggesting", "suggest", "have been suggesting"],
            correct: 2,
            explanation: "Present simple ('suggest') is standard for describing what data shows.",
          },
          {
            prompt: "Which tense is used to state general, established facts in academic writing?",
            options: ["Past simple", "Present perfect", "Present simple", "Future simple"],
            correct: 2,
            explanation: "General truths and well-established findings are stated in the present simple.",
          },
        ] as Question[],
      },
      {
        id: "modals", label: ["Modal", "Verbs"], title: "Modal Verbs",
        definition: "Auxiliary verbs expressing certainty, possibility, necessity, or obligation.",
        example: "These findings may indicate a need for further investigation.",
        use: "Essential for hedging — signalling appropriate caution about claims.",
        tip: "Certainty scale: will → would → should → may → might → could",
        questions: [
          {
            prompt: "Which modal expresses the highest degree of certainty?",
            options: ["might", "could", "may", "will"],
            correct: 3,
            explanation: "'Will' expresses near-certainty; 'might' and 'could' express low probability.",
          },
          {
            prompt: "'These findings _____ indicate a need for further research.' (appropriate hedging)",
            options: ["will definitely", "may", "must", "shall"],
            correct: 1,
            explanation: "'May' hedges the claim appropriately — signalling possibility without overstating.",
          },
          {
            prompt: "What is the primary function of modal verbs in academic writing?",
            options: [
              "To form questions",
              "To describe past events",
              "To hedge — signal the degree of certainty about claims",
              "To connect clauses",
            ],
            correct: 2,
            explanation: "Modals let writers calibrate how confident they are — essential for intellectual honesty.",
          },
          {
            prompt: "Which sentence is most appropriately hedged for academic writing?",
            options: [
              "This proves that stress causes cognitive decline.",
              "This will certainly demonstrate the link.",
              "This appears to suggest a possible relationship.",
              "This definitely shows the connection.",
            ],
            correct: 2,
            explanation: "'Appears to suggest' stacks hedging devices (verb + modal meaning) — ideal academic caution.",
          },
        ] as Question[],
      },
      {
        id: "perfect", label: ["Present", "Perfect"], title: "Present Perfect",
        definition: "Links past events or research to the present; a key tense in literature reviews.",
        example: "Several studies have examined the link between stress and performance.",
        use: "Describes what has been researched and what gaps remain.",
        tip: "Common with: has shown, have argued, has been demonstrated.",
        questions: [
          {
            prompt: "What is the primary use of present perfect in academic writing?",
            options: [
              "To describe a single completed event in the past.",
              "To link past research to the current state of knowledge.",
              "To describe ongoing actions in the present.",
              "To express future intentions.",
            ],
            correct: 1,
            explanation: "Present perfect ('has shown', 'have found') connects past research to what we know now.",
          },
          {
            prompt: "'Several studies _____ this link between stress and cognition.'",
            options: [
              "examined",
              "were examining",
              "have examined",
              "had examined",
            ],
            correct: 2,
            explanation: "Present perfect ('have examined') is standard for describing accumulated prior research.",
          },
          {
            prompt: "Which sentence is typical of a literature review?",
            options: [
              "Researchers examined this in 1998.",
              "Researchers are examining this issue now.",
              "Researchers have identified three key contributing factors.",
              "Researchers will examine this in future work.",
            ],
            correct: 2,
            explanation: "Present perfect ('have identified') is the hallmark tense of literature reviews.",
          },
          {
            prompt: "Which phrase uses present perfect in the passive voice?",
            options: [
              "will be demonstrated",
              "was demonstrated",
              "has been demonstrated",
              "is demonstrated",
            ],
            correct: 2,
            explanation: "'Has been demonstrated' = present perfect + passive: 'have/has + been + past participle'.",
          },
        ] as Question[],
      },
    ],
  },
  {
    id: "cohesion", label: ["Cohesion &", "Linking"], color: "#f472b6",
    concepts: [
      {
        id: "discourse", label: ["Discourse", "Markers"], title: "Discourse Markers",
        definition: "Words or phrases that signal logical relationships between ideas.",
        example: "Furthermore, the evidence suggests a strong causal link.",
        use: "Help readers follow the argument by making relationships between ideas explicit.",
        tip: "Group by function: addition (furthermore); contrast (however); result (therefore).",
        questions: [
          {
            prompt: "Which discourse marker signals contrast?",
            options: ["Furthermore", "Therefore", "However", "Similarly"],
            correct: 2,
            explanation: "'However' signals a contrast or qualification of the previous point.",
          },
          {
            prompt: "'Furthermore' belongs to which logical category?",
            options: ["Contrast", "Result", "Addition", "Condition"],
            correct: 2,
            explanation: "'Furthermore' adds information — it belongs to the addition/elaboration category.",
          },
          {
            prompt: "Which discourse marker signals a result or conclusion?",
            options: ["Nevertheless", "Although", "Therefore", "Whereas"],
            correct: 2,
            explanation: "'Therefore' signals that what follows is a logical result of what came before.",
          },
          {
            prompt: "Which of these is a discourse marker?",
            options: ["Quickly", "Nevertheless", "Beautiful", "Running"],
            correct: 1,
            explanation: "'Nevertheless' signals concession/contrast — it's a cohesive discourse marker.",
          },
        ] as Question[],
      },
      {
        id: "reference", label: ["Reference", "Chains"], title: "Reference Chains",
        definition: "Using pronouns or synonyms to refer back to previously mentioned items.",
        example: "The study involved 200 participants. These individuals were recruited from three universities.",
        use: "Prevents repetition while maintaining clarity and linking sentences together.",
        tip: "Check each pronoun (this, these, it, they) has a clear referent in the preceding text.",
        questions: [
          {
            prompt: "What does 'these individuals' do in: 'The study involved 200 participants. These individuals were recruited...'?",
            options: [
              "Introduces a new group of people.",
              "Refers back to 'participants', avoiding repetition.",
              "Emphasises the importance of the participants.",
              "Creates a cleft sentence structure.",
            ],
            correct: 1,
            explanation: "'These individuals' refers anaphorically to '200 participants' — maintaining the reference chain.",
          },
          {
            prompt: "What should you always check when using a pronoun like 'this', 'it', or 'they'?",
            options: [
              "That it agrees with a plural noun.",
              "That it has a clear referent in the preceding text.",
              "That it is followed by a relative clause.",
              "That it appears at the start of a sentence.",
            ],
            correct: 1,
            explanation: "Vague pronouns break cohesion. Each must clearly refer back to a specific noun or idea.",
          },
          {
            prompt: "What is the main function of a reference chain?",
            options: [
              "To introduce new arguments.",
              "To maintain cohesion while avoiding repetition.",
              "To hedge claims appropriately.",
              "To create emphasis through fronting.",
            ],
            correct: 1,
            explanation: "Reference chains (pronouns + synonyms) link sentences together without repeating nouns.",
          },
          {
            prompt: "In the sequence: 'The phenomenon... This phenomenon... It...' — what is this?",
            options: [
              "Nominalisation",
              "A reference chain",
              "A discourse marker",
              "A cleft structure",
            ],
            correct: 1,
            explanation: "Repeated references to the same entity using varied forms create a cohesive reference chain.",
          },
        ] as Question[],
      },
      {
        id: "nominal", label: ["Nominalisa-", "tion"], title: "Nominalisation",
        definition: "Converting verbs or adjectives into noun forms for a formal, condensed style.",
        example: "The investigation of this phenomenon has grown. (cf. Researchers have investigated...)",
        use: "Allows ideas to be 'packed' into noun phrases — a hallmark of academic register.",
        tip: "Watch for suffixes: -tion, -ment, -ance, -ity, -ness.",
        questions: [
          {
            prompt: "Which sentence uses nominalisation?",
            options: [
              "Researchers have investigated this phenomenon extensively.",
              "The investigation of this phenomenon has grown significantly.",
              "Investigators are researching the phenomenon carefully.",
              "The phenomenon was investigated by researchers.",
            ],
            correct: 1,
            explanation: "'Investigation' nominalises the verb 'investigate' — converting process to noun phrase.",
          },
          {
            prompt: "Which word is a nominalisation of the verb 'investigate'?",
            options: ["investigative", "investigator", "investigation", "investigated"],
            correct: 2,
            explanation: "'Investigation' (-tion suffix) is a noun derived from the verb 'investigate'.",
          },
          {
            prompt: "Which suffix does NOT typically form a nominalisation?",
            options: ["-tion", "-ment", "-ness", "-ing (as adjective)"],
            correct: 3,
            explanation: "'-tion', '-ment', and '-ness' convert words to nouns. '-ing' can be a participle or gerund, not purely nominalisation.",
          },
          {
            prompt: "Why do academic writers use nominalisation?",
            options: [
              "To simplify sentences for a general audience.",
              "To pack complex ideas into dense noun phrases, creating formal register.",
              "To avoid using passive voice.",
              "To increase sentence length artificially.",
            ],
            correct: 1,
            explanation: "Nominalisation condenses processes into things, enabling a formal, information-dense academic style.",
          },
        ] as Question[],
      },
    ],
  },
  {
    id: "clauses", label: ["Clause", "Types"], color: "#fbbf24",
    concepts: [
      {
        id: "relative", label: ["Relative", "Clauses"], title: "Relative Clauses",
        definition: "A subordinate clause modifying a noun, introduced by who, which, or that.",
        example: "The model proposed by Smith (2019) offers a useful analytical framework.",
        use: "Allows writers to specify or add information about entities within noun phrases.",
        tip: "Defining (no commas): 'the study which...' Non-defining (commas): 'the study, which...'",
        questions: [
          {
            prompt: "Which sentence contains a defining relative clause?",
            options: [
              "The model, which was proposed in 2019, is widely cited.",
              "The model that Smith proposed is widely used.",
              "Smith proposed a model, which has since been revised.",
              "The widely cited model is useful.",
            ],
            correct: 1,
            explanation: "No commas = defining relative clause; it identifies which specific model is meant.",
          },
          {
            prompt: "What do commas around a relative clause signal?",
            options: [
              "A defining (restrictive) clause",
              "A non-defining (non-restrictive) clause",
              "A noun clause",
              "An adverbial clause",
            ],
            correct: 1,
            explanation: "Commas mark a non-defining clause — adding extra info about an already-identified noun.",
          },
          {
            prompt: "'The study which examined 500 participants...' — what type of relative clause is this?",
            options: ["Non-defining", "Adverbial", "Defining", "Nominal"],
            correct: 2,
            explanation: "No commas = defining; the clause specifies which study is being discussed.",
          },
          {
            prompt: "Which relative pronoun is used specifically for people?",
            options: ["which", "that", "who", "what"],
            correct: 2,
            explanation: "'Who' refers to people; 'which' refers to things; 'that' can refer to either in defining clauses.",
          },
        ] as Question[],
      },
      {
        id: "adverbial", label: ["Adverbial", "Clauses"], title: "Adverbial Clauses",
        definition: "Subordinate clauses providing information about when, why, how, or under what conditions.",
        example: "Although the sample was small, the findings are nonetheless indicative.",
        use: "Essential for expressing concession, condition, cause, and contrast.",
        tip: "Contrast: although/whereas; Cause: because/since/as; Condition: if/unless.",
        questions: [
          {
            prompt: "'Although the sample was small, the findings are indicative.' — what does 'although' signal?",
            options: ["Cause", "Condition", "Concession", "Result"],
            correct: 2,
            explanation: "'Although' introduces a concessive clause — acknowledging a limitation before making a claim.",
          },
          {
            prompt: "Which subordinator introduces a causal adverbial clause?",
            options: ["Although", "Unless", "Because", "Whereas"],
            correct: 2,
            explanation: "'Because' (also 'since', 'as') introduces a clause explaining the reason for something.",
          },
          {
            prompt: "'Unless additional data are collected, conclusions remain tentative.' — what type of clause is this?",
            options: ["Concessive", "Conditional", "Causal", "Temporal"],
            correct: 1,
            explanation: "'Unless' introduces a conditional clause — stating the condition under which something holds.",
          },
          {
            prompt: "'Whereas group A improved, group B showed no change.' — what logical relationship does this express?",
            options: ["Cause and effect", "Time sequence", "Contrast", "Condition"],
            correct: 2,
            explanation: "'Whereas' directly contrasts two clauses — a key tool for comparative academic analysis.",
          },
        ] as Question[],
      },
      {
        id: "noun_cl", label: ["Noun", "Clauses"], title: "Noun Clauses",
        definition: "A subordinate clause functioning as a noun — as subject, object, or complement.",
        example: "It is widely acknowledged that sleep plays a critical role in memory consolidation.",
        use: "Used with reporting verbs and in it-constructions for impersonal academic statements.",
        tip: "Common with: It is argued that..., The fact that..., Evidence suggests that...",
        questions: [
          {
            prompt: "Identify the noun clause: 'It is widely accepted that sleep affects memory.'",
            options: [
              "'It is widely accepted'",
              "'sleep affects memory'",
              "'that sleep affects memory'",
              "'widely accepted that'",
            ],
            correct: 2,
            explanation: "'That sleep affects memory' is the noun clause — functioning as the grammatical subject.",
          },
          {
            prompt: "'The fact _____ the results were inconsistent troubled the team.'",
            options: ["which", "what", "that", "how"],
            correct: 2,
            explanation: "After 'the fact', use 'that' to introduce the noun clause complement.",
          },
          {
            prompt: "Which construction most commonly introduces a noun clause in academic writing?",
            options: [
              "It is + adjective + that...",
              "There is + noun + that...",
              "The + noun + which...",
              "Having + past participle...",
            ],
            correct: 0,
            explanation: "'It is + adjective + that...' (e.g. 'It is clear that...') is the most frequent academic pattern.",
          },
          {
            prompt: "'Evidence suggests _____ a link exists between the variables.'",
            options: ["which", "what", "how", "that"],
            correct: 3,
            explanation: "Reporting verbs like 'suggests', 'argues', 'shows' introduce noun clauses with 'that'.",
          },
        ] as Question[],
      },
    ],
  },
  {
    id: "style", label: ["Academic", "Style"], color: "#fb923c",
    concepts: [
      {
        id: "hedging", label: ["Hedging"], title: "Hedging",
        definition: "Using linguistic features to qualify claims and signal degree of certainty.",
        example: "This appears to suggest a possible link between the two phenomena.",
        use: "Demonstrates intellectual honesty and awareness of limitations — essential in academic writing.",
        tip: "Toolkit: modal verbs (may, might); adverbs (apparently); verbs (suggest, indicate, appear).",
        questions: [
          {
            prompt: "Which sentence best demonstrates appropriate hedging?",
            options: [
              "This proves a direct causal link.",
              "This definitely demonstrates the connection.",
              "This may suggest a possible relationship.",
              "This conclusively shows the effect.",
            ],
            correct: 2,
            explanation: "'May suggest' + 'possible' stacks hedging devices, signalling appropriate academic caution.",
          },
          {
            prompt: "Which is NOT a hedging device?",
            options: ["may", "apparently", "proves conclusively", "suggest"],
            correct: 2,
            explanation: "'Proves conclusively' is an overclaim — the opposite of hedging.",
          },
          {
            prompt: "Why is hedging essential in academic writing?",
            options: [
              "To make writing seem less confident to the reader.",
              "To signal appropriate caution and intellectual honesty about claims.",
              "To avoid using the first person.",
              "To reduce word count.",
            ],
            correct: 1,
            explanation: "Hedging shows awareness of limitations and prevents overstating findings — a mark of rigour.",
          },
          {
            prompt: "The adverb 'apparently' functions as a:",
            options: [
              "Discourse marker",
              "Reporting verb",
              "Hedging device",
              "Nominalisation",
            ],
            correct: 2,
            explanation: "'Apparently' signals that the writer is not fully certain — a hedging adverb.",
          },
        ] as Question[],
      },
      {
        id: "impersonal", label: ["Impersonal", "Constructions"], title: "Impersonal Constructions",
        definition: "Structures that avoid naming a specific agent, maintaining an objective tone.",
        example: "It can be argued that the results are inconclusive.",
        use: "Creates distance between writer and claim; a key feature of formal academic register.",
        tip: "Common patterns: It is argued that...; There is evidence that...; It has been shown that...",
        questions: [
          {
            prompt: "Which is an impersonal construction?",
            options: [
              "I argue that the results are inconclusive.",
              "We can argue that the results are inconclusive.",
              "It can be argued that the results are inconclusive.",
              "The researcher argues the results are inconclusive.",
            ],
            correct: 2,
            explanation: "'It can be argued that...' removes the named agent, creating impersonal, objective tone.",
          },
          {
            prompt: "What does using an impersonal construction achieve in academic writing?",
            options: [
              "It makes the writer's identity clearer.",
              "It creates objectivity and distance between writer and claim.",
              "It makes sentences longer and more complex.",
              "It allows the writer to use active voice.",
            ],
            correct: 1,
            explanation: "Impersonal constructions shift focus from the writer to the claim itself, creating academic detachment.",
          },
          {
            prompt: "'There is evidence to suggest that...' is an example of:",
            options: [
              "A cleft sentence",
              "A defining relative clause",
              "An impersonal construction",
              "Fronting",
            ],
            correct: 2,
            explanation: "'There is...' constructions are impersonal — they make statements without naming an agent.",
          },
          {
            prompt: "Which sentence most successfully avoids naming a specific agent?",
            options: [
              "Smith argues that further research is needed.",
              "I believe further research is needed.",
              "It has been shown that further research is needed.",
              "Our team thinks further research is needed.",
            ],
            correct: 2,
            explanation: "'It has been shown that...' is fully agentless — the most impersonal of the options.",
          },
        ] as Question[],
      },
      {
        id: "reporting", label: ["Reporting", "Verbs"], title: "Reporting Verbs",
        definition: "Verbs used to attribute ideas or findings to sources, with varying degrees of endorsement.",
        example: "Jones (2020) argues that existing frameworks fail to account for cultural variation.",
        use: "Allow writers to signal how much they agree with a source — critical for academic positioning.",
        tip: "Neutral: states, notes. Tentative: suggests, implies. Strong: argues, demonstrates, proves.",
        questions: [
          {
            prompt: "Which is a neutral reporting verb?",
            options: ["proves", "argues", "demonstrates", "notes"],
            correct: 3,
            explanation: "'Notes' is neutral — it attributes without signalling endorsement or disagreement.",
          },
          {
            prompt: "'Jones (2020) _____ that frameworks are insufficient.' (strong endorsement)",
            options: ["implies", "suggests", "demonstrates", "mentions"],
            correct: 2,
            explanation: "'Demonstrates' carries strong endorsement — the writer aligns with the source's claim.",
          },
          {
            prompt: "Which reporting verb signals a tentative or hedged claim?",
            options: ["proves", "shows", "suggests", "establishes"],
            correct: 2,
            explanation: "'Suggests' is tentative — it attributes a possibility rather than a certainty.",
          },
          {
            prompt: "'Smith argues that...' — what does the choice of 'argues' signal?",
            options: [
              "The writer fully agrees with Smith.",
              "Smith is presenting a contestable, strong claim.",
              "The writer is uncertain about Smith's position.",
              "Smith is making a neutral observation.",
            ],
            correct: 1,
            explanation: "'Argues' signals that the attributed claim is a strong, debatable position — not a neutral fact.",
          },
        ] as Question[],
      },
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
}

export default function GrammarMap({ streak, onPractice, onBack }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const concept = allConcepts.find(c => c.id === selected);

  return (
    <div style={{ background: "#0b1120", minHeight: "100vh", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column", color: "#f1f5f9" }}>
      {/* Header */}
      <div style={{ padding: "12px 20px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onBack}
            style={{ background: "none", border: "1px solid #1e293b", color: "#64748b", cursor: "pointer", padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, fontSize: 12, borderRadius: 2 }}
          >
            <ArrowLeft size={14} /> BACK
          </button>
          <div>
            <h1 style={{ color: "#f1f5f9", margin: 0, fontSize: 16, fontWeight: 700, letterSpacing: -0.3 }}>
              SELECT NODE TO PRACTICE
            </h1>
            <p style={{ color: "#475569", margin: "2px 0 0", fontSize: 11 }}>
              Click a concept node, then hit Practice
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22d3ee", fontWeight: 700, fontSize: 14 }}>
          <Zap size={14} fill="#22d3ee" /> {streak} STREAK
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
                <circle key={`${i}-${j}`} cx={i * 34} cy={j * 40} r={0.8} fill="#1e2d45" />
              ))
            )}

            {/* Center → Category lines */}
            {layoutData.map(cat => (
              <line key={`cl-${cat.id}`} x1={CX} y1={CY} x2={cat.x} y2={cat.y}
                stroke={cat.color} strokeWidth={1.5} strokeOpacity={0.2} strokeDasharray="5 4" />
            ))}

            {/* Category → Concept lines */}
            {layoutData.map(cat => cat.concepts.map(c => (
              <line key={`cl-${c.id}`} x1={cat.x} y1={cat.y} x2={c.x!} y2={c.y!}
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
                    <text key={i} x={c.x} y={c.y! - (c.label.length - 1) * 6 + i * 13}
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
          display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto",
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

              <SideSection label="Definition" color="#94a3b8">
                <p style={pStyle}>{concept.definition}</p>
              </SideSection>

              <div style={{ background: "#070e1a", borderRadius: 8, padding: "12px 14px", borderLeft: `3px solid ${concept.catColor}`, marginBottom: 16 }}>
                <SideLabel color="#64748b">Example</SideLabel>
                <p style={{ ...pStyle, fontStyle: "italic", color: "#cbd5e1" }}>"{concept.example}"</p>
              </div>

              <SideSection label="Academic Use" color="#94a3b8">
                <p style={pStyle}>{concept.use}</p>
              </SideSection>

              <div style={{ background: `${concept.catColor}14`, borderRadius: 8, padding: "12px 14px", marginBottom: 20 }}>
                <SideLabel color={concept.catColor}>Tip</SideLabel>
                <p style={{ ...pStyle, color: "#e2e8f0" }}>{concept.tip}</p>
              </div>

              {/* Practice button */}
              <button
                onClick={() => onPractice(concept.id)}
                style={{
                  width: "100%", background: concept.catColor, color: "#0b1120",
                  border: "none", padding: "14px 0", fontWeight: 800, fontSize: 14,
                  letterSpacing: 1, textTransform: "uppercase" as const, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                <Play size={16} fill="currentColor" /> Practice This
              </button>
            </div>
          ) : (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 32, textAlign: "center", color: "#334155" }}>
              <div style={{ fontSize: 44, marginBottom: 14 }}>🌐</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Select any concept node on the map to explore it and start a practice session.
              </p>
              <p style={{ fontSize: 11, lineHeight: 1.6, marginTop: 16, color: "#1e3a5f" }}>
                5 categories · 15 concepts · 4 questions each
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const pStyle: React.CSSProperties = { color: "#e2e8f0", fontSize: 13, lineHeight: 1.65, margin: 0 };

function SideLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div style={{ color, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
      {children}
    </div>
  );
}

function SideSection({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <SideLabel color={color}>{label}</SideLabel>
      {children}
    </div>
  );
}
