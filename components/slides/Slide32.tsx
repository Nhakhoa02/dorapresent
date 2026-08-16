"use client";

import React, { useState } from "react";
import { Clock, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { MathEquation } from "@/components/MathEquation";

export const Slide32: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"correct" | "incorrect">("correct");
  const [activeComponent, setActiveComponent] = useState<number>(2); // Default 2 (Rime)

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">32 — GOAL 4: ADAPTIVE LEARNING FRAMEWORK
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          When to revise?
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: Clickable Modified SM-2 Interval Rules with Beautiful Math (6 Cols) */}
        <div className="lg:col-span-6 bg-[#EFEEEA] border border-[#C0C9C1] p-4 lg:p-5 rounded-xl flex flex-col justify-between space-y-3 min-h-0">
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D97757]" />
                <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                  MODIFIED SUPERMEMO-2 (SM-2)
                </span>
              </div>

              {/* Clickable Mode Switcher */}
              <div className="flex gap-1.5 font-mono text-[11px]">
                <button
                  onClick={() => setActiveTab("correct")}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${activeTab === "correct"
                    ? "bg-[#14422D] text-white shadow-sm scale-[1.02]"
                    : "bg-white text-[#717973] border border-[#C0C9C1] hover:bg-[#E0F2E9]"
                    }`}
                >
                  Correct (q=5)
                </button>
                <button
                  onClick={() => setActiveTab("incorrect")}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${activeTab === "incorrect"
                    ? "bg-[#D97757] text-white shadow-sm scale-[1.02]"
                    : "bg-white text-[#717973] border border-[#C0C9C1] hover:bg-[#E0F2E9]"
                    }`}
                >
                  Incorrect (q=0)
                </button>
              </div>
            </div>

            {/* Formatted Math Equations Display */}
            {activeTab === "correct" ? (
              <div className="space-y-2 font-mono text-xs">
                {/* Eq 4.5: Repetition Count */}
                <div className="bg-white p-2.5 rounded-lg border-2 border-[#14422D] shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[#14422D] font-bold text-[11px]">
                    <span>1. Repetition Count Increment</span>
                    <span className="text-[#D97757] bg-[#EFEEEA] px-1.5 py-0.5 rounded border border-[#C0C9C1]">
                      Eq. 4.5
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] p-2 rounded text-center border border-[#C0C9C1]">
                    <MathEquation latex="n_t = n_{t-1} + 1" displayMode={true} />
                  </div>
                </div>

                {/* Eq 4.6: Review Interval Expansion */}
                <div className="bg-white p-2.5 rounded-lg border-2 border-[#14422D] shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[#14422D] font-bold text-[11px]">
                    <span>2. Review Interval Expansion</span>
                    <span className="text-[#D97757] bg-[#EFEEEA] px-1.5 py-0.5 rounded border border-[#C0C9C1]">
                      Eq. 4.6
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] p-2 rounded border border-[#C0C9C1] space-y-1 text-center">
                    <MathEquation latex="I_t = \begin{cases} 1 & \text{if } n_t = 1 \\ 6 & \text{if } n_t = 2 \\ \lfloor I_{t-1} \cdot EF_{t-1} \rfloor & \text{if } n_t > 2 \end{cases}" displayMode={true} />
                  </div>
                </div>

                {/* Eq 4.8: Easiness Boost */}
                <div className="bg-white p-2.5 rounded-lg border-2 border-[#14422D] shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[#14422D] font-bold text-[11px]">
                    <span>3. Easiness Factor Boost</span>
                    <span className="text-[#D97757] bg-[#EFEEEA] px-1.5 py-0.5 rounded border border-[#C0C9C1]">
                      Eq. 4.8
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] p-2 rounded text-center border border-[#C0C9C1]">
                    <MathEquation latex="EF_t = \max(1.3, \, EF_{t-1} + 0.1)" displayMode={true} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2 font-mono text-xs">
                {/* Eq 4.9: Repetition Reset */}
                <div className="bg-white p-2.5 rounded-lg border-2 border-[#D97757] shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[#D97757] font-bold text-[11px]">
                    <span>1. Repetition Reset</span>
                    <span className="text-white bg-[#D97757] px-1.5 py-0.5 rounded">
                      Eq. 4.9
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] p-2 rounded text-center border border-[#D97757]/30">
                    <MathEquation latex="n_t = 0" displayMode={true} />
                  </div>
                </div>

                {/* Eq 4.10: Immediate Re-queue */}
                <div className="bg-white p-2.5 rounded-lg border-2 border-[#D97757] shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[#D97757] font-bold text-[11px]">
                    <span>2. Immediate Re-queue Interval</span>
                    <span className="text-white bg-[#D97757] px-1.5 py-0.5 rounded">
                      Eq. 4.10
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] p-2 rounded text-center border border-[#D97757]/30">
                    <MathEquation latex="I_t = 1 \text{ day (Active Review Queue)}" displayMode={true} />
                  </div>
                </div>

                {/* Eq 4.11: Easiness Maintained */}
                <div className="bg-white p-2.5 rounded-lg border-2 border-[#C0C9C1] shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[#14422D] font-bold text-[11px]">
                    <span>3. Easiness Maintained</span>
                    <span className="text-[#D97757] bg-[#EFEEEA] px-1.5 py-0.5 rounded border border-[#C0C9C1]">
                      Eq. 4.11
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] p-2 rounded text-center border border-[#C0C9C1]">
                    <MathEquation latex="EF_t = EF_{t-1}" displayMode={true} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-[#E0F2E9] border border-[#14422D] p-2.5 rounded-lg flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-[#14422D] shrink-0" />
            <span className="font-sans text-xs text-[#14422D] font-medium">
              Immediate session re-queuing forces mispronounced items back into active review.
            </span>
          </div>
        </div>

        {/* Right Column: Independent Clickable Tripartite Component Tracking (6 Cols) */}
        <div className="lg:col-span-6 bg-[#FAF9F5] border-2 border-[#14422D] rounded-xl p-4 lg:p-5 shadow-md flex flex-col justify-between min-h-0">
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                COMPONENT TRACKING
              </span>
              <span className="font-mono text-[10px] text-[#D97757] bg-[#EFEEEA] px-2 py-0.5 rounded border border-[#C0C9C1]">
                (n, I, EF) Per Component
              </span>
            </div>

            <p className="text-xs text-[#414943] leading-relaxed">
              Our progression engine tracks <code className="font-mono bg-[#EFEEEA] px-1 rounded text-[#14422D]">n, I, EF</code> independently across 3 phonological components:
            </p>

            <div className="space-y-2 text-xs">
              {/* Onset */}
              <div
                onClick={() => setActiveComponent(1)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${activeComponent === 1
                  ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-sm"
                  : "bg-white border-[#C0C9C1] hover:bg-[#EFEEEA]"
                  }`}
              >
                <strong className="text-[#14422D] flex items-center gap-1.5 font-heading text-xs">
                  <span className={`w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center font-mono ${activeComponent === 1 ? "bg-[#D97757]" : "bg-[#14422D]"}`}>
                    1
                  </span>
                  Onset (Initial Consonant)
                </strong>
                <p className="text-[11px] text-[#717973] pl-5 mt-1">
                  Starting consonant cluster (e.g., <code className="font-mono">"th"</code> in <code className="font-mono">"thầy"</code>).
                </p>
              </div>

              {/* Rime */}
              <div
                onClick={() => setActiveComponent(2)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${activeComponent === 2
                  ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-sm"
                  : "bg-white border-[#C0C9C1] hover:bg-[#EFEEEA]"
                  }`}
              >
                <strong className="text-[#14422D] flex items-center gap-1.5 font-heading text-xs">
                  <span className={`w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center font-mono ${activeComponent === 2 ? "bg-[#D97757]" : "bg-[#14422D]"}`}>
                    2
                  </span>
                  Rime (Nucleus Vowel + Coda Ending)
                </strong>
                <p className="text-[11px] text-[#14422D] pl-5 mt-1 leading-snug">
                  Tracked as a <strong>singular unit</strong> because phonotactic constraints bind vowel &amp; coda tightly (e.g., mastering <code className="font-mono">"ă"</code> and <code className="font-mono">"n"</code> in isolation does not guarantee blending into <code className="font-mono">"ăn"</code>).
                </p>
              </div>

              {/* Tone */}
              <div
                onClick={() => setActiveComponent(3)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${activeComponent === 3
                  ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-sm"
                  : "bg-white border-[#C0C9C1] hover:bg-[#EFEEEA]"
                  }`}
              >
                <strong className="text-[#14422D] flex items-center gap-1.5 font-heading text-xs">
                  <span className={`w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center font-mono ${activeComponent === 3 ? "bg-[#D97757]" : "bg-[#14422D]"}`}>
                    3
                  </span>
                  Tone (Lexical Tone)
                </strong>
                <p className="text-[11px] text-[#717973] pl-5 mt-1">
                  Diacritic pitch contour applying to the syllable (e.g., <code className="font-mono">"Huyền"</code>).
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#C0C9C1] flex items-center gap-1.5 text-xs text-[#14422D] font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#14422D]" />
            <span>Personalizes Review Intervals for Specific Phonological Weaknesses</span>
          </div>
        </div>
      </div>
    </div>
  );
};
