import type { Question } from "./grammar-map";

export const questionBanks: Record<string, Question[]> = {

  modals: [
    // ── Epistemic vs Deontic ───────────────────────────────────
    {
      prompt: "Which sentence uses 'must' epistemically (deduction from evidence)?",
      options: [
        "Researchers must obtain ethical approval before data collection.",
        "The anomalous result must reflect an error in the measurement process.",
      ],
      correct: 1,
      explanation: "'Must' in option B is epistemic — the writer deduces a conclusion from evidence. In option A it is deontic (obligation/requirement).",
    },
    {
      prompt: "Which sentence uses 'may' to express permission (deontic)?",
      options: [
        "The discrepancy may reflect differences in measurement techniques.",
        "Participants may withdraw from the study at any time without penalty.",
      ],
      correct: 1,
      explanation: "Option B uses deontic 'may' (= is permitted to). Option A uses epistemic 'may' (= it is possible that).",
    },
    {
      prompt: "Which sentence uses 'should' to express a logical expectation (epistemic)?",
      options: [
        "Given the sample size, the results should be statistically reliable.",
        "Authors should cite all primary sources in the reference list.",
      ],
      correct: 0,
      explanation: "Option A is epistemic: 'should' expresses what we logically expect given the circumstances. Option B is deontic (obligation).",
    },
    {
      prompt: "Which modal use is deontic (expressing obligation or necessity)?",
      options: [
        "The pattern must be related to seasonal temperature variation.",
        "All participants must provide written informed consent.",
      ],
      correct: 1,
      explanation: "Option B is deontic — 'must' expresses an ethical/procedural obligation. Option A is epistemic — the writer infers a relationship from evidence.",
    },
    {
      prompt: "Which sentence uses 'can' to express ability rather than possibility?",
      options: [
        "The algorithm can process one million data points per second.",
        "Prolonged exposure can lead to long-term cognitive impairment.",
      ],
      correct: 0,
      explanation: "Option A uses 'can' for demonstrated capacity (ability). Option B uses 'can' for a general possibility — it describes what is liable to happen.",
    },

    // ── Degrees of Certainty ───────────────────────────────────
    {
      prompt: "Which sentence expresses the highest degree of certainty?",
      options: [
        "The increase might be attributable to seasonal variation.",
        "The increase must be attributable to seasonal variation.",
      ],
      correct: 1,
      explanation: "'Must' signals the highest epistemic certainty — the writer treats the conclusion as the only logical explanation. 'Might' signals a weak possibility.",
    },
    {
      prompt: "Which modal expresses the weakest/most tentative possibility?",
      options: [
        "This could offer a partial explanation for the observed pattern.",
        "This will offer a partial explanation for the observed pattern.",
      ],
      correct: 0,
      explanation: "'Could' signals low, tentative possibility. 'Will' signals strong, near-certain expectation — it is too confident for an unexplained observation.",
    },
    {
      prompt: "Which sentence is appropriately hedged for an academic claim about cause?",
      options: [
        "Air pollution may contribute to respiratory disease in urban children.",
        "Air pollution will cause respiratory disease in urban children.",
      ],
      correct: 0,
      explanation: "'May contribute' is appropriately hedged — causation is rarely certain. 'Will cause' is overconfident and avoids the necessary qualification.",
    },
    {
      prompt: "Which modal phrase signals cautious academic interpretation?",
      options: [
        "The data would suggest that the intervention was effective.",
        "The data demonstrates that the intervention was effective.",
      ],
      correct: 0,
      explanation: "'Would suggest' creates distance between the writer and the claim — a hallmark of academic hedging. 'Demonstrates' asserts certainty without qualification.",
    },
    {
      prompt: "Which uses 'should' correctly to express a predicted/expected outcome?",
      options: [
        "If the model is correct, the variable should increase with temperature.",
        "If the model is correct, the variable might increase with temperature.",
      ],
      correct: 0,
      explanation: "'Should' here expresses a logical expectation derived from the model. 'Might' is too weak — it suggests mere possibility rather than a predicted outcome.",
    },

    // ── Modal + Passive ────────────────────────────────────────
    {
      prompt: "Which is the correct modal passive construction?",
      options: [
        "The limitations should acknowledge by the authors.",
        "The limitations should be acknowledged by the authors.",
      ],
      correct: 1,
      explanation: "Modal passive requires: modal + 'be' + past participle. 'Should acknowledge' is active; 'should be acknowledged' is the correct passive form.",
    },
    {
      prompt: "Which sentence correctly uses a modal passive?",
      options: [
        "The findings might be interpreted differently by other researchers.",
        "The findings might interpreted differently by other researchers.",
      ],
      correct: 0,
      explanation: "The pattern is modal + be + past participle. Option B omits 'be', making it ungrammatical.",
    },
    {
      prompt: "Which correctly completes the sentence: 'The results cannot ___ by chance alone'?",
      options: [
        "be explained",
        "explained",
      ],
      correct: 0,
      explanation: "'Cannot' is a modal; it requires 'be' + past participle to form the passive. 'Cannot be explained' is correct.",
    },
    {
      prompt: "Which sentence uses a modal passive in the past tense correctly?",
      options: [
        "The error must have been detected before publication.",
        "The error must be detected before publication.",
      ],
      correct: 0,
      explanation: "Past epistemic modal passive = modal + have been + past participle. Option A refers to a past deduction; option B refers to present/future necessity.",
    },
    {
      prompt: "Which sentence is the correct modal passive recommendation?",
      options: [
        "Future replications should be conducted with larger samples.",
        "Future replications should conducting with larger samples.",
      ],
      correct: 0,
      explanation: "Correct form: should + be + past participle. 'Should conducting' is ungrammatical — it omits 'be' and uses the wrong verb form.",
    },

    // ── Specific Modals in Academic Context ────────────────────
    {
      prompt: "Which modal is most appropriate for a formal academic recommendation?",
      options: [
        "Future research can examine long-term effects of the intervention.",
        "Future research should examine long-term effects of the intervention.",
      ],
      correct: 1,
      explanation: "'Should' makes a stronger recommendation and is preferred in academic writing when the author believes the research direction is important. 'Can' merely signals possibility.",
    },
    {
      prompt: "Which sentence uses 'would' appropriately for academic hedging?",
      options: [
        "I argue that this interpretation is fundamentally flawed.",
        "I would argue that this interpretation is fundamentally flawed.",
      ],
      correct: 1,
      explanation: "'I would argue' creates distance between the author and the claim — a common hedging strategy in academic writing that softens what might otherwise sound aggressive.",
    },
    {
      prompt: "Which uses 'shall' in its formal/legal-obligation sense?",
      options: [
        "The committee shall review all submissions within 30 days.",
        "The committee will review all submissions within 30 days.",
      ],
      correct: 0,
      explanation: "'Shall' in formal or legal academic contexts expresses a binding obligation. 'Will' simply expresses future intention without the formal obligatory force.",
    },
    {
      prompt: "Which is the most academically appropriate modal for a tentative suggestion?",
      options: [
        "Policymakers might consider the unintended consequences of this measure.",
        "Policymakers must consider the unintended consequences of this measure.",
      ],
      correct: 0,
      explanation: "'Might consider' offers a polite, tentative suggestion. 'Must consider' sounds prescriptive and overconfident — unsuitable when the point is speculative.",
    },
    {
      prompt: "Which correctly uses 'would' for a past repeated action in academic prose?",
      options: [
        "Before digital databases, scholars would spend months in physical archives.",
        "Before digital databases, scholars will spend months in physical archives.",
      ],
      correct: 0,
      explanation: "'Would' + infinitive expresses a habitual past action — a formal alternative to 'used to'. 'Will' refers to future time and is incorrect here.",
    },

    // ── Negative Modals ────────────────────────────────────────
    {
      prompt: "Which modal correctly expresses logical impossibility?",
      options: [
        "The result cannot be attributed to placebo effects, as no placebo was used.",
        "The result may not be attributed to placebo effects, as no placebo was used.",
      ],
      correct: 0,
      explanation: "'Cannot' expresses logical impossibility — if no placebo existed, the effect is ruled out entirely. 'May not' only signals that it is possible the effect does not apply.",
    },
    {
      prompt: "Which correctly expresses that something is unnecessary?",
      options: [
        "Participants need not answer every question if they feel uncomfortable.",
        "Participants need not to answer every question if they feel uncomfortable.",
      ],
      correct: 0,
      explanation: "Modal 'need not' takes a bare infinitive (no 'to'). 'Need not to answer' is ungrammatical.",
    },
    {
      prompt: "Which modal completes this sentence correctly? 'Further research ___ be needed to confirm these findings.'",
      options: [
        "may",
        "must",
      ],
      correct: 0,
      explanation: "'May be needed' hedges the claim appropriately — the authors acknowledge uncertainty about whether further research is required. 'Must be needed' is overconfident.",
    },
    {
      prompt: "Which correctly distinguishes permission from prohibition?",
      options: [
        "Participants may not share confidential data with third parties.",
        "Participants might not share confidential data with third parties.",
      ],
      correct: 0,
      explanation: "'May not' in formal contexts expresses prohibition (= is not permitted to). 'Might not' is an epistemic modal expressing the possibility that something will not happen.",
    },
    {
      prompt: "Which is the correct form of a modal negation?",
      options: [
        "The findings could not have been produced by chance.",
        "The findings could have not been produced by chance.",
      ],
      correct: 0,
      explanation: "The negation particle 'not' must follow the first auxiliary: 'could not have been'. Placing 'not' between 'have' and 'been' is ungrammatical.",
    },

    // ── Past Modals ────────────────────────────────────────────
    {
      prompt: "Which uses a past epistemic modal to make a deduction about a past event?",
      options: [
        "The equipment must have malfunctioned during the experiment.",
        "The equipment must malfunction during the experiment.",
      ],
      correct: 0,
      explanation: "Past epistemic deduction uses: modal + have + past participle. Option B uses the bare infinitive, which refers to present/future or general events.",
    },
    {
      prompt: "Which expresses an unfulfilled past possibility?",
      options: [
        "The sample could have been larger, which would have increased reliability.",
        "The sample could be larger, which would have increased reliability.",
      ],
      correct: 0,
      explanation: "'Could have been' signals an unrealised past possibility (it was possible but didn't happen). 'Could be' refers to present or hypothetical situations.",
    },
    {
      prompt: "Which correctly criticises a past methodological decision?",
      options: [
        "The authors should include a control group.",
        "The authors should have included a control group.",
      ],
      correct: 1,
      explanation: "'Should have included' expresses retrospective criticism — an obligation that was not fulfilled in the past. 'Should include' refers to a present or future obligation.",
    },
    {
      prompt: "Which expresses a low-certainty deduction about a past event?",
      options: [
        "The outlier might have resulted from a transcription error.",
        "The outlier must have resulted from a transcription error.",
      ],
      correct: 0,
      explanation: "'Might have resulted' signals weak past deduction — the writer considers it a possibility but is not confident. 'Must have' signals high certainty.",
    },
    {
      prompt: "Which sentence correctly uses a past modal passive?",
      options: [
        "The data should have been collected using a standardised instrument.",
        "The data should be collected using a standardised instrument.",
      ],
      correct: 0,
      explanation: "Past modal passive: should + have been + past participle. This refers to what ought to have happened in the past. Option B refers to present/future expectation.",
    },

    // ── Recommendations & Suggestions ─────────────────────────
    {
      prompt: "Which sentence uses 'could' correctly as a suggestion in academic writing?",
      options: [
        "Future studies could explore the role of individual differences.",
        "Future studies will explore the role of individual differences.",
      ],
      correct: 0,
      explanation: "'Could explore' presents a suggestion without claiming certainty about future research directions. 'Will explore' sounds like a definite plan rather than a recommendation.",
    },
    {
      prompt: "Which is the most appropriate academic modal for a strong recommendation?",
      options: [
        "Policymakers should take into account the distributional effects of the tax.",
        "Policymakers might take into account the distributional effects of the tax.",
      ],
      correct: 0,
      explanation: "'Should' is the standard modal for making clear academic recommendations. 'Might' is too tentative when the author believes the action is important.",
    },
    {
      prompt: "Which appropriately hedges a claim about what an intervention might achieve?",
      options: [
        "The intervention may reduce recidivism rates among young offenders.",
        "The intervention reduces recidivism rates among young offenders.",
      ],
      correct: 0,
      explanation: "'May reduce' hedges the claim, indicating possibility without certainty. Omitting the modal asserts the outcome as established fact — inappropriate without strong evidence.",
    },
    {
      prompt: "Which modal is best for expressing a necessary condition in academic argument?",
      options: [
        "For the model to be valid, the data must be normally distributed.",
        "For the model to be valid, the data may be normally distributed.",
      ],
      correct: 0,
      explanation: "'Must be normally distributed' expresses a necessary logical requirement. 'May be' signals mere possibility — it does not convey that normal distribution is required.",
    },
    {
      prompt: "Which correctly uses 'need' as a modal verb (not a regular verb)?",
      options: [
        "The sample need not be representative if the study is explicitly exploratory.",
        "The sample need to be representative if the study is explicitly exploratory.",
      ],
      correct: 0,
      explanation: "Modal 'need not' (= it is not necessary) takes a bare infinitive and has no third-person -s. Option B should use the regular verb form: 'needs to be'.",
    },

    // ── Hypothetical & Conditional ─────────────────────────────
    {
      prompt: "Which modal correctly completes a second conditional?",
      options: [
        "If funding were available, the study would include a larger sample.",
        "If funding were available, the study will include a larger sample.",
      ],
      correct: 0,
      explanation: "Second conditional (hypothetical present/future): if + past subjunctive, + would + bare infinitive. 'Will' is used in real/first conditionals, not hypotheticals.",
    },
    {
      prompt: "Which uses 'would' correctly for a hypothetical academic argument?",
      options: [
        "A longer follow-up period would allow for detection of delayed effects.",
        "A longer follow-up period will allow for detection of delayed effects.",
      ],
      correct: 0,
      explanation: "'Would allow' frames the statement as hypothetical — the longer period does not exist in the study. 'Will allow' implies it is actually going to happen.",
    },
    {
      prompt: "Which sentence is grammatically incorrect?",
      options: [
        "This finding might have important implications for clinical practice.",
        "This finding might has important implications for clinical practice.",
      ],
      correct: 1,
      explanation: "'Might has' is ungrammatical. After a modal, the verb must be in the bare infinitive form: 'might have'.",
    },
    {
      prompt: "Which modal correctly expresses a tentative academic proposal?",
      options: [
        "One possible explanation could be that the effect is mediated by stress.",
        "One possible explanation must be that the effect is mediated by stress.",
      ],
      correct: 0,
      explanation: "'Could be' presents a tentative hypothesis. 'Must be' would assert it as the only logical explanation — far too strong for an unproven hypothesis.",
    },
    {
      prompt: "Which correctly uses 'would' for distanced/cautious academic writing?",
      options: [
        "It would perhaps be more accurate to describe this as a correlation.",
        "It will perhaps be more accurate to describe this as a correlation.",
      ],
      correct: 0,
      explanation: "'Would perhaps' creates epistemic distance — the writer softens a correction or reframing. 'Will perhaps' sounds contradictory, combining certainty with hedge.",
    },

    // ── Mixed / Register ───────────────────────────────────────
    {
      prompt: "Which modal phrasing is most appropriate for formal academic writing?",
      options: [
        "The government must address income inequality.",
        "The government's got to address income inequality.",
      ],
      correct: 0,
      explanation: "'Must' is formal and appropriate in academic writing. 'Has got to' is informal spoken English and should be avoided in academic prose.",
    },
    {
      prompt: "Which avoids redundant stacking of hedges?",
      options: [
        "This may well be the most significant finding of the decade.",
        "This might possibly be potentially the most significant finding of the decade.",
      ],
      correct: 0,
      explanation: "'May well' is a natural, concise epistemic hedge. Stacking 'might', 'possibly', and 'potentially' is redundant and weakens rather than strengthens academic precision.",
    },
    {
      prompt: "Which correctly uses a modal in reported speech?",
      options: [
        "Smith (1998) argued that this approach would lead to better outcomes.",
        "Smith (1998) argued that this approach will lead to better outcomes.",
      ],
      correct: 0,
      explanation: "When the reporting verb is in the past tense, 'will' typically backshifts to 'would' in reported speech: argued ... would lead.",
    },
    {
      prompt: "Which sentence uses a modal appropriately in a conditional academic argument?",
      options: [
        "If the hypothesis is correct, we might expect to see a positive correlation.",
        "If the hypothesis is correct, we may expected to see a positive correlation.",
      ],
      correct: 0,
      explanation: "Option A is correct: modal + bare infinitive ('might expect'). Option B has 'may expected' — the past participle cannot follow a modal directly without 'be' or 'have'.",
    },
    {
      prompt: "Which uses 'dare' correctly as a modal verb?",
      options: [
        "Dare we suggest that the theoretical framework is fundamentally flawed?",
        "Dare we to suggest that the theoretical framework is fundamentally flawed?",
      ],
      correct: 0,
      explanation: "Modal 'dare' takes a bare infinitive (no 'to'). 'Dare we suggest' is the correct form — modal 'dare' behaves like other modals in questions and negatives.",
    },
    {
      prompt: "Which most accurately describes the function of 'may' in 'The results may indicate a threshold effect'?",
      options: [
        "It expresses epistemic possibility — the writer is not fully certain of the interpretation.",
        "It expresses deontic permission — the results are allowed to indicate a threshold effect.",
      ],
      correct: 0,
      explanation: "In this academic context 'may' is epistemic — the writer hedges an interpretation. Deontic 'may' would require an agent capable of granting or receiving permission.",
    },
    {
      prompt: "Which is the correct negative form for expressing that something is not predicted by theory?",
      options: [
        "According to the model, this variable should not affect the outcome.",
        "According to the model, this variable must not affect the outcome.",
      ],
      correct: 0,
      explanation: "'Should not affect' expresses that the theory predicts no effect — a logical expectation. 'Must not affect' sounds like a prohibition or moral imperative, which is inappropriate here.",
    },
    {
      prompt: "Which sentence expresses the most appropriate level of certainty for a preliminary finding?",
      options: [
        "These results suggest that the effect may be real, but further replication is needed.",
        "These results prove that the effect is real; further replication would be useful.",
      ],
      correct: 0,
      explanation: "Option A uses layered hedging ('suggest', 'may be') appropriate for preliminary findings. Option B overclaims ('prove', 'is real') — single studies rarely establish proof.",
    },
    {
      prompt: "Which sentence uses 'will' appropriately in academic writing?",
      options: [
        "The following section will outline the theoretical framework underpinning the study.",
        "The intervention will eliminate health disparities across all demographic groups.",
      ],
      correct: 0,
      explanation: "'Will' is appropriate for signposting what the text will do next (a performative use). In option B, 'will eliminate' is overconfident — 'may reduce' or 'is intended to reduce' would be more appropriate.",
    },
    {
      prompt: "Which sentence uses 'can' correctly to describe a general research capability?",
      options: [
        "Qualitative methods can provide rich contextual data that quantitative approaches may miss.",
        "Qualitative methods must provide rich contextual data that quantitative approaches may miss.",
      ],
      correct: 0,
      explanation: "'Can' expresses general capability or possibility — qualitative methods have this potential. 'Must provide' would be an obligation or logical necessity, which is too strong and inaccurate here.",
    },
  ],

};
