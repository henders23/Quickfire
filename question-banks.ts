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

  reporting: [
    // ── Verb strength / claim strength ─────────────────────────
    {
      prompt: "Which reporting verb makes the stronger, more confident claim?",
      options: [
        "Smith (2018) suggests that cognitive load affects reading speed.",
        "Smith (2018) demonstrates that cognitive load affects reading speed.",
      ],
      correct: 1,
      explanation: "'Demonstrates' signals that Smith presents strong evidence — it is a factive verb implying truth. 'Suggests' is non-factive and hedged, indicating possibility rather than proof.",
    },
    {
      prompt: "Which reporting verb most strongly endorses the cited claim?",
      options: [
        "Jones (2020) claims that the policy reduced inequality.",
        "Jones (2020) shows that the policy reduced inequality.",
      ],
      correct: 1,
      explanation: "'Shows' is a factive verb — it presupposes the content is true. 'Claims' is non-factive and carries a slight sceptical tone, suggesting the writer is not fully endorsing the view.",
    },
    {
      prompt: "Which reporting verb expresses the most tentative, hedged stance?",
      options: [
        "Lee (2019) speculates that microplastics may enter the food chain.",
        "Lee (2019) confirms that microplastics may enter the food chain.",
      ],
      correct: 0,
      explanation: "'Speculates' signals that Lee is offering an unverified hypothesis. 'Confirms' is a strong factive verb implying the claim has been verified — a much stronger endorsement.",
    },
    {
      prompt: "Which reporting verb is most appropriate when summarising an argument the writer partially disagrees with?",
      options: [
        "Brown (2017) proves that economic growth always reduces poverty.",
        "Brown (2017) contends that economic growth always reduces poverty.",
      ],
      correct: 1,
      explanation: "'Contends' presents Brown's view as a position or argument being put forward, without the writer endorsing it. 'Proves' would mean the writer accepts the claim as definitively established.",
    },
    {
      prompt: "Which reporting verb signals that the cited author is making an unsupported or controversial assertion?",
      options: [
        "Harrison (2021) asserts that all educational achievement gaps are caused by poverty.",
        "Harrison (2021) acknowledges that all educational achievement gaps are caused by poverty.",
      ],
      correct: 0,
      explanation: "'Asserts' signals a strong claim made without necessarily providing full evidence — often used when the writer is sceptical. 'Acknowledges' implies the cited author is conceding a point, which changes the meaning entirely.",
    },

    // ── Grammatical patterns ────────────────────────────────────
    {
      prompt: "Which sentence uses the correct grammatical pattern after 'argue'?",
      options: [
        "Chen (2015) argues that market deregulation increases inequality.",
        "Chen (2015) argues market deregulation increases inequality.",
      ],
      correct: 0,
      explanation: "Most reporting verbs that introduce a proposition take a 'that'-clause: 'argues that + clause'. While 'that' can sometimes be omitted in informal writing, it is retained in formal academic prose for clarity.",
    },
    {
      prompt: "Which sentence correctly uses 'suggest' with a noun phrase object?",
      options: [
        "The findings suggest a link between sleep deprivation and cognitive decline.",
        "The findings suggest that a link between sleep deprivation and cognitive decline.",
      ],
      correct: 0,
      explanation: "'Suggest' can take a noun phrase directly ('suggest a link') or a that-clause ('suggest that there is a link'). Option B incorrectly combines 'that' with a noun phrase, producing a fragment.",
    },
    {
      prompt: "Which sentence uses 'recommend' with the correct grammatical pattern?",
      options: [
        "The authors recommend that future studies should include larger samples.",
        "The authors recommend that future studies include larger samples.",
      ],
      correct: 1,
      explanation: "After 'recommend that', the subjunctive (base form) is used in formal academic English: 'include', not 'should include'. The subjunctive is required after verbs of recommendation in formal registers.",
    },
    {
      prompt: "Which correctly uses 'attribute' as a reporting verb?",
      options: [
        "Walsh (2019) attributes the decline to increased competition from imports.",
        "Walsh (2019) attributes that the decline was caused by increased competition.",
      ],
      correct: 0,
      explanation: "'Attribute' takes the pattern: attribute + noun phrase + 'to' + noun phrase. It does not take a 'that'-clause. Option B incorrectly uses 'that' + clause after 'attributes'.",
    },
    {
      prompt: "Which sentence correctly uses 'describe' as a reporting verb?",
      options: [
        "Patel (2016) describes the phenomenon as a 'cognitive bottleneck'.",
        "Patel (2016) describes that the phenomenon is a 'cognitive bottleneck'.",
      ],
      correct: 0,
      explanation: "'Describe' takes the pattern: describe + NP + as + NP/adjective. It does not introduce a 'that'-clause in this sense. 'Describes that' is ungrammatical here.",
    },

    // ── Tense in reporting ─────────────────────────────────────
    {
      prompt: "Which tense is most appropriate when reporting a currently accepted theoretical position?",
      options: [
        "Chomsky (1965) argued that language acquisition is innate.",
        "Chomsky (1965) argues that language acquisition is innate.",
      ],
      correct: 1,
      explanation: "Present simple is used to report ideas that are still considered current or relevant. Past simple suggests the view is now outdated or merely historical. Citing living or influential theories uses present tense.",
    },
    {
      prompt: "Which is most appropriate when reporting a specific finding from a completed study?",
      options: [
        "In their 2018 study, Kim and Park found that anxiety impairs working memory.",
        "In their 2018 study, Kim and Park find that anxiety impairs working memory.",
      ],
      correct: 0,
      explanation: "A specific completed study is typically reported in the past simple ('found'). The reporting verb reflects the time of the study; present tense is used when reporting a general, ongoing claim rather than a specific past result.",
    },
    {
      prompt: "Which sentence correctly maintains tense consistency?",
      options: [
        "Miller (2020) argues that poverty causes stress, and he demonstrated this with longitudinal data.",
        "Miller (2020) argues that poverty causes stress and demonstrates this with longitudinal data.",
      ],
      correct: 1,
      explanation: "Both reporting verbs should be in the same tense when referring to the same source's current position. Mixing 'argues' (present) and 'demonstrated' (past) is inconsistent without a reason for the tense shift.",
    },
    {
      prompt: "Which sentence uses the past simple reporting verb appropriately?",
      options: [
        "Darwin (1859) argued that species evolve through natural selection.",
        "Darwin (1859) argues that species evolve through natural selection.",
      ],
      correct: 0,
      explanation: "Both options are defensible in academic English. However, when reporting historical figures whose work is no longer actively debated as a live position, the past simple is acceptable. Present simple is also widely used — but past is more natural for 19th-century scholarship.",
    },
    {
      prompt: "When using a reporting verb in the present perfect, which is correct?",
      options: [
        "Recent studies have shown that loneliness is a significant health risk.",
        "Recent studies have showed that loneliness is a significant health risk.",
      ],
      correct: 0,
      explanation: "The past participle of 'show' is 'shown', not 'showed'. 'Showed' is the simple past form. Present perfect passive: have/has + shown.",
    },

    // ── Choosing the right verb ────────────────────────────────
    {
      prompt: "Which reporting verb most accurately introduces a methodological procedure?",
      options: [
        "The authors employed a mixed-methods approach.",
        "The authors speculated a mixed-methods approach.",
      ],
      correct: 0,
      explanation: "'Employed' is appropriate for describing a method or tool used. 'Speculated' means to conjecture without evidence — it cannot take a noun phrase like 'a mixed-methods approach' in this sense.",
    },
    {
      prompt: "Which reporting verb best introduces a statement where the author concedes a weakness?",
      options: [
        "The researchers acknowledge that their sample was not fully representative.",
        "The researchers imply that their sample was not fully representative.",
      ],
      correct: 0,
      explanation: "'Acknowledge' is used when an author explicitly admits or concedes a point. 'Imply' means to suggest indirectly, without stating it — which would change the meaning of what the author did.",
    },
    {
      prompt: "Which reporting verb is most appropriate for introducing a conclusion drawn from data?",
      options: [
        "Garcia (2017) concludes that the data support the hypothesis.",
        "Garcia (2017) imagines that the data support the hypothesis.",
      ],
      correct: 0,
      explanation: "'Concludes' correctly introduces a logical endpoint drawn from evidence. 'Imagines' implies unfounded conjecture — it would be insulting and inaccurate as a neutral reporting verb.",
    },
    {
      prompt: "Which verb correctly reports that an author is responding critically to another's work?",
      options: [
        "Wong (2021) challenges the assumption that market forces ensure efficiency.",
        "Wong (2021) repeats the assumption that market forces ensure efficiency.",
      ],
      correct: 0,
      explanation: "'Challenges' signals critical engagement — the author is questioning or disputing an assumption. 'Repeats' would mean Wong is simply restating the assumption, which misrepresents a critical argument.",
    },
    {
      prompt: "Which reporting verb correctly signals that the author is drawing the reader's attention to something?",
      options: [
        "The authors note that the sample excluded non-native speakers.",
        "The authors invent that the sample excluded non-native speakers.",
      ],
      correct: 0,
      explanation: "'Note' is used to flag a point, limitation, or observation — common in academic writing. 'Invent' means to create something new and cannot function as a reporting verb in this context.",
    },

    // ── Verb + preposition / complementation ───────────────────
    {
      prompt: "Which sentence uses the correct preposition after 'focus'?",
      options: [
        "The study focuses on the relationship between diet and mental health.",
        "The study focuses about the relationship between diet and mental health.",
      ],
      correct: 0,
      explanation: "'Focus on' is the correct collocation — 'focus' takes the preposition 'on'. 'Focus about' is not a standard English prepositional collocation.",
    },
    {
      prompt: "Which sentence uses 'refer' correctly?",
      options: [
        "The author refers to this phenomenon as 'epistemic injustice'.",
        "The author refers this phenomenon as 'epistemic injustice'.",
      ],
      correct: 0,
      explanation: "'Refer to' requires 'to': 'refers to X as Y'. Omitting 'to' is ungrammatical in this pattern.",
    },
    {
      prompt: "Which sentence correctly uses 'account for'?",
      options: [
        "This theory fails to account for cross-cultural variation.",
        "This theory fails to account cross-cultural variation.",
      ],
      correct: 0,
      explanation: "'Account for' is a phrasal verb — the preposition 'for' is obligatory. 'Account' without 'for' does not carry the same meaning of 'explain' or 'explain the presence of'.",
    },
    {
      prompt: "Which sentence correctly uses 'differ' as a reporting verb?",
      options: [
        "The two studies differ in their conclusions about causation.",
        "The two studies differ about their conclusions about causation.",
      ],
      correct: 0,
      explanation: "'Differ in' is the correct collocation when specifying the dimension of difference. 'Differ about' can be used with people disagreeing, but is not standard when comparing what study conclusions say.",
    },
    {
      prompt: "Which correctly uses 'point' as a reporting verb?",
      options: [
        "Liu (2022) points out that the data may be skewed by self-selection bias.",
        "Liu (2022) points that the data may be skewed by self-selection bias.",
      ],
      correct: 0,
      explanation: "'Point out' is a phrasal reporting verb meaning to draw attention to something. 'Point' alone cannot introduce a that-clause in this reporting sense — 'out' is obligatory.",
    },

    // ── Factive vs non-factive ─────────────────────────────────
    {
      prompt: "Which sentence uses a factive verb, presupposing the content is true?",
      options: [
        "The authors reveal that the placebo had a measurable neurological effect.",
        "The authors allege that the placebo had a measurable neurological effect.",
      ],
      correct: 0,
      explanation: "'Reveal' is factive — it presupposes that what is revealed is true. 'Allege' is non-factive and signals that the claim is unverified or disputed.",
    },
    {
      prompt: "Which sentence uses a non-factive verb, leaving the truth of the claim open?",
      options: [
        "The study established that early exposure reduces risk.",
        "The study proposed that early exposure reduces risk.",
      ],
      correct: 1,
      explanation: "'Proposed' is non-factive — it presents the content as a hypothesis put forward, not a confirmed fact. 'Established' is strongly factive, implying the claim has been definitively proven.",
    },
    {
      prompt: "A writer wants to report a claim neutrally without endorsing or doubting it. Which verb is most appropriate?",
      options: [
        "states",
        "proves",
      ],
      correct: 0,
      explanation: "'States' is a neutral reporting verb that presents content without evaluation. 'Proves' is factive and strongly endorses the claim as definitively established — not a neutral stance.",
    },
    {
      prompt: "Which verb signals the writer's agreement with the cited claim?",
      options: [
        "recognises",
        "alleges",
      ],
      correct: 0,
      explanation: "'Recognises' is a factive verb implying the writer accepts the claim as correct. 'Alleges' implies scepticism or that the claim is unverified — the writer does not endorse it.",
    },
    {
      prompt: "Which reporting verb is most appropriate when critically distancing yourself from a source's claim?",
      options: [
        "claims",
        "demonstrates",
      ],
      correct: 0,
      explanation: "'Claims' is non-factive and can signal the writer's scepticism — it presents the content as asserted but not necessarily true. 'Demonstrates' would mean the writer accepts the claim as proven.",
    },

    // ── Integral vs non-integral citation ──────────────────────
    {
      prompt: "Which is an integral citation (author as grammatical subject)?",
      options: [
        "Ahmed (2019) argues that biodiversity loss is irreversible.",
        "Biodiversity loss is argued to be irreversible (Ahmed, 2019).",
      ],
      correct: 0,
      explanation: "In an integral citation, the author's name appears as the grammatical subject of the reporting verb. In a non-integral citation, the author is placed in parentheses and the finding takes the subject position.",
    },
    {
      prompt: "Which is a non-integral citation?",
      options: [
        "Sharma (2020) found that meditation reduces cortisol levels.",
        "Meditation has been found to reduce cortisol levels (Sharma, 2020).",
      ],
      correct: 1,
      explanation: "A non-integral citation places the citation in parentheses and foregrounds the finding as subject. Integral citations foreground the author as grammatical subject — a choice that can emphasise who made the claim.",
    },
    {
      prompt: "Which non-integral passive construction is grammatically correct?",
      options: [
        "The link between stress and illness has been well documented (Cohen & Wills, 1985).",
        "The link between stress and illness has well documented (Cohen & Wills, 1985).",
      ],
      correct: 0,
      explanation: "The present perfect passive requires 'has/have + been + past participle'. Omitting 'been' ('has well documented') is ungrammatical.",
    },
    {
      prompt: "Which sentence correctly uses 'according to' to introduce a non-integral citation?",
      options: [
        "According to Frost (2014), exposure to nature reduces stress hormones.",
        "According Frost (2014), exposure to nature reduces stress hormones.",
      ],
      correct: 0,
      explanation: "'According to' is a fixed prepositional phrase — 'to' is obligatory. 'According Frost' omits the preposition and is ungrammatical.",
    },
    {
      prompt: "When a writer uses an integral citation, what effect does this typically have?",
      options: [
        "It gives greater prominence to the author and their role in making the claim.",
        "It gives greater prominence to the finding and foregrounds the content.",
      ],
      correct: 0,
      explanation: "Integral citations ('Smith argues that...') foreground the author as the agent of the claim — useful when the author's identity or stance is significant. Non-integral citations foreground the finding itself.",
    },

    // ── Reporting in literature reviews ───────────────────────
    {
      prompt: "Which sentence is most appropriate for synthesising two sources that agree?",
      options: [
        "Both García (2016) and Müller (2018) argue that income inequality drives political polarisation.",
        "García (2016) argues that income inequality drives political polarisation. Müller (2018) argues that income inequality drives political polarisation.",
      ],
      correct: 0,
      explanation: "Synthesising sources by combining them in a single sentence with 'both...and' is more efficient and shows the writer is actively comparing the literature rather than simply summarising sources in isolation.",
    },
    {
      prompt: "Which sentence most effectively signals contrast between two sources?",
      options: [
        "While Nguyen (2017) concludes that the intervention is effective, Park (2019) finds little evidence of lasting impact.",
        "Nguyen (2017) concludes that the intervention is effective. Park (2019) finds little evidence of lasting impact.",
      ],
      correct: 0,
      explanation: "Using a concessive connector ('while') within a single sentence explicitly signals the contrast between the two sources. Placing them in separate sentences leaves the relationship implicit.",
    },
    {
      prompt: "Which reporting verb is most appropriate for introducing a research gap?",
      options: [
        "Previous studies have neglected the role of peer influence in adolescent decision-making.",
        "Previous studies have invented the role of peer influence in adolescent decision-making.",
      ],
      correct: 0,
      explanation: "'Neglected' signals that an important topic has been overlooked in the literature — a standard way to justify a new study. 'Invented' implies the previous studies fabricated something, which is a very different (and accusatory) meaning.",
    },
    {
      prompt: "Which verb is most appropriate for introducing the aim of a study?",
      options: [
        "This study seeks to examine the relationship between urbanisation and biodiversity loss.",
        "This study hopes to examine the relationship between urbanisation and biodiversity loss.",
      ],
      correct: 0,
      explanation: "'Seeks to' is the appropriate academic formulation for stating a study's aim or purpose. 'Hopes to' implies personal desire and is too informal — it attributes emotion to an inanimate study.",
    },
    {
      prompt: "Which sentence most appropriately signals that the current study addresses a gap?",
      options: [
        "This paper addresses the lack of longitudinal evidence in this field.",
        "This paper ignores the lack of longitudinal evidence in this field.",
      ],
      correct: 0,
      explanation: "'Addresses' signals that the paper engages with and responds to an identified gap or problem. 'Ignores' would mean the paper fails to engage with it — the opposite of what the writer intends.",
    },

    // ── Error identification ────────────────────────────────────
    {
      prompt: "Which sentence contains an error in the reporting verb pattern?",
      options: [
        "The authors argue that the results are inconclusive.",
        "The authors argue the results are inconclusive.",
      ],
      correct: 1,
      explanation: "In formal academic writing, the 'that'-complementiser should be retained for clarity: 'argue that the results'. While omitting 'that' is acceptable informally, academic style conventions favour its inclusion.",
    },
    {
      prompt: "Which sentence uses a reporting verb incorrectly?",
      options: [
        "The data support the conclusion that the drug is effective.",
        "The data argue that the drug is effective.",
      ],
      correct: 1,
      explanation: "'Argue' requires a human or institutional agent — data cannot argue. 'Support' is the appropriate verb when data backs a conclusion. This is a common error in academic writing.",
    },
    {
      prompt: "Which sentence contains an error?",
      options: [
        "Chen (2020) identifies three limitations in the study.",
        "Chen (2020) identifys three limitations in the study.",
      ],
      correct: 1,
      explanation: "The third-person singular present simple of 'identify' is 'identifies', not 'identifys'. Verbs ending in consonant + -y follow the rule: change -y to -ies.",
    },
    {
      prompt: "Which reporting structure is grammatically incorrect?",
      options: [
        "It is suggested by the authors that further testing is required.",
        "It is suggested by the authors further testing is required.",
      ],
      correct: 1,
      explanation: "The impersonal passive reporting structure requires a 'that'-clause: 'it is suggested that...'. Omitting 'that' in this construction creates a grammatically ambiguous sentence.",
    },
    {
      prompt: "Which sentence uses 'highlight' incorrectly?",
      options: [
        "The review highlights several methodological inconsistencies.",
        "The review highlights that several methodological inconsistencies.",
      ],
      correct: 1,
      explanation: "'Highlight' followed directly by 'that' and a noun phrase (not a full clause) is ungrammatical. Option B would require a full clause: 'highlights that several inconsistencies exist'. Option A correctly uses 'highlight' + NP.",
    },
    {
      prompt: "Which reporting verb best introduces a finding that contradicts the researcher's hypothesis?",
      options: [
        "The results reveal that the intervention had no significant effect.",
        "The results confirm that the intervention had no significant effect.",
      ],
      correct: 0,
      explanation: "'Reveal' is appropriate when results disclose something — including unexpected findings. 'Confirm' implies the finding matched a prediction, which contradicts the idea that it is surprising or contrary to the hypothesis.",
    },
    {
      prompt: "Which verb correctly reports an author making an explicit comparison?",
      options: [
        "Obi (2019) compares the two models in terms of predictive validity.",
        "Obi (2019) contrasts the two models have different predictive validity.",
      ],
      correct: 0,
      explanation: "'Compares' takes a noun phrase object directly ('compares the two models'). Option B incorrectly attempts to use 'contrasts' with a that-clause ('contrasts the two models have...'), which is ungrammatical.",
    },
    {
      prompt: "Which sentence correctly uses 'maintain' as a reporting verb?",
      options: [
        "Despite the new evidence, some scholars maintain that the theory is still valid.",
        "Despite the new evidence, some scholars maintain the theory to still be valid.",
      ],
      correct: 0,
      explanation: "'Maintain' in the reporting sense takes a that-clause: 'maintain that + clause'. The pattern 'maintain + NP + to-infinitive' is not standard when 'maintain' means 'to continue to assert'.",
    },
    {
      prompt: "Which sentence uses 'build on' correctly as a reporting verb phrase?",
      options: [
        "This study builds on the framework proposed by Crenshaw (1989).",
        "This study builds on that the framework proposed by Crenshaw (1989).",
      ],
      correct: 0,
      explanation: "'Build on' takes a noun phrase object ('builds on the framework'). It does not introduce a that-clause. Option B incorrectly inserts 'that' between the phrasal verb and its NP object.",
    },
    {
      prompt: "Which sentence correctly uses 'emphasise' as a reporting verb?",
      options: [
        "The authors emphasise the importance of replication in scientific research.",
        "The authors emphasise of the importance of replication in scientific research.",
      ],
      correct: 0,
      explanation: "'Emphasise' takes a direct NP object with no preposition: 'emphasise the importance'. 'Emphasise of' is ungrammatical — inserting 'of' between the verb and its object creates a prepositional error.",
    },
  ],

  hedging: [
    // ── What is hedging / why hedge ────────────────────────────
    {
      prompt: "Which sentence is appropriately hedged for an academic claim about cause?",
      options: [
        "Stress causes cardiovascular disease.",
        "Stress has been linked to an increased risk of cardiovascular disease.",
      ],
      correct: 1,
      explanation: "Causal claims in academic writing require hedging unless the evidence is overwhelming. 'Has been linked to an increased risk' hedges both the causal direction and the magnitude of the effect.",
    },
    {
      prompt: "Which sentence is over-hedged to the point of becoming meaningless?",
      options: [
        "The results might possibly perhaps suggest a potential trend.",
        "The results suggest a possible trend.",
      ],
      correct: 0,
      explanation: "Stacking 'might', 'possibly', 'perhaps', and 'potential' is redundant and undermines the claim entirely. A single well-chosen hedge ('suggest a possible trend') is more precise and more credible.",
    },
    {
      prompt: "Which sentence is under-hedged for an interpretation in a discussion section?",
      options: [
        "This proves that digital technology is damaging children's attention spans.",
        "This may suggest that digital technology is associated with shorter attention spans in children.",
      ],
      correct: 0,
      explanation: "A single study cannot 'prove' a broad claim. Option A is under-hedged — it overstates certainty. Option B hedges appropriately with 'may suggest' and 'associated with', which is expected in a discussion section.",
    },
    {
      prompt: "Which sentence uses hedging appropriately for a well-established scientific fact?",
      options: [
        "Water may freeze at 0°C under standard atmospheric conditions.",
        "Water freezes at 0°C under standard atmospheric conditions.",
      ],
      correct: 1,
      explanation: "Established, replicable physical facts do not require hedging. Over-hedging known facts ('may freeze') makes the writer sound uncertain about things they should know — it undermines credibility.",
    },
    {
      prompt: "Which sentence uses an appropriate level of hedging for a preliminary finding?",
      options: [
        "The data indicate that the treatment may be effective for this patient population.",
        "The data definitively prove that the treatment is effective for all patients.",
      ],
      correct: 0,
      explanation: "Preliminary findings require cautious hedging. 'Indicate that... may be effective' qualifies both the evidential base ('indicate') and the strength of the claim ('may be'). Option B overclaims scope and certainty.",
    },

    // ── Lexical verb hedges: appear / seem / tend ──────────────
    {
      prompt: "Which sentence correctly uses 'appear' as a hedging verb?",
      options: [
        "The results appear to support the hypothesis.",
        "The results appear supporting the hypothesis.",
      ],
      correct: 0,
      explanation: "'Appear' as a hedging verb takes a to-infinitive: 'appear to + bare infinitive'. 'Appear supporting' uses the gerund, which is ungrammatical in this semi-copular hedging construction.",
    },
    {
      prompt: "Which hedging verb is used correctly?",
      options: [
        "Higher temperatures seem to accelerate the reaction rate.",
        "Higher temperatures seem accelerating the reaction rate.",
      ],
      correct: 0,
      explanation: "'Seem' takes a to-infinitive as a hedging construction: 'seem to + verb'. 'Seem accelerating' is ungrammatical — the present participle cannot follow 'seem' directly in this pattern.",
    },
    {
      prompt: "Which sentence correctly uses 'tend' as a hedging device?",
      options: [
        "Smaller firms tend to be more vulnerable to economic shocks.",
        "Smaller firms tend being more vulnerable to economic shocks.",
      ],
      correct: 0,
      explanation: "'Tend' takes a to-infinitive: 'tend to be'. 'Tend being' is ungrammatical. 'Tend to' softens a generalisation, indicating a pattern rather than a universal rule.",
    },
    {
      prompt: "Which use of 'appear' most effectively hedges an interpretation?",
      options: [
        "The intervention appears to have had a limited effect on long-term outcomes.",
        "The intervention appears having had a limited effect on long-term outcomes.",
      ],
      correct: 0,
      explanation: "The pattern is: appear + to have + past participle (perfect infinitive passive). This hedges a retrospective interpretation. 'Appears having' is ungrammatical.",
    },
    {
      prompt: "Which hedging construction is grammatically correct?",
      options: [
        "The pattern seems to be more pronounced in urban than in rural settings.",
        "The pattern seems to being more pronounced in urban than in rural settings.",
      ],
      correct: 0,
      explanation: "'Seem to be' uses the bare infinitive after 'to'. 'Seem to being' incorrectly uses the gerund where the infinitive is required.",
    },

    // ── Adverb hedges ──────────────────────────────────────────
    {
      prompt: "Which adverb is used appropriately to hedge an academic claim?",
      options: [
        "Inequality is arguably the most pressing challenge facing liberal democracies.",
        "Inequality is definitely the most pressing challenge facing liberal democracies.",
      ],
      correct: 0,
      explanation: "'Arguably' signals that the claim is debatable but defensible — a standard academic hedging adverb. 'Definitely' removes all qualification and is too assertive for a claim about which reasonable people disagree.",
    },
    {
      prompt: "Which adverb hedge is most appropriate for signalling a generalisation with exceptions?",
      options: [
        "Participants generally performed better on the visual task.",
        "Participants universally performed better on the visual task.",
      ],
      correct: 0,
      explanation: "'Generally' acknowledges that the pattern holds in most but not all cases — appropriate for a finding from a sample. 'Universally' claims no exceptions exist, which is rarely supported by empirical data.",
    },
    {
      prompt: "Which adverb is most suitable for hedging a broad claim in a theoretical argument?",
      options: [
        "Language acquisition is largely determined by environmental input.",
        "Language acquisition is completely determined by environmental input.",
      ],
      correct: 0,
      explanation: "'Largely' hedges the degree of determination, allowing for other factors. 'Completely' asserts total determination, which is difficult to support empirically and is likely false — environmental input is important but not the only factor.",
    },
    {
      prompt: "Which sentence uses 'apparently' correctly as an epistemic adverb?",
      options: [
        "Apparently, the original data set was lost when the lab was relocated.",
        "Apparently, two plus two equals four.",
      ],
      correct: 0,
      explanation: "'Apparently' signals that information comes from what has been reported or observed indirectly — appropriate for unverified or second-hand information. Using it for an established mathematical fact is redundant and inappropriate.",
    },
    {
      prompt: "Which hedging adverb is best for signalling that a claim holds in most typical cases?",
      options: [
        "Typically, more complex models require more computational power.",
        "Certainly, more complex models require more computational power.",
      ],
      correct: 0,
      explanation: "'Typically' hedges by signalling that the claim holds under normal conditions but may not in all cases — appropriate for a technical generalisation. 'Certainly' removes the qualification and asserts universal truth.",
    },

    // ── Adjective and noun hedges ──────────────────────────────
    {
      prompt: "Which sentence uses an adjective hedge correctly?",
      options: [
        "It is possible that the observed effect is an artefact of the measurement tool.",
        "It is impossible that the observed effect is an artefact of the measurement tool.",
      ],
      correct: 0,
      explanation: "'It is possible that' is a standard impersonal hedging construction acknowledging uncertainty. 'It is impossible that' asserts certainty of the opposite — ruling out the possibility entirely, which would require strong evidence.",
    },
    {
      prompt: "Which sentence uses a noun hedge correctly?",
      options: [
        "There is a tendency for cognitive biases to increase under time pressure.",
        "There is a certainty for cognitive biases to increase under time pressure.",
      ],
      correct: 0,
      explanation: "'Tendency' hedges a generalisation — it signals a pattern without claiming it always occurs. 'Certainty' removes hedging entirely and overclaims. Note also that 'certainty for' is not a standard collocational pattern.",
    },
    {
      prompt: "Which sentence uses 'likelihood' correctly as a noun hedge?",
      options: [
        "There is a likelihood that the variables interact in complex ways.",
        "There is a likelihood of the variables are interacting in complex ways.",
      ],
      correct: 0,
      explanation: "'Likelihood' takes 'that + clause' ('likelihood that') or 'of + gerund/NP' ('likelihood of interaction'). 'Likelihood of the variables are interacting' mixes two patterns ungrammatically.",
    },
    {
      prompt: "Which adjective hedge is most appropriate for a speculative claim?",
      options: [
        "It seems likely that the warming trend will continue over the next decade.",
        "It seems certain that the warming trend will continue over the next decade.",
      ],
      correct: 0,
      explanation: "'Likely' combined with 'seems' creates a double hedge appropriate for a prediction based on current evidence. 'Certain' removes hedging and overclaims — long-term climate projections carry inherent uncertainty.",
    },
    {
      prompt: "Which sentence uses 'possible' correctly as an impersonal hedging adjective?",
      options: [
        "It is possible that cultural factors mediate the relationship.",
        "It is possible cultural factors mediate the relationship.",
      ],
      correct: 0,
      explanation: "The impersonal construction requires 'that': 'it is possible that + clause'. While omitting 'that' is sometimes acceptable informally, academic writing convention retains it for clarity.",
    },

    // ── Choosing between hedges ────────────────────────────────
    {
      prompt: "Which hedge best signals that the claim is debatable but well-supported?",
      options: [
        "Globalisation has arguably widened economic disparities within nations.",
        "Globalisation has perhaps widened economic disparities within nations.",
      ],
      correct: 0,
      explanation: "'Arguably' signals that the claim is contentious but defensible — the writer is prepared to argue the case. 'Perhaps' is weaker and more uncertain, implying the writer is less confident in the claim.",
    },
    {
      prompt: "Which hedge is more appropriate for signalling a weak statistical trend?",
      options: [
        "The data suggest a slight tendency towards improvement in the treatment group.",
        "The data prove a slight tendency towards improvement in the treatment group.",
      ],
      correct: 0,
      explanation: "'Suggest' is a reporting verb hedge appropriate for non-significant or weak trends. 'Prove' would require definitive statistical evidence — using it for a 'slight tendency' is a major overclaim.",
    },
    {
      prompt: "Which hedging phrase best introduces a possible explanation?",
      options: [
        "One possible explanation is that participants misunderstood the instructions.",
        "The only explanation is that participants misunderstood the instructions.",
      ],
      correct: 0,
      explanation: "'One possible explanation' hedges in two ways: 'one' signals there may be others, and 'possible' signals uncertainty. 'The only explanation' asserts exclusivity — rarely appropriate in academic argument.",
    },
    {
      prompt: "Which hedged claim best reflects appropriate scientific caution?",
      options: [
        "The vaccine appears to reduce transmission rates in the short term.",
        "The vaccine eliminates transmission completely and permanently.",
      ],
      correct: 0,
      explanation: "Option A uses 'appears to' (epistemic verb) and 'in the short term' (scope qualifier) — both appropriate hedges for early evidence. Option B makes two absolute claims ('eliminates completely', 'permanently') unsupported by the evidence base.",
    },
    {
      prompt: "Which hedge is most appropriate for an interpretation that contradicts the hypothesis?",
      options: [
        "This unexpected result could indicate a confounding variable not controlled for.",
        "This unexpected result is evidence that the entire theory is wrong.",
      ],
      correct: 0,
      explanation: "'Could indicate' hedges the interpretation of an unexpected finding. Option B draws an overly broad conclusion — a single unexpected result may have many explanations and does not typically invalidate an entire theory.",
    },

    // ── Hedging in different sections ──────────────────────────
    {
      prompt: "Which sentence is most appropriate in the limitations section of a paper?",
      options: [
        "The small sample size may limit the generalisability of the findings.",
        "The small sample size proves the findings are wrong.",
      ],
      correct: 0,
      explanation: "Limitations sections use hedged language to acknowledge constraints without completely undermining the study. 'May limit' appropriately signals a potential constraint. 'Proves the findings are wrong' is destructive overclaiming.",
    },
    {
      prompt: "Which sentence uses hedging appropriately in a results section?",
      options: [
        "A moderate positive correlation was observed between the variables (r = .42).",
        "A perfect relationship was proven between the variables (r = .42).",
      ],
      correct: 0,
      explanation: "Results sections describe what was found objectively. 'Was observed' is appropriately neutral. Option B misrepresents r = .42 (a moderate, not perfect, correlation) and 'proven' overclaims from a single study.",
    },
    {
      prompt: "Which opening is most appropriate for the discussion section?",
      options: [
        "These findings suggest that the intervention may be effective for reducing anxiety.",
        "These findings prove that the intervention cures anxiety.",
      ],
      correct: 0,
      explanation: "Discussion sections interpret findings with appropriate hedging. 'Suggest...may be effective' is cautiously worded. 'Prove...cures' overclaims — suggesting a single study provides proof and using the absolute 'cures'.",
    },
    {
      prompt: "Which sentence uses hedging appropriately in a conclusion?",
      options: [
        "The present study provides preliminary evidence that peer mentoring improves academic outcomes.",
        "The present study finally and definitively solves the problem of low academic achievement.",
      ],
      correct: 0,
      explanation: "'Preliminary evidence' hedges the strength of the contribution — appropriate for a single study. Option B claims to 'finally and definitively solve' a complex educational problem, which is an extreme overclaim.",
    },
    {
      prompt: "Which sentence uses hedging appropriately in a literature review?",
      options: [
        "The evidence on this topic is mixed, with some studies indicating a positive effect and others finding no significant difference.",
        "The evidence conclusively shows there is no effect.",
      ],
      correct: 0,
      explanation: "When findings are mixed, acknowledging the heterogeneity is more accurate and credible than overstating consensus. Option B misrepresents a contested field as settled.",
    },

    // ── Double hedging and scope qualification ─────────────────
    {
      prompt: "Which sentence uses 'scope' hedging to appropriately limit the claim?",
      options: [
        "In most Western contexts, individualism tends to correlate with lower collectivist values.",
        "Everywhere in the world, individualism correlates with lower collectivist values.",
      ],
      correct: 0,
      explanation: "'In most Western contexts' and 'tends to' both limit scope — geographically and in terms of generalisation strength. Option B claims universal applicability, which requires evidence from every cultural context.",
    },
    {
      prompt: "Which sentence uses appropriate hedging for a claim about frequency?",
      options: [
        "Feedback on written work is often perceived as more threatening than verbal feedback.",
        "Feedback on written work is always perceived as more threatening than verbal feedback.",
      ],
      correct: 0,
      explanation: "'Often' hedges the frequency claim, allowing for exceptions. 'Always' claims universal consistency — impossible to support and empirically implausible given individual variation.",
    },
    {
      prompt: "Which sentence uses 'to some extent' correctly as a hedging phrase?",
      options: [
        "The findings support, to some extent, the theoretical predictions of the model.",
        "The findings support, to no extent, the theoretical predictions of the model.",
      ],
      correct: 0,
      explanation: "'To some extent' is a degree hedge — it qualifies how fully the findings support the model, acknowledging partial rather than total support. 'To no extent' is not a hedging phrase; it means the findings provide no support at all.",
    },
    {
      prompt: "Which sentence uses 'under certain conditions' correctly as a scope hedge?",
      options: [
        "Under certain conditions, economic competition may foster innovation.",
        "Economic competition always fosters innovation.",
      ],
      correct: 0,
      explanation: "'Under certain conditions' restricts the claim to specific contexts, avoiding overgeneralisation. Option B claims a universal causal relationship — not supported by economic evidence and inconsistent with contexts where competition reduces innovation.",
    },
    {
      prompt: "Which sentence correctly uses 'in some cases' as a hedge?",
      options: [
        "In some cases, patients respond better to psychological therapy than to medication.",
        "In no cases do patients respond better to psychological therapy than to medication.",
      ],
      correct: 0,
      explanation: "'In some cases' appropriately limits the scope of a claim about differential treatment response. 'In no cases' asserts the complete opposite — that medication is always superior — which would require very strong evidence.",
    },

    // ── Identifying and correcting hedging errors ──────────────
    {
      prompt: "Which sentence contains an inappropriate hedge for a well-established finding?",
      options: [
        "It is possible that smoking may sometimes potentially cause lung cancer.",
        "Smoking is a well-established risk factor for lung cancer.",
      ],
      correct: 0,
      explanation: "The causal link between smoking and lung cancer is one of the most robustly established in medicine. Triple hedging ('possible', 'may', 'potentially') is inappropriate — it misrepresents the strength of the evidence and undermines the writer's credibility.",
    },
    {
      prompt: "Which sentence hedges appropriately rather than understating a strong finding?",
      options: [
        "The intervention resulted in statistically significant improvements across all five outcome measures.",
        "The intervention might have possibly had a small effect on some of the outcomes.",
      ],
      correct: 0,
      explanation: "When findings are statistically significant across multiple measures, precise reporting is required — not excessive hedging. Option B understates strong results to the point of misrepresentation.",
    },
    {
      prompt: "Which sentence uses a hedge that is consistent with the strength of the claim?",
      options: [
        "Early childhood nutrition appears to influence long-term cognitive development.",
        "Early childhood nutrition has absolutely no connection to long-term cognitive development.",
      ],
      correct: 0,
      explanation: "'Appears to influence' is a well-calibrated hedge for a claim with substantial but not conclusive evidence. Option B makes an absolute denial that would also require strong evidence — and is empirically contradicted by existing research.",
    },
    {
      prompt: "Which sentence is over-hedged in the context of a methodological description?",
      options: [
        "Participants may have perhaps possibly completed the questionnaire.",
        "Participants completed the questionnaire.",
      ],
      correct: 0,
      explanation: "Describing a documented methodological procedure requires no hedging — if participants completed the questionnaire, that is a fact. Hedging a factual procedure ('may have perhaps possibly') is inappropriate and weakens the writing.",
    },
    {
      prompt: "Which sentence correctly hedges a comparison between groups?",
      options: [
        "The experimental group showed somewhat higher scores than the control group, though the difference was not statistically significant.",
        "The experimental group clearly outperformed the control group in every respect.",
      ],
      correct: 0,
      explanation: "When a difference is not statistically significant, appropriate hedging ('somewhat higher', 'though not significant') is essential. Option B asserts clear superiority without qualification — a claim that cannot be made from non-significant results.",
    },
    {
      prompt: "Which sentence demonstrates appropriate hedging of a theoretical claim?",
      options: [
        "Social identity theory provides one framework for understanding intergroup conflict, though its predictive power varies across contexts.",
        "Social identity theory is the only correct explanation of all forms of intergroup conflict.",
      ],
      correct: 0,
      explanation: "Option A uses two hedges: 'one framework' (not the only one) and 'varies across contexts' (scope limitation). Option B makes two absolute claims — 'only correct' and 'all forms' — which are inconsistent with the plurality of explanatory frameworks in social psychology.",
    },
    // ── Hedging with 'it' constructions ───────────────────────
    {
      prompt: "Which sentence uses an impersonal 'it' hedging construction correctly?",
      options: [
        "It would appear that the current regulatory framework is inadequate.",
        "It would appear the current regulatory framework inadequate.",
      ],
      correct: 0,
      explanation: "'It would appear that + clause' is a standard impersonal hedging construction. Option B is ungrammatical — it lacks both 'that' and a finite verb in the subordinate clause.",
    },
    {
      prompt: "Which impersonal hedge expresses the appropriate level of uncertainty for an interpretation?",
      options: [
        "It seems likely that socioeconomic factors play a mediating role.",
        "It is certain that socioeconomic factors play a mediating role.",
      ],
      correct: 0,
      explanation: "'It seems likely that' layers two hedges (epistemic verb + adjective), calibrating the claim as probable but not proven. 'It is certain' removes all uncertainty — rarely appropriate for an interpretive claim about mediating variables.",
    },
    {
      prompt: "Which sentence uses 'it is worth noting' correctly as a hedging phrase?",
      options: [
        "It is worth noting that the study was conducted before the policy change.",
        "It is worth noting that 2 + 2 = 4.",
      ],
      correct: 0,
      explanation: "'It is worth noting' draws attention to a qualifying detail that might otherwise be overlooked. Using it for a universally known fact is meaningless — this hedging phrase is for contextualising or qualifying a finding, not stating axioms.",
    },
    // ── Hedges with 'suggest' and 'indicate' ──────────────────
    {
      prompt: "Which sentence uses 'indicate' as an appropriate data-driven hedge?",
      options: [
        "The survey results indicate a growing dissatisfaction with public transport.",
        "The survey results indicate that public transport will definitely improve.",
      ],
      correct: 0,
      explanation: "'Indicate' is appropriate for presenting what data point toward. Option B is contradictory — 'indicate' hedges, but 'definitely improve' removes all uncertainty, creating an inconsistent level of certainty within the same sentence.",
    },
    {
      prompt: "Which sentence uses 'suggest' at the correct strength for a single study?",
      options: [
        "These findings suggest that a relationship may exist between screen time and sleep quality.",
        "These findings suggest, beyond all doubt, that screen time destroys sleep quality.",
      ],
      correct: 0,
      explanation: "'Suggest that a relationship may exist' is appropriately cautious for a single study. Option B contradicts the hedging force of 'suggest' by adding 'beyond all doubt' and using the unqualified verb 'destroys'.",
    },
    // ── Hedging collocations ───────────────────────────────────
    {
      prompt: "Which hedging collocation is standard in academic writing?",
      options: [
        "To a certain extent, the results support the proposed model.",
        "To a definite extent, the results support the proposed model.",
      ],
      correct: 0,
      explanation: "'To a certain extent' is a fixed hedging phrase meaning 'partly' or 'in some ways'. 'To a definite extent' is not a standard academic collocation — 'definite' contradicts the softening purpose of the phrase.",
    },
    {
      prompt: "Which is the more natural academic hedging phrase?",
      options: [
        "There is some evidence to suggest that bilingualism delays cognitive decline.",
        "There is all evidence to suggest that bilingualism delays cognitive decline.",
      ],
      correct: 0,
      explanation: "'There is some evidence to suggest' is a standard academic hedging formula signalling that evidence exists but is not conclusive. 'There is all evidence' is not grammatical in this context and would suggest unanimous support.",
    },
    {
      prompt: "Which hedging phrase correctly qualifies a broad claim?",
      options: [
        "For the most part, learners acquire vocabulary incidentally through exposure.",
        "Without exception, learners acquire vocabulary incidentally through exposure.",
      ],
      correct: 0,
      explanation: "'For the most part' hedges by signalling that the generalisation holds in the majority of cases but not universally. 'Without exception' claims no individual differences exist — a claim that cannot be supported by research on human learners.",
    },
    {
      prompt: "Which sentence uses the hedging phrase 'on balance' correctly?",
      options: [
        "On balance, the evidence supports a moderate positive effect of exercise on mood.",
        "On balance, the evidence proves a guaranteed positive effect of exercise on mood.",
      ],
      correct: 0,
      explanation: "'On balance' signals that after weighing conflicting evidence, the writer leans toward a conclusion — an appropriate hedge for mixed literatures. Combining it with 'proves a guaranteed effect' is contradictory and overclaims.",
    },
  ],

  discourse: [
    // ── Contrast markers ───────────────────────────────────────
    {
      prompt: "Which sentence uses 'however' with correct punctuation?",
      options: [
        "The sample size was large; however, the dropout rate was significant.",
        "The sample size was large however the dropout rate was significant.",
      ],
      correct: 0,
      explanation: "When 'however' joins two independent clauses, it must be preceded by a semicolon (or a full stop) and followed by a comma. Without this punctuation, the sentence is a run-on.",
    },
    {
      prompt: "Which sentence uses 'nevertheless' correctly?",
      options: [
        "The results were inconclusive. Nevertheless, they point to a promising direction for future research.",
        "The results were inconclusive nevertheless they point to a promising direction.",
      ],
      correct: 0,
      explanation: "'Nevertheless' is a conjunctive adverb. It must begin a new sentence or follow a semicolon. Without a full stop or semicolon before it, the second option creates a comma splice.",
    },
    {
      prompt: "Which marker best signals a direct contrast between two parallel points?",
      options: [
        "Quantitative methods prioritise breadth, whereas qualitative methods prioritise depth.",
        "Quantitative methods prioritise breadth, moreover qualitative methods prioritise depth.",
      ],
      correct: 0,
      explanation: "'Whereas' signals a direct contrast within a single sentence. 'Moreover' signals addition, not contrast — it would imply qualitative methods also prioritise breadth, which is the opposite of the intended meaning.",
    },
    {
      prompt: "Which sentence correctly uses 'in contrast'?",
      options: [
        "Northern European countries have high social mobility. In contrast, many Southern European countries show lower rates.",
        "Northern European countries have high social mobility. In contrast to many Southern European countries show lower rates.",
      ],
      correct: 0,
      explanation: "'In contrast' used as a sentence connector stands alone, followed by a comma. 'In contrast to' is a preposition requiring a noun phrase, not a full clause: 'In contrast to Southern European countries, Northern European countries...'",
    },
    {
      prompt: "Which marker is most appropriate for a concessive contrast (acknowledging before countering)?",
      options: [
        "While the methodology has limitations, the findings are broadly consistent with previous research.",
        "Furthermore, the methodology has limitations, the findings are broadly consistent with previous research.",
      ],
      correct: 0,
      explanation: "'While' introduces a concessive subordinate clause, acknowledging a point before countering it — the standard structure for balanced academic argument. 'Furthermore' signals addition, not concession.",
    },
    {
      prompt: "Which sentence uses 'on the other hand' correctly?",
      options: [
        "Centralised systems allow for consistency. On the other hand, they may lack responsiveness to local needs.",
        "On the other hand centralised systems allow for consistency and they may lack responsiveness.",
      ],
      correct: 0,
      explanation: "'On the other hand' introduces the contrasting side of a two-part comparison. It should follow a comma and introduce a new main clause, not compress both sides into one sentence. Option B also omits the necessary comma after the marker.",
    },
    {
      prompt: "Which contrast marker fits the logical relationship in this sentence? 'The intervention was costly; ___, it produced measurable long-term benefits.'",
      options: [
        "nevertheless",
        "consequently",
      ],
      correct: 0,
      explanation: "The relationship is concessive — a negative aspect is followed by a positive outcome that might not be expected. 'Nevertheless' signals this 'despite that' relationship. 'Consequently' signals a result, implying the cost caused the benefits, which is not the intended meaning.",
    },

    // ── Addition markers ───────────────────────────────────────
    {
      prompt: "Which sentence uses 'furthermore' correctly?",
      options: [
        "The drug reduced pain levels. Furthermore, it showed no significant side effects.",
        "The drug reduced pain levels. Furthermore it showed no significant side effects.",
      ],
      correct: 0,
      explanation: "Conjunctive adverbs like 'furthermore' must be followed by a comma when they open a sentence. Omitting the comma after 'furthermore' is a punctuation error in formal academic prose.",
    },
    {
      prompt: "Which addition marker best signals that the second point is stronger or more significant than the first?",
      options: [
        "The policy failed to reduce unemployment. Moreover, it actively increased inequality.",
        "The policy failed to reduce unemployment. Also, it actively increased inequality.",
      ],
      correct: 0,
      explanation: "'Moreover' signals that the second point adds to the first and often intensifies or escalates it. 'Also' simply adds without implying escalation — 'moreover' is the stronger academic choice when the second point is more striking.",
    },
    {
      prompt: "Which sentence uses 'in addition' with correct punctuation?",
      options: [
        "In addition to the quantitative data, qualitative interviews were conducted.",
        "In addition to the quantitative data qualitative interviews were conducted.",
      ],
      correct: 0,
      explanation: "When 'in addition to + NP' opens a sentence, it is followed by a comma before the main clause. Omitting the comma makes the sentence harder to parse.",
    },
    {
      prompt: "Which marker is more appropriate in formal academic writing to add a further point?",
      options: [
        "Furthermore, the study controlled for potential confounding variables.",
        "Plus, the study controlled for potential confounding variables.",
      ],
      correct: 0,
      explanation: "'Furthermore' is a formal academic discourse marker. 'Plus' is informal and should be avoided in academic prose — it belongs to spoken or casual register.",
    },
    {
      prompt: "Which sentence uses 'not only... but also' correctly?",
      options: [
        "The results not only confirmed the hypothesis but also revealed an unexpected interaction effect.",
        "The results not only confirmed the hypothesis but also revealing an unexpected interaction effect.",
      ],
      correct: 0,
      explanation: "'Not only... but also' is a correlative conjunction requiring parallel verb forms. Both verbs must be in the same form: 'confirmed... revealed'. 'Revealing' breaks the parallelism.",
    },

    // ── Cause and result markers ───────────────────────────────
    {
      prompt: "Which sentence uses 'therefore' with correct punctuation?",
      options: [
        "The data were insufficient; therefore, the analysis was inconclusive.",
        "The data were insufficient therefore the analysis was inconclusive.",
      ],
      correct: 0,
      explanation: "'Therefore' is a conjunctive adverb. Like 'however', it requires a semicolon (or full stop) before it and a comma after it when connecting two independent clauses.",
    },
    {
      prompt: "Which result marker is most appropriate in formal academic writing?",
      options: [
        "The sample was unrepresentative; consequently, the findings cannot be generalised.",
        "The sample was unrepresentative; so, the findings cannot be generalised.",
      ],
      correct: 0,
      explanation: "'Consequently' is the formal academic choice for signalling a result. 'So' is informal and typically used in speech and casual writing — it should be replaced with 'therefore', 'consequently', or 'as a result' in academic prose.",
    },
    {
      prompt: "Which sentence uses 'as a result' correctly?",
      options: [
        "Funding was cut. As a result, several research projects were abandoned.",
        "Funding was cut. As a result of several research projects were abandoned.",
      ],
      correct: 0,
      explanation: "'As a result' used as a sentence connector stands alone (no 'of'). 'As a result of' is a preposition requiring a noun phrase: 'As a result of the funding cuts, several projects were abandoned.'",
    },
    {
      prompt: "Which marker correctly introduces a cause rather than a result?",
      options: [
        "Attendance declined because the venue was inaccessible.",
        "Attendance declined; therefore, the venue was inaccessible.",
      ],
      correct: 0,
      explanation: "Option A correctly uses 'because' to introduce the cause of the decline. Option B reverses the logic — 'therefore' would imply that declining attendance caused the venue to become inaccessible, which is not the intended meaning.",
    },
    {
      prompt: "Which sentence correctly uses 'hence' as a result marker?",
      options: [
        "The p-value exceeded .05; hence, the null hypothesis was retained.",
        "The p-value exceeded .05; hence the null hypothesis was retained.",
      ],
      correct: 0,
      explanation: "When 'hence' connects two clauses after a semicolon, it is followed by a comma in formal academic prose. Option B omits the comma, which is technically acceptable but less standard in formal writing.",
    },
    {
      prompt: "Which is the correct formal academic alternative to 'so'?",
      options: [
        "thus",
        "still",
      ],
      correct: 0,
      explanation: "'Thus' is a formal academic result marker equivalent to 'so' or 'therefore'. 'Still' is a contrast/concession marker meaning 'nevertheless' — it does not signal a result.",
    },

    // ── Concession markers ─────────────────────────────────────
    {
      prompt: "Which sentence uses 'although' correctly?",
      options: [
        "Although the study had a small sample, its findings are consistent with larger reviews.",
        "Although the study had a small sample. Its findings are consistent with larger reviews.",
      ],
      correct: 0,
      explanation: "'Although' introduces a subordinate clause — it cannot stand alone as a sentence. Option B incorrectly separates the subordinate clause from the main clause with a full stop, creating a sentence fragment.",
    },
    {
      prompt: "Which sentence correctly uses 'despite'?",
      options: [
        "Despite the limitations, the study makes a valuable contribution.",
        "Despite the study had limitations, it makes a valuable contribution.",
      ],
      correct: 0,
      explanation: "'Despite' is a preposition and must be followed by a noun phrase or gerund, not a clause. 'Despite the study had limitations' incorrectly uses a full clause after 'despite'. Use 'although' or 'even though' for clauses.",
    },
    {
      prompt: "Which sentence correctly uses 'in spite of'?",
      options: [
        "In spite of significant methodological challenges, the study produced reliable data.",
        "In spite of the study faced significant methodological challenges, it produced reliable data.",
      ],
      correct: 0,
      explanation: "Like 'despite', 'in spite of' is a preposition and takes a noun phrase, not a full clause. 'In spite of the study faced...' is ungrammatical. The clause version requires 'although' or 'even though'.",
    },
    {
      prompt: "Which marker is correct for acknowledging an opposing view before countering it?",
      options: [
        "Admittedly, some studies have found no significant effect; however, the majority of evidence points the other way.",
        "Admittedly, some studies have found no significant effect; furthermore, the majority of evidence points the other way.",
      ],
      correct: 0,
      explanation: "'Admittedly' + 'however' sets up a classic concede-counter structure: acknowledging the opposing evidence before pivoting to the majority view. 'Furthermore' would add to the concession rather than countering it.",
    },
    {
      prompt: "Which sentence correctly uses 'even though'?",
      options: [
        "Even though the intervention was brief, it produced lasting changes.",
        "Even though the intervention was brief. It produced lasting changes.",
      ],
      correct: 0,
      explanation: "'Even though' is a subordinating conjunction — it must connect a subordinate clause to a main clause in a single sentence. Option B creates a sentence fragment by separating them with a full stop.",
    },

    // ── Illustration and exemplification ──────────────────────
    {
      prompt: "Which sentence uses 'for example' with correct punctuation?",
      options: [
        "Several factors influence language acquisition — for example, age, motivation, and exposure.",
        "Several factors influence language acquisition for example age motivation and exposure.",
      ],
      correct: 0,
      explanation: "'For example' used parenthetically should be set off by commas or dashes. Option B omits all necessary punctuation, making the sentence difficult to parse.",
    },
    {
      prompt: "Which is more appropriate in formal academic writing to introduce an example?",
      options: [
        "Several studies have examined this relationship, for instance, those conducted in Scandinavia.",
        "Several studies have examined this relationship, like those conducted in Scandinavia.",
      ],
      correct: 0,
      explanation: "'For instance' is the formal academic alternative. 'Like' used to introduce examples is informal and more common in speech — in academic writing, prefer 'such as' or 'for instance/example'.",
    },
    {
      prompt: "Which sentence uses 'such as' correctly?",
      options: [
        "Cognitive biases, such as confirmation bias and anchoring, affect decision-making.",
        "Cognitive biases, such as, confirmation bias and anchoring, affect decision-making.",
      ],
      correct: 0,
      explanation: "'Such as' is a preposition introducing examples. No comma should follow 'such as' directly — the comma after the final example closes the parenthetical list. Option B inserts an incorrect comma after 'such as'.",
    },
    {
      prompt: "Which sentence correctly uses 'namely' to introduce specific items?",
      options: [
        "Two factors were particularly influential, namely funding levels and institutional support.",
        "Two factors were particularly influential, namely of funding levels and institutional support.",
      ],
      correct: 0,
      explanation: "'Namely' directly precedes the items it introduces with no preposition. 'Namely of' is ungrammatical — 'of' must not be inserted between 'namely' and the listed items.",
    },

    // ── Sequence and structure markers ─────────────────────────
    {
      prompt: "Which is the correct academic sequence marker to introduce the final point in a list?",
      options: [
        "Finally, the study examines the long-term implications of the policy.",
        "At last, the study examines the long-term implications of the policy.",
      ],
      correct: 0,
      explanation: "'Finally' is the standard academic discourse marker for the last in a sequence. 'At last' implies something has been awaited impatiently — it carries an emotional tone that is inappropriate in academic writing.",
    },
    {
      prompt: "Which marker correctly signals that an event came before another in time?",
      options: [
        "Ethical approval was obtained. Subsequently, data collection began.",
        "Ethical approval was obtained. Previously, data collection began.",
      ],
      correct: 0,
      explanation: "'Subsequently' means 'after this' — correct here as data collection followed approval. 'Previously' means 'before this', which would imply data collection began before approval was obtained — the opposite of the intended sequence.",
    },
    {
      prompt: "Which sentence uses 'firstly' correctly in an academic list?",
      options: [
        "The study has three main strengths. Firstly, it uses a large representative sample.",
        "The study has three main strengths. First of all things, it uses a large representative sample.",
      ],
      correct: 0,
      explanation: "'Firstly' (or 'first') is the standard opening for enumerated points in academic writing. 'First of all things' is not a standard academic phrase — it is redundant and informal.",
    },
    {
      prompt: "Which structure marker correctly signals a topic shift?",
      options: [
        "Turning now to the question of methodology, it is important to consider the sampling strategy.",
        "Turning now the question of methodology, it is important to consider the sampling strategy.",
      ],
      correct: 0,
      explanation: "'Turning to' is the correct preposition in this discourse marker for signalling a topic shift. 'Turning the question' omits 'to', making it ungrammatical.",
    },

    // ── Reformulation and clarification ───────────────────────
    {
      prompt: "Which sentence uses 'in other words' correctly?",
      options: [
        "The effect size was small (d = 0.12). In other words, the practical significance of the finding is limited.",
        "The effect size was small (d = 0.12). In other words of the practical significance of the finding is limited.",
      ],
      correct: 0,
      explanation: "'In other words' is a fixed phrase followed by a comma and a reformulation. Option B inserts 'of', which is ungrammatical.",
    },
    {
      prompt: "Which marker correctly introduces a clarification or definition?",
      options: [
        "The study used a within-subjects design — that is, each participant completed all conditions.",
        "The study used a within-subjects design — that is each participant completed all conditions.",
      ],
      correct: 0,
      explanation: "'That is' (or 'i.e.,') used as a clarification marker must be followed by a comma. Omitting the comma makes the sentence harder to process.",
    },
    {
      prompt: "What is the correct use of 'i.e.' in academic writing?",
      options: [
        "The study focused on a specific population, i.e., undergraduate students aged 18–22.",
        "The study considered various groups, i.e., undergraduate students, postgraduate students, and staff.",
      ],
      correct: 0,
      explanation: "'i.e.' (id est) means 'that is' and introduces a complete restatement or clarification. 'e.g.' should be used for examples. Option B lists examples and should use 'e.g.' instead.",
    },
    {
      prompt: "Which sentence correctly uses 'e.g.' to introduce examples?",
      options: [
        "Several cognitive tasks were administered, e.g., the Stroop test and the digit span task.",
        "The cognitive task administered was the Stroop test, e.g., the test involves naming ink colours.",
      ],
      correct: 0,
      explanation: "'e.g.' (exempli gratia) introduces examples from a broader category. Option B uses 'e.g.' to introduce a description or clarification of a specific test — 'i.e.' would be correct there.",
    },

    // ── Choosing the right marker ──────────────────────────────
    {
      prompt: "Which marker correctly fits the gap? 'The intervention was cost-effective; ___, it was well-received by participants.'",
      options: [
        "moreover",
        "however",
      ],
      correct: 0,
      explanation: "Both facts are positive additions — the second strengthens the first. 'Moreover' signals additive escalation. 'However' would imply contrast, suggesting being well-received was unexpected given the cost-effectiveness.",
    },
    {
      prompt: "Which marker correctly fits the gap? 'The data were extensive; ___, drawing definitive conclusions was difficult.'",
      options: [
        "nevertheless",
        "therefore",
      ],
      correct: 0,
      explanation: "Despite the data being extensive, conclusions were hard to draw — a concessive relationship. 'Nevertheless' signals 'in spite of that'. 'Therefore' would imply the extensive data caused the difficulty, which contradicts the logic.",
    },
    {
      prompt: "Which marker correctly fits the gap? 'Participants were briefed on the study's purpose. ___, they were asked to sign a consent form.'",
      options: [
        "Subsequently",
        "Nevertheless",
      ],
      correct: 0,
      explanation: "The consent form signing came after the briefing — a simple temporal sequence. 'Subsequently' signals what happened next. 'Nevertheless' would imply the signing was unexpected or contrary to the briefing, which misrepresents the relationship.",
    },
    {
      prompt: "Which marker correctly fits the gap? 'Some researchers have questioned the validity of self-report measures. ___, they remain the most practical tool available in large-scale studies.'",
      options: [
        "Nevertheless",
        "Furthermore",
      ],
      correct: 0,
      explanation: "The concede-counter pattern requires a contrast marker. 'Nevertheless' concedes the criticism then pivots to the practical case. 'Furthermore' would add to the criticism rather than countering it.",
    },
    {
      prompt: "Which marker correctly fits the gap? 'The model accounts for individual variation; ___, it cannot predict group-level outcomes.'",
      options: [
        "however",
        "moreover",
      ],
      correct: 0,
      explanation: "The second clause limits or qualifies the first — a contrast. 'However' signals this concessive contrast. 'Moreover' would imply the inability to predict group outcomes is an additional positive feature, which misrepresents the meaning.",
    },

    // ── Common errors ──────────────────────────────────────────
    {
      prompt: "Which sentence uses a discourse marker incorrectly?",
      options: [
        "The results were unexpected. However, they merit further investigation.",
        "The results were unexpected. However they merit further investigation.",
      ],
      correct: 1,
      explanation: "After a full stop, 'however' must be followed by a comma. 'However they merit...' without a comma is an error — the comma is required when 'however' opens a new sentence as a conjunctive adverb.",
    },
    {
      prompt: "Which sentence uses 'despite' incorrectly?",
      options: [
        "Despite its limitations, the study offers valuable insights.",
        "Despite the study has limitations, it offers valuable insights.",
      ],
      correct: 1,
      explanation: "'Despite' must be followed by a noun phrase or gerund — not a full clause. 'Despite the study has limitations' is ungrammatical. Use 'although the study has limitations' if a clause is needed.",
    },
    {
      prompt: "Which sentence uses a result marker where a contrast marker is needed?",
      options: [
        "The approach is widely used. Nevertheless, it has significant drawbacks.",
        "The approach is widely used. Consequently, it has significant drawbacks.",
      ],
      correct: 1,
      explanation: "Option B implies that being widely used caused the drawbacks — a logical error. The correct relationship is contrast/concession: widespread use is acknowledged, but drawbacks exist despite this. 'Nevertheless' is the correct marker.",
    },
    {
      prompt: "Which sentence incorrectly uses 'also' instead of a more precise marker?",
      options: [
        "The study's scope was limited. Also, the data suggest an interesting pattern.",
        "The study's scope was limited. Nevertheless, the data suggest an interesting pattern.",
      ],
      correct: 0,
      explanation: "The relationship is concessive — something positive despite a limitation. 'Also' simply adds, making it sound as if both sentences are on equal footing without acknowledging the contrast. 'Nevertheless' correctly marks the pivot.",
    },
    {
      prompt: "Which sentence uses 'while' correctly to signal contrast (not time)?",
      options: [
        "While quantitative studies seek generalisation, qualitative studies seek depth of understanding.",
        "While I was writing, the fire alarm sounded.",
      ],
      correct: 0,
      explanation: "Option A uses 'while' as a contrast marker, setting up a parallel contrast between two research paradigms. Option B uses 'while' temporally (= at the same time as). In academic writing, contrastive 'while' is very common and signals a whereas-type relationship.",
    },
    {
      prompt: "Which sentence uses 'yet' correctly as a formal contrast marker?",
      options: [
        "The model is theoretically elegant, yet it fails to account for real-world complexity.",
        "The model is theoretically elegant, yet however it fails to account for real-world complexity.",
      ],
      correct: 0,
      explanation: "'Yet' used as a contrast marker (= but, nevertheless) is formal and concise. Option B combines 'yet' with 'however', which is redundant — only one contrast marker is needed between two clauses.",
    },
    {
      prompt: "Which sentence correctly uses 'by contrast' to open a sentence?",
      options: [
        "By contrast, the second group showed no improvement over the same period.",
        "By contrast of the second group showed no improvement over the same period.",
      ],
      correct: 0,
      explanation: "'By contrast' is a fixed adverbial phrase followed by a comma — it does not take 'of'. Option B incorrectly adds 'of', turning the phrase into an ungrammatical prepositional structure.",
    },
    {
      prompt: "Which sentence uses 'alternatively' correctly?",
      options: [
        "One explanation is that the effect is real. Alternatively, it could be an artefact of the design.",
        "The effect is real. Alternatively it could be an artefact of the design.",
      ],
      correct: 0,
      explanation: "'Alternatively' introduces a second possible explanation or course of action. Like other conjunctive adverbs, it must be followed by a comma when opening a sentence. Option B omits this comma.",
    },
    {
      prompt: "Which sentence uses 'as such' correctly?",
      options: [
        "The study is exploratory in nature; as such, its findings should be interpreted cautiously.",
        "The study is exploratory in nature; as such the findings should be interpreted cautiously.",
      ],
      correct: 0,
      explanation: "'As such' means 'for that reason' or 'in that capacity' and draws a consequence from the preceding clause. As a conjunctive adverb phrase, it must be followed by a comma when used to open a clause after a semicolon.",
    },
    {
      prompt: "Which sentence uses 'that said' correctly as a concessive pivot?",
      options: [
        "The data have limitations. That said, the overall pattern is clear and consistent.",
        "That said the data have limitations and the overall pattern is clear and consistent.",
      ],
      correct: 0,
      explanation: "'That said' is a discourse marker meaning 'having acknowledged that' — it pivots from a concession to a counter-point. It must be followed by a comma and introduce a new main clause. Option B runs both ideas together without the concessive structure.",
    },
  ],

  relative: [
    // ── Defining vs non-defining ───────────────────────────────
    {
      prompt: "Which sentence contains a defining (restrictive) relative clause?",
      options: [
        "The study that used the largest sample produced the most reliable results.",
        "The study, which used the largest sample, produced the most reliable results.",
      ],
      correct: 0,
      explanation: "A defining relative clause (no commas) identifies which study is meant — it restricts the reference to a specific one. The non-defining version (commas) adds extra information about a study already uniquely identified.",
    },
    {
      prompt: "Which sentence contains a non-defining (non-restrictive) relative clause?",
      options: [
        "Researchers who fail to declare conflicts of interest risk retraction.",
        "Smith (2019), who has published extensively on this topic, questions the consensus.",
      ],
      correct: 1,
      explanation: "Option B has a non-defining clause (set off by commas) — 'Smith (2019)' is already uniquely identified, so the clause adds information rather than defining which Smith is meant. Option A defines which researchers (those who fail to declare) are at risk.",
    },
    {
      prompt: "Which sentence punctuates a non-defining relative clause correctly?",
      options: [
        "The framework, which was developed in the 1970s, remains widely cited.",
        "The framework which was developed in the 1970s remains widely cited.",
      ],
      correct: 0,
      explanation: "Non-defining relative clauses must be set off by commas on both sides (or by a comma and a full stop). Without commas, the clause reads as defining — implying there are multiple frameworks and this one is identified by its 1970s origin.",
    },
    {
      prompt: "In which sentence would omitting the relative clause change the meaning of the main clause?",
      options: [
        "The variable that most strongly predicted the outcome was socioeconomic status.",
        "Socioeconomic status, which is often overlooked, was the strongest predictor.",
      ],
      correct: 0,
      explanation: "In option A, the defining relative clause ('that most strongly predicted') is essential — removing it leaves 'The variable was socioeconomic status', which loses the specific identification. In option B, the non-defining clause can be removed without changing the core claim.",
    },
    {
      prompt: "Which sentence uses a non-defining relative clause appropriately?",
      options: [
        "The data, which were collected over three years, show a consistent upward trend.",
        "The data which were collected over three years show a consistent upward trend.",
      ],
      correct: 0,
      explanation: "If 'the data' refers to a unique, already-identified dataset, the clause simply adds information — making it non-defining (commas required). Without commas, it would imply there are multiple datasets and only the three-year one shows the trend.",
    },

    // ── Who, which, that ───────────────────────────────────────
    {
      prompt: "Which relative pronoun is correct for referring to a person?",
      options: [
        "The researcher who developed the model later retracted her findings.",
        "The researcher which developed the model later retracted her findings.",
      ],
      correct: 0,
      explanation: "'Who' (or 'whom') refers to people. 'Which' refers to things, concepts, or animals. Using 'which' for a person is a grammatical error in standard English.",
    },
    {
      prompt: "Which relative pronoun is correct for referring to a non-defining clause about a thing?",
      options: [
        "The methodology, which had been validated in three prior studies, was adopted here.",
        "The methodology, that had been validated in three prior studies, was adopted here.",
      ],
      correct: 0,
      explanation: "'That' cannot be used in non-defining relative clauses in standard written English. Non-defining clauses (set off by commas) must use 'which' for things and 'who' for people.",
    },
    {
      prompt: "Which relative pronoun is correct in a defining clause referring to a thing?",
      options: [
        "The approach that yielded the strongest results was replicated in Experiment 2.",
        "The approach who yielded the strongest results was replicated in Experiment 2.",
      ],
      correct: 0,
      explanation: "'That' (or 'which') is correct for a defining clause referring to a thing. 'Who' refers to people only — using it for an 'approach' is a grammatical error.",
    },
    {
      prompt: "Which sentence correctly uses 'whose' as a relative pronoun?",
      options: [
        "The authors whose work is cited most frequently tend to focus on methodology.",
        "The authors which work is cited most frequently tend to focus on methodology.",
      ],
      correct: 0,
      explanation: "'Whose' is the genitive relative pronoun for both people and things ('the theory whose assumptions are contested'). 'Which work' without a genitive marker is ungrammatical — 'which' cannot show possession this way.",
    },
    {
      prompt: "Which sentence correctly uses 'whom' as the object of a relative clause?",
      options: [
        "The participant whom the researcher interviewed last provided the most detailed responses.",
        "The participant who the researcher interviewed last provided the most detailed responses.",
      ],
      correct: 0,
      explanation: "When the relative pronoun is the object of the verb in the relative clause, 'whom' is the formal correct form. 'Who' is the subject form. In 'the researcher interviewed [the participant]', the participant is the object — hence 'whom'. 'Who' is widely accepted informally but 'whom' is preferred in formal academic writing.",
    },

    // ── Omission of relative pronoun ──────────────────────────
    {
      prompt: "In which sentence can the relative pronoun be correctly omitted?",
      options: [
        "The hypothesis [that] the authors proposed was later contradicted by replication studies.",
        "The researcher [who] conducted the study has since revised her conclusions.",
      ],
      correct: 0,
      explanation: "The relative pronoun can be omitted when it is the object of the verb in the relative clause. In option A, 'that' is the object of 'proposed' — omission is possible. In option B, 'who' is the subject of 'conducted' — subject relative pronouns cannot be omitted.",
    },
    {
      prompt: "Which sentence correctly omits the relative pronoun?",
      options: [
        "The model the authors proposed has several advantages over existing frameworks.",
        "The model was proposed has several advantages over existing frameworks.",
      ],
      correct: 0,
      explanation: "Option A correctly omits the object relative pronoun 'that/which' (the authors proposed [the model]). Option B removes 'that' from a subject position ('the model that was proposed'), leaving an ungrammatical fragment.",
    },
    {
      prompt: "Which sentence retains the relative pronoun when omission would be ambiguous?",
      options: [
        "The evidence that these methods are unreliable is compelling.",
        "The evidence these methods are unreliable is compelling.",
      ],
      correct: 0,
      explanation: "Here 'that' introduces a noun clause (content clause) rather than a relative clause — it cannot be omitted without creating ambiguity or apparent ungrammaticality. Retaining 'that' makes the sentence structure clear.",
    },
    {
      prompt: "In which sentence is omitting the relative pronoun NOT acceptable?",
      options: [
        "The variable which most strongly predicted the outcome was SES.",
        "The variable the researchers controlled for was age.",
      ],
      correct: 0,
      explanation: "In option A, 'which' is the subject of 'predicted' — subject relative pronouns cannot be omitted. Option B has an object relative pronoun ('which') that can be dropped because the researchers controlled for [the variable].",
    },

    // ── Prepositions in relative clauses ──────────────────────
    {
      prompt: "Which sentence uses a fronted preposition in a formal relative clause?",
      options: [
        "This is the framework on which the entire argument depends.",
        "This is the framework which the entire argument depends on.",
      ],
      correct: 0,
      explanation: "In formal academic writing, prepositions are placed before 'which' or 'whom': 'on which... depends'. Stranding the preposition at the end ('depends on') is acceptable informally but 'on which' is the preferred form in academic prose.",
    },
    {
      prompt: "Which sentence correctly places the preposition for formal academic writing?",
      options: [
        "The researcher to whom the data were sent later published the results.",
        "The researcher whom the data were sent to later published the results.",
      ],
      correct: 0,
      explanation: "'To whom' keeps the preposition before the relative pronoun — the formal academic pattern. Stranded 'sent to' at the end is grammatically acceptable but less formal. In academic writing 'to whom' is preferred.",
    },
    {
      prompt: "Which sentence has an error in preposition use with a relative clause?",
      options: [
        "The field in which this research is situated has expanded rapidly.",
        "The field in that this research is situated has expanded rapidly.",
      ],
      correct: 1,
      explanation: "'That' cannot follow a preposition. After a preposition, only 'which' (for things) or 'whom' (for people) can be used: 'in which', never 'in that'. This is a fundamental rule of English relative clauses.",
    },
    {
      prompt: "Which sentence correctly uses a relative clause after a preposition?",
      options: [
        "The context in which the data were collected affects their interpretation.",
        "The context in where the data were collected affects their interpretation.",
      ],
      correct: 0,
      explanation: "'In which' is correct for a noun referring to a non-place context. 'In where' is ungrammatical — 'where' is a relative adverb used for places without a preposition: 'the lab where data were collected' (not 'in where').",
    },
    {
      prompt: "Which sentence uses 'where' correctly as a relative adverb?",
      options: [
        "The laboratory where the samples were processed has since been decommissioned.",
        "The laboratory where the samples were processed in has since been decommissioned.",
      ],
      correct: 0,
      explanation: "'Where' already incorporates the locative meaning, making 'in' redundant. 'The laboratory where... processed in' strands a preposition that is already encoded in 'where' — option B is ungrammatical.",
    },

    // ── Reduced relative clauses ───────────────────────────────
    {
      prompt: "Which sentence correctly uses a reduced (participial) relative clause?",
      options: [
        "The data collected in Phase 1 were analysed using regression.",
        "The data which collecting in Phase 1 were analysed using regression.",
      ],
      correct: 0,
      explanation: "'Data collected in Phase 1' is a reduced passive relative clause — 'which were collected' shortened to 'collected'. 'Which collecting' is ungrammatical — the present participle cannot be used here where a past participle is needed.",
    },
    {
      prompt: "Which reduced relative clause correctly implies an active ongoing process?",
      options: [
        "Researchers studying this phenomenon have proposed several competing explanations.",
        "Researchers studied this phenomenon have proposed several competing explanations.",
      ],
      correct: 0,
      explanation: "'Researchers studying' is a reduced active relative clause ('researchers who are/were studying'). 'Researchers studied' incorrectly uses the past participle for an active meaning — past participle reductions are passive ('researchers observed by...').",
    },
    {
      prompt: "Which sentence correctly reduces a passive relative clause?",
      options: [
        "The framework proposed by Crenshaw has influenced decades of scholarship.",
        "The framework proposing by Crenshaw has influenced decades of scholarship.",
      ],
      correct: 0,
      explanation: "'Proposed by Crenshaw' is a reduced passive relative clause (= 'which was proposed by'). The past participle is required for passive reduced relatives. 'Proposing by' incorrectly uses the present participle, which would imply the framework is doing the proposing.",
    },
    {
      prompt: "Which sentence uses a reduced relative clause correctly to identify a specific subset?",
      options: [
        "Participants reporting high anxiety levels were assigned to the intervention group.",
        "Participants reported high anxiety levels were assigned to the intervention group.",
      ],
      correct: 0,
      explanation: "'Participants reporting high anxiety' is a reduced active relative clause (= 'who reported'). 'Participants reported high anxiety levels' could be misread as a complete clause — removing the relative meaning and creating ambiguity.",
    },

    // ── Subject–verb agreement in relative clauses ─────────────
    {
      prompt: "Which sentence has correct subject–verb agreement in the relative clause?",
      options: [
        "One of the factors that influence the outcome is sample size.",
        "One of the factors that influences the outcome is sample size.",
      ],
      correct: 0,
      explanation: "The relative clause modifies 'factors' (plural), so the verb must be plural: 'that influence'. The main clause verb 'is' agrees with 'one' (singular). This is a classic agreement trap.",
    },
    {
      prompt: "Which sentence has correct subject–verb agreement in the relative clause?",
      options: [
        "The set of variables that were controlled for included age, gender, and education.",
        "The set of variables that was controlled for included age, gender, and education.",
      ],
      correct: 0,
      explanation: "The relative pronoun 'that' refers to 'variables' (plural), so the verb should be plural: 'that were controlled for'. The head of the relative clause is 'variables', not 'set'.",
    },
    {
      prompt: "Which sentence has the correct verb form in the relative clause?",
      options: [
        "It is the researchers who are responsible for ensuring data integrity.",
        "It is the researchers who is responsible for ensuring data integrity.",
      ],
      correct: 0,
      explanation: "The relative pronoun 'who' refers to 'researchers' (plural), so the verb must be plural: 'who are'. 'Who is' would agree with a singular antecedent.",
    },

    // ── Relative clauses with quantifiers ─────────────────────
    {
      prompt: "Which sentence uses a non-defining relative clause with a quantifier correctly?",
      options: [
        "Three studies were identified, all of which used randomised controlled designs.",
        "Three studies were identified, all of that used randomised controlled designs.",
      ],
      correct: 0,
      explanation: "After a quantifier ('all of', 'some of', 'none of', 'both of'), 'which' must be used — never 'that'. 'All of which' is the correct form for a non-defining clause.",
    },
    {
      prompt: "Which sentence correctly uses 'none of whom' in a non-defining clause?",
      options: [
        "Twenty participants were recruited, none of whom had prior experience with the task.",
        "Twenty participants were recruited, none of who had prior experience with the task.",
      ],
      correct: 0,
      explanation: "After a preposition or in an object position following a quantifier, 'whom' (not 'who') is the correct formal form: 'none of whom'. 'None of who' is ungrammatical.",
    },
    {
      prompt: "Which sentence uses 'some of which' correctly?",
      options: [
        "The dataset contained 500 entries, some of which were incomplete.",
        "The dataset contained 500 entries, some of that were incomplete.",
      ],
      correct: 0,
      explanation: "'Some of which' is the correct form for a non-defining relative clause with a partitive quantifier. 'Some of that' is ungrammatical — 'that' cannot be used after prepositions or in non-defining clauses.",
    },

    // ── Relative clauses: formal vs informal ──────────────────
    {
      prompt: "Which sentence uses the more formal relative clause structure preferred in academic writing?",
      options: [
        "The theory on which this paper builds was first proposed in the 1960s.",
        "The theory that this paper builds on was first proposed in the 1960s.",
      ],
      correct: 0,
      explanation: "Both are grammatical, but fronted preposition + 'which' ('on which') is the formal academic preference. Stranded preposition + 'that' ('builds on') is more informal and colloquial.",
    },
    {
      prompt: "Which version is more appropriate in formal academic prose?",
      options: [
        "The committee by whom the decision was made has since been dissolved.",
        "The committee that the decision was made by has since been dissolved.",
      ],
      correct: 0,
      explanation: "'By whom' (preposition + whom) is the formal academic pattern. 'That... by' strands the preposition and is less formal. Note also that 'whom' is correct here as the object of 'by'.",
    },
    {
      prompt: "Which sentence correctly uses 'whereby' as a formal relative adverb?",
      options: [
        "A mechanism whereby social norms influence behaviour has been proposed.",
        "A mechanism where social norms influence behaviour by has been proposed.",
      ],
      correct: 0,
      explanation: "'Whereby' (= by which / through which) is a formal academic relative adverb used for mechanisms, processes, or means. Option B incorrectly separates 'where' from 'by', producing an ungrammatical structure.",
    },

    // ── Identifying and correcting errors ─────────────────────
    {
      prompt: "Which sentence contains an error in the relative clause?",
      options: [
        "The approach which the team adopted proved more efficient than anticipated.",
        "The approach which the team adopted it proved more efficient than anticipated.",
      ],
      correct: 1,
      explanation: "Option B contains a resumptive pronoun error — 'it' must not be inserted after the relative clause. The relative pronoun 'which' already represents the object; adding 'it' duplicates the object and is ungrammatical in standard English.",
    },
    {
      prompt: "Which sentence incorrectly uses 'that' in a non-defining clause?",
      options: [
        "The sample, which was drawn from three regions, was broadly representative.",
        "The sample, that was drawn from three regions, was broadly representative.",
      ],
      correct: 1,
      explanation: "'That' cannot be used in non-defining (non-restrictive) relative clauses. Non-defining clauses must use 'which' for things and 'who' for people. Option B is a common error.",
    },
    {
      prompt: "Which sentence contains a relative clause error?",
      options: [
        "The participants who scored highest were invited for a follow-up interview.",
        "The participants which scored highest were invited for a follow-up interview.",
      ],
      correct: 1,
      explanation: "'Which' refers to things, not people. For people, 'who' (subject) or 'whom' (object) must be used. 'The participants which' is ungrammatical.",
    },
    {
      prompt: "Which sentence is grammatically correct?",
      options: [
        "The framework whose assumptions are most contested is structural functionalism.",
        "The framework which assumptions are most contested is structural functionalism.",
      ],
      correct: 0,
      explanation: "To express possession with 'which', use 'whose': 'the framework whose assumptions'. 'Which assumptions' without 'whose' is ungrammatical — it leaves the possessive relationship unmarked.",
    },
    {
      prompt: "Which sentence contains an error in preposition use with a relative clause?",
      options: [
        "The conditions under which the experiment was conducted were carefully controlled.",
        "The conditions which the experiment was conducted under were carefully controlled.",
      ],
      correct: 1,
      explanation: "Both versions are technically grammatical, but stranding the preposition at the end ('conducted under') is less formal. More importantly, in formal academic writing, the fronted preposition form ('under which') is strongly preferred. The key issue here: 'which... under' is the informal form rejected in formal academic style.",
    },

    // ── Relative clauses extending or summarising ──────────────
    {
      prompt: "Which sentence correctly uses a sentential (clause-referring) relative clause?",
      options: [
        "The intervention improved outcomes significantly, which contradicts earlier predictions.",
        "The intervention improved outcomes significantly, that contradicts earlier predictions.",
      ],
      correct: 0,
      explanation: "When a relative clause refers to an entire preceding clause (not just a noun), 'which' is used — not 'that'. 'Which' here has the whole preceding statement as its antecedent. 'That' cannot be used in this way.",
    },
    {
      prompt: "Which sentence uses a relative clause to add a defining academic comment on an entire statement?",
      options: [
        "Replication rates remain low across many disciplines, which raises serious concerns about reproducibility.",
        "Replication rates remain low across many disciplines, that raises serious concerns about reproducibility.",
      ],
      correct: 0,
      explanation: "A sentential relative clause — one whose antecedent is the entire main clause — must use 'which'. 'That' cannot introduce a non-defining relative clause or a sentential one.",
    },
    {
      prompt: "Which sentence uses 'which' correctly to refer back to a previous clause?",
      options: [
        "The results failed to reach significance, which was unexpected given the sample size.",
        "The results failed to reach significance, which they were unexpected given the sample size.",
      ],
      correct: 0,
      explanation: "In a sentential relative clause, 'which' stands alone as the subject — no additional pronoun ('they') should be inserted. Option B creates a resumptive pronoun error.",
    },
    // ── Where, when, why as relative adverbs ──────────────────
    {
      prompt: "Which sentence uses 'where' correctly as a relative adverb?",
      options: [
        "The region where the study was conducted has a predominantly rural population.",
        "The region where the study was conducted in has a predominantly rural population.",
      ],
      correct: 0,
      explanation: "'Where' already encodes the locative meaning, so no preposition is needed after it. Adding 'in' at the end is redundant and ungrammatical — compare 'the region in which the study was conducted' (preposition before 'which') vs 'the region where' (no preposition).",
    },
    {
      prompt: "Which sentence uses 'when' correctly as a relative adverb?",
      options: [
        "There are moments when statistical significance can be misleading.",
        "There are moments which statistical significance can be misleading.",
      ],
      correct: 0,
      explanation: "'When' is the correct relative adverb for time nouns ('moments', 'periods', 'times'). 'Which' is a relative pronoun used for things — it does not carry the temporal meaning required here.",
    },
    {
      prompt: "Which sentence uses 'why' correctly as a relative adverb?",
      options: [
        "One reason why the effect disappeared may be regression to the mean.",
        "One reason which the effect disappeared may be regression to the mean.",
      ],
      correct: 0,
      explanation: "'Why' is the relative adverb used after 'reason': 'the reason why'. 'Which' could be used with a preposition ('the reason for which'), but 'reason which' without a preposition is ungrammatical.",
    },
    // ── Cleft-like and it-relative constructions ──────────────
    {
      prompt: "Which sentence correctly uses a relative clause after a cleft structure?",
      options: [
        "It was the sample size that limited the study's generalisability.",
        "It was the sample size which limited the study's generalisability.",
      ],
      correct: 0,
      explanation: "In it-cleft constructions, 'that' is the standard relative pronoun regardless of whether the antecedent is a person or thing. While 'which' is sometimes used, 'that' is the strongly preferred form in this construction.",
    },
    // ── Mixed / tricky cases ───────────────────────────────────
    {
      prompt: "Which sentence uses a relative clause correctly after an indefinite pronoun?",
      options: [
        "Everything that was discussed in the meeting was later documented.",
        "Everything which was discussed in the meeting was later documented.",
      ],
      correct: 0,
      explanation: "After indefinite pronouns ('everything', 'something', 'anything', 'nothing'), 'that' is preferred over 'which' for defining relative clauses. 'Everything which' is not ungrammatical but is non-standard.",
    },
    {
      prompt: "Which sentence correctly uses a relative clause after a superlative?",
      options: [
        "This is the most comprehensive review that has been conducted in this field.",
        "This is the most comprehensive review which has been conducted in this field.",
      ],
      correct: 0,
      explanation: "After superlatives ('the most...', 'the best...', 'the only...'), 'that' is strongly preferred over 'which' in defining relative clauses. 'The most comprehensive review that' is the standard academic form.",
    },
    {
      prompt: "Which sentence correctly uses a defining relative clause after 'the only'?",
      options: [
        "This was the only study that controlled for all three variables simultaneously.",
        "This was the only study, which controlled for all three variables simultaneously.",
      ],
      correct: 0,
      explanation: "After 'the only', a defining (not non-defining) relative clause is required — 'that' without commas. Using 'which' with commas would make it non-defining, implying there are other studies, which contradicts 'the only'.",
    },
    {
      prompt: "Which sentence uses a relative clause correctly after a negative antecedent?",
      options: [
        "There is no evidence that supports the claim that the drug is safe.",
        "There is no evidence which supports the claim that the drug is safe.",
      ],
      correct: 0,
      explanation: "After negative constructions ('no', 'not any'), 'that' is preferred in defining relative clauses. 'No evidence which' is not standard — 'that' is the expected form in this context.",
    },
    {
      prompt: "Which sentence correctly uses a relative clause to post-modify a complex noun phrase?",
      options: [
        "The lack of longitudinal data, which is a notable limitation, reduces the study's impact.",
        "The lack of longitudinal data, that is a notable limitation, reduces the study's impact.",
      ],
      correct: 0,
      explanation: "The antecedent of the relative clause is the entire noun phrase 'the lack of longitudinal data' — a thing. Non-defining clauses for things use 'which'. 'That' cannot be used in non-defining relative clauses.",
    },
    {
      prompt: "Which relative clause structure is more concise and preferred in formal academic writing?",
      options: [
        "Variables identified as significant were entered into the final model.",
        "Variables that were identified as significant were entered into the final model.",
      ],
      correct: 0,
      explanation: "The reduced relative clause ('variables identified') is more concise than the full form ('variables that were identified') and is preferred in academic prose where compression aids clarity. Both are grammatical, but reduction is a feature of formal written style.",
    },
  ],

  nominal: [
    // ── Identifying nominalisations ────────────────────────────
    {
      prompt: "Which word is a nominalisation of the verb 'analyse'?",
      options: [
        "analysis",
        "analytical",
      ],
      correct: 0,
      explanation: "'Analysis' is the noun form (nominalisation) of the verb 'analyse'. 'Analytical' is an adjective derived from the same root but is not a nominalisation — it modifies nouns rather than replacing a verbal action.",
    },
    {
      prompt: "Which sentence contains a nominalisation?",
      options: [
        "The implementation of the policy was gradual.",
        "The policy was implemented gradually.",
      ],
      correct: 0,
      explanation: "'Implementation' is a nominalisation of the verb 'implement'. Option A encodes the action as a noun phrase ('the implementation of'), whereas option B uses the verb directly. Both are grammatical but differ in register.",
    },
    {
      prompt: "Which underlined word is a nominalisation?",
      options: [
        "The **development** of new treatments requires substantial funding.",
        "Researchers must **develop** new treatments with substantial funding.",
      ],
      correct: 0,
      explanation: "'Development' is the noun form of the verb 'develop' — a nominalisation. In option B, 'develop' functions as a main verb. Nominalisations allow actions and processes to be expressed as noun phrases, which is characteristic of formal academic prose.",
    },
    {
      prompt: "Which sentence uses a nominalisation of the adjective 'significant'?",
      options: [
        "The significance of these findings cannot be overstated.",
        "These findings are significant and cannot be overstated.",
      ],
      correct: 0,
      explanation: "'Significance' is the nominalisation of the adjective 'significant' (via the suffix -ance/-ence). Option A uses it as the subject of the clause, creating a more abstract, formal sentence typical of academic writing.",
    },
    {
      prompt: "Which word is a nominalisation of the verb 'argue'?",
      options: [
        "argumentation",
        "argumentative",
      ],
      correct: 0,
      explanation: "'Argumentation' (and also 'argument') are nominalisations of 'argue'. 'Argumentative' is an adjective — it describes a quality rather than nominalising the action of arguing.",
    },

    // ── Verb → noun conversion ─────────────────────────────────
    {
      prompt: "Which is the correct nominalisation of 'investigate'?",
      options: [
        "investigation",
        "investigational",
      ],
      correct: 0,
      explanation: "'Investigation' is the standard nominalisation of 'investigate' (suffix: -tion). 'Investigational' is an adjective meaning 'relating to investigation' — it cannot replace the verb as a noun.",
    },
    {
      prompt: "Which sentence correctly converts the verb into a nominalisation?",
      options: [
        "The reduction in funding led to project delays.",
        "The reduce in funding led to project delays.",
      ],
      correct: 0,
      explanation: "'Reduction' is the correct nominalisation of 'reduce' (suffix: -tion). 'Reduce' is a verb and cannot be used directly as a noun preceded by 'the'.",
    },
    {
      prompt: "Which is the correct nominalisation of 'contribute'?",
      options: [
        "contribution",
        "contributive",
      ],
      correct: 0,
      explanation: "'Contribution' is the noun form of 'contribute' (suffix: -tion). 'Contributive' is a rarely used adjective meaning 'tending to contribute' — it is not a standard nominalisation used in academic writing.",
    },
    {
      prompt: "Which sentence correctly uses a nominalisation in place of a verb phrase?",
      options: [
        "The establishment of a control group was essential.",
        "The establish of a control group was essential.",
      ],
      correct: 0,
      explanation: "'Establishment' is the correct nominalisation of 'establish'. 'Establish' is a verb and cannot follow 'the' as a noun — 'the establish' is ungrammatical.",
    },
    {
      prompt: "Which correctly nominalises 'assess'?",
      options: [
        "assessment",
        "assessful",
      ],
      correct: 0,
      explanation: "'Assessment' is the standard nominalisation of 'assess' (suffix: -ment). 'Assessful' is not a real English word — the suffix -ful forms adjectives from nouns, not nouns from verbs.",
    },

    // ── Adjective → noun conversion ────────────────────────────
    {
      prompt: "Which is the correct nominalisation of 'accurate'?",
      options: [
        "accuracy",
        "accurately",
      ],
      correct: 0,
      explanation: "'Accuracy' is the nominalisation of the adjective 'accurate' (suffix: -cy). 'Accurately' is an adverb — it modifies verbs, not functions as a noun.",
    },
    {
      prompt: "Which sentence correctly uses the nominalisation of 'flexible'?",
      options: [
        "The flexibility of the model allows it to be applied across contexts.",
        "The flexibleness of the model allows it to be applied across contexts.",
      ],
      correct: 0,
      explanation: "'Flexibility' is the standard nominalisation of 'flexible' (suffix: -ity via the stem). 'Flexibleness' is technically formed by -ness but is not the conventional academic form — 'flexibility' is strongly preferred.",
    },
    {
      prompt: "Which is the correct nominalisation of 'reliable'?",
      options: [
        "reliability",
        "reliableness",
      ],
      correct: 0,
      explanation: "'Reliability' is the standard nominalisation (suffix: -ity, with spelling change). 'Reliableness' uses -ness but is not the conventional academic form.",
    },
    {
      prompt: "Which sentence uses the correct nominalisation of 'effective'?",
      options: [
        "The effectiveness of the intervention was evaluated across three trials.",
        "The effectivity of the intervention was evaluated across three trials.",
      ],
      correct: 0,
      explanation: "'Effectiveness' is the standard nominalisation of 'effective' (suffix: -ness). 'Effectivity' is occasionally used in technical fields but is not standard in academic English — 'effectiveness' or 'efficacy' are the accepted forms.",
    },
    {
      prompt: "Which is the correct nominalisation of 'complex'?",
      options: [
        "complexity",
        "complexness",
      ],
      correct: 0,
      explanation: "'Complexity' is the standard academic nominalisation of the adjective 'complex' (suffix: -ity). 'Complexness' is a valid word by -ness formation but is almost never used in academic writing.",
    },

    // ── Nominalisation in academic register ────────────────────
    {
      prompt: "Which version is more typical of formal academic prose?",
      options: [
        "An examination of the data reveals several inconsistencies.",
        "When we examine the data, we find several inconsistencies.",
      ],
      correct: 0,
      explanation: "Option A uses nominalisation ('an examination of') to create an impersonal, abstract subject — characteristic of formal academic register. Option B uses first-person active verbs, which is less formal and less typical of written academic argument.",
    },
    {
      prompt: "Which sentence achieves the higher level of abstraction through nominalisation?",
      options: [
        "The failure of the policy to achieve its targets prompted a review.",
        "The policy failed to achieve its targets, so it was reviewed.",
      ],
      correct: 0,
      explanation: "'The failure of the policy' nominalises the event, making it the subject. This compression into a noun phrase is a hallmark of academic prose — it allows complex relationships to be expressed densely and logically.",
    },
    {
      prompt: "Which sentence uses nominalisation to foreground the process rather than the agent?",
      options: [
        "The collection and analysis of data took six months.",
        "We collected and analysed the data over six months.",
      ],
      correct: 0,
      explanation: "Nominalisation ('collection and analysis') removes the agent ('we') and foregrounds the process itself — a key function of nominalisation in academic writing, where the research procedure matters more than who performed it.",
    },
    {
      prompt: "Which sentence uses nominalisation to create a more concise academic argument?",
      options: [
        "The assumption that markets self-regulate underlies neoliberal theory.",
        "Neoliberal theory assumes that markets regulate themselves.",
      ],
      correct: 0,
      explanation: "Option A nominalises 'assume' into 'the assumption that', which becomes the subject — allowing a complex idea to be compressed into a single noun phrase that can be evaluated, challenged, or built upon. This is characteristic of academic argumentation.",
    },
    {
      prompt: "Which sentence uses nominalisation appropriately to link ideas across sentences?",
      options: [
        "Biodiversity is declining rapidly. This decline threatens ecosystem stability.",
        "Biodiversity is declining rapidly. This threatens ecosystem stability.",
      ],
      correct: 0,
      explanation: "Option A uses 'this decline' — a nominalisation that creates a cohesive link by naming the preceding event as a topic. Option B uses 'this' alone, which is less precise and can create reference ambiguity in complex academic texts.",
    },

    // ── Over-nominalisation and clarity ───────────────────────
    {
      prompt: "Which sentence is clearer because it avoids unnecessary nominalisation?",
      options: [
        "The study failed to replicate the original findings.",
        "There was a failure in the study's replication of the original findings.",
      ],
      correct: 0,
      explanation: "Option A is clearer — the verb 'failed' directly expresses the event. Option B over-nominalises ('a failure in... replication of'), creating a cumbersome noun phrase. Nominalisation improves academic writing when used purposefully, not reflexively.",
    },
    {
      prompt: "Which sentence avoids the 'noun pile-up' that can result from excessive nominalisation?",
      options: [
        "Differences in how students perform depend on the teaching methods used.",
        "Variations in student performance are dependent on teaching methodology utilisation.",
      ],
      correct: 0,
      explanation: "Option B strings together multiple nominalisations ('variations', 'performance', 'methodology utilisation') that make the sentence dense and hard to parse. Option A is clearer without sacrificing formality.",
    },
    {
      prompt: "Which sentence uses nominalisation purposefully rather than to inflate register?",
      options: [
        "The integration of qualitative and quantitative approaches strengthens the study.",
        "The integrated qualitative and quantitative approach utilisation strengthening of the study.",
      ],
      correct: 0,
      explanation: "Option A uses one well-placed nominalisation ('integration') as the subject of a clear clause. Option B chains multiple nominalisations ungrammatically, illustrating how over-nominalisation destroys clarity rather than enhancing formality.",
    },
    {
      prompt: "In which sentence is the nominalisation most justified?",
      options: [
        "The introduction of the legislation led to immediate market reactions.",
        "There was an introduction by legislators of legislation which caused reactions in markets.",
      ],
      correct: 0,
      explanation: "Option A uses 'introduction' as a compact, precise noun phrase to link cause and effect — a purposeful nominalisation. Option B is verbose and uses nominalisation ('an introduction by legislators') where a direct verb would be cleaner.",
    },

    // ── Common nominalisation suffixes ─────────────────────────
    {
      prompt: "Which suffix most commonly forms nominalisations from verbs in academic English?",
      options: [
        "-tion / -sion (e.g. discussion, application, revision)",
        "-ful / -less (e.g. meaningful, careless)",
      ],
      correct: 0,
      explanation: "The suffixes -tion and -sion are the most productive for forming verb-derived nominalisations in academic English (investigation, analysis, implementation, discussion). The suffixes -ful and -less form adjectives, not nouns.",
    },
    {
      prompt: "Which word uses the -ment suffix to form a nominalisation?",
      options: [
        "measurement",
        "measurable",
      ],
      correct: 0,
      explanation: "'Measurement' uses the -ment suffix to nominalise 'measure'. 'Measurable' uses the -able suffix to form an adjective from the same verb. Both derive from 'measure' but only 'measurement' is a nominalisation.",
    },
    {
      prompt: "Which nominalisation correctly uses the -ance/-ence suffix?",
      options: [
        "dependence",
        "dependful",
      ],
      correct: 0,
      explanation: "'Dependence' is the standard nominalisation of 'depend' using the -ence suffix. 'Dependful' is not a real English word — the -ful suffix forms adjectives from nouns, not nouns from verbs.",
    },
    {
      prompt: "Which pair correctly shows a verb and its nominalisation?",
      options: [
        "expand → expansion",
        "expand → expandment",
      ],
      correct: 0,
      explanation: "'Expansion' is the correct nominalisation of 'expand' (the -d changes to -s before -ion). 'Expandment' is not a standard English word — '-ment' is a productive suffix but does not apply to 'expand'.",
    },
    {
      prompt: "Which pair correctly shows an adjective and its nominalisation?",
      options: [
        "diverse → diversity",
        "diverse → diverseful",
      ],
      correct: 0,
      explanation: "'Diversity' is the standard nominalisation of the adjective 'diverse' (suffix -ity with spelling adjustment). 'Diverseful' is not a real word — -ful forms adjectives, not nouns.",
    },

    // ── Nominalisation in noun phrases ─────────────────────────
    {
      prompt: "Which sentence correctly uses 'of' to complete a nominalisation phrase?",
      options: [
        "The evaluation of the programme took two years.",
        "The evaluation the programme took two years.",
      ],
      correct: 0,
      explanation: "When a nominalisation has an object (what was evaluated), it is introduced with 'of': 'the evaluation of the programme'. Omitting 'of' leaves the noun phrase without the required preposition, making it ungrammatical.",
    },
    {
      prompt: "Which sentence correctly expands a nominalisation with both agent and object?",
      options: [
        "The government's implementation of the reforms was widely criticised.",
        "The government implementation of the reforms was widely criticised.",
      ],
      correct: 0,
      explanation: "When showing the agent of a nominalised action, use the possessive ('the government's implementation'). Without the apostrophe-s, 'government' reads as a noun modifier (a type of implementation for government), which changes the meaning.",
    },
    {
      prompt: "Which sentence uses a nominalisation as the object of a preposition correctly?",
      options: [
        "The paper focuses on the relationship between urbanisation and inequality.",
        "The paper focuses on the urbanise and make unequal between cities.",
      ],
      correct: 0,
      explanation: "Prepositions must be followed by noun phrases. 'On the relationship between urbanisation and inequality' correctly uses nominalisations as the objects of prepositions. Option B incorrectly places verbs after the preposition 'on'.",
    },
    {
      prompt: "Which sentence uses a nominalisation correctly as a sentence subject?",
      options: [
        "The proliferation of misinformation poses a significant challenge.",
        "Proliferate of misinformation poses a significant challenge.",
      ],
      correct: 0,
      explanation: "'Proliferation' is the noun form — used correctly as the sentence subject. 'Proliferate' is the verb and cannot function as the subject of a clause followed by 'of'.",
    },

    // ── Choosing between nominal and verbal style ──────────────
    {
      prompt: "Which sentence would be more appropriate in a discussion section of a journal article?",
      options: [
        "The persistence of this effect across contexts suggests a robust underlying mechanism.",
        "This effect keeps appearing in lots of different contexts, which suggests something is really robust.",
      ],
      correct: 0,
      explanation: "Option A uses nominalisation ('persistence') and formal vocabulary to create an abstract, precise claim. Option B is conversational and informal. Academic journal articles require the formal nominal style of option A.",
    },
    {
      prompt: "Which sentence uses verbal style more appropriately (when nominalisation would be cumbersome)?",
      options: [
        "Participants responded faster when the stimulus was familiar.",
        "The response speed of participants experienced increase in conditions of familiarity of stimulus.",
      ],
      correct: 0,
      explanation: "For a clear, direct empirical statement about a behavioural result, verbal style is often cleaner than heavy nominalisation. Option B over-nominalises to the point of obscurity.",
    },
    {
      prompt: "Which sentence uses nominalisation to build a logical argument across sentences?",
      options: [
        "Inequality has risen sharply. This rise has been linked to declining social mobility.",
        "Inequality has risen sharply. This has been linked to social mobility declining.",
      ],
      correct: 0,
      explanation: "'This rise' nominalises the preceding event and makes it the subject, creating a clear logical chain. 'This has been linked to social mobility declining' is less precise — 'declining' hangs awkwardly and the reference of 'this' is less clear.",
    },
    {
      prompt: "Which sentence correctly uses a nominalisation as the object of 'lead to'?",
      options: [
        "The funding cuts led to a reduction in research output.",
        "The funding cuts led to research output reduce.",
      ],
      correct: 0,
      explanation: "'Lead to' must be followed by a noun phrase. 'A reduction in research output' is the correct nominal form. 'Research output reduce' incorrectly uses a verb after 'to' — the infinitive marker 'to' here is a preposition, not an infinitive marker, so it requires a noun.",
    },
    {
      prompt: "Which sentence correctly uses the nominalisation of 'aware'?",
      options: [
        "There is a growing awareness of the mental health challenges facing academics.",
        "There is a growing awareness of the mental health challenges facing academics.",
      ],
      correct: 0,
      explanation: "'Awareness' is the correct nominalisation of the adjective 'aware' (suffix: -ness). 'Awareness' is a misspelling — the correct form doubles the -e before -ness: 'aware' + '-ness' = 'awareness'.",
    },

    // ── Error identification ────────────────────────────────────
    {
      prompt: "Which sentence contains an error in nominalisation?",
      options: [
        "The occurrence of such events is rare.",
        "The occurence of such events is rare.",
      ],
      correct: 1,
      explanation: "'Occurrence' is spelled with double -r and double -c. 'Occurence' is a misspelling — a common error. The correct form: occur → occurrence.",
    },
    {
      prompt: "Which sentence uses the wrong form of the nominalisation?",
      options: [
        "The improvement in test scores was statistically significant.",
        "The improval in test scores was statistically significant.",
      ],
      correct: 1,
      explanation: "'Improvement' is the standard nominalisation of 'improve' (suffix: -ment). 'Improval' is not a real English word — a common learner error by analogy with words like 'removal' or 'approval'.",
    },
    {
      prompt: "Which sentence correctly uses the nominalisation of 'maintain'?",
      options: [
        "The maintenance of data integrity is the researcher's responsibility.",
        "The maintainance of data integrity is the researcher's responsibility.",
      ],
      correct: 0,
      explanation: "'Maintenance' is the correct spelling of the nominalisation of 'maintain'. 'Maintainance' is a misspelling — the vowel changes: maintain → maintenance (not maintainance).",
    },
    {
      prompt: "Which sentence uses a nominalisation where a verb would be clearer?",
      options: [
        "A discussion of the limitations is provided in Section 5.",
        "Section 5 discusses the limitations.",
      ],
      correct: 0,
      explanation: "Both are grammatical, but option A uses the nominalisation 'a discussion of... is provided', which is slightly more verbose than the direct 'Section 5 discusses'. Knowing when NOT to nominalise is as important as knowing when to use it.",
    },
    {
      prompt: "Which sentence correctly uses the nominalisation of 'differ'?",
      options: [
        "The differences between the two groups were examined.",
        "The differentiations between the two groups were examined.",
      ],
      correct: 0,
      explanation: "'Differences' (plural of 'difference') is the standard nominalisation of 'differ'. 'Differentiation' exists but means 'the process of making or becoming different' — it does not simply mean 'differences' and would be incorrect here.",
    },
    {
      prompt: "Which sentence contains an error in the nominalisation phrase?",
      options: [
        "The discovery of penicillin transformed modern medicine.",
        "The discover of penicillin transformed modern medicine.",
      ],
      correct: 1,
      explanation: "'Discover' is a verb and cannot follow 'the' as a noun. The correct nominalisation is 'discovery'. 'The discover of' is ungrammatical.",
    },
    {
      prompt: "Which sentence uses a nominalisation correctly to compress a causal relationship?",
      options: [
        "The erosion of public trust in institutions has accelerated political polarisation.",
        "Public trust in institutions is eroding, and this has accelerated political polarisation.",
      ],
      correct: 0,
      explanation: "'The erosion of public trust' compresses the process into a noun phrase that can then act as the cause in a single, compact clause. Option B, though grammatical, takes two sentences and keeps the causal chain less tightly integrated.",
    },
    {
      prompt: "Which pair shows the correct nominalisation of 'perceive'?",
      options: [
        "perceive → perception",
        "perceive → perceival",
      ],
      correct: 0,
      explanation: "'Perception' is the standard nominalisation of 'perceive' (suffix: -tion with vowel/spelling change). 'Perceival' is not an English word — a common error by analogy with 'retrieval' or 'approval', which derive from different verb stems.",
    },
    {
      prompt: "Which sentence correctly uses the nominalisation of 'assume' in an academic argument?",
      options: [
        "The assumption that growth is always beneficial has been widely challenged.",
        "The assuming that growth is always beneficial has been widely challenged.",
      ],
      correct: 0,
      explanation: "'Assumption' is the standard nominalisation of 'assume'. 'The assuming' is not used this way — 'assuming' is a gerund (verb-noun), but in academic writing the derived noun 'assumption' is the expected form for abstract argument.",
    },
    {
      prompt: "Which sentence uses nominalisation to create a formal academic topic sentence?",
      options: [
        "The proliferation of digital platforms has transformed how political discourse operates.",
        "Digital platforms have proliferated a lot and this changes how political discourse works.",
      ],
      correct: 0,
      explanation: "Option A uses 'proliferation' as the grammatical subject, creating an abstract, formal topic sentence. Option B's verbal style ('proliferated', 'changes', 'works') with informal intensifier ('a lot') is conversational, not academic.",
    },
    {
      prompt: "Which sentence correctly uses the nominalisation of 'globalise'?",
      options: [
        "Globalisation has reshaped patterns of trade and migration worldwide.",
        "The globalising has reshaped patterns of trade and migration worldwide.",
      ],
      correct: 0,
      explanation: "'Globalisation' is the standard nominalisation of 'globalise' (suffix: -ation). 'The globalising' uses the gerund with a definite article, which is ungrammatical in this context — the gerund would require a possessive or no article.",
    },
    {
      prompt: "Which sentence uses a nominalisation most effectively to avoid weak sentence openings?",
      options: [
        "The recognition of cultural differences is central to effective communication.",
        "We need to recognise cultural differences, which is central to communication being effective.",
      ],
      correct: 0,
      explanation: "Opening with a nominalisation ('The recognition of') creates a strong, abstract subject that foregrounds the concept rather than the agent. Option B starts with 'We', which is informal, and ends with a clumsy gerund phrase ('communication being effective').",
    },
  ],

  perfect: [
    // ── Present perfect vs simple past: core distinction ───────
    {
      prompt: "Which tense is most appropriate for reporting a finding that remains relevant to the current discussion?",
      options: [
        "Research has shown that sleep deprivation impairs cognitive performance.",
        "Research showed that sleep deprivation impaired cognitive performance.",
      ],
      correct: 0,
      explanation: "The present perfect ('has shown') connects past research to the present moment, signalling that the finding is still valid and relevant. The simple past ('showed') would suggest the finding is no longer considered current or applicable.",
    },
    {
      prompt: "Which tense is most appropriate when referring to a specific completed study with a named date?",
      options: [
        "In 2018, Kim and Park found that exercise reduces cortisol levels.",
        "In 2018, Kim and Park have found that exercise reduces cortisol levels.",
      ],
      correct: 0,
      explanation: "When a specific past time is given ('in 2018'), the simple past is required. The present perfect cannot be used with a specific completed past time reference — it expresses an unspecified time with present relevance.",
    },
    {
      prompt: "Which tense is correct for a literature review statement with no specified time?",
      options: [
        "Several studies have investigated the link between poverty and educational attainment.",
        "Several studies investigated the link between poverty and educational attainment.",
      ],
      correct: 0,
      explanation: "Without a specific past time reference, the present perfect is preferred in literature reviews to signal that the body of research is ongoing and relevant now. Simple past would suggest the research is closed and no longer active.",
    },
    {
      prompt: "Which tense correctly describes a single completed past action at a known point in time?",
      options: [
        "Fleming discovered penicillin in 1928.",
        "Fleming has discovered penicillin in 1928.",
      ],
      correct: 0,
      explanation: "The present perfect cannot be used with a specific past time adverbial like 'in 1928'. Simple past is required when the time of completion is specified and in the past.",
    },
    {
      prompt: "Which tense is more appropriate when summarising what a field has established up to the present?",
      options: [
        "Decades of research have established a strong link between stress and illness.",
        "Decades of research established a strong link between stress and illness.",
      ],
      correct: 0,
      explanation: "The present perfect ('have established') presents the accumulated findings as having present validity — the link is considered established now. Simple past would imply the link was established but is no longer necessarily accepted.",
    },

    // ── Time adverbials with present perfect ──────────────────
    {
      prompt: "Which time adverbial correctly triggers the present perfect?",
      options: [
        "Interest in this topic has grown considerably in recent years.",
        "Interest in this topic grew considerably in recent years.",
      ],
      correct: 0,
      explanation: "'In recent years' refers to a period extending up to the present — it requires the present perfect. Simple past is used for periods clearly finished ('in the 1990s'), not ones that include now.",
    },
    {
      prompt: "Which sentence correctly uses 'recently' with the present perfect?",
      options: [
        "Several longitudinal studies have recently challenged this assumption.",
        "Several longitudinal studies recently challenged this assumption.",
      ],
      correct: 0,
      explanation: "'Recently' typically collocates with the present perfect in academic writing because it implies a time up to and including the present. Simple past with 'recently' is possible informally but the present perfect is strongly preferred in formal prose.",
    },
    {
      prompt: "Which sentence correctly uses 'yet' with the present perfect?",
      options: [
        "A satisfactory explanation has not yet been offered.",
        "A satisfactory explanation did not yet offer.",
      ],
      correct: 0,
      explanation: "'Yet' in negative statements typically collocates with the present perfect ('has not yet been offered'). It refers to something that was expected to happen by now but has not. Option B uses simple past incorrectly and has a passive construction error.",
    },
    {
      prompt: "Which sentence correctly uses 'so far' with the present perfect?",
      options: [
        "So far, the evidence has been inconclusive.",
        "So far, the evidence was inconclusive.",
      ],
      correct: 0,
      explanation: "'So far' refers to the period from the past up to and including the present moment — it requires the present perfect. Simple past ('was') would suggest the period is over and things may have changed.",
    },
    {
      prompt: "Which sentence correctly uses 'already' with the present perfect?",
      options: [
        "This limitation has already been acknowledged in previous studies.",
        "This limitation already acknowledged in previous studies.",
      ],
      correct: 0,
      explanation: "'Already' signals that something happened before the current point — it typically collocates with the present perfect in formal writing. Option B omits the auxiliary 'has been', making it ungrammatical.",
    },
    {
      prompt: "Which time expression requires the simple past, not the present perfect?",
      options: [
        "Last year, the government published a review of the policy.",
        "Last year, the government has published a review of the policy.",
      ],
      correct: 0,
      explanation: "'Last year' is a specific completed past time — it requires the simple past. The present perfect cannot be used with expressions that locate an event at a specific point clearly in the past ('yesterday', 'last year', 'in 2015', 'when I was a student').",
    },

    // ── Present perfect in literature reviews ─────────────────
    {
      prompt: "Which tense is standard at the start of a literature review to frame the field?",
      options: [
        "The relationship between diet and mental health has received growing attention.",
        "The relationship between diet and mental health received growing attention.",
      ],
      correct: 0,
      explanation: "Literature reviews conventionally open with the present perfect to frame the field as an ongoing conversation with present relevance. Simple past would imply interest has now waned.",
    },
    {
      prompt: "Which sentence uses the correct tense to introduce a gap in the literature?",
      options: [
        "However, few studies have examined the role of peer influence in this context.",
        "However, few studies examined the role of peer influence in this context.",
      ],
      correct: 0,
      explanation: "The present perfect ('have examined') signals that the gap persists up to the present — justifying the current study. Simple past would suggest the gap existed in the past but may now be closed.",
    },
    {
      prompt: "Which sentence correctly mixes tenses when moving from a general trend to a specific study?",
      options: [
        "Research has increasingly focused on behavioural interventions. One early study by Marcus (1998) found that brief counselling reduced smoking rates.",
        "Research has increasingly focused on behavioural interventions. One early study by Marcus (1998) has found that brief counselling has reduced smoking rates.",
      ],
      correct: 0,
      explanation: "The present perfect frames the general ongoing trend; simple past reports the specific 1998 study. Using present perfect for a named past study ('Marcus (1998) has found') is incorrect when the time of publication is specified.",
    },
    {
      prompt: "Which sentence uses the present perfect correctly to introduce a consensus?",
      options: [
        "Scholars have broadly agreed that income inequality has increased since the 1980s.",
        "Scholars broadly agreed that income inequality increased since the 1980s.",
      ],
      correct: 0,
      explanation: "The present perfect ('have broadly agreed') presents the consensus as current. 'Since the 1980s' requires the present perfect ('has increased') for the period from the 1980s to now. Simple past with 'since' is ungrammatical.",
    },
    {
      prompt: "Which tense correctly refers to the current paper's own contribution?",
      options: [
        "The present study has sought to address this gap by examining longitudinal data.",
        "The present study sought to address this gap by examining longitudinal data.",
      ],
      correct: 1,
      explanation: "When authors describe their own study's aims or approach, simple past is typically used in the body of the paper, since the study is a completed event being reported. Present perfect can appear in abstracts, but simple past is more standard for in-text method descriptions.",
    },

    // ── Present perfect passive ────────────────────────────────
    {
      prompt: "Which sentence uses the present perfect passive correctly?",
      options: [
        "The methodology has been replicated across twelve independent studies.",
        "The methodology has replicated across twelve independent studies.",
      ],
      correct: 0,
      explanation: "Present perfect passive = have/has + been + past participle. 'Has been replicated' is correct. 'Has replicated' is present perfect active — but 'methodology' cannot do the replicating, so passive is required.",
    },
    {
      prompt: "Which sentence uses the present perfect passive correctly?",
      options: [
        "A number of competing theories have been proposed to explain this phenomenon.",
        "A number of competing theories have proposed to explain this phenomenon.",
      ],
      correct: 0,
      explanation: "Theories are proposed by researchers — the passive is needed. 'Have been proposed' (present perfect passive) is correct. 'Have proposed' would be active, implying the theories themselves do the proposing.",
    },
    {
      prompt: "Which is the correct present perfect passive form?",
      options: [
        "The data have been verified by two independent coders.",
        "The data have been verifying by two independent coders.",
      ],
      correct: 0,
      explanation: "Present perfect passive requires: have/has + been + past participle. 'Have been verified' is correct. 'Have been verifying' is present perfect continuous active — 'verifying' is the present participle, not the past participle.",
    },
    {
      prompt: "Which sentence uses subject-verb agreement correctly in the present perfect passive?",
      options: [
        "The results have been published in two peer-reviewed journals.",
        "The results has been published in two peer-reviewed journals.",
      ],
      correct: 0,
      explanation: "'Results' is plural, requiring the plural auxiliary 'have'. 'Has been published' would be correct only with a singular subject ('the result has been published'). Subject-verb agreement applies to the auxiliary in the present perfect.",
    },
    {
      prompt: "Which sentence correctly uses the present perfect passive with a modal?",
      options: [
        "These findings should have been reported in the main text.",
        "These findings should been reported in the main text.",
      ],
      correct: 0,
      explanation: "Modal + past perfect passive = modal + have been + past participle. 'Should have been reported' is correct. 'Should been' omits 'have', which is required — the perfect aspect needs the auxiliary 'have'.",
    },

    // ── Past perfect ───────────────────────────────────────────
    {
      prompt: "Which sentence correctly uses the past perfect to show one past action preceded another?",
      options: [
        "The data had already been cleaned before the analysis began.",
        "The data were already cleaned before the analysis began.",
      ],
      correct: 0,
      explanation: "Past perfect ('had been cleaned') explicitly marks that cleaning was completed before another past event ('analysis began'). Simple past ('were cleaned') does not signal this sequence as clearly — it could be read as simultaneous.",
    },
    {
      prompt: "Which sentence uses the past perfect correctly in reported speech?",
      options: [
        "The authors stated that previous models had failed to account for this variable.",
        "The authors stated that previous models have failed to account for this variable.",
      ],
      correct: 0,
      explanation: "In reported speech with a past reporting verb ('stated'), the present perfect backshifts to past perfect: 'have failed' → 'had failed'. Using present perfect after a past reporting verb is a tense sequence error.",
    },
    {
      prompt: "Which sentence uses the past perfect appropriately?",
      options: [
        "By the time the second study was published, the first had already attracted widespread criticism.",
        "By the time the second study was published, the first already attracted widespread criticism.",
      ],
      correct: 0,
      explanation: "The past perfect ('had already attracted') correctly signals that criticism of the first study preceded the publication of the second. Without 'had', the sequence is implied but not grammatically marked.",
    },
    {
      prompt: "Which sentence uses the past perfect passive correctly?",
      options: [
        "The instrument had been validated in a pilot study before the main data collection.",
        "The instrument was validated in a pilot study before the main data collection.",
      ],
      correct: 0,
      explanation: "Past perfect passive ('had been validated') precisely signals that validation was completed before data collection began — useful in methods sections to clarify sequencing. Simple past also works but is less explicit about sequence.",
    },

    // ── Present perfect continuous ─────────────────────────────
    {
      prompt: "Which sentence uses the present perfect continuous correctly?",
      options: [
        "Researchers have been investigating the causes of antibiotic resistance for decades.",
        "Researchers have been investigate the causes of antibiotic resistance for decades.",
      ],
      correct: 0,
      explanation: "Present perfect continuous = have/has + been + present participle (-ing). 'Have been investigating' is correct. 'Have been investigate' omits the -ing suffix, making it ungrammatical.",
    },
    {
      prompt: "Which tense best emphasises the ongoing and continuing nature of a research activity?",
      options: [
        "Scientists have been working to develop a malaria vaccine since the 1980s.",
        "Scientists worked to develop a malaria vaccine since the 1980s.",
      ],
      correct: 0,
      explanation: "Present perfect continuous ('have been working') emphasises the continuous, unfinished nature of the effort from the 1980s to the present. Simple past ('worked') would imply the effort has ended. 'Since' also triggers the perfect aspect.",
    },
    {
      prompt: "Which sentence uses the present perfect continuous appropriately to describe ongoing research attention?",
      options: [
        "The field has been moving towards more participatory research methods.",
        "The field moved towards more participatory research methods.",
      ],
      correct: 0,
      explanation: "Present perfect continuous signals an ongoing shift that began in the past and continues now — appropriate for describing a trend in a field. Simple past implies the shift occurred and is now complete.",
    },

    // ── Choosing between tenses: academic contexts ─────────────
    {
      prompt: "Which tense is most appropriate for describing the content of a text that is still read today?",
      options: [
        "Foucault argues that power operates through discourse.",
        "Foucault argued that power operated through discourse.",
      ],
      correct: 0,
      explanation: "For describing the content or arguments of canonical texts — particularly those still read and debated — the present simple or present perfect are used, not past simple. Past simple would imply Foucault's ideas are outdated or no longer relevant.",
    },
    {
      prompt: "Which sentence correctly uses the present perfect to introduce the current study's rationale?",
      options: [
        "Despite its importance, this area has received limited empirical attention.",
        "Despite its importance, this area received limited empirical attention.",
      ],
      correct: 0,
      explanation: "'Has received limited attention' signals that the gap persists up to the present, directly justifying the current study. Simple past ('received') would suggest the gap was in the past and may now be filled, weakening the justification.",
    },
    {
      prompt: "Which sentence uses the correct tense for describing general scientific knowledge?",
      options: [
        "Studies have consistently shown that exercise improves mood.",
        "Studies consistently showed that exercise improved mood.",
      ],
      correct: 0,
      explanation: "The present perfect ('have shown') presents the accumulated evidence as currently valid. The embedded verb 'improves' is present simple because it describes a general truth. Using simple past throughout would imply this is outdated knowledge.",
    },
    {
      prompt: "Which tense is correct when describing what happens in the current paper?",
      options: [
        "Section 3 presents the theoretical framework.",
        "Section 3 has presented the theoretical framework.",
      ],
      correct: 0,
      explanation: "When describing what a section, table, or figure does or contains, the present simple is used — this is a 'performative' use describing the text itself. Present perfect would imply the presentation happened at some point before now.",
    },

    // ── Error identification ────────────────────────────────────
    {
      prompt: "Which sentence contains a tense error?",
      options: [
        "Since the 1990s, the number of publications on this topic has grown exponentially.",
        "Since the 1990s, the number of publications on this topic grew exponentially.",
      ],
      correct: 1,
      explanation: "'Since' marks a period from a past point to the present — it requires the present perfect. 'Grew' (simple past) is incorrect with 'since' when the period extends to the present.",
    },
    {
      prompt: "Which sentence contains a tense error?",
      options: [
        "Smith (2019) found that the intervention reduced anxiety symptoms.",
        "Smith (2019) has found that the intervention has reduced anxiety symptoms.",
      ],
      correct: 1,
      explanation: "When a specific author and year are cited, the simple past is required. 'Smith (2019) has found' incorrectly uses the present perfect with a specific past time reference.",
    },
    {
      prompt: "Which sentence contains an error in present perfect formation?",
      options: [
        "The researchers have conducted three pilot studies.",
        "The researchers have conduct three pilot studies.",
      ],
      correct: 1,
      explanation: "Present perfect requires: have/has + past participle. 'Have conduct' uses the base form — 'conducted' (past participle) is required.",
    },
    {
      prompt: "Which sentence correctly uses the present perfect with 'for'?",
      options: [
        "Scholars have debated this question for over a century.",
        "Scholars debated this question for over a century.",
      ],
      correct: 0,
      explanation: "'For + duration' referring to a period extending to the present requires the present perfect. Simple past with 'for + duration' would imply the debate is now over — present perfect keeps it open and ongoing.",
    },
    {
      prompt: "Which sentence contains a subject-verb agreement error in the present perfect?",
      options: [
        "Each of the three studies has been replicated independently.",
        "Each of the three studies have been replicated independently.",
      ],
      correct: 1,
      explanation: "'Each' is always singular and takes a singular verb. 'Each of the three studies has been' is correct. 'Have been' incorrectly agrees with 'studies' rather than with 'each'.",
    },

    // ── Present perfect vs simple past: nuanced cases ──────────
    {
      prompt: "Which tense is more appropriate in an abstract describing what the paper has done?",
      options: [
        "This paper has examined the relationship between housing policy and health outcomes.",
        "This paper examined the relationship between housing policy and health outcomes.",
      ],
      correct: 0,
      explanation: "In abstracts, the present perfect is commonly used to describe what the paper has done or found — the research is framed as having current relevance. Simple past is also used, but present perfect is typical for abstracts presenting contributions.",
    },
    {
      prompt: "Which sentence uses the correct tense when moving from established knowledge to a new point?",
      options: [
        "While much research has focused on adults, relatively few studies have examined adolescents.",
        "While much research focused on adults, relatively few studies examined adolescents.",
      ],
      correct: 0,
      explanation: "Both clauses describe the current state of the literature — ongoing situations with present relevance. Present perfect in both clauses is the standard academic literature review form.",
    },
    {
      prompt: "Which is correct when describing a result that no longer holds?",
      options: [
        "Early studies suggested a strong link, but this has since been challenged.",
        "Early studies have suggested a strong link, but this has since been challenged.",
      ],
      correct: 0,
      explanation: "Simple past ('suggested') is appropriate for 'early studies' — a clearly completed past activity. The contrast with 'has since been challenged' (present perfect) neatly shows the shift from past belief to current position.",
    },
    {
      prompt: "Which correctly uses the present perfect to connect a past event to a present state?",
      options: [
        "The landscape has changed dramatically since the legislation was introduced.",
        "The landscape changed dramatically since the legislation was introduced.",
      ],
      correct: 0,
      explanation: "'Since' with a past reference point requires the present perfect for the main clause: 'has changed'. The 'since'-clause itself uses simple past ('was introduced') because it refers to the fixed past point.",
    },
    {
      prompt: "Which sentence uses the most appropriate tense pair in a results summary?",
      options: [
        "The analysis revealed three themes, which have been described in detail in Section 4.",
        "The analysis has revealed three themes, which have been described in detail in Section 4.",
      ],
      correct: 0,
      explanation: "'The analysis revealed' (simple past) reports a completed research action. 'Which have been described in Section 4' (present perfect) refers to the current document — the description is present and accessible. This tense combination is standard in academic results sections.",
    },
    {
      prompt: "Which sentence correctly uses 'ever' with the present perfect?",
      options: [
        "This is the largest dataset that has ever been used in this field.",
        "This is the largest dataset that was ever used in this field.",
      ],
      correct: 0,
      explanation: "'Ever' in superlative constructions ('the largest... ever') collocates with the present perfect ('has ever been used') — it refers to the entire period up to and including the present. Simple past ('was ever used') implies the field no longer exists or the period is closed.",
    },
    {
      prompt: "Which correctly uses 'to date' with the present perfect?",
      options: [
        "To date, no study has definitively established a causal mechanism.",
        "To date, no study definitively established a causal mechanism.",
      ],
      correct: 0,
      explanation: "'To date' means 'up until now' — it spans from the past to the present moment and therefore requires the present perfect. Simple past would imply the period has ended.",
    },
    {
      prompt: "Which sentence correctly uses the present perfect with 'over the past decade'?",
      options: [
        "Public interest in this topic has intensified over the past decade.",
        "Public interest in this topic intensified over the past decade.",
      ],
      correct: 0,
      explanation: "'Over the past decade' describes a period from ten years ago to the present — the present perfect is required because the period includes now. Simple past ('intensified') would imply the decade ended at some point before now.",
    },
    {
      prompt: "Which sentence correctly distinguishes completed past action from present relevance?",
      options: [
        "Watson and Crick described the structure of DNA in 1953; this discovery has transformed biology.",
        "Watson and Crick have described the structure of DNA in 1953; this discovery transformed biology.",
      ],
      correct: 0,
      explanation: "Simple past ('described... in 1953') is correct for the specific past event. Present perfect ('has transformed') correctly signals the discovery's ongoing relevance to the present. Option B makes two errors: present perfect with a specific year, and simple past for a continuing impact.",
    },
    {
      prompt: "Which sentence uses the present perfect correctly in a conclusion?",
      options: [
        "This study has demonstrated that early intervention produces measurable benefits.",
        "This study demonstrated that early intervention produces measurable benefits.",
      ],
      correct: 0,
      explanation: "In conclusions, the present perfect ('has demonstrated') frames the study's contribution as having current significance — it presents the finding as now part of the evidence base. Simple past is also used, but present perfect is standard when summarising a contribution.",
    },
    {
      prompt: "Which is the correct form of the present perfect with an irregular verb?",
      options: [
        "Subsequent studies have borne out the original hypothesis.",
        "Subsequent studies have beared out the original hypothesis.",
      ],
      correct: 0,
      explanation: "The past participle of 'bear (out)' is 'borne', not 'beared'. Irregular verb forms must be learned: bear → bore → borne. 'Have beared' is a common learner error.",
    },
    {
      prompt: "Which sentence correctly uses the present perfect with 'emerge'?",
      options: [
        "A new consensus has emerged in the past five years.",
        "A new consensus emerged in the past five years.",
      ],
      correct: 0,
      explanation: "'In the past five years' describes a period that includes the present — the present perfect is required. Although this can overlap with simple past in some varieties of English, academic convention strongly favours the present perfect for periods spanning to now.",
    },
    {
      prompt: "Which correctly uses the present perfect to frame an unanswered question?",
      options: [
        "The question of why this effect occurs has not been fully resolved.",
        "The question of why this effect occurs was not fully resolved.",
      ],
      correct: 0,
      explanation: "The present perfect ('has not been fully resolved') signals that the question remains open up to and including the present — motivating the current study. Simple past ('was not resolved') might imply it has since been resolved, or simply refers to a past state.",
    },
  ],

  cleft: [
    // ── It-cleft: core form ────────────────────────────────────
    {
      prompt: "Which sentence is a correctly formed it-cleft?",
      options: [
        "It is the sample size that limits the generalisability of these findings.",
        "It is the sample size which limits the generalisability of these findings.",
      ],
      correct: 0,
      explanation: "In it-clefts, the relative clause is introduced by 'that' — not 'which'. 'It is X that...' is the standard academic form. Using 'which' is a very common error and is not accepted in formal cleft constructions.",
    },
    {
      prompt: "Which is a correctly formed it-cleft with a person as the focus?",
      options: [
        "It was Foucault who introduced the concept of biopower.",
        "It was Foucault that introduced the concept of biopower.",
      ],
      correct: 0,
      explanation: "When the clefted element refers to a person, 'who' is preferred over 'that' in formal academic writing ('It was Foucault who...'). Both are grammatically possible, but 'who' is the standard choice for human referents.",
    },
    {
      prompt: "Which sentence uses an it-cleft correctly to focus on a noun phrase?",
      options: [
        "It is the interaction between variables that accounts for most of the variance.",
        "It is the interaction between variables accounts for most of the variance.",
      ],
      correct: 0,
      explanation: "An it-cleft requires 'that' (or 'who/which') to introduce the second clause: 'It is X that + clause'. Omitting 'that' produces an ungrammatical string.",
    },
    {
      prompt: "Which it-cleft correctly focuses on a time adverbial?",
      options: [
        "It was not until the 1980s that interest in this area grew substantially.",
        "It was not until the 1980s when interest in this area grew substantially.",
      ],
      correct: 0,
      explanation: "The pattern 'It was not until X that...' is an it-cleft — 'that' introduces the main clause. Using 'when' instead of 'that' breaks the cleft structure and is incorrect in formal writing.",
    },
    {
      prompt: "Which it-cleft correctly focuses on a reason clause?",
      options: [
        "It is because the data are incomplete that the conclusions must remain tentative.",
        "It is because the data are incomplete, the conclusions must remain tentative.",
      ],
      correct: 0,
      explanation: "It-clefts can focus on reason clauses introduced by 'because': 'It is because X that Y'. Option B omits 'that', which is required to complete the cleft structure.",
    },
    {
      prompt: "Which sentence correctly inverts an it-cleft for negative emphasis?",
      options: [
        "It is not the quantity of data that matters most, but the quality.",
        "It is not the quantity of data which matters most, but the quality.",
      ],
      correct: 0,
      explanation: "Negative it-clefts follow the same 'that' rule as positive ones: 'It is not X that...' The contrast ('but the quality') is a natural extension of the cleft structure for emphasis.",
    },
    {
      prompt: "Which sentence is an it-cleft with a correctly formed structure?",
      options: [
        "It is this tension between theory and practice that motivates the current inquiry.",
        "This tension between theory and practice that motivates the current inquiry.",
      ],
      correct: 0,
      explanation: "Option B omits 'it is' — the essential dummy subject + copula — and is therefore not a complete sentence. Every it-cleft must begin with 'It is/was...'",
    },

    // ── It-cleft: tense and agreement ─────────────────────────
    {
      prompt: "Which it-cleft uses the correct tense when referring to a past study?",
      options: [
        "It was the absence of a control group that weakened the original study.",
        "It is the absence of a control group that weakened the original study.",
      ],
      correct: 0,
      explanation: "Tense in the 'it is/was' opener should match the time frame. Since the reference is to a past study, 'It was' is appropriate. 'It is' is used for present situations or general truths.",
    },
    {
      prompt: "Which it-cleft uses correct subject-verb agreement in the relative clause?",
      options: [
        "It is the findings that have attracted the most debate.",
        "It is the findings that has attracted the most debate.",
      ],
      correct: 0,
      explanation: "The verb in the relative clause agrees with the clefted noun phrase ('the findings'), not with the dummy 'it'. 'The findings' is plural, so 'have attracted' is correct — not 'has attracted'.",
    },
    {
      prompt: "Which is the correct it-cleft when the focused element is a prepositional phrase?",
      options: [
        "It is in this context that the theoretical contribution becomes clear.",
        "It is in this context which the theoretical contribution becomes clear.",
      ],
      correct: 0,
      explanation: "Even when the clefted element is a prepositional phrase, the relative clause must be introduced by 'that', not 'which'. 'It is in this context that...' is the standard form.",
    },

    // ── Wh-cleft (pseudo-cleft): core form ────────────────────
    {
      prompt: "Which sentence is a correctly formed wh-cleft (pseudo-cleft)?",
      options: [
        "What this study reveals is the complexity of the causal chain.",
        "What this study reveals is that the complexity of the causal chain.",
      ],
      correct: 0,
      explanation: "A wh-cleft has the form: Wh-clause + be + focused element. 'What this study reveals is the complexity of the causal chain' is correct. Option B inserts a spurious 'that' after 'is', breaking the structure.",
    },
    {
      prompt: "Which is the standard wh-cleft (wh-clause first)?",
      options: [
        "What requires further attention is the key limitation of the study.",
        "The key limitation of the study is what the study requires further attention to.",
      ],
      correct: 0,
      explanation: "A standard wh-cleft places the wh-clause first: 'What requires further attention is the key limitation of the study.' Option B reverses and distorts the structure awkwardly.",
    },
    {
      prompt: "Which wh-cleft uses 'what' correctly to focus on a conclusion?",
      options: [
        "What the analysis demonstrates is that cultural factors play a decisive role.",
        "That the analysis demonstrates is what cultural factors play a decisive role.",
      ],
      correct: 0,
      explanation: "'What + clause + is + focused element' is the wh-cleft pattern. Option B scrambles the structure — 'That the analysis demonstrates' cannot open a wh-cleft, and 'what cultural factors play' is ungrammatical in this slot.",
    },
    {
      prompt: "Which wh-cleft correctly emphasises a course of action?",
      options: [
        "What the researchers did was conduct a series of semi-structured interviews.",
        "What the researchers did was conducted a series of semi-structured interviews.",
      ],
      correct: 0,
      explanation: "In a wh-cleft with 'do', the focused verb phrase after 'was' takes the bare infinitive, not the past tense: 'What X did was [base form]'. 'Was conduct' (bare infinitive) is correct; 'was conducted' uses the past tense, which is wrong here.",
    },
    {
      prompt: "Which wh-cleft correctly emphasises a noun phrase outcome?",
      options: [
        "What emerged from the data was a clear pattern of exclusion.",
        "What emerged from the data was that a clear pattern of exclusion.",
      ],
      correct: 0,
      explanation: "When the focused element is a noun phrase ('a clear pattern of exclusion'), no 'that' is needed after 'was'. 'That' is needed only if the focused element is a full clause ('What emerged was that X is Y').",
    },
    {
      prompt: "Which wh-cleft uses the correct verb after 'is'?",
      options: [
        "What is needed is a more nuanced approach to data collection.",
        "What is needed is a more nuanced approach, to collect data better.",
      ],
      correct: 0,
      explanation: "'What is needed is a more nuanced approach to data collection' — wh-clause states the need; the focused element ('a more nuanced approach to data collection') follows 'is' as a single coherent noun phrase. Option B splits the noun phrase with a comma and adds an unnecessary infinitive.",
    },

    // ── All-cleft ──────────────────────────────────────────────
    {
      prompt: "Which sentence is a correctly formed all-cleft?",
      options: [
        "All that is required is a minor adjustment to the sampling procedure.",
        "Everything that is required is a minor adjustment to the sampling procedure.",
      ],
      correct: 0,
      explanation: "'All that + clause + is + focused element' is the all-cleft pattern — it restricts the claim exhaustively ('just a minor adjustment'). 'Everything that is required is...' is not the standard all-cleft form.",
    },
    {
      prompt: "Which all-cleft uses correct verb agreement?",
      options: [
        "All that remains is to validate the model against external datasets.",
        "All that remains are to validate the model against external datasets.",
      ],
      correct: 0,
      explanation: "'All that remains' takes a singular copula ('is'). The focused element is a singular infinitive clause. 'Are' is incorrect — agreement follows the singular 'all' in this construction.",
    },

    // ── Identifying cleft types ────────────────────────────────
    {
      prompt: "Which sentence is an it-cleft rather than a wh-cleft?",
      options: [
        "It is the methodological rigour that distinguishes this study.",
        "What distinguishes this study is the methodological rigour.",
      ],
      correct: 0,
      explanation: "An it-cleft begins with 'It is/was X that...'. A wh-cleft begins with a wh-clause ('What...'). Both foreground the same element, but through different structures.",
    },
    {
      prompt: "Which sentence is a wh-cleft rather than an it-cleft?",
      options: [
        "What the study fails to address is the role of contextual factors.",
        "It is the role of contextual factors that the study fails to address.",
      ],
      correct: 0,
      explanation: "Option A is a wh-cleft ('What + clause + is + X'). Option B is an it-cleft ('It is X that...'). Both emphasise 'the role of contextual factors', but through different structures.",
    },
    {
      prompt: "Which is an it-cleft used to focus on a time adverbial?",
      options: [
        "It was only after the intervention that significant gains were observed.",
        "Only after the intervention were significant gains observed.",
      ],
      correct: 0,
      explanation: "Option A is an it-cleft focusing on the time adverbial 'only after the intervention'. Option B is fronting with subject-auxiliary inversion — a different emphasis device. The it-cleft makes the timing explicitly prominent.",
    },

    // ── Clefts for contrastive focus ──────────────────────────
    {
      prompt: "Which it-cleft correctly sets up a contrast?",
      options: [
        "It is the long-term effects, not the short-term outcomes, that are most significant.",
        "It is the long-term effects, not the short-term outcomes, which are most significant.",
      ],
      correct: 0,
      explanation: "Contrastive it-clefts can include 'not X' phrases: 'It is X, not Y, that...'. The connector remains 'that', not 'which'. The comma-separated contrast is a stylistically effective academic device.",
    },
    {
      prompt: "Which wh-cleft best signals a contrast between two findings?",
      options: [
        "What the data reveal is not correlation but causation.",
        "What the data reveal is not correlation, causation.",
      ],
      correct: 0,
      explanation: "'What X reveals is not A but B' is the standard wh-cleft pattern for contrastive focus — 'not A but B' is a fixed correlative conjunction. Option B omits 'but', making the contrast unclear.",
    },

    // ── Clefts in academic functions ──────────────────────────
    {
      prompt: "Which sentence uses an it-cleft to signal a paper's key contribution?",
      options: [
        "It is the use of longitudinal data that distinguishes this study from previous work.",
        "The use of longitudinal data distinguishes this study from previous work.",
      ],
      correct: 0,
      explanation: "The it-cleft ('It is X that...') places strong focus on 'the use of longitudinal data'. The simple sentence (Option B) conveys the same meaning but without the explicit foregrounding the cleft provides.",
    },
    {
      prompt: "Which wh-cleft effectively introduces a key argument?",
      options: [
        "What this paper argues is that current frameworks are insufficient to account for this phenomenon.",
        "What this paper is arguing that current frameworks are insufficient to account for this phenomenon.",
      ],
      correct: 0,
      explanation: "'What this paper argues is that...' correctly uses the wh-cleft. Option B inserts 'is' inside the wh-clause ('is arguing') and omits the second 'is', breaking the structure entirely.",
    },
    {
      prompt: "Which it-cleft effectively focuses on a method used?",
      options: [
        "It is through ethnographic observation that the researchers gained access to this perspective.",
        "It is by ethnographic observation which the researchers gained access to this perspective.",
      ],
      correct: 0,
      explanation: "Prepositional phrases of method ('through...') can be clefted: 'It is through X that...'. Option B incorrectly uses 'which' instead of 'that'.",
    },
    {
      prompt: "Which it-cleft appropriately focuses on a researcher's attribution?",
      options: [
        "It was Bourdieu who first formalised the concept of cultural capital.",
        "It was Bourdieu which first formalised the concept of cultural capital.",
      ],
      correct: 0,
      explanation: "For human referents, 'who' is used in the relative clause of an it-cleft. 'Which' is for non-human referents. Since Bourdieu is a person, 'who' is required.",
    },

    // ── Error identification ────────────────────────────────────
    {
      prompt: "Which sentence contains an error in the it-cleft?",
      options: [
        "It is the theoretical framework that needs to be refined.",
        "It is the theoretical framework which needs to be refined.",
      ],
      correct: 1,
      explanation: "It-clefts require 'that', not 'which', in the relative clause. 'It is X that...' is the correct form. Using 'which' is a very common learner error in formal academic writing.",
    },
    {
      prompt: "Which sentence contains a verb agreement error in the wh-cleft?",
      options: [
        "What the review identifies is a significant gap in the evidence base.",
        "What the review identifies are a significant gap in the evidence base.",
      ],
      correct: 1,
      explanation: "The copula in a wh-cleft agrees with the focused element ('a significant gap'), which is singular — so 'is' is correct. 'Are' incorrectly treats the wh-clause as the subject for agreement purposes.",
    },
    {
      prompt: "Which sentence contains a structural error in the it-cleft?",
      options: [
        "It is the external validity of the study that has been questioned.",
        "It is that the external validity of the study has been questioned.",
      ],
      correct: 1,
      explanation: "Option B places a 'that'-clause immediately after 'It is' — this produces an extraposed subject construction, not an it-cleft. An it-cleft must focus a noun phrase or adverbial: 'It is X that...', not 'It is that...'",
    },
    {
      prompt: "Which it-cleft contains a verb agreement error in the relative clause?",
      options: [
        "It is the participants who were most affected by the intervention.",
        "It is the participants who was most affected by the intervention.",
      ],
      correct: 0,
      explanation: "'The participants' is plural, so the verb in the relative clause must be plural: 'who were'. 'Who was' incorrectly uses a singular verb with a plural antecedent.",
    },
    {
      prompt: "Which wh-cleft contains a structural error?",
      options: [
        "What remains unclear is the direction of the causal relationship.",
        "What remains unclear is unclear the direction of the causal relationship.",
      ],
      correct: 0,
      explanation: "Option B redundantly inserts 'is unclear' after the copula, producing 'is unclear the direction...' — an ungrammatical string. The wh-cleft structure is: 'What [clause] + is + [focused element]'.",
    },

    // ── Choosing between cleft and non-cleft ──────────────────
    {
      prompt: "Which version most clearly foregrounds the causal factor?",
      options: [
        "It is the lack of transparency that undermines public trust in institutions.",
        "The lack of transparency undermines public trust in institutions.",
      ],
      correct: 0,
      explanation: "The it-cleft ('It is X that...') explicitly highlights 'the lack of transparency' as the specific causal factor — particularly useful when making a pointed or contested claim. The simple sentence conveys the same idea but without foregrounding.",
    },
    {
      prompt: "Which sentence uses a cleft to most effectively emphasise a surprising finding?",
      options: [
        "It was the control group, not the treatment group, that showed the largest improvement.",
        "The control group showed the largest improvement, not the treatment group.",
      ],
      correct: 0,
      explanation: "The it-cleft with contrastive insert ('It was X, not Y, that...') foregrounds the surprising element from the start. Option B delivers the contrast as an afterthought, which is less emphatic.",
    },

    // ── Clefts and information structure ──────────────────────
    {
      prompt: "In the it-cleft 'It is the dependent variable that has been overlooked', what is the focus?",
      options: [
        "The dependent variable.",
        "The fact that something has been overlooked.",
      ],
      correct: 0,
      explanation: "In an it-cleft, the element between 'It is' and 'that' is the focus — the information the writer highlights as most significant. 'The dependent variable' is the focus; 'that has been overlooked' is presupposed background.",
    },
    {
      prompt: "Which it-cleft correctly places new information in the focus position?",
      options: [
        "It is the ethical implications that previous studies have neglected.",
        "It is the previous studies that neglected the ethical implications.",
      ],
      correct: 0,
      explanation: "Clefts place the most significant new information in the focus slot. If the argument is that 'ethical implications' have been neglected, that topic should be clefted. Option B clefts 'the previous studies', which is typically given/old information.",
    },
    {
      prompt: "Which wh-cleft correctly presents a conclusion as new information?",
      options: [
        "What the evidence ultimately suggests is that the relationship is bidirectional.",
        "What is bidirectional is what the evidence ultimately suggests.",
      ],
      correct: 0,
      explanation: "The standard wh-cleft places new information after 'is': 'What X suggests is [new conclusion]'. Option B reverses this — placing 'what is bidirectional' in the wh-slot, which conventionally holds given/presupposed information.",
    },
    {
      prompt: "Which sentence uses a cleft to link back to a prior sentence while foregrounding new information?",
      options: [
        "Three factors were identified. It is the third factor — social capital — that proves most influential.",
        "Three factors were identified. The third factor, social capital, proved most influential.",
      ],
      correct: 0,
      explanation: "The it-cleft picks up the shared reference ('the third factor') and foregrounds 'social capital' as the key new piece of information, creating cohesion while signalling emphasis. Option B conveys the same idea but without explicit foregrounding.",
    },

    // ── Cleft formation from base sentences ───────────────────
    {
      prompt: "Which is the correct it-cleft of 'Peer review ensures academic quality' — focusing on the subject?",
      options: [
        "It is peer review that ensures academic quality.",
        "It is peer review which ensures academic quality.",
      ],
      correct: 0,
      explanation: "To form an it-cleft focusing on the subject, place it between 'It is' and 'that': 'It is [subject] that [rest of sentence]'. The connector is always 'that', not 'which'.",
    },
    {
      prompt: "Which correctly forms an it-cleft of 'The researchers collected the data in rural areas' — focusing on the place?",
      options: [
        "It was in rural areas that the researchers collected the data.",
        "It was in rural areas where the researchers collected the data.",
      ],
      correct: 0,
      explanation: "Even when the focus is a place ('in rural areas'), the connector in an it-cleft is 'that' — not 'where'. 'Where' introduces a relative clause modifying a noun, not a cleft clause.",
    },
    {
      prompt: "Which correctly converts 'The experiment disproved the null hypothesis' into a wh-cleft?",
      options: [
        "What the experiment did was disprove the null hypothesis.",
        "What the experiment did was disproved the null hypothesis.",
      ],
      correct: 0,
      explanation: "In a wh-cleft with 'do', the verb phrase following 'was' takes the bare infinitive ('disprove'), not the past tense ('disproved'). The 'did' in the wh-clause already marks past tense.",
    },

    // ── Register and style ─────────────────────────────────────
    {
      prompt: "Which cleft is more appropriate for formal academic writing?",
      options: [
        "It is the theoretical contribution that sets this work apart.",
        "What sets this work apart, it's the theoretical contribution.",
      ],
      correct: 0,
      explanation: "The it-cleft ('It is X that...') is the standard formal variant. Option B combines a wh-clause with a comma splice and a contracted 'it's' — all inappropriate in academic prose.",
    },
    {
      prompt: "Which is the most concise and academically appropriate way to cleft the object?",
      options: [
        "It is methodological consistency that the field currently lacks.",
        "The thing that the field currently lacks is methodological consistency.",
      ],
      correct: 0,
      explanation: "The it-cleft is more economical and formal. 'The thing that...' is a weakened pseudo-cleft variant — acceptable but wordier and slightly informal compared to the it-cleft.",
    },
    {
      prompt: "Which sentence uses a cleft most effectively in an academic conclusion?",
      options: [
        "It is the integration of qualitative and quantitative methods that represents the key contribution of this study.",
        "The key contribution of this study is integrating qualitative and quantitative methods.",
      ],
      correct: 0,
      explanation: "In a conclusion, the it-cleft gives maximum prominence to the contribution ('the integration of qualitative and quantitative methods'). Option B is clear but does not signal the importance of the contribution as explicitly.",
    },
    {
      prompt: "Which sentence uses a cleft to highlight an unexpected agent?",
      options: [
        "It was the junior researchers, not the senior staff, who identified the critical flaw.",
        "The junior researchers, not the senior staff, identified the critical flaw.",
      ],
      correct: 0,
      explanation: "The it-cleft foregrounds 'the junior researchers' as the surprising agent, making the contrast more rhetorically forceful. Option B conveys the same content but without the same emphasis on the unexpected nature of the finding.",
    },
    {
      prompt: "Which wh-cleft is correctly formed to focus on a recommendation?",
      options: [
        "What future research should do is examine the long-term effects of the intervention.",
        "What future research should do is examined the long-term effects of the intervention.",
      ],
      correct: 0,
      explanation: "After 'What X does/should do is', the following verb takes the bare infinitive. 'Examine' (bare infinitive) is correct; 'examined' (past tense) is incorrect in this wh-cleft pattern.",
    },
    {
      prompt: "Which it-cleft correctly focuses on an instrument or means?",
      options: [
        "It is through these interviews that a richer understanding can be achieved.",
        "It is through these interviews where a richer understanding can be achieved.",
      ],
      correct: 0,
      explanation: "Prepositional phrases of means are clefted with 'that': 'It is through X that...'. 'Where' cannot be used to introduce the cleft clause — it is used only in relative clauses modifying place nouns.",
    },
    {
      prompt: "Which it-cleft uses the correct structure when the focus is an adverb of manner?",
      options: [
        "It is cautiously that these conclusions should be interpreted.",
        "It is cautiously which these conclusions should be interpreted.",
      ],
      correct: 0,
      explanation: "Adverbs can be clefted in it-clefts: 'It is cautiously that...'. The connector is 'that', never 'which'. Although clefting adverbs of manner is less common, it is grammatically well-formed and used for emphasis.",
    },
    {
      prompt: "Which sentence best demonstrates an it-cleft used to rebut a previous claim?",
      options: [
        "It is the structural factors, not individual choices, that drive inequality.",
        "The structural factors drive inequality rather than individual choices.",
      ],
      correct: 0,
      explanation: "The it-cleft with 'not X' ('It is X, not Y, that...') is the most forceful way to rebut a competing explanation. It places the writer's preferred factor in focus and explicitly names what is being displaced. Option B states the same contrast but less emphatically.",
    },
    {
      prompt: "Which sentence uses a wh-cleft to effectively open a discussion section?",
      options: [
        "What these findings suggest is that socioeconomic status mediates the observed effect.",
        "These findings suggest that socioeconomic status mediates the observed effect.",
      ],
      correct: 0,
      explanation: "The wh-cleft ('What these findings suggest is that...') foregrounds the significance of the finding and creates a stronger rhetorical opening for a discussion section. The simple sentence (Option B) is clear but lacks the emphasis the wh-cleft provides.",
    },
  ],


  fronting: [
    // ── Adjective/Complement Fronting with Inversion ─────────────
    {
      prompt: "Which sentence correctly fronts an adjective phrase with subject-verb inversion?",
      options: [
        "Particularly noteworthy is the consistency of results across all three sites.",
        "Particularly noteworthy the consistency of results across all three sites is.",
      ],
      correct: 0,
      explanation: "Fronting an adjective phrase requires inversion: adjective phrase + auxiliary/copula + subject. Option A correctly places 'is' before the subject noun phrase. Option B produces an ungrammatical SOV order.",
    },
    {
      prompt: "Which sentence fronts a prepositional phrase to foreground an evaluative comment?",
      options: [
        "Of equal importance is the need to consider socioeconomic variables.",
        "The need to consider socioeconomic variables is of equal importance.",
      ],
      correct: 0,
      explanation: "Fronting 'Of equal importance' with inversion ('is the need...') brings the evaluation to the front of the sentence, signalling its rhetorical weight immediately. The non-fronted version (B) places the evaluation at the end, which is less emphatic.",
    },
    {
      prompt: "Which sentence uses fronting to create a cohesive link with a preceding discussion of research gaps?",
      options: [
        "Less well understood is the mechanism by which this effect occurs.",
        "The mechanism by which this effect occurs is less well understood.",
      ],
      correct: 0,
      explanation: "Fronting 'Less well understood' connects directly to a preceding discussion of what is and is not known, orienting the reader before naming the topic. Option B, though grammatical, delivers the evaluative comment less prominently.",
    },
    {
      prompt: "Which sentence correctly fronts a complement phrase?",
      options: [
        "Central to this argument is the assumption that language shapes thought.",
        "Central to this argument the assumption that language shapes thought is.",
      ],
      correct: 0,
      explanation: "Fronted complement phrases require inversion: complement + copula + subject. Option A is grammatically correct. Option B places the copula ('is') at the end, producing an ungrammatical structure in English.",
    },
    {
      prompt: "Which sentence uses fronting of a negative adverbial to create subject-auxiliary inversion?",
      options: [
        "Rarely has such a comprehensive dataset been assembled in this field.",
        "Such a comprehensive dataset has rarely been assembled in this field.",
      ],
      correct: 0,
      explanation: "Fronting a negative or restrictive adverb like 'rarely' triggers subject-auxiliary inversion (has + subject + past participle). This structure adds strong emphasis and is a hallmark of advanced formal prose. Option B, with 'rarely' in mid-position, is grammatical but far less emphatic.",
    },
  ],

  impersonal: [
    // ── It-constructions & There-constructions ────────────────────
    {
      prompt: "Which sentence uses an impersonal construction to distance the writer from a claim?",
      options: [
        "It could be argued that the current framework is insufficient.",
        "I would argue that the current framework is insufficient.",
      ],
      correct: 0,
      explanation: "Impersonal constructions like 'It could be argued that...' present a claim without a named agent, maintaining formal academic distance. The first-person 'I would argue' (option B) is less common in formal writing and directly attributes the view to the author.",
    },
    {
      prompt: "Which sentence correctly uses a 'there' existential construction to introduce evidence impersonally?",
      options: [
        "There is growing evidence that diet affects cognitive function in older adults.",
        "It is growing evidence that diet affects cognitive function in older adults.",
      ],
      correct: 0,
      explanation: "'There is/are' is the correct existential construction for introducing the existence of something (evidence, reasons, factors). 'It is' cannot be used in this way — option B is ungrammatical.",
    },
    {
      prompt: "Which sentence uses an impersonal passive to report an established finding?",
      options: [
        "It has been demonstrated that regular exercise improves working memory.",
        "It was demonstrated regular exercise improves working memory.",
      ],
      correct: 0,
      explanation: "The impersonal passive 'It has been demonstrated that...' requires the complementiser 'that' before the embedded clause. Omitting 'that' (option B) is ungrammatical in this construction.",
    },
    {
      prompt: "Which sentence uses a dummy-subject 'it' construction (impersonal) appropriately?",
      options: [
        "It is important to acknowledge the limitations of this approach.",
        "It was the most significant finding of the study.",
      ],
      correct: 0,
      explanation: "Option A uses a dummy-subject 'it' with an adjective + infinitive clause: 'It is + adj + to-infinitive'. This is a true impersonal construction. Option B uses 'it' as an identificatory pronoun referring to a specific referent — a different (non-impersonal) use.",
    },
    {
      prompt: "Which is the more appropriate register for a formal academic claim about a theoretical position?",
      options: [
        "It is reasonable to suggest that the intervention produced a measurable effect.",
        "I think it's reasonable to suggest the intervention worked.",
      ],
      correct: 0,
      explanation: "The impersonal construction 'It is reasonable to suggest that...' maintains formal register and appropriate hedging. Option B uses the first-person contraction 'it's' and the informal verb 'worked', making it unsuitable for academic prose.",
    },
  ],

  definite: [
    // ── Second-mention & Specific Reference ──────────────────────
    {
      prompt: "Which sentence correctly uses 'the' for second-mention reference?",
      options: [
        "A qualitative study was conducted. The study involved twenty participants.",
        "A qualitative study was conducted. A study involved twenty participants.",
      ],
      correct: 0,
      explanation: "'The' is used on second mention because both writer and reader now share knowledge of which study is meant. Using 'a' on second mention (option B) treats the noun as if it were being introduced for the first time, which confuses the reader.",
    },
    {
      prompt: "Which sentence correctly uses 'the' before a noun modified by a specifying post-modifier?",
      options: [
        "The role of culture in language acquisition has been widely debated.",
        "A role of culture in language acquisition has been widely debated.",
      ],
      correct: 0,
      explanation: "When a noun is followed by a phrase that uniquely specifies it ('of culture in language acquisition'), 'the' is required because the post-modifier makes the referent identifiable. 'A role of culture...' implies a non-specific or first-mention context, which clashes with the specificity of the modifier.",
    },
    {
      prompt: "Which sentence correctly uses 'the' with a backward-referencing noun phrase?",
      options: [
        "Following the procedure outlined in Section 2, samples were analysed.",
        "Following a procedure outlined in Section 2, samples were analysed.",
      ],
      correct: 0,
      explanation: "'The procedure outlined in Section 2' uses 'the' correctly because the reader can identify precisely which procedure is meant — it has been specified in a named section. 'A procedure outlined in Section 2' (option B) implies the reader may not know which procedure, despite the clear reference.",
    },
    {
      prompt: "Which sentence correctly uses 'the' with the results of a specific experiment?",
      options: [
        "The data collected in phase two revealed an unexpected pattern.",
        "The data collected in phase two revealed the unexpected pattern.",
      ],
      correct: 0,
      explanation: "'An unexpected pattern' is correct because the pattern is being introduced for the first time — the reader does not yet know which pattern is meant. 'The unexpected pattern' (option B) would imply shared prior knowledge of a specific pattern, which is not established here.",
    },
    {
      prompt: "Which sentence correctly omits 'the' before a general abstract noun?",
      options: [
        "Academic writing requires precision, clarity, and appropriate hedging.",
        "The academic writing requires the precision, the clarity, and the appropriate hedging.",
      ],
      correct: 0,
      explanation: "General abstract nouns used in statements about categories take zero article (no 'the'). 'Academic writing', 'precision', 'clarity', and 'hedging' refer to general concepts here, not to specific instances. Option B incorrectly uses 'the' as if these were identifiable specific entities.",
    },
  ],

  comparative: [
    // ── Form & Usage of Comparatives ─────────────────────────────
    {
      prompt: "Which sentence uses the correct comparative form for a multi-syllable adjective?",
      options: [
        "The second methodology proved more reliable than the first.",
        "The second methodology proved more reliable that the first.",
      ],
      correct: 0,
      explanation: "Comparative constructions require 'than', not 'that', to introduce the second element of the comparison. Option A is correct. This is a common error in academic writing.",
    },
    {
      prompt: "Which sentence maintains grammatical parallelism in a comparative structure?",
      options: [
        "Smith's (2019) findings were considerably more robust than those of Jones (2020).",
        "Smith's (2019) findings were considerably more robust than Jones (2020).",
      ],
      correct: 0,
      explanation: "When comparing findings to findings, the pronoun 'those' is needed to stand in for 'findings' — otherwise the sentence compares 'Smith's findings' to 'Jones (2020)' (a person or publication, not findings). Option A maintains parallel comparison of equivalent entities.",
    },
    {
      prompt: "Which sentence correctly uses a one-syllable comparative form?",
      options: [
        "The new model produced clearer predictions than its predecessor.",
        "The new model produced more clear predictions than its predecessor.",
      ],
      correct: 0,
      explanation: "One-syllable adjectives form comparatives with the suffix '-er' (clear → clearer), not with 'more'. 'More clear' (option B) is non-standard, though occasionally seen. 'Clearer' (option A) is the standard academic form.",
    },
    {
      prompt: "Which sentence correctly uses 'as... as' to express equivalence?",
      options: [
        "The control group performed as well as the experimental group on the pre-test.",
        "The control group performed as good as the experimental group on the pre-test.",
      ],
      correct: 0,
      explanation: "'As well as' is correct when modifying a verb (performed). 'Good' is an adjective and cannot modify a verb — 'as good as' would be used with a linking verb + adjective (e.g., 'as good as expected'). Option A correctly uses the adverb 'well'.",
    },
    {
      prompt: "Which sentence uses a comparative structure to frame an evaluative claim effectively?",
      options: [
        "The qualitative approach yielded richer contextual data than the survey alone could provide.",
        "The qualitative approach yielded rich contextual data and the survey was not as useful.",
      ],
      correct: 0,
      explanation: "Option A uses a well-formed comparative ('richer... than') with a parallel structure and a clear point of comparison. Option B is grammatically loose: it coordinates two clauses inconsistently and does not complete the 'as... as' structure ('not as useful as what?').",
    },
  ],

  adverbial: [
    // ── Concession, Cause, Condition, Contrast ────────────────────
    {
      prompt: "Which sentence correctly uses an adverbial clause of concession?",
      options: [
        "Although the sample was small, the results indicate a consistent trend.",
        "Despite the sample was small, the results indicate a consistent trend.",
      ],
      correct: 0,
      explanation: "'Although' is a subordinating conjunction and is correctly followed by a full clause (subject + verb). 'Despite' is a preposition and must be followed by a noun phrase or gerund ('Despite the small sample size...' or 'Despite being small...'). Option B is therefore ungrammatical.",
    },
    {
      prompt: "Which sentence correctly uses an adverbial clause of cause?",
      options: [
        "Because the intervention was introduced late, its effects were limited.",
        "However the intervention was introduced late, its effects were limited.",
      ],
      correct: 0,
      explanation: "'Because' is a subordinating conjunction correctly used to introduce a causal adverbial clause. 'However' is a conjunctive adverb (discourse marker) and cannot introduce a subordinate clause — it connects independent clauses or sentences. Option B is therefore ungrammatical.",
    },
    {
      prompt: "Which sentence uses an adverbial clause of condition to express an uncertain future outcome?",
      options: [
        "If the effect is replicated in subsequent studies, the theory will gain empirical support.",
        "When the effect is replicated in subsequent studies, the theory will gain empirical support.",
      ],
      correct: 0,
      explanation: "'If' introduces a conditional clause — it treats replication as uncertain (possible but not certain). 'When' treats replication as certain (a matter of time, not possibility). In academic contexts, 'if' is more epistemically honest when an outcome is not guaranteed.",
    },
    {
      prompt: "Which sentence correctly uses an adverbial clause of concession to acknowledge a scope limitation?",
      options: [
        "While this study focuses on quantitative measures, qualitative insights remain equally valuable.",
        "Although this study focuses on quantitative measures because qualitative insights remain equally valuable.",
      ],
      correct: 0,
      explanation: "Option A correctly uses 'while' as a subordinating conjunction of concession, creating a balanced acknowledgement of a limitation. Option B conflates two clause types: 'although... because' creates a structural contradiction — a concession cannot simultaneously be explained by a cause within the same clause.",
    },
    {
      prompt: "Which sentence uses an adverbial clause to express contrast rather than cause?",
      options: [
        "Whereas experimental studies control variables, observational studies capture real-world complexity.",
        "Because experimental studies control variables, observational studies capture real-world complexity.",
      ],
      correct: 0,
      explanation: "'Whereas' introduces a contrast adverbial clause — it highlights a difference between two approaches without implying that one causes the other. 'Because' (option B) would imply that controlling variables is the reason observational studies capture complexity, which is logically incorrect here.",
    },
  ],

};
