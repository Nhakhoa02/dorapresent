"use client";

import React, { useState } from "react";
import { AlertTriangle, XCircle, ShieldAlert } from "lucide-react";
import { MathEquation } from "@/components/MathEquation";

export const Slide30: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<"linear" | "ratio">("linear");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">30 — GOAL 3: PRONUNCIATION ASSESSMENT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Why basic progression models fail
        </h2>
      </div>

      {/* Grid: 2 Comparative Rejected Models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 items-stretch min-h-0">
        {/* Model 1: Linear Accumulation Model */}
        <div
          onClick={() => setSelectedModel("linear")}
          className={`border-2 rounded-xl p-4 lg:p-5 flex flex-col justify-between transition-all cursor-pointer ${selectedModel === "linear"
            ? "bg-[#FAF9F5] border-[#D97757] shadow-md"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-white bg-[#D97757] px-2 py-0.5 rounded">
                REJECTED BASELINE 1
              </span>
              <span className="font-mono text-[10px] text-[#717973] font-bold">
                Additive Step Model
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#14422D]">
                1. Linear Accumulation Model
              </h3>
              {/* Formula Display rendered in KaTeX LaTeX */}
              <div className="bg-white p-3 rounded-lg border border-[#C0C9C1] text-[#14422D] text-center shadow-xs overflow-x-auto">
                <MathEquation
                  latex="M_t = M_{t-1} + \alpha \cdot S_t \quad (S_t \in \{-1, 1\})"
                  displayMode={true}
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
              Registers correct or incorrect attempts via static additive step adjustments <MathEquation latex="\alpha" displayMode={false} />.
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <div className="bg-white p-2.5 rounded-lg border border-[#C0C9C1] flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span className="text-[#14422D]">
                  <strong>Mathematically Unbounded:</strong> Easily drifts into negative values (<MathEquation latex="M_t < 0" displayMode={false} />) or infinitely high scores.
                </span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-[#C0C9C1] flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span className="text-[#14422D]">
                  <strong>Sensitivity Dilemma:</strong> Small <MathEquation latex="\alpha" displayMode={false} /> causes sluggish progress; large <MathEquation latex="\alpha" displayMode={false} /> causes a single error to trigger massive, unrealistic score swings.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#C0C9C1] flex items-center gap-2 text-xs sm:text-sm text-[#D97757] font-mono font-bold">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Fails to Model Long-Term Cognitive Acquisition</span>
          </div>
        </div>

        {/* Model 2: Success-to-Trial Ratio Model */}
        <div
          onClick={() => setSelectedModel("ratio")}
          className={`border-2 rounded-xl p-4 lg:p-5 flex flex-col justify-between transition-all cursor-pointer ${selectedModel === "ratio"
            ? "bg-[#FAF9F5] border-[#D97757] shadow-md"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-white bg-[#D97757] px-2 py-0.5 rounded">
                REJECTED BASELINE 2
              </span>
              <span className="font-mono text-[10px] text-[#717973] font-bold">
                Cumulative Average Model
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#14422D]">
                2. Success-to-Trial Ratio Model
              </h3>
              {/* Formula Display rendered in KaTeX LaTeX */}
              <div className="bg-white p-3 rounded-lg border border-[#C0C9C1] text-[#14422D] text-center shadow-xs overflow-x-auto">
                <MathEquation
                  latex="M_t = \frac{\sum_{i=1}^k S_i}{k} \quad (S_i \in \{0, 1\})"
                  displayMode={true}
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
              Estimates mastery as cumulative percentage of successes over total attempts <MathEquation latex="k" displayMode={false} />.
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <div className="bg-white p-2.5 rounded-lg border border-[#C0C9C1] flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span className="text-[#14422D]">
                  <strong>Severe Historical Bias:</strong> Permanently penalizes students for early learning struggles.
                </span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-[#C0C9C1] flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span className="text-[#14422D]">
                  <strong>Redundant Over-Review:</strong> Failing 6 times initially, then mastering 4 times consecutively yields only <strong>40%</strong> (<MathEquation latex="M_t = 0.4" displayMode={false} />), forcing frustrating over-review.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#C0C9C1] flex items-center gap-2 text-xs sm:text-sm text-[#D97757] font-mono font-bold">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Permanently Penalizes Learner's Early Struggles</span>
          </div>
        </div>
      </div>
    </div>
  );
};
