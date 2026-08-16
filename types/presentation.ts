export interface Chapter {
  id: string;
  title: string;
  slides: number[];
}

export interface SlideData {
  id: number;
  chapterId: string;
  categoryTag: string;
  title: string;
  subtitle?: string;
  speakerNotes: string;
}

export const CHAPTERS: Chapter[] = [
  { id: "intro", title: "1. Introduction & Context", slides: [1, 2, 3, 4, 5] },
  { id: "theory", title: "2. Objectives & Related Work", slides: [6, 7, 8, 9] },
  { id: "search", title: "3. Goal 1: ASR Model Search & Selection", slides: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
  { id: "methodology", title: "4. Goals 2-6: Core Engines & Methodologies", slides: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
  { id: "results", title: "5. Empirical Results & Conclusion", slides: [41, 42, 43, 44, 45] },
];

export const SLIDES_METADATA: Record<number, SlideData> = {
  1: {
    id: 1,
    chapterId: "intro",
    categoryTag: "BACHELOR'S THESIS DEFENSE",
    title: "Doraebin - An offline mobile application for Vietnamese Reading Assessment and Learning",
    subtitle: "",
    speakerNotes: "Welcome esteemed committee members. Today I present Doraebin, an offline mobile application for Vietnamese Reading Assessment and Learning engineered for children in remote and disaster-prone regions."
  },
  2: {
    id: 2,
    chapterId: "intro",
    categoryTag: "02 — CONTRIBUTIONS",
    title: "From Contributions to Solution",
    subtitle: "Key innovations and contributions of the Doraebin system",
    speakerNotes: "In Slide 2, we highlight our core four contributions: 1) Tonal language phonological adaptation, 2) On-device neural execution with zero API cost, 3) 6,500-syllable inventory mapping, and 4) Closed-loop adaptive progression."
  },
  3: {
    id: 3,
    chapterId: "intro",
    categoryTag: "03 — PROBLEM CONTEXT: CLOSED-LOOP FEEDBACK PIPELINE",
    title: "The Closed-Loop Reading Assessment Pipeline",
    subtitle: "4-Stage End-to-End Offline Feedback Loop: Audio Input → CAPT Diagnostics → Auditory Feedback → Adaptive SRS",
    speakerNotes: "In Slide 3, we illustrate the closed-loop reading assessment challenge: 1) Learner speaks target audio, 2) CAPT diagnoses sub-syllable errors across Onset, Rime, Tone, 3) Native TTS provides auditory feedback & spelling songs, and 4) Adaptive EWMA/SRS selects the next exercise."
  },
  4: {
    id: 4,
    chapterId: "intro",
    categoryTag: "04 — THE PROBLEM",
    title: "Why need an app?",
    subtitle: "Addressing disaster disruptions, network blackouts, and financial barriers",
    speakerNotes: "In Slide 4, we answer why an app is needed: 1) Natural disaster school closures, 2) Complete network and power blackouts, and 3) Financial poverty preventing cloud API usage."
  },
  5: {
    id: 5,
    chapterId: "intro",
    categoryTag: "05 — BACKGROUND",
    title: "Syllable Structure of the Vietnamese Language",
    subtitle: "Onset, Rime, Tone Decomposition and Minimal Pair Phonological Dynamics",
    speakerNotes: "In Slide 5, we provide an overview of Vietnamese word structure: 1) Mono-syllabic principle, 2) Tripartite decomposition into Onset (27), Rime (160), and Tone (6), and 3) Minimal pair pitch contours where tone changes word meaning completely."
  },
  6: {
    id: 6,
    chapterId: "theory",
    categoryTag: "06 — MOTIVATIONS",
    title: "Why existing reading apps fall short?",
    subtitle: "Commercial Reading Apps Limitations: Lack of Tone Diagnostics, Cloud Internet Dependency, and High Cost",
    speakerNotes: "In Slide 6, we analyze why existing apps fall short: Commercial reading apps use whole-word flashcards without sub-syllable tone feedback, require constant 4G/5G internet, and impose expensive monthly subscriptions."
  },
  7: {
    id: 7,
    chapterId: "theory",
    categoryTag: "07 — MOTIVATIONS",
    title: "The existing gaps",
    subtitle: "High-Resource Bias, Subscription Fee Barriers, and Missing Sub-Syllable Adaptive Loops",
    speakerNotes: "In Slide 7, we examine technical gaps in literature: 1) High-resource language bias, 2) Subscription fees reducing accessibility for economically disadvantaged learners alongside cloud reliance, and 3) Missing sub-syllable & adaptive loops."
  },
  8: {
    id: 8,
    chapterId: "theory",
    categoryTag: "08 — GOALS",
    title: "Goals of our solution",
    subtitle: "6 Core Pillars: On-Device ASR, Decomposition Engine, Evaluation System, Adaptive Engine, Offline TTS, UI/UX Design & Local Storage",
    speakerNotes: "In Slide 8, we define our 6 primary system goals: 1) On-device ASR via Sherpa-ONNX, 2) Syllable decomposition, 3) Sub-syllable diagnostic feedback, 4) EWMA + SM-2 adaptive framework, 5) Offline TTS support, and 6) Local storage for full offline operation."
  },
  9: {
    id: 9,
    chapterId: "theory",
    categoryTag: "09 — RELATED WORK",
    title: "ASR vs. CAPT: Fundamental Paradigm Shift",
    subtitle: "Speech Recognition (Transcription) vs. Diagnostic CAPT (Onset, Rime, Tone)",
    speakerNotes: "In Slide 9, we present related work contrasting ASR and CAPT: ASR asks 'What did the learner intend to say?' and normalizes errors. CAPT asks 'What was actually said?' and diagnoses acoustic errors across Onset, Rime, and Tone."
  },
  10: {
    id: 10,
    chapterId: "search",
    categoryTag: "10 — GOAL 1: ASR MODEL SEARCH — CAPT",
    title: "Candidate 1: Azure Speech — The differences",
    subtitle: "Benchmarking Azure English vs. Vietnamese Pronunciation Assessment Criteria",
    speakerNotes: "In Slide 10, we compare Azure Speech English vs Vietnamese assessment: Azure English offers detailed phoneme scores, whereas Azure Vietnamese lacks sub-phoneme decomposition."
  },
  11: {
    id: 11,
    chapterId: "search",
    categoryTag: "11 — GOAL 1: ASR MODEL SEARCH — CAPT",
    title: "Candidate 1: Azure Speech — Two Main Weaknesses",
    subtitle: "Analyzing Financial Unviability and Incomplete Diagnostic Feedback",
    speakerNotes: "In Slide 11, we examine Azure's 2 primary weaknesses: Financial unviability and incomplete diagnostic feedback in Vietnamese."
  },
  12: {
    id: 12,
    chapterId: "search",
    categoryTag: "12 — GOAL 1: AZURE SPEECH ABLATION",
    title: "Candidate 1: Azure Speech — JSON Response Evidence",
    subtitle: "Empirical Phoneme Breakdown: US English Returns IPA Strings vs. Vietnamese Empty Phoneme Failure",
    speakerNotes: "In Slide 12, we examine JSON code evidence comparing US_sampleJson.txt (returning IPA strings like 't', 'ə') vs VN_azure_fail.txt (returning empty phoneme strings '')."
  },
  13: {
    id: 13,
    chapterId: "search",
    categoryTag: "13 — GOAL 1: ASR MODEL SEARCH — CAPT",
    title: "Candidate 2: TextPA (LLM Audio Evaluation)",
    subtitle: "Architecture Overview of Text-guided Phonetic Alignment Multimodal Speech LLM",
    speakerNotes: "In Slide 13, we examine Candidate 2 TextPA LLM architecture."
  },
  14: {
    id: 14,
    chapterId: "search",
    categoryTag: "14 — GOAL 1: ASR MODEL SEARCH — CAPT",
    title: "Candidate 2: TextPA — Re-implementation & Evaluation",
    subtitle: "Re-creating TextPA Pipeline and Benchmarking Alignment Results on Vietnamese Speech",
    speakerNotes: "In Slide 14, we demonstrate our re-implementation of TextPA."
  },
  15: {
    id: 15,
    chapterId: "search",
    categoryTag: "15 — GOAL 1: ASR MODEL SEARCH — CAPT",
    title: "Candidate 2: TextPA — Hallucination Cases",
    subtitle: "Analyzing Empirical Failure Screenshots of Multimodal LLM Audio Alignment",
    speakerNotes: "In Slide 15, we showcase empirical failure cases of TextPA hallucinations."
  },
  16: {
    id: 16,
    chapterId: "search",
    categoryTag: "16 — GOAL 1: ASR MODEL SEARCH — CAPT",
    title: "Candidate 2: TextPA — Two Main Weaknesses",
    subtitle: "Analyzing LLM Hallucinations and High Server Infrastructure Costs",
    speakerNotes: "In Slide 16, we examine Candidate 2 TextPA's 2 main weaknesses: 1) LLM Hallucinations on noisy speech, and 2) High server hosting infrastructure costs that make it difficult to offer a free application for disadvantaged learners."
  },
  17: {
    id: 17,
    chapterId: "search",
    categoryTag: "17 — GOAL 1: ASR MODEL SEARCH — ASR",
    title: "Candidate 3: Google Speech-to-Text (STT)",
    subtitle: "Evaluating Commercial Cloud Speech Recognition Results",
    speakerNotes: "In Slide 17, we evaluate Candidate 3 Google Speech-to-Text (STT) cloud transcription results."
  },
  18: {
    id: 18,
    chapterId: "search",
    categoryTag: "18 — GOAL 1: ASR MODEL SEARCH — ASR",
    title: "Candidate 4: OpenAI Whisper (Whisper-turbo)",
    subtitle: "Benchmarking Whisper Python Setup and Transcription Results on Vietnamese Audio",
    speakerNotes: "In Slide 18, we present Candidate 4 OpenAI Whisper setup and transcription results."
  },
  19: {
    id: 19,
    chapterId: "search",
    categoryTag: "19 — GOAL 1: ASR MODEL SEARCH — ASR",
    title: "Candidate 4: WhisperX with Confidence Score",
    subtitle: "Evaluating WhisperX Phoneme Alignment Extension Results",
    speakerNotes: "In Slide 19, we evaluate Candidate 4 WhisperX alignment extension results."
  },
  20: {
    id: 20,
    chapterId: "search",
    categoryTag: "20 — GOAL 1: ASR MODEL SEARCH — ASR",
    title: "Candidate 4: Whisper Family — Two Main Weaknesses",
    subtitle: "Analyzing Heavy Model Parameters, Hardware Constraints, and Lack of Sub-Syllable Feedback",
    speakerNotes: "In Slide 20, we examine Candidate 4 Whisper family's 2 main weaknesses: 1) Heavy model parameters requiring server setups or high-end mobile hardware, making free learning tools on budget phones difficult, and 2) Lack of native sub-syllable phonological diagnostics."
  },
  21: {
    id: 21,
    chapterId: "search",
    categoryTag: "21 — GOAL 1: SOLUTION — ZIPFORMER ASR",
    title: "Goal 1 Solution: Zipformer-30M & Sherpa-ONNX",
    subtitle: "On-Device Lightweight Neural Speech Recognition for Zero-Cost Offline Mobile Assessment",
    speakerNotes: "In Slide 21, we present our chosen Goal 1 solution: Zipformer-30M lightweight neural model compiled for Sherpa-ONNX C++ runtime."
  },
  22: {
    id: 22,
    chapterId: "search",
    categoryTag: "22 — GOAL 1: COMPARATIVE DECISION MATRIX",
    title: "Goal 1: Comparative Decision Matrix",
    subtitle: "Evaluating 5 Candidate Solutions across CAPT and ASR Paradigms",
    speakerNotes: "In Slide 22, we summarize all 5 candidate models evaluated for Goal 1."
  },
  23: {
    id: 23,
    chapterId: "search",
    categoryTag: "23 — GOAL 1: ZIPFORMER ARCHITECTURE",
    title: "Inside Zipformer: Model Architecture",
    subtitle: "Zipformer U-Net-like Zip-Layers & Conformer Downsampling",
    speakerNotes: "In Slide 23, we examine the internal structure of Zipformer-30M, highlighting its U-Net-like downsampling zip-layers."
  },
  24: {
    id: 24,
    chapterId: "search",
    categoryTag: "24 — GOAL 1: ON-DEVICE DEPLOYMENT",
    title: "On-Device Model Deployment & Execution",
    subtitle: "Thesis §4.7: Sherpa-ONNX Runtime Integration & Zipformer-30M Quantization",
    speakerNotes: "In Slide 24, we examine Thesis §4.7 detailing Sherpa-ONNX runtime initialization, model quantization, and real-time on-device inference execution."
  },
  25: {
    id: 25,
    chapterId: "methodology",
    categoryTag: "25 — GOAL 2: PHONOLOGICAL DECOMPOSITION",
    title: "Goal 2: Vietnamese Phonological Decomposition",
    subtitle: "Rule-Based Vietnamese Syllable Breakdown (`vi_spelling.dart`) into Onset, Rime, and Tone",
    speakerNotes: "In Slide 25, we detail Goal 2: Rule-based Vietnamese syllable breakdown (`vi_spelling.dart`). To mirror primary school spelling instruction, we compiled an inventory of 27 initials, 160 rimes, and 5 tones covering 6,500 standard syllables."
  },
  26: {
    id: 26,
    chapterId: "methodology",
    categoryTag: "26 — GOAL 2: SPELLING SONG GENERATION",
    title: "Goal 2: Spelling Song Generation Algorithm",
    subtitle: "Synthesizing Phonological Assembly Paths for Elementary School Reading Guidance",
    speakerNotes: "In Slide 26, we present the Spelling Song Generation Algorithm which synthesizes sub-syllable components into structured spelling songs matching elementary school pedagogy."
  },
  27: {
    id: 27,
    chapterId: "methodology",
    categoryTag: "27 — GOAL 5: TTS AUDITORY ADAPTATION",
    title: "Text-to-Speech Auditory Adaptation Engine",
    subtitle: "Consonant Phonetization and Stop-Consonant Tone Correction Rules",
    speakerNotes: "In Slide 27, we present Goal 5: Text-to-Speech Auditory Adaptation Engine detailing Consonant Phonetization (suffixing neutral vowel 'ờ') and Stop-Consonant Tone Correction (Sắc tone forced on 'ch', 'c', 'p', 't')."
  },
  28: {
    id: 28,
    chapterId: "methodology",
    categoryTag: "28 — GOAL 2: THREE CORE FUNCTIONS",
    title: "Three Core Functions of `vi_spelling.dart`",
    subtitle: "Decouple Breakdown, Spelling Song Generation, and TTS Auditory Adaptation",
    speakerNotes: "In Slide 28, we summarize the 3 core functions of vi_spelling.dart: Decouple breakdown, Spelling song generation, and Spelling adaptation to TTS."
  },
  29: {
    id: 29,
    chapterId: "methodology",
    categoryTag: "29 — GOAL 3: PRONUNCIATION ASSESSMENT",
    title: "Goal 3: Diagnostic Pronunciation Assessment (CAPT)",
    subtitle: "Sub-Syllable Diagnostic Matching (Onset, Rime, Tone) via ASR-Decomposition Alignment",
    speakerNotes: "In Slide 29, we present Goal 3: Diagnostic Pronunciation Assessment (CAPT) using sub-syllable matching across Onset, Rime, and Tone."
  },
  30: {
    id: 30,
    chapterId: "methodology",
    categoryTag: "30 — GOAL 4: ADAPTIVE PROGRESSION BASELINES",
    title: "Why Basic Progression Models Fail",
    subtitle: "Evaluating Linear Accumulation and Success-to-Trial Ratio Limitations (Thesis §4.4)",
    speakerNotes: "In Slide 30, we examine why basic progression models fail: Linear Accumulation (unbounded & sensitive) and Success-to-Trial Ratio (historical bias permanently penalizing early struggles)."
  },
  31: {
    id: 31,
    chapterId: "methodology",
    categoryTag: "31 — GOAL 4: EWMA MASTERY MODEL",
    title: "Exponentially Weighted Moving Average (EWMA)",
    subtitle: "Mathematically Bounded Component Mastery Tracking (Thesis §4.4 / Eq. 4.3 – 4.4)",
    speakerNotes: "In Slide 31, we detail the Exponentially Weighted Moving Average (EWMA) model recurrence relation and show a numerical step simulation where a single error flags the component for revision."
  },
  32: {
    id: 32,
    chapterId: "methodology",
    categoryTag: "32 — GOAL 4: SPACED REPETITION ALGORITHM",
    title: "When to revise?",
    subtitle: "Modified SuperMemo-2 (SM-2) Spaced Repetition & Tripartite Component Tracking (Thesis §4.4)",
    speakerNotes: "In Slide 32, we answer 'When to revise?' detailing the modified SuperMemo-2 (SM-2) spaced repetition algorithm and independent tripartite component tracking (Onset, Rime, Tone)."
  },
  33: {
    id: 33,
    chapterId: "methodology",
    categoryTag: "33 — GOAL 4: PERSONALIZED LEARNING ADAPTATION",
    title: "What's the difference?",
    subtitle: "Dynamic Recall R = e^(-λ(t-1)) (Eq. 4.12) & Adaptive Learning Rate Adjustment (Eq. 4.13–4.14)",
    speakerNotes: "In Slide 33, we detail personalized learning adaptation: Equation 4.12 defines dynamic recall R = e^(-lambda*(t-1)) with lambda = 0.6. Baseline alpha_0 = 0.80 and beta = 0.15. Fast Learners (t=1, R=1.0) increase alpha toward 0.875. Slow Learners (t>1, R<0.5) dampen alpha toward 0.725 to enforce repeated practice."
  },
  34: {
    id: 34,
    chapterId: "methodology",
    categoryTag: "34 — GOAL 4: CURRICULUM ALLOCATION ENGINE",
    title: "What to learn?",
    subtitle: "Dynamic Curriculum Allocation Matrix Based on Learner Profile Recall Range (R̄)",
    speakerNotes: "In Slide 34, we answer 'What to learn?' detailing the curriculum allocation engine: 1. SRS Due (session count >= SM-2 interval I), 2. Weakness (mastery M < 0.75 or error streak), and 3. New Acquisition (unseen components restricted to 5% for slow learners up to 30% for fast learners)."
  },
  35: {
    id: 35,
    chapterId: "methodology",
    categoryTag: "35 — GOAL 4: EMPIRICAL BENCHMARKS",
    title: "Benchmark for user",
    subtitle: "Empirical Mastery Trajectories for Onset Consonants and Rime Units (Thesis §5.3)",
    speakerNotes: "In Slide 35, we present 'Benchmark for user' displaying empirical mastery trajectories across Onset consonants and Rime units for Fast, Normal, and Slow learners."
  },
  36: {
    id: 36,
    chapterId: "methodology",
    categoryTag: "36 — GOAL 5: ON-DEVICE TTS EVALUATION",
    title: "Goal 5: On-Device TTS Support & Limitations",
    subtitle: "Evaluating Recent Neural TTS Architectures for Offline Mobile Reading Pedagogy",
    speakerNotes: "In Slide 36, we evaluate Goal 5 On-device TTS models: VITS/Piper (robotic audio quality), Flow-Matching F5-TTS (high compute latency), and VieNeuTTS (lightweight custom G2P frontend)."
  },
  37: {
    id: 37,
    chapterId: "methodology",
    categoryTag: "37 — GOAL 5: NATIVE TTS AUDITORY ADAPTATION",
    title: "Goal 5: Why Native TTS Fallback Was Chosen",
    subtitle: "Overcoming Out-of-Distribution Neural Distortions via Native OS Auditory Adaptation",
    speakerNotes: "In Slide 37, we explain why native TTS fallback (`flutter_tts`) was chosen to eliminate Out-of-Distribution (OOD) static noise and audio distortion when rendering fragmented spelling song tokens."
  },
  38: {
    id: 38,
    chapterId: "methodology",
    categoryTag: "38 — GOAL 6: OFFLINE MOBILE ENGINEERING",
    title: "Goal 6: Mobile System Specifications & Tech Stack",
    subtitle: "Full 100% On-Device Architecture with Zero Cloud API Dependencies (Thesis §4.6 – §4.7)",
    speakerNotes: "In Slide 38, we detail Goal 6 Mobile System Specifications: Flutter framework, Dart language, SQLite local database, Zipformer-30M FP32 model, Sherpa-ONNX runtime, and Native OS TTS."
  },
  39: {
    id: 39,
    chapterId: "methodology",
    categoryTag: "39 — END-TO-END SYSTEM WORKFLOW",
    title: "End-to-End System Workflow",
    subtitle: "Complete Architectural Pipeline Integrating Speech Recognition, Phonological Breakdown, Adaptive EWMA, & Native TTS (Thesis §4.1)",
    speakerNotes: "In Slide 39, we present the End-to-End System Workflow displaying full_app_function.png architecture diagram."
  },
  40: {
    id: 40,
    chapterId: "methodology",
    categoryTag: "40 — MODULAR APP ARCHITECTURE",
    title: "Application Architecture & Modular Structure",
    subtitle: "Clean Layered Architecture & Component Separation (Thesis §4.6)",
    speakerNotes: "In Slide 40, we examine the Application Architecture & Modular Structure displaying project_structure.png and 3 core module specifications."
  },
  41: {
    id: 41,
    chapterId: "results",
    categoryTag: "41 — RESULT: ALL IN ONE (PART 1)",
    title: "All in One: Dashboard & Learning Interface",
    subtitle: "Empirical Mobile Interface for Dashboard Tracking & Interactive Word Learning",
    speakerNotes: "In Slide 41, we showcase All in One Part 1 displaying dash_board.jpg and word_learning.jpg."
  },
  42: {
    id: 42,
    chapterId: "results",
    categoryTag: "42 — RESULT: ALL IN ONE (PART 2)",
    title: "All in One: Assessment & Word Inventory",
    subtitle: "Sub-Syllable Diagnostic Speech Assessment & Inventory Word Bank",
    speakerNotes: "In Slide 42, we showcase All in One Part 2 displaying word_reading.jpg and word_bank.jpg."
  },
  43: {
    id: 43,
    chapterId: "results",
    categoryTag: "43 — RESULT: ALL IN ONE (PART 3)",
    title: "All in One: Gamified Reading Scramble",
    subtitle: "Interactive Sub-Syllable Drag-and-Drop Scramble Game",
    speakerNotes: "In Slide 43, we showcase All in One Part 3 displaying scramble.jpg for gamified practice."
  },
  44: {
    id: 44,
    chapterId: "results",
    categoryTag: "44 — SYSTEM CAPABILITIES SUMMARY",
    title: "Summary of System Capabilities (Goals 1 – 6)",
    subtitle: "Operational Verification Matrix Across 6 Primary Goals (Thesis Table 4.1)",
    speakerNotes: "In Slide 44, we summarize system capabilities (Thesis Table 4.1) mapping Functional Requirements to Technical Implementations and Operational Verifications."
  },
  45: {
    id: 45,
    chapterId: "results",
    categoryTag: "45 — FUTURE ROADMAP",
    title: "Four Future Research Directions, on One Roadmap",
    subtitle: "Frame Logit Forced Alignment, Longitudinal Validation, and Neural TTS",
    speakerNotes: "Future directions include exposing Zipformer frame-level logits for continuous GOP scoring, long-term empirical calibration with primary school students, and custom VieNeuTTS neural synthesis with voice cloning."
  }
};
