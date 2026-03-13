import { useState } from "react";
import { ArrowLeft, Zap, Play } from "lucide-react";

const W = 1060, H = 880;
const CX = 530, CY = 440;
const CAT_R = 205, NODE_R = 135, SPREAD = 0.52;

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
  questions: Question[];
  x?: number;
  y?: number;
  catColor?: string;
}

const rawData = [
  // ── 1. Sentence Structure ──────────────────────────────────────
  {
    id: "sentence", label: ["Sentence", "Structure"], color: "#818cf8",
    concepts: [
      {
        id: "passive", label: ["Passive", "Voice"], title: "Passive Voice",
        definition: "A structure where the subject receives the action rather than performing it, using be + past participle.",
        example: "The data were collected over a six-month period.",
        use: "Foregrounds information and maintains objectivity — especially in methods sections.",
        tip: "Pattern: be + past participle (e.g. was conducted, are considered, have been identified).",
        questions: [
          { prompt: "Which sentence is written in the passive voice?",
            options: ["Researchers collected the samples over three months.", "The samples were collected over three months."],
            correct: 1, explanation: "'Were collected' = be + past participle — the passive pattern." },
          { prompt: "Complete: 'The data _____ over three months.'",
            options: ["collected", "were collected"],
            correct: 1, explanation: "Passive voice needs a form of 'be': 'were collected'." },
          { prompt: "Which is more appropriate in an academic methods section?",
            options: ["We conducted the experiment in a controlled environment.", "The experiment was conducted in a controlled environment."],
            correct: 1, explanation: "Passive removes the agent — maintaining objectivity in methods writing." },
          { prompt: "'The results have been analysed.' — Is this passive voice?",
            options: ["Yes — 'have been analysed' uses be + past participle.", "No — 'have been' makes it present perfect, not passive."],
            correct: 0, explanation: "This is both present perfect AND passive: have + been + past participle." },
        ] as Question[],
      },
      {
        id: "cleft", label: ["Cleft", "Sentences"], title: "Cleft Sentences",
        definition: "A sentence split into two clauses to place emphasis on a specific element.",
        example: "It is the methodology that requires further justification.",
        use: "Guides reader attention and signals what the writer considers most significant.",
        tip: "Common patterns: 'It is X that...' or 'What X does is...'",
        questions: [
          { prompt: "Which is a cleft sentence?",
            options: ["The methodology requires further justification.", "It is the methodology that requires further justification."],
            correct: 1, explanation: "'It is X that...' splits the sentence to emphasise 'the methodology'." },
          { prompt: "Complete: '_____ the sample size that limits generalisability.'",
            options: ["There is", "It is"],
            correct: 1, explanation: "'It is X that...' is the most common cleft structure in academic writing." },
          { prompt: "What is the main purpose of a cleft sentence?",
            options: ["To shorten a sentence.", "To highlight one specific part of the sentence."],
            correct: 1, explanation: "Cleft sentences split information into two clauses to foreground one element." },
          { prompt: "'What the results show is a clear trend.' — Is this a cleft sentence?",
            options: ["Yes — 'What X does/shows is...' is a standard cleft pattern.", "No — cleft sentences only use 'It is...that'."],
            correct: 0, explanation: "Both 'It is X that...' and 'What X does is...' are cleft patterns." },
        ] as Question[],
      },
      {
        id: "fronting", label: ["Fronting"], title: "Fronting",
        definition: "Moving a non-subject element to the front of a sentence for emphasis or cohesion.",
        example: "Particularly striking is the absence of longitudinal evidence.",
        use: "Creates cohesion by linking sentences and highlighting key information.",
        tip: "Can front adjectives, adverbials, or prepositional phrases.",
        questions: [
          { prompt: "Which sentence uses fronting?",
            options: ["The ethical implications are particularly significant.", "Particularly significant are the ethical implications."],
            correct: 1, explanation: "The adjective phrase 'Particularly significant' is moved to the front." },
          { prompt: "Why do academic writers use fronting?",
            options: ["To make sentences shorter.", "To create cohesion and highlight key information."],
            correct: 1, explanation: "Fronting links back to the previous sentence's theme and foregrounds what matters." },
          { prompt: "Is fronting used in: 'Rarely has such evidence been replicated.'?",
            options: ["Yes — 'Rarely' is fronted, causing subject-auxiliary inversion.", "No — 'Rarely' is just an adverb in its normal position."],
            correct: 0, explanation: "Negative adverbs like 'rarely' can be fronted, triggering inversion." },
          { prompt: "What is fronted in: 'Of particular concern is the lack of longitudinal data.'?",
            options: ["A verb phrase", "A prepositional phrase"],
            correct: 1, explanation: "'Of particular concern' is a prepositional phrase moved to the front." },
        ] as Question[],
      },
    ],
  },

  // ── 2. Verb Forms & Tense ─────────────────────────────────────
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
          { prompt: "Which tense should you use to describe what a paper argues?",
            options: ["Past simple: 'Smith (2019) argued that...'", "Present simple: 'Smith (2019) argues that...'"],
            correct: 1, explanation: "Use present simple to describe what a published text currently says." },
          { prompt: "Complete: 'The model _____ three key variables.'",
            options: ["identified", "identifies"],
            correct: 1, explanation: "Present simple describes what the model does as a general truth." },
          { prompt: "When is present simple used in academic writing?",
            options: ["Only for events happening right now.", "For general truths, current findings, and what texts argue."],
            correct: 1, explanation: "Present simple is the default tense for stating claims and describing data." },
          { prompt: "Is this correct? 'Results show a strong positive correlation.'",
            options: ["Yes — present simple is standard for describing findings.", "No — past simple should be used as the research is finished."],
            correct: 0, explanation: "Present simple is preferred for stating what results show, even in completed research." },
        ] as Question[],
      },
      {
        id: "modals", label: ["Modal", "Verbs"], title: "Modal Verbs",
        definition: "Auxiliary verbs expressing certainty, possibility, necessity, or obligation.",
        example: "These findings may indicate a need for further investigation.",
        use: "Essential for hedging — signalling appropriate caution about claims.",
        tip: "Certainty scale: will → would → should → may → might → could",
        questions: [
          { prompt: "Which modal expresses the most certainty?",
            options: ["might", "will"],
            correct: 1, explanation: "'Will' expresses near-certainty; 'might' expresses low probability." },
          { prompt: "Which is better hedged for academic writing?",
            options: ["This proves that stress causes cognitive decline.", "This may suggest a link between stress and cognition."],
            correct: 1, explanation: "'May suggest' hedges the claim — signalling possibility without overstating." },
          { prompt: "Complete: 'These findings _____ indicate a need for further research.' (appropriate hedging)",
            options: ["may", "must"],
            correct: 0, explanation: "'May' hedges appropriately; 'must' makes an overconfident claim." },
          { prompt: "What is the main function of modal verbs in academic writing?",
            options: ["To form questions and negatives.", "To signal how certain the writer is about a claim."],
            correct: 1, explanation: "Modals let writers calibrate confidence — essential for intellectual honesty." },
        ] as Question[],
      },
      {
        id: "perfect", label: ["Present", "Perfect"], title: "Present Perfect",
        definition: "Links past events or research to the present; a key tense in literature reviews.",
        example: "Several studies have examined the link between stress and performance.",
        use: "Describes what has been researched and what gaps remain.",
        tip: "Common with: has shown, have argued, has been demonstrated.",
        questions: [
          { prompt: "Which tense is typical in a literature review?",
            options: ["'Researchers examined this topic in 1998.'", "'Researchers have examined this topic extensively.'"],
            correct: 1, explanation: "Present perfect connects past research to the current state of knowledge." },
          { prompt: "Complete: 'Several studies _____ the relationship between diet and cognition.'",
            options: ["examined", "have examined"],
            correct: 1, explanation: "Present perfect ('have examined') is standard for accumulated prior research." },
          { prompt: "Why use present perfect in a literature review?",
            options: ["To show that past research is still relevant to the current study.", "To show that the research was completed at a specific time."],
            correct: 0, explanation: "Present perfect links past findings to what we know now — the hallmark of lit reviews." },
          { prompt: "Is 'has been demonstrated' present perfect?",
            options: ["Yes — 'has' + past participle = present perfect passive.", "No — this is passive voice, not present perfect."],
            correct: 0, explanation: "This is both: present perfect (has + been) AND passive (been + past participle)." },
        ] as Question[],
      },
    ],
  },

  // ── 3. Cohesion & Linking ─────────────────────────────────────
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
          { prompt: "Which discourse marker signals a contrast?",
            options: ["Furthermore", "However"],
            correct: 1, explanation: "'However' signals a contrast or qualification of the previous point." },
          { prompt: "What function does 'therefore' have?",
            options: ["It adds a further point to the previous one.", "It signals that what follows is a result or conclusion."],
            correct: 1, explanation: "'Therefore' shows that what follows logically results from what came before." },
          { prompt: "Which is the correct use of 'furthermore'?",
            options: ["Furthermore, the sample was small. However, results were consistent.", "The sample was small. Furthermore, results were consistent with similar studies."],
            correct: 1, explanation: "'Furthermore' adds information — it shouldn't be followed immediately by contrast." },
          { prompt: "Which group does 'nevertheless' belong to?",
            options: ["Contrast / concession markers", "Addition markers"],
            correct: 0, explanation: "'Nevertheless' signals concession — it introduces a contrasting point." },
        ] as Question[],
      },
      {
        id: "reference", label: ["Reference", "Chains"], title: "Reference Chains",
        definition: "Using pronouns or synonyms to refer back to previously mentioned items.",
        example: "The study involved 200 participants. These individuals were recruited from three universities.",
        use: "Prevents repetition while maintaining clarity and linking sentences together.",
        tip: "Check each pronoun (this, these, it, they) has a clear referent in the preceding text.",
        questions: [
          { prompt: "What does 'these findings' do in: 'The study found X. These findings suggest...'?",
            options: ["It introduces a completely new idea.", "It refers back to the previous sentence to maintain cohesion."],
            correct: 1, explanation: "'These findings' refers anaphorically to the results just mentioned." },
          { prompt: "Which sentence has a vague pronoun reference?",
            options: ["The data were collected and then analysed. They showed a clear pattern.", "The researchers briefed the participants. They then completed the survey."],
            correct: 1, explanation: "In the second sentence, 'they' is ambiguous — researchers or participants?" },
          { prompt: "What should you always check before using 'this' or 'it'?",
            options: ["That it has a clear noun referent in the previous sentence.", "That it is followed by a comma."],
            correct: 0, explanation: "Vague pronouns break cohesion. Each must clearly refer to a specific noun." },
          { prompt: "'The phenomenon... This phenomenon... It...' — what type of device is this?",
            options: ["A reference chain", "Nominalisation"],
            correct: 0, explanation: "Varying how you refer to the same entity creates a cohesive reference chain." },
        ] as Question[],
      },
      {
        id: "nominal", label: ["Nominalisa-", "tion"], title: "Nominalisation",
        definition: "Converting verbs or adjectives into noun forms for a formal, condensed style.",
        example: "The investigation of this phenomenon has grown. (cf. Researchers have investigated...)",
        use: "Allows ideas to be 'packed' into noun phrases — a hallmark of academic register.",
        tip: "Watch for suffixes: -tion, -ment, -ance, -ity, -ness.",
        questions: [
          { prompt: "Which sentence uses nominalisation?",
            options: ["Researchers have investigated the phenomenon extensively.", "The investigation of the phenomenon has grown significantly."],
            correct: 1, explanation: "'Investigation' nominalises the verb 'investigate' — converting process to noun." },
          { prompt: "Which word is a nominalisation of 'investigate'?",
            options: ["investigative", "investigation"],
            correct: 1, explanation: "'Investigation' (-tion suffix) is the noun form of the verb 'investigate'." },
          { prompt: "What does nominalisation achieve in academic writing?",
            options: ["It simplifies sentences for a general audience.", "It packs complex processes into noun phrases, creating formal register."],
            correct: 1, explanation: "Nominalisation condenses processes into 'things', enabling dense academic style." },
          { prompt: "Which suffix typically creates a nominalisation?",
            options: ["-ing (as in 'running')", "-tion (as in 'investigation')"],
            correct: 1, explanation: "'-tion', '-ment', '-ance', '-ity', and '-ness' are common nominalisation suffixes." },
        ] as Question[],
      },
    ],
  },

  // ── 4. Clause Types ───────────────────────────────────────────
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
          { prompt: "Which sentence has a defining relative clause?",
            options: ["The model, which was proposed in 2019, is widely cited.", "The model that Smith proposed is widely used."],
            correct: 1, explanation: "No commas = defining clause; it identifies which specific model is meant." },
          { prompt: "What do commas around a relative clause signal?",
            options: ["A defining clause that identifies which noun is meant.", "A non-defining clause that adds extra, removable information."],
            correct: 1, explanation: "Commas mark a non-defining clause — the information is additional, not identifying." },
          { prompt: "Which relative pronoun is used specifically for people?",
            options: ["which", "who"],
            correct: 1, explanation: "'Who' refers to people; 'which' refers to things." },
          { prompt: "Is this correct? 'The study which examined 500 participants, found clear results.'",
            options: ["No — no comma before 'found' when the relative clause is defining.", "Yes — a comma is always used after a relative clause."],
            correct: 0, explanation: "A defining relative clause should not be separated from the main clause by a comma." },
        ] as Question[],
      },
      {
        id: "adverbial", label: ["Adverbial", "Clauses"], title: "Adverbial Clauses",
        definition: "Subordinate clauses providing information about when, why, how, or under what conditions.",
        example: "Although the sample was small, the findings are nonetheless indicative.",
        use: "Essential for expressing concession, condition, cause, and contrast.",
        tip: "Contrast: although/whereas; Cause: because/since/as; Condition: if/unless.",
        questions: [
          { prompt: "'Although the sample was small, the findings are indicative.' What does 'although' signal?",
            options: ["A cause — it explains why the findings are limited.", "A concession — it acknowledges a limitation before making a claim."],
            correct: 1, explanation: "'Although' introduces a concessive clause — acknowledging an opposing point." },
          { prompt: "Which word introduces a causal adverbial clause?",
            options: ["unless", "because"],
            correct: 1, explanation: "'Because' (also 'since', 'as') introduces a clause explaining a reason." },
          { prompt: "'Unless additional data are collected, conclusions remain tentative.' — What type of clause?",
            options: ["Conditional", "Concessive"],
            correct: 0, explanation: "'Unless' introduces a conditional — the condition under which something holds." },
          { prompt: "Which is a contrast subordinator?",
            options: ["whereas", "since"],
            correct: 0, explanation: "'Whereas' directly contrasts two clauses; 'since' expresses cause or time." },
        ] as Question[],
      },
      {
        id: "noun_cl", label: ["Noun", "Clauses"], title: "Noun Clauses",
        definition: "A subordinate clause functioning as a noun — as subject, object, or complement.",
        example: "It is widely acknowledged that sleep plays a critical role in memory consolidation.",
        use: "Used with reporting verbs and in it-constructions for impersonal academic statements.",
        tip: "Common with: It is argued that..., The fact that..., Evidence suggests that...",
        questions: [
          { prompt: "Identify the noun clause: 'It is widely accepted that sleep affects memory.'",
            options: ["'It is widely accepted'", "'that sleep affects memory'"],
            correct: 1, explanation: "'That sleep affects memory' is the noun clause — the grammatical subject." },
          { prompt: "Complete: 'Evidence suggests _____ a correlation exists between the variables.'",
            options: ["that", "which"],
            correct: 0, explanation: "Reporting verbs like 'suggests' introduce noun clauses with 'that'." },
          { prompt: "Which is an example of the 'It is + adjective + that' pattern?",
            options: ["It is widely accepted that climate patterns are shifting.", "It is important, and it is relevant."],
            correct: 0, explanation: "'It is + adjective + that-clause' is one of the most common academic structures." },
          { prompt: "Complete: 'The fact _____ results varied is significant.'",
            options: ["that", "which"],
            correct: 0, explanation: "After 'the fact', use 'that' to introduce the noun clause complement." },
        ] as Question[],
      },
    ],
  },

  // ── 5. Academic Style ─────────────────────────────────────────
  {
    id: "style", label: ["Academic", "Style"], color: "#fb923c",
    concepts: [
      {
        id: "hedging", label: ["Hedging"], title: "Hedging",
        definition: "Using linguistic features to qualify claims and signal degree of certainty.",
        example: "This appears to suggest a possible link between the two phenomena.",
        use: "Demonstrates intellectual honesty and awareness of limitations.",
        tip: "Toolkit: modal verbs (may, might); adverbs (apparently); verbs (suggest, indicate, appear).",
        questions: [
          { prompt: "Which sentence is most appropriately hedged?",
            options: ["This proves a direct causal link between the variables.", "This may suggest a possible relationship between the variables."],
            correct: 1, explanation: "'May suggest' + 'possible' stacks hedging devices — appropriate academic caution." },
          { prompt: "Which is NOT a hedging device?",
            options: ["may", "proves conclusively"],
            correct: 1, explanation: "'Proves conclusively' is an overclaim — the opposite of hedging." },
          { prompt: "Why is hedging essential in academic writing?",
            options: ["To signal appropriate caution and intellectual honesty about claims.", "To make writing seem less confident to the reader."],
            correct: 0, explanation: "Hedging shows awareness of limitations — a mark of academic rigour." },
          { prompt: "Which sentence is better for academic writing?",
            options: ["The data clearly shows that X causes Y.", "The data suggests that X may be associated with Y."],
            correct: 1, explanation: "'Suggests' and 'may be associated' hedge appropriately — avoiding overclaiming." },
        ] as Question[],
      },
      {
        id: "impersonal", label: ["Impersonal", "Constructions"], title: "Impersonal Constructions",
        definition: "Structures that avoid naming a specific agent, maintaining an objective tone.",
        example: "It can be argued that the results are inconclusive.",
        use: "Creates distance between writer and claim; a key feature of formal academic register.",
        tip: "Common patterns: It is argued that...; There is evidence that...; It has been shown that...",
        questions: [
          { prompt: "Which is an impersonal construction?",
            options: ["I argue that this approach has significant limitations.", "It can be argued that this approach has significant limitations."],
            correct: 1, explanation: "'It can be argued that...' removes the named agent, creating objectivity." },
          { prompt: "What does using an impersonal construction achieve?",
            options: ["It creates objectivity by removing the writer's identity from the claim.", "It makes writing more personal and engaging."],
            correct: 0, explanation: "Impersonal constructions shift focus from the writer to the claim itself." },
          { prompt: "Is 'There is evidence to suggest that...' an impersonal construction?",
            options: ["Yes — no named agent, objective tone.", "No — 'there' names a specific agent."],
            correct: 0, explanation: "'There is evidence...' is fully agentless — a classic impersonal structure." },
          { prompt: "Which is more formal and impersonal?",
            options: ["We believe that further testing is required.", "It is believed that further testing is required."],
            correct: 1, explanation: "'It is believed that...' is fully agentless — appropriate for formal academic writing." },
        ] as Question[],
      },
      {
        id: "reporting", label: ["Reporting", "Verbs"], title: "Reporting Verbs",
        definition: "Verbs used to attribute ideas to sources, with varying degrees of endorsement.",
        example: "Jones (2020) argues that existing frameworks fail to account for cultural variation.",
        use: "Allow writers to signal how much they agree with a source — critical for positioning.",
        tip: "Neutral: states, notes. Tentative: suggests, implies. Strong: argues, demonstrates.",
        questions: [
          { prompt: "Which reporting verb is neutral?",
            options: ["proves", "notes"],
            correct: 1, explanation: "'Notes' is neutral — it attributes without signalling endorsement or disagreement." },
          { prompt: "What does 'argues' signal in: 'Smith (2020) argues that...'?",
            options: ["The writer fully agrees with Smith's position.", "Smith is making a strong, contestable claim."],
            correct: 1, explanation: "'Argues' signals that the attributed claim is a strong, debatable position." },
          { prompt: "Which reporting verb signals a tentative or hedged claim?",
            options: ["demonstrates", "suggests"],
            correct: 1, explanation: "'Suggests' is tentative — it attributes a possibility rather than a certainty." },
          { prompt: "Which correctly uses a reporting verb?",
            options: ["Smith (2020) argued that the framework was incomplete. (referring to a current paper)", "Smith (2020) argues that the framework is incomplete."],
            correct: 1, explanation: "Use present simple when describing what a published text currently argues." },
        ] as Question[],
      },
    ],
  },

  // ── 6. Articles & Reference ───────────────────────────────────
  {
    id: "articles", label: ["Articles &", "Reference"], color: "#a78bfa",
    concepts: [
      {
        id: "definite", label: ["Definite", "Article"], title: "The Definite Article",
        definition: "'The' signals that both writer and reader know which specific thing is being referred to.",
        example: "We conducted a study. The study examined sleep patterns in adolescents.",
        use: "Used when referring to something already mentioned, unique, or specified by context.",
        tip: "First mention → 'a'; second mention → 'the'. Ask: 'Do we both know which one?' If yes, use 'the'.",
        questions: [
          { prompt: "Which sentence correctly uses 'the' for a second mention?",
            options: ["We conducted a study. A study examined sleep patterns.", "We conducted a study. The study examined sleep patterns."],
            correct: 1, explanation: "Second mention of a specific noun uses 'the' — both writer and reader know which study." },
          { prompt: "'The results suggest...' — why is 'the' correct?",
            options: ["Because 'results' is a plural noun.", "Because both writer and reader know which specific results are meant."],
            correct: 1, explanation: "'The' signals shared knowledge — here, the results of this specific study." },
          { prompt: "Complete: 'Figure 1 shows _____ relationship between stress and performance.'",
            options: ["a", "the"],
            correct: 1, explanation: "The figure shows one specific, identifiable relationship — 'the' is correct." },
          { prompt: "Is 'the' needed here? '_____ research is important in all academic fields.'",
            options: ["Yes — 'The research is important' is correct.", "No — zero article: 'Research is important in all fields.'"],
            correct: 1, explanation: "General statements about uncountable nouns (research, knowledge) use zero article." },
        ] as Question[],
      },
      {
        id: "indefinite", label: ["Indefinite", "Article"], title: "The Indefinite Article",
        definition: "'A/an' introduces something new or refers to one member of a general category.",
        example: "This study proposes a new framework for analysis.",
        use: "Use 'a/an' when introducing a concept for the first time, or classifying something.",
        tip: "First mention → 'a'; second mention → 'the'. A dog came in. The dog sat down.",
        questions: [
          { prompt: "Which is correct when introducing something for the first time?",
            options: ["The study uses the novel methodology.", "The study uses a novel methodology."],
            correct: 1, explanation: "'A novel methodology' — first mention of this specific methodology." },
          { prompt: "Complete: 'Smith (2019) developed _____ framework that has since been widely adopted.'",
            options: ["the", "a"],
            correct: 1, explanation: "First mention — the framework is being introduced for the first time." },
          { prompt: "Which is correct?",
            options: ["The aim is to provide an overview of the literature.", "The aim is to provide a overview of the literature."],
            correct: 0, explanation: "'An' is used before vowel sounds: 'an overview', 'an analysis', 'an effect'." },
          { prompt: "When is 'a/an' used?",
            options: ["Before any noun being mentioned for the first time or classified generally.", "Before any noun that follows a preposition."],
            correct: 0, explanation: "'A/an' introduces new items or classifies ('She is a researcher')." },
        ] as Question[],
      },
      {
        id: "zero_art", label: ["Zero", "Article"], title: "Zero Article",
        definition: "No article before plural or uncountable nouns when making general statements.",
        example: "Research suggests that exercise improves cognitive function.",
        use: "Use zero article for general statements about categories, substances, and abstract concepts.",
        tip: "No article before: abstract nouns (evidence, knowledge), academic disciplines (linguistics), general plurals.",
        questions: [
          { prompt: "Which correctly makes a general academic statement?",
            options: ["A research is essential for development.", "Research is essential for development."],
            correct: 1, explanation: "'Research' is uncountable — it does not take 'a'. Zero article for general statements." },
          { prompt: "When is zero article used?",
            options: ["Before uncountable nouns and plurals making general statements.", "Before all nouns that follow prepositions."],
            correct: 0, explanation: "Zero article signals generality: 'knowledge', 'students', 'universities' (in general)." },
          { prompt: "Complete: '_____ academic writing requires precision and clarity.' (general statement)",
            options: ["The", "(no article)"],
            correct: 1, explanation: "'Academic writing' as a general concept takes zero article." },
          { prompt: "Which is correct?",
            options: ["The knowledge is power.", "Knowledge is power."],
            correct: 1, explanation: "Abstract nouns used as general truths take zero article." },
        ] as Question[],
      },
    ],
  },

  // ── 7. Conditionals ───────────────────────────────────────────
  {
    id: "conditionals", label: ["Conditionals"], color: "#38bdf8",
    concepts: [
      {
        id: "real_cond", label: ["Real", "Conditions"], title: "Real Conditions",
        definition: "Conditionals expressing likely or possible situations: if + present simple, will/may/can + infinitive.",
        example: "If the sample size is increased, the findings will be more reliable.",
        use: "Used to discuss likely scenarios, implications of evidence, and recommendations.",
        tip: "Pattern: If + present simple, will/may/can + base form. Both parts refer to present/future.",
        questions: [
          { prompt: "Which is a real (likely) conditional?",
            options: ["If the sample were larger, the results would be more reliable.", "If the sample is larger, the results will be more reliable."],
            correct: 1, explanation: "Real conditionals use present simple in the 'if' clause and 'will' in the result." },
          { prompt: "Complete: 'If the hypothesis _____ supported, the theory will need revision.' (real condition)",
            options: ["is not", "were not"],
            correct: 0, explanation: "Real conditions use present simple in the 'if' clause." },
          { prompt: "Which is appropriate for an academic recommendation?",
            options: ["If researchers replicate the study, the findings will be confirmed.", "If researchers replicated the study, findings would be confirmed."],
            correct: 0, explanation: "Real conditionals (present + will) are used for likely, actionable recommendations." },
          { prompt: "What tense follows 'if' in a real conditional?",
            options: ["Present simple", "Past simple"],
            correct: 0, explanation: "Real conditionals: If + present simple, + will/can/may + infinitive." },
        ] as Question[],
      },
      {
        id: "hypo_cond", label: ["Hypothetical", "Conditions"], title: "Hypothetical Conditions",
        definition: "Conditionals for unlikely or imaginary situations: if + past simple, would + infinitive.",
        example: "If this framework were applied globally, outcomes would differ significantly.",
        use: "Used to discuss theoretical scenarios and the implications of alternative approaches.",
        tip: "Use 'were' (not 'was') for all persons in formal academic English: 'If it were...'",
        questions: [
          { prompt: "Which is a hypothetical (unreal present) conditional?",
            options: ["If the model is correct, predictions will match the data.", "If the model were correct, predictions would match the data."],
            correct: 1, explanation: "Hypothetical conditionals use past simple in 'if' clause + 'would' in result." },
          { prompt: "In formal academic writing, which is correct?",
            options: ["If the researcher was to change the variable...", "If the researcher were to change the variable..."],
            correct: 1, explanation: "'Were' is used for all persons in formal/academic hypothetical conditionals." },
          { prompt: "Complete: 'If this approach _____ adopted universally, outcomes _____ improve significantly.'",
            options: ["were / would", "is / will"],
            correct: 0, explanation: "Hypothetical: 'were' (past) + 'would' (conditional) — not real, but imagined." },
          { prompt: "What is the purpose of hypothetical conditionals in academic writing?",
            options: ["To describe what researchers actually did.", "To explore theoretical scenarios and their implications."],
            correct: 1, explanation: "Hypothetical conditionals allow writers to discuss 'what if' alternatives." },
        ] as Question[],
      },
      {
        id: "mixed_cond", label: ["Mixed", "Conditionals"], title: "Mixed Conditionals",
        definition: "A conditional mixing time frames: if + past perfect (past cause), would + base form (present effect).",
        example: "If the methodology had been more robust, the conclusions would be stronger today.",
        use: "Reflects on how past decisions affect present outcomes — common in critical analysis.",
        tip: "Pattern: If + had + past participle, would + base form (present result).",
        questions: [
          { prompt: "What makes a mixed conditional different from other conditionals?",
            options: ["It mixes two different time frames in one sentence.", "It uses 'might' instead of 'would'."],
            correct: 0, explanation: "Mixed conditionals combine a past 'if' clause with a present result clause." },
          { prompt: "Which is a mixed conditional?",
            options: ["If the study had included a control group, the findings would be more credible now.", "If the study includes a control group, the findings will be more credible."],
            correct: 0, explanation: "'Had included' (past perfect) + 'would be' (present) = mixed conditional." },
          { prompt: "Complete: 'If the researchers _____ accounted for the variable, the model _____ be more accurate today.'",
            options: ["had / would", "have / will"],
            correct: 0, explanation: "Past perfect ('had accounted') + 'would' = mixed conditional pattern." },
          { prompt: "When is a mixed conditional most useful in academic writing?",
            options: ["When describing what researchers were studying.", "When reflecting on how past decisions affect current outcomes."],
            correct: 1, explanation: "Mixed conditionals are used for critical reflection on past choices and present consequences." },
        ] as Question[],
      },
    ],
  },

  // ── 8. Comparison & Degree ────────────────────────────────────
  {
    id: "comparison", label: ["Comparison", "& Degree"], color: "#fb7185",
    concepts: [
      {
        id: "comparative", label: ["Comparative", "Structures"], title: "Comparative Structures",
        definition: "Language used to compare two things, using 'more/less + adjective' or '-er' forms.",
        example: "The second approach proved more effective than the first.",
        use: "Essential for evaluating evidence, comparing studies, and discussing findings.",
        tip: "Two syllables or more → 'more effective'. One syllable → '-er' form (larger, clearer).",
        questions: [
          { prompt: "Which is the correct academic comparative?",
            options: ["The results were significanter than expected.", "The results were more significant than expected."],
            correct: 1, explanation: "Multi-syllable adjectives use 'more + adjective', not '-er' ending." },
          { prompt: "Which is more appropriate for academic writing?",
            options: ["X is way better than Y for this purpose.", "X demonstrates greater efficacy than Y for this purpose."],
            correct: 1, explanation: "Formal vocabulary ('demonstrates greater efficacy') suits academic register." },
          { prompt: "Which uses 'less' correctly in a comparative?",
            options: ["The second method was less reliable than the first.", "The second method was less more reliable than the first."],
            correct: 0, explanation: "'Less + adjective' (not 'less more') is the correct pattern." },
          { prompt: "Complete: 'Group B showed _____ improvement than Group A over the same period.'",
            options: ["more greater", "greater"],
            correct: 1, explanation: "Use 'greater' as a comparative adjective — 'more greater' is a double comparative error." },
        ] as Question[],
      },
      {
        id: "degree", label: ["Degree &", "Emphasis"], title: "Degree and Emphasis",
        definition: "Adverbs and phrases that modify adjectives and verbs to show how much, or how certain.",
        example: "This is a particularly significant finding that substantially alters our understanding.",
        use: "Used to calibrate claims — emphasise important points or downplay minor ones.",
        tip: "Academic emphasis adverbs: particularly, notably, significantly, substantially, considerably, markedly.",
        questions: [
          { prompt: "Which uses degree adverbs appropriately for academic writing?",
            options: ["The results were super important and really surprising.", "The results were particularly significant and notably consistent."],
            correct: 1, explanation: "Formal degree adverbs (particularly, notably) are appropriate in academic writing." },
          { prompt: "Which is more precise for academic writing?",
            options: ["The effect was very big.", "The effect was substantially larger than anticipated."],
            correct: 1, explanation: "'Substantially larger' is more precise and formal than 'very big'." },
          { prompt: "Complete: 'The two groups differed _____ in their responses to the intervention.'",
            options: ["markedly", "lots"],
            correct: 0, explanation: "'Markedly' is a formal adverb of degree appropriate for academic writing." },
          { prompt: "What does 'considerably' modify in: 'Results improved considerably'?",
            options: ["The noun 'results'", "The verb 'improved'"],
            correct: 1, explanation: "'Considerably' is an adverb — it modifies the verb 'improved'." },
        ] as Question[],
      },
      {
        id: "parallel", label: ["Parallel", "Structures"], title: "Parallel Structures",
        definition: "Using the same grammatical form for items in a list or comparison.",
        example: "The study aimed to identify patterns, analyse relationships, and evaluate outcomes.",
        use: "Essential for clear, balanced academic sentences — especially in aims, methods, and lists.",
        tip: "If you start with 'to + verb', maintain that form throughout: to identify, to analyse, to evaluate.",
        questions: [
          { prompt: "Which sentence uses parallel structure correctly?",
            options: ["The aims were to collect data, analysing it, and draw conclusions.", "The aims were to collect data, analyse it, and draw conclusions."],
            correct: 1, explanation: "All verbs must be in the same form: 'to collect, analyse, and draw'." },
          { prompt: "What is wrong with: 'The study examines causes, effects, and what can be done'?",
            options: ["Nothing — parallel structure is maintained.", "The third item breaks the pattern — should be 'implications' or 'solutions'."],
            correct: 1, explanation: "'What can be done' breaks parallelism — a noun like 'solutions' keeps the pattern." },
          { prompt: "Which is better parallel structure?",
            options: ["The framework is flexible, scalable, and it is also efficient.", "The framework is flexible, scalable, and efficient."],
            correct: 1, explanation: "Three adjectives in parallel: 'flexible, scalable, and efficient' — clean and balanced." },
          { prompt: "Why is parallel structure important in academic writing?",
            options: ["It makes sentences longer and more detailed.", "It makes sentences clear, balanced, and easy to read."],
            correct: 1, explanation: "Parallel structure creates symmetry and clarity — essential for professional academic prose." },
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
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22d3ee", fontWeight: 900, fontSize: 13, letterSpacing: 1 }}>
          <Zap size={14} fill="#22d3ee" /> {streak} STREAK
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
            {Array.from({ length: 32 }, (_, i) =>
              Array.from({ length: 27 }, (_, j) => (
                <circle key={`${i}-${j}`} cx={i * 34} cy={j * 34} r={0.6} fill="#111" />
              ))
            )}

            {/* Center → Category lines */}
            {layoutData.map(cat => (
              <line key={`cl-${cat.id}`} x1={CX} y1={CY} x2={cat.x} y2={cat.y}
                stroke={cat.color} strokeWidth={0.8} strokeOpacity={0.12} strokeDasharray="5 5" />
            ))}

            {/* Category → Concept lines */}
            {layoutData.map(cat => cat.concepts.map(c => (
              <line key={`nl-${c.id}`} x1={cat.x} y1={cat.y} x2={c.x!} y2={c.y!}
                stroke={cat.color} strokeWidth={0.7} strokeOpacity={selected === c.id ? 0.5 : 0.18} />
            )))}

            {/* Category glow halos */}
            {layoutData.map(cat => (
              <circle key={`h-${cat.id}`} cx={cat.x} cy={cat.y} r={60} fill={`url(#glow-${cat.id})`} />
            ))}

            {/* Center node */}
            <circle cx={CX} cy={CY} r={44} fill="#000" stroke="#22d3ee" strokeWidth={1.2} strokeOpacity={0.35} />
            <circle cx={CX} cy={CY} r={50} fill="none" stroke="#22d3ee" strokeWidth={5} strokeOpacity={0.04} />
            <text x={CX} y={CY + 4} textAnchor="middle" fill="#22d3ee" fontSize={8.5} fontWeight={900} letterSpacing={2}>QUICKFIRE</text>

            {/* Category nodes */}
            {layoutData.map(cat => (
              <g key={cat.id}>
                <circle cx={cat.x} cy={cat.y} r={38} fill="#000" stroke={cat.color} strokeWidth={1.2} />
                <circle cx={cat.x} cy={cat.y} r={45} fill="none" stroke={cat.color} strokeWidth={4} strokeOpacity={0.05} />
                {cat.label.map((line, i) => (
                  <text key={i} x={cat.x} y={cat.y - (cat.label.length - 1) * 6.5 + i * 13}
                    textAnchor="middle" fill={cat.color} fontSize={9.5} fontWeight={800} letterSpacing={0.3}>{line}</text>
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
                    <circle cx={c.x} cy={c.y} r={32} fill="none" stroke={cat.color} strokeWidth={6} strokeOpacity={0.12} />
                  )}
                  <circle cx={c.x} cy={c.y} r={25}
                    fill={isSel ? cat.color : "#000"}
                    stroke={cat.color}
                    strokeWidth={isSel ? 0 : isHov ? 1.6 : 1}
                  />
                  {c.label.map((line, i) => (
                    <text key={i} x={c.x} y={c.y! - (c.label.length - 1) * 5 + i * 10}
                      textAnchor="middle"
                      fill={isSel ? "#000" : cat.color}
                      fontSize={7.5} fontWeight={800}>{line}</text>
                  ))}
                </g>
              );
            }))}
          </svg>
        </div>

        {/* Side Panel */}
        <div style={{
          width: 290, background: "#050505", borderLeft: "1px solid #111",
          display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto",
        }}>
          {concept ? (
            <div style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <h2 style={{ color: concept.catColor, margin: 0, fontSize: 15, fontWeight: 900, lineHeight: 1.3, letterSpacing: -0.3 }}>
                  {concept.title}
                </h2>
                <button onClick={() => setSelected(null)}
                  style={{ background: "none", border: "none", color: "#333", cursor: "pointer", fontSize: 20, lineHeight: 1, padding: "0 0 0 8px" }}>×</button>
              </div>

              <PanelSection label="Definition" color="#444">
                <p style={pStyle}>{concept.definition}</p>
              </PanelSection>

              <div style={{ background: "#0a0a0a", padding: "10px 12px", borderLeft: `2px solid ${concept.catColor}`, marginBottom: 13 }}>
                <PanelLabel color="#333">Example</PanelLabel>
                <p style={{ ...pStyle, fontStyle: "italic", color: "#888" }}>"{concept.example}"</p>
              </div>

              <PanelSection label="Academic Use" color="#444">
                <p style={pStyle}>{concept.use}</p>
              </PanelSection>

              <div style={{ background: `${concept.catColor}10`, padding: "10px 12px", marginBottom: 20 }}>
                <PanelLabel color={concept.catColor}>Tip</PanelLabel>
                <p style={{ ...pStyle, color: "#bbb" }}>{concept.tip}</p>
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
            </div>
          ) : (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 14, color: "#222" }}>◎</div>
              <p style={{ fontSize: 12, lineHeight: 1.7, margin: 0, color: "#2a2a2a" }}>
                Click any concept node to explore it, then hit Practice to begin a session.
              </p>
              <p style={{ fontSize: 9, lineHeight: 1.6, marginTop: 14, color: "#1a1a1a", letterSpacing: 1.5, textTransform: "uppercase" as const }}>
                8 categories · 24 concepts
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const pStyle: React.CSSProperties = { color: "#777", fontSize: 12, lineHeight: 1.65, margin: 0 };

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
