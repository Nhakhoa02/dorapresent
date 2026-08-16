"use client";

import React, { useState } from "react";
import { SyllableDecomposerWidget } from "@/components/widgets/SyllableDecomposerWidget";

export const Slide25: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const STEPS = [
    {
      step: 1,
      title: "1. Orthographic Special Case Resolution",
      desc: "Vietnamese spelling rules contain exceptions for `gi` and `qu`. The algorithm screens input against predefined dictionary of exceptions.",
    },
    {
      step: 2,
      title: "2. Unicode Normalization & Tone Extraction",
      desc: "Normalizes input to NFD to extract combining tone marks (\\u0300 Huyền, \\u0309 Hỏi, \\u0303 Ngã, \\u0301 Sắc, \\u0323 Nặng, None Ngang).",
    },
    {
      step: 3,
      title: "3. Onset (Initial Consonant) Extraction",
      desc: "Greedy prefix-matches base against 28 valid initials sorted by length (`ngh` → `n`).",
    },
    {
      step: 4,
      title: "4. Coda (Final Consonant) Extraction",
      desc: "Greedy suffix-matches remaining sequence against 8 valid final consonants (`ch`, `nh`, `ng`, `c`, `m`, `n`, `p`, `t`).",
    },
    {
      step: 5,
      title: "5. Nucleus (Vowel) Resolution",
      desc: "The remaining middle characters form the vocalic nucleus (monophthongs, diphthongs, or triphthongs).",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">25 — GOAL 2: PHONOLOGICAL DECOMPOSITION
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Vietnamese phonological decomposition
        </h2>
      </div>

      {/* Grid: 2 Columns (Clickable 5 Steps on Left, Interactive Decomposer on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: 5 Sequential Algorithm Steps (Extra Large +2px Text) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-2 flex-1 min-h-0 overflow-y-auto pr-1">
          {STEPS.map((item) => {
            const isActive = item.step === activeStep;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-start gap-4 border ${isActive
                  ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-md text-[#14422D] scale-[1.005]"
                  : "bg-[#FAF9F5] border-[#C0C9C1] text-[#1B1C1A] hover:bg-[#EFEEEA]"
                  }`}
              >
                <span
                  className={`w-8 h-8 rounded-full font-mono font-black text-base flex items-center justify-center shrink-0 mt-0.5 ${isActive
                    ? "bg-[#14422D] text-white"
                    : "bg-[#D97757] text-white"
                    }`}
                >
                  {item.step}
                </span>
                <div className="space-y-1 flex-1">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-[#14422D] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium text-[#29302B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Syllable Decomposer Widget (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col min-h-0">
          <SyllableDecomposerWidget />
        </div>
      </div>
    </div>
  );
};
