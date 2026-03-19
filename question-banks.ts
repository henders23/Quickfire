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

  passive: [
    // ── Identifying the passive ────────────────────────────────
    {
      prompt: "Which sentence is in the passive voice?",
      options: [
        "The committee approved the proposal unanimously.",
        "The proposal was approved unanimously by the committee.",
      ],
      correct: 1,
      explanation: "The passive voice places the recipient of the action ('the proposal') as subject, with 'be + past participle' (was approved). The committee is the agent, introduced with 'by'.",
    },
    {
      prompt: "Which sentence is in the passive voice?",
      options: [
        "Researchers collected data from 200 participants.",
        "Data were collected from 200 participants.",
      ],
      correct: 1,
      explanation: "'Data were collected' is passive — 'data' is the subject receiving the action, and 'were collected' is 'be + past participle'. The active version names the researchers as subject.",
    },
    {
      prompt: "Which sentence contains a passive verb form?",
      options: [
        "The model predicts a positive correlation between the variables.",
        "A positive correlation is predicted by the model.",
      ],
      correct: 1,
      explanation: "'Is predicted' is 'be + past participle' — the hallmark of the passive. In option A, the model is the active subject performing the prediction.",
    },
    {
      prompt: "Which verb phrase is in the passive voice?",
      options: [
        "have demonstrated",
        "have been demonstrated",
      ],
      correct: 1,
      explanation: "'Have been demonstrated' is present perfect passive (have/has + been + past participle). 'Have demonstrated' is present perfect active.",
    },
    {
      prompt: "Which sentence uses the passive voice correctly?",
      options: [
        "The participants were asked completing a questionnaire.",
        "The participants were asked to complete a questionnaire.",
      ],
      correct: 1,
      explanation: "After passive 'were asked', the infinitive 'to complete' is required. 'Were asked completing' is ungrammatical — it incorrectly uses the gerund.",
    },

    // ── Passive in academic register ───────────────────────────
    {
      prompt: "Which is more appropriate in an academic methods section?",
      options: [
        "We collected blood samples from 40 participants.",
        "Blood samples were collected from 40 participants.",
      ],
      correct: 1,
      explanation: "The passive is preferred in methods sections to foreground the procedure rather than the researchers, maintaining the objective, impersonal tone expected in academic writing.",
    },
    {
      prompt: "Which sentence best foregrounds the result rather than the researcher?",
      options: [
        "Smith (2019) identified three key themes in the data.",
        "Three key themes were identified in the data (Smith, 2019).",
      ],
      correct: 1,
      explanation: "The passive version foregrounds 'three key themes' — the finding itself — as the topic of the sentence. The parenthetical citation still attributes the work without making the author the grammatical subject.",
    },
    {
      prompt: "Which version is more appropriate in a formal academic paper?",
      options: [
        "People widely believe that climate change is anthropogenic.",
        "It is widely believed that climate change is anthropogenic.",
      ],
      correct: 1,
      explanation: "The impersonal passive 'it is widely believed' avoids the vague 'people' and creates the objective tone expected in academic writing. It also foregrounds the claim rather than who holds it.",
    },
    {
      prompt: "In which section of an academic paper is the passive voice most commonly used?",
      options: [
        "The discussion section, to assert new findings",
        "The methods section, to describe procedures objectively",
      ],
      correct: 1,
      explanation: "The methods section conventionally uses the passive to describe what was done (e.g. 'samples were stored', 'participants were recruited'), keeping the focus on procedure rather than researcher.",
    },
    {
      prompt: "Which sentence maintains an appropriately academic passive register?",
      options: [
        "Nobody knows why the effect disappeared in the second trial.",
        "The reason for the disappearance of the effect in the second trial remains unknown.",
      ],
      correct: 1,
      explanation: "Option B uses a nominalisation ('disappearance') and an impersonal construction ('remains unknown') that avoids the informal 'nobody knows'. This is the expected register in academic writing.",
    },

    // ── Agent omission ─────────────────────────────────────────
    {
      prompt: "Which passive correctly omits the agent because it is obvious or unimportant?",
      options: [
        "The data were analysed using SPSS by someone.",
        "The data were analysed using SPSS.",
      ],
      correct: 1,
      explanation: "When the agent is irrelevant or obvious (here, clearly the researchers), it is omitted. Adding 'by someone' is both redundant and unnatural in academic writing.",
    },
    {
      prompt: "In which sentence is it most appropriate to omit the 'by' agent phrase?",
      options: [
        "The antibiotic was discovered by Fleming in 1928.",
        "The survey was completed by participants.",
      ],
      correct: 1,
      explanation: "In option B, stating 'by participants' is redundant — who else would complete a participant survey? When the agent is self-evident from context, omitting it produces cleaner prose. In option A, Fleming is a noteworthy attribution worth retaining.",
    },
    {
      prompt: "Which sentence uses the passive to foreground unknown agency?",
      options: [
        "Someone damaged the equipment during transport.",
        "The equipment was damaged during transport.",
      ],
      correct: 1,
      explanation: "When the agent is unknown, the passive allows the action and its result to be foregrounded without awkward constructions like 'someone damaged'. This is a core function of the passive.",
    },
    {
      prompt: "Which passive is best because the agent adds no new information?",
      options: [
        "Ethical approval was granted by the ethics committee.",
        "Ethical approval was granted.",
      ],
      correct: 1,
      explanation: "Ethics approval is always granted by an ethics committee — stating this is redundant. Omitting the obvious agent produces more concise academic prose.",
    },
    {
      prompt: "When should the 'by + agent' phrase be retained in a passive sentence?",
      options: [
        "When the agent is obvious or unimportant",
        "When the agent is noteworthy, surprising, or important to the argument",
      ],
      correct: 1,
      explanation: "The agent phrase is worth keeping when it adds informational value — for example, naming a specific researcher, institution, or an unexpected actor that is relevant to the argument.",
    },

    // ── Passive constructions & forms ──────────────────────────
    {
      prompt: "Which correctly uses the present perfect passive?",
      options: [
        "The methodology has been refined over the past decade.",
        "The methodology is refined over the past decade.",
      ],
      correct: 0,
      explanation: "Present perfect passive = have/has + been + past participle. 'Has been refined' correctly links past refinement to the present. 'Is refined' is present simple passive, which does not convey this ongoing relevance.",
    },
    {
      prompt: "Which is the correct past continuous passive?",
      options: [
        "The samples were being processed when the power failed.",
        "The samples were processed when the power failed.",
      ],
      correct: 0,
      explanation: "Past continuous passive = was/were + being + past participle. This conveys an action in progress at a past moment. Option B (past simple passive) implies the processing was completed, not interrupted.",
    },
    {
      prompt: "Which sentence uses the future passive correctly?",
      options: [
        "The results will be published in the next issue.",
        "The results will been published in the next issue.",
      ],
      correct: 0,
      explanation: "Future passive = will + be + past participle. 'Will been published' is ungrammatical — 'been' cannot follow 'will' directly.",
    },
    {
      prompt: "Which is the correct passive form with a modal verb?",
      options: [
        "The findings should be interpreted with caution.",
        "The findings should interpreted with caution.",
      ],
      correct: 0,
      explanation: "Modal passive = modal + be + past participle. 'Should be interpreted' is correct. 'Should interpreted' omits the required auxiliary 'be'.",
    },
    {
      prompt: "Which sentence uses the present passive correctly?",
      options: [
        "The results are presented in Table 2.",
        "The results are presenting in Table 2.",
      ],
      correct: 0,
      explanation: "Present simple passive = am/is/are + past participle. 'Are presented' is correct. 'Are presenting' uses the present participle — this is the present continuous active form and is ungrammatical here.",
    },

    // ── Passive vs active choice ───────────────────────────────
    {
      prompt: "Which version is clearer because active voice makes the agent explicit?",
      options: [
        "It was argued by some scholars that the theory was flawed.",
        "Some scholars argued that the theory was flawed.",
      ],
      correct: 1,
      explanation: "When the agent ('some scholars') is important to the argument and identifiable, active voice is clearer and more direct. Overusing the passive can obscure who is responsible for claims.",
    },
    {
      prompt: "Which choice best follows the academic writing convention for presenting new findings?",
      options: [
        "We found that dietary restriction significantly reduced tumour growth.",
        "Dietary restriction was found to significantly reduce tumour growth.",
      ],
      correct: 1,
      explanation: "In reporting findings, the passive foregrounds the finding itself ('dietary restriction') rather than the researchers. This is the dominant convention in results sections of academic papers.",
    },
    {
      prompt: "Which use of the passive is grammatically and stylistically correct?",
      options: [
        "A significant effect was observed for the experimental group.",
        "A significant effect was observing for the experimental group.",
      ],
      correct: 0,
      explanation: "Passive requires the past participle: 'was observed'. 'Was observing' uses the present participle — this forms the past continuous active, not the passive.",
    },
    {
      prompt: "Which passive correctly uses subject–verb agreement?",
      options: [
        "The data was collected over six months.",
        "The data were collected over six months.",
      ],
      correct: 1,
      explanation: "In formal academic English, 'data' is treated as a plural noun (plural of 'datum'), so it takes the plural verb 'were'. 'Data was' is common informally but 'data were' is the standard academic form.",
    },
    {
      prompt: "Which sentence avoids the weak 'get' passive and uses the formal passive instead?",
      options: [
        "The report got completed on time.",
        "The report was completed on time.",
      ],
      correct: 1,
      explanation: "'Get + past participle' forms an informal passive. In academic writing, 'be + past participle' ('was completed') is the appropriate formal passive construction.",
    },

    // ── Passive with specific verbs & patterns ─────────────────
    {
      prompt: "Which passive correctly uses a verb that takes a complement?",
      options: [
        "The approach is considered to be the most reliable.",
        "The approach is considered to being the most reliable.",
      ],
      correct: 0,
      explanation: "After 'is considered', the infinitive 'to be' is required. 'To being' is ungrammatical — the gerund cannot follow 'to' when functioning as an infinitive marker.",
    },
    {
      prompt: "Which sentence uses the passive correctly with 'report'?",
      options: [
        "Side effects were reported by 12% of participants.",
        "Side effects reported by 12% of participants.",
      ],
      correct: 0,
      explanation: "The passive requires the auxiliary 'be': 'were reported'. Option B is a noun phrase or relative clause fragment — it lacks a main finite verb.",
    },
    {
      prompt: "Which correctly uses the passive in a relative clause?",
      options: [
        "The variable that was controlled for in the analysis is temperature.",
        "The variable that controlled for in the analysis is temperature.",
      ],
      correct: 0,
      explanation: "In the relative clause, 'was controlled for' is the correct passive form. 'Controlled for' without the auxiliary 'was' is ungrammatical as a finite verb in a relative clause.",
    },
    {
      prompt: "Which sentence correctly uses passive voice after 'it'?",
      options: [
        "It was concluded that the intervention had no significant effect.",
        "It concluded that the intervention had no significant effect.",
      ],
      correct: 0,
      explanation: "Impersonal passive constructions use 'It + be + past participle + that-clause' (e.g. 'it was concluded'). 'It concluded' would mean 'it' performed the conclusion — ungrammatical in this context.",
    },
    {
      prompt: "Which sentence uses 'be supposed to' as a passive-like expectation?",
      options: [
        "The control group is supposed to receive no treatment.",
        "The control group supposes to receive no treatment.",
      ],
      correct: 0,
      explanation: "'Is supposed to' expresses an expected or required condition — a semi-passive that takes 'be + supposed + infinitive'. 'Supposes to' is not a grammatical construction in English.",
    },

    // ── Passive: tense and context ──────────────────────────────
    {
      prompt: "Which passive is most appropriate for describing a past completed procedure?",
      options: [
        "Participants are randomly assigned to two conditions.",
        "Participants were randomly assigned to two conditions.",
      ],
      correct: 1,
      explanation: "The methods section describes what was done in a completed study, so the past simple passive ('were assigned') is correct. Present passive is used for describing ongoing or general procedures.",
    },
    {
      prompt: "Which passive is appropriate for describing a general scientific fact?",
      options: [
        "ATP is produced during cellular respiration.",
        "ATP was produced during cellular respiration.",
      ],
      correct: 0,
      explanation: "General scientific truths and processes are described in the present simple passive ('is produced'). Past passive ('was produced') would imply ATP was only produced at a specific time in the past.",
    },
    {
      prompt: "Which passive correctly describes an action that was in progress at a specific past moment?",
      options: [
        "The samples were being analysed when the fire alarm sounded.",
        "The samples were analysed when the fire alarm sounded.",
      ],
      correct: 0,
      explanation: "Past continuous passive ('were being analysed') expresses an action in progress at a past moment. Past simple passive ('were analysed') implies a completed action, not one interrupted.",
    },
    {
      prompt: "Which passive is appropriate for a conclusion that is still considered valid?",
      options: [
        "It has been established that the two variables are strongly correlated.",
        "It was established that the two variables are strongly correlated.",
      ],
      correct: 0,
      explanation: "Present perfect passive ('has been established') signals that the conclusion was reached in the past and remains relevant now. Past simple passive would suggest it is no longer necessarily valid or accepted.",
    },
    {
      prompt: "Which passive correctly uses the past perfect to show that one action preceded another?",
      options: [
        "The data had been cleaned before the analysis began.",
        "The data was cleaned before the analysis began.",
      ],
      correct: 0,
      explanation: "Past perfect passive ('had been cleaned') explicitly signals that cleaning was completed before the analysis started — useful when the sequence of events matters. Past simple passive does not signal this ordering.",
    },

    // ── Passive: error identification ──────────────────────────
    {
      prompt: "Which passive sentence contains a grammatical error?",
      options: [
        "The hypothesis was supported by the data.",
        "The hypothesis was supporting by the data.",
      ],
      correct: 1,
      explanation: "'Was supporting' uses the present participle, not the past participle. The correct passive requires the past participle: 'was supported'.",
    },
    {
      prompt: "Which passive sentence contains an error?",
      options: [
        "The variables were controlled for in the regression model.",
        "The variables were control for in the regression model.",
      ],
      correct: 1,
      explanation: "'Were control' is ungrammatical. The passive requires the past participle: 'were controlled'. The phrasal verb 'control for' must be fully inflected: 'controlled for'.",
    },
    {
      prompt: "Which sentence contains an error in the passive construction?",
      options: [
        "A number of confounding factors have been identified.",
        "A number of confounding factors has been identified.",
      ],
      correct: 1,
      explanation: "'A number of' takes a plural verb in standard usage ('have been identified'). 'Has been identified' treats 'a number' as singular, which is incorrect when 'number' is used in this partitive sense.",
    },
    {
      prompt: "Which sentence is grammatically correct?",
      options: [
        "The study was designed to test whether the intervention could be replicated.",
        "The study was design to test whether the intervention could be replicated.",
      ],
      correct: 0,
      explanation: "'Was designed' is the correct past simple passive (be + past participle). 'Was design' omits the -ed suffix — 'design' is the base form, not a past participle.",
    },
    {
      prompt: "Which sentence uses passive voice correctly throughout?",
      options: [
        "The results were recorded and then they were analysed by the team.",
        "The results were recorded and then analysed.",
      ],
      correct: 1,
      explanation: "When two passive verbs share the same subject and auxiliary, the second 'were' can be omitted: 'recorded and then analysed'. Option A is grammatically correct but unnecessarily wordy.",
    },

    // ── Passive: function and effect ───────────────────────────
    {
      prompt: "What is the primary rhetorical function of the passive voice in academic writing?",
      options: [
        "To make sentences shorter and simpler",
        "To foreground information and maintain an impersonal, objective tone",
      ],
      correct: 1,
      explanation: "The passive foregrounds the object/result of an action (what was done) rather than the agent (who did it), enabling the objective, impersonal register expected in academic prose.",
    },
    {
      prompt: "Which sentence uses the passive to shift emphasis to the result?",
      options: [
        "Johnson and Lee developed the framework in 2012.",
        "The framework was developed in 2012 (Johnson & Lee).",
      ],
      correct: 1,
      explanation: "Passive voice makes 'the framework' the topic of the sentence — foregrounding the contribution rather than who made it. The parenthetical reference still credits the authors.",
    },
    {
      prompt: "Which use of the passive most effectively creates cohesion across two sentences?",
      options: [
        "The study collected data from three sites. Researchers chose the sites to reflect regional variation.",
        "The study collected data from three sites. The sites were chosen to reflect regional variation.",
      ],
      correct: 1,
      explanation: "Option B uses the passive ('were chosen') to make 'the sites' the subject of the second sentence, creating a smooth link back to the topic of the first sentence. This is called 'given-new' structure.",
    },
    {
      prompt: "Which passive construction is most appropriate for describing an established consensus?",
      options: [
        "Scholars broadly accept that language shapes cognition.",
        "It is broadly accepted that language shapes cognition.",
      ],
      correct: 1,
      explanation: "The impersonal passive 'it is broadly accepted that' presents a view as consensus rather than the view of specific agents. This is a standard academic hedging/consensus formula.",
    },
    {
      prompt: "Which sentence correctly uses passive voice to maintain topic continuity?",
      options: [
        "The algorithm processes the inputs first. Then the algorithm outputs a probability score.",
        "The algorithm processes the inputs first. A probability score is then output.",
      ],
      correct: 1,
      explanation: "Option B uses the passive to keep 'a probability score' as the new focus and avoid repeating 'the algorithm'. This topic management is a key reason to choose passive voice in connected prose.",
    },
    {
      prompt: "Which sentence most appropriately uses passive voice to avoid overclaiming?",
      options: [
        "Our findings prove that early intervention eliminates developmental delays.",
        "Early intervention was found to be associated with reduced developmental delays.",
      ],
      correct: 1,
      explanation: "The passive 'was found to be associated with' is more cautious than 'proves...eliminates'. Academic writing requires hedging — especially for causal claims — and the passive form helps achieve this.",
    },
    {
      prompt: "Which sentence uses the passive to emphasise the process rather than the researcher?",
      options: [
        "We interviewed participants using a semi-structured protocol.",
        "Participants were interviewed using a semi-structured protocol.",
      ],
      correct: 1,
      explanation: "The passive ('were interviewed') foregrounds the participants and the procedure. In academic writing, particularly in methods sections, this objectification of the process is the preferred convention.",
    },
    {
      prompt: "Which sentence is an example of a double passive construction?",
      options: [
        "The report was expected to be completed by Friday.",
        "The report was completed and submitted by Friday.",
      ],
      correct: 0,
      explanation: "'Was expected to be completed' contains two passive constructions: 'was expected' (main clause passive) and 'to be completed' (infinitive passive). Option B has one passive followed by an active coordination.",
    },
    {
      prompt: "Which sentence correctly uses passive voice after a causative verb?",
      options: [
        "The authors had the data verified by an independent statistician.",
        "The authors had the data to be verified by an independent statistician.",
      ],
      correct: 0,
      explanation: "With the causative 'have', the pattern is: have + object + past participle ('had the data verified'). 'To be verified' after 'had' + object is ungrammatical in this causative structure.",
    },
    {
      prompt: "Which sentence uses the passive voice in a relative clause correctly?",
      options: [
        "The framework that was proposed by Vygotsky remains influential today.",
        "The framework that proposed by Vygotsky remains influential today.",
      ],
      correct: 0,
      explanation: "In the relative clause, 'was proposed' is the correct passive form (be + past participle). Omitting 'was' leaves 'proposed' without an auxiliary, making the relative clause ungrammatical.",
    },
  ],

};
