"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export const Slide26: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<string>("toán");
  const [activeLeftStep, setActiveLeftStep] = useState<number | null>(null);
  const [activeRightStep, setActiveRightStep] = useState<number | null>(null);

  const SAMPLES = [
    {
      word: "toán",
      steps: [
        { num: 1, label: "Nucleus Letters", val: "o - a" },
        { num: 2, label: "Coda Appended", val: "n" },
        { num: 3, label: "Complete Rhyme", val: "oan" },
        { num: 4, label: "Onset & Base Fusion", val: "t - oan - toan" },
        { num: 5, label: "Lexical Tone Named", val: "sắc" },
        { num: 6, label: "Final Accented Word", val: "toán" },
      ],
      fullSong: "o - a - n - oan - t - oan - toan - sắc - toán",
    },
    {
      word: "giếng",
      steps: [
        { num: 1, label: "Nucleus Letters", val: "i - ê" },
        { num: 2, label: "Coda Appended", val: "ng" },
        { num: 3, label: "Complete Rhyme", val: "iêng" },
        { num: 4, label: "Onset & Base Fusion", val: "gi - iêng - giêng" },
        { num: 5, label: "Lexical Tone Named", val: "sắc" },
        { num: 6, label: "Final Accented Word", val: "giếng" },
      ],
      fullSong: "gi - iêng - giêng - sắc - giếng",
    },
    {
      word: "trường",
      steps: [
        { num: 1, label: "Nucleus Letters", val: "ư - ơ" },
        { num: 2, label: "Coda Appended", val: "ng" },
        { num: 3, label: "Complete Rhyme", val: "ương" },
        { num: 4, label: "Onset & Base Fusion", val: "tr - ương - trương" },
        { num: 5, label: "Lexical Tone Named", val: "huyền" },
        { num: 6, label: "Final Accented Word", val: "trường" },
      ],
      fullSong: "ư - ơ - ng - ương - tr - ương - trương - huyền - trường",
    },
  ];

  const currentSample =
    SAMPLES.find((s) => s.word === selectedWord) || SAMPLES[0];

  const STEPS = [
    {
      step: 1,
      title: "1. Letter-by-Letter Nucleus",
      desc: "The individual characters of the vocalic nucleus are spelled letter-by-letter (e.g. `o`, `a`).",
    },
    {
      step: 2,
      title: "2. Coda (Final Consonant) Appendage",
      desc: "The final consonant (coda) is appended (e.g. `n`).",
    },
    {
      step: 3,
      title: "3. Complete Rhyme Fusion",
      desc: "The nucleus and coda are spoken together as the complete rhyme (e.g. `oan`).",
    },
    {
      step: 4,
      title: "4. Onset & Base Pronunciation",
      desc: "Initial consonant introduced (`t`), followed by rhyme (`oan`) → joint unaccented pronunciation (`toan`).",
    },
    {
      step: 5,
      title: "5. Lexical Tone Naming",
      desc: "The lexical tone is named (e.g. `sắc`).",
    },
    {
      step: 6,
      title: "6. Final Accented Word",
      desc: "The final accented word is spoken (e.g. `toán`).",
    },
  ];

  const handleToggleLeftStep = (stepNum: number) => {
    setActiveLeftStep((prev) => (prev === stepNum ? null : stepNum));
  };

  const handleToggleRightStep = (stepNum: number) => {
    setActiveRightStep((prev) => (prev === stepNum ? null : stepNum));
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-2 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">26 — GOAL 2: PHONOLOGICAL DECOMPOSITION
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Spelling song generation algorithm
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: 6 Sequential Steps (3px Bigger Text, 6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-1.5 flex-1 min-h-0 overflow-y-auto pr-1">
          {STEPS.map((item) => {
            const isActive = item.step === activeLeftStep;
            return (
              <button
                key={item.step}
                onClick={() => handleToggleLeftStep(item.step)}
                className={`text-left p-2.5 sm:p-3 rounded-xl transition-all duration-200 flex items-start gap-3 border ${isActive
                  ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-md text-[#14422D] scale-[1.005]"
                  : "bg-[#FAF9F5] border-[#C0C9C1] text-[#1B1C1A] hover:bg-[#EFEEEA]"
                  }`}
              >
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full font-mono font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 ${isActive
                    ? "bg-[#14422D] text-white"
                    : "bg-[#D97757] text-white"
                    }`}
                >
                  {item.step}
                </span>
                <div className="space-y-0.5 flex-1">
                  <h3 className="font-heading font-black text-base sm:text-lg text-[#14422D] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#29302B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Example Visualizer (Fits Perfectly Inside Frame) */}
        <div className="lg:col-span-6 flex flex-col min-h-0">
          <div className="bg-[#EFEEEA] border-2 border-[#14422D] rounded-xl p-3 sm:p-4 shadow-md flex flex-col justify-between flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97757]" />
                  <span className="font-mono text-xs sm:text-sm font-extrabold text-[#14422D] uppercase tracking-wider">
                    DEMONSTRATION
                  </span>
                </div>

                {/* Example Word Selector Chips */}
                <div className="flex gap-1.5">
                  {SAMPLES.map((s) => (
                    <button
                      key={s.word}
                      onClick={() => setSelectedWord(s.word)}
                      className={`px-3 py-1 text-xs sm:text-sm font-mono rounded-md border transition-all ${selectedWord === s.word
                        ? "bg-[#14422D] text-white border-[#14422D] font-extrabold shadow-xs"
                        : "bg-[#FAF9F5] text-[#1B1C1A] border-[#C0C9C1] hover:bg-[#E0F2E9]"
                        }`}
                    >
                      {s.word}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step-by-step Execution Visualizer (Scrollable if needed, fits frame) */}
              <div className="space-y-1.5 font-mono flex-1 min-h-0 overflow-y-auto pr-0.5">
                {currentSample.steps.map((st) => {
                  const isStepActive = st.num === activeRightStep;
                  return (
                    <button
                      key={st.num}
                      onClick={() => handleToggleRightStep(st.num)}
                      className={`w-full text-left p-2 rounded-lg border transition-all flex items-center justify-between ${isStepActive
                        ? "bg-[#14422D] text-white border-[#14422D] shadow-sm font-bold scale-[1.01]"
                        : "bg-[#FAF9F5] text-[#1B1C1A] border-[#C0C9C1] hover:bg-[#E0F2E9]"
                        }`}
                    >
                      <span
                        className={`text-xs sm:text-sm font-semibold ${isStepActive ? "text-white/90" : "text-[#414943]"
                          }`}
                      >
                        Step {st.num}: {st.label}
                      </span>
                      <span
                        className={`font-bold ${isStepActive
                          ? "text-[#D97757] bg-white px-2 py-0.5 rounded text-xs sm:text-sm"
                          : "text-[#14422D] text-xs sm:text-sm"
                          }`}
                      >
                        {st.val}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Synthesized Output Banner (Fits neatly at bottom inside container) */}
            <div className="bg-[#14422D] text-white p-2.5 sm:p-3 rounded-lg flex flex-col space-y-0.5 mt-2 shadow-sm shrink-0">
              <span className="font-mono text-[11px] text-[#D97757] uppercase font-extrabold tracking-wider">
                FULL GENERATED SPELLING SONG PATH:
              </span>
              <span className="font-mono text-sm sm:text-base font-extrabold text-amber-300">
                "{currentSample.fullSong}"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
