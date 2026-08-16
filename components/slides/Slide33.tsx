"use client";

import React, { useState } from "react";
import { Zap, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { MathEquation } from "@/components/MathEquation";

export const Slide33: React.FC = () => {
  const [selectedLearner, setSelectedLearner] = useState<"fast" | "slow">("fast");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">33 — GOAL 4: ADAPTIVE LEARNING FRAMEWORK
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Learning performance tracking
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: Adaptive Learning Rate Formulations (6 Cols) */}
        <div className="lg:col-span-6 bg-[#EFEEEA] border border-[#C0C9C1] p-4 lg:p-5 rounded-xl flex flex-col justify-between space-y-3 min-h-0">
          <div className="space-y-2.5 overflow-y-auto pr-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D97757]" />
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                PERSONALIZED RECALL &amp; LEARNING RATE FORMULATION
              </span>
            </div>

            <p className="text-xs text-[#414943] leading-relaxed">
              We define a dynamic recall capability variable <MathEquation latex="R \in (0, 1]" displayMode={false} /> measured per component via exponential decay based on trial count <MathEquation latex="t" displayMode={false} /> until correctness (<MathEquation latex="M \ge 0.75" displayMode={false} />):
            </p>

            {/* Formatted Equations with Exact Thesis Equations 4.12 - 4.14 */}
            <div className="space-y-2 font-mono text-xs">
              {/* Equation 4.12: Exponential Recall Decay Function */}
              <div className="bg-white p-2 rounded-lg border border-[#C0C9C1]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-[#717973] font-bold">1. Recall Decay Function (<MathEquation latex="\lambda = 0.6" displayMode={false} />):</span>
                  <span className="text-[10px] text-[#D97757] font-bold bg-[#EFEEEA] px-1.5 py-0.5 rounded">Eq. 4.12</span>
                </div>
                <div className="bg-[#FAF9F5] p-1.5 rounded border border-[#C0C9C1] text-center">
                  <MathEquation latex="R = e^{-\lambda \cdot (t - 1)} \quad (t = 1 \implies R = 1.0)" displayMode={true} />
                </div>
              </div>

              {/* Equation 4.13: Adjustment Factor */}
              <div className="bg-white p-2 rounded-lg border border-[#C0C9C1]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-[#717973] font-bold">2. Adjustment Factor (<MathEquation latex="\beta = 0.15" displayMode={false} />):</span>
                  <span className="text-[10px] text-[#D97757] font-bold bg-[#EFEEEA] px-1.5 py-0.5 rounded">Eq. 4.13</span>
                </div>
                <div className="bg-[#FAF9F5] p-1.5 rounded border border-[#C0C9C1] text-center">
                  <MathEquation latex="r = \beta \cdot (R - 0.5) \quad (\beta = 0.15)" displayMode={true} />
                </div>
              </div>

              {/* Equation 4.14: Dynamic Alpha */}
              <div className="bg-white p-2 rounded-lg border border-[#C0C9C1]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-[#717973] font-bold">3. Dynamic Learning Rate (<MathEquation latex="\alpha_0 = 0.80" displayMode={false} />):</span>
                  <span className="text-[10px] text-[#D97757] font-bold bg-[#EFEEEA] px-1.5 py-0.5 rounded">Eq. 4.14</span>
                </div>
                <div className="bg-[#FAF9F5] p-1.5 rounded border border-[#C0C9C1] text-center">
                  <MathEquation latex="\alpha = \alpha_0 + r = 0.80 + 0.15 \cdot (R - 0.5)" displayMode={true} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E0F2E9] border border-[#14422D] p-2.5 rounded-lg flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#14422D] shrink-0" />
            <span className="font-sans text-xs text-[#14422D] font-medium">
              Bounds dynamic learning rate strictly between <MathEquation latex="\alpha_{\min} = 0.325" displayMode={false} /> and <MathEquation latex="\alpha_{\max} = 0.875" displayMode={false} />.
            </span>
          </div>
        </div>

        {/* Right Column: Fast vs. Slow Learner Profile Cards (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 min-h-0">
          {/* Card 1: Fast Learners (R > 0.5) */}
          <div
            onClick={() => setSelectedLearner("fast")}
            className={`border-2 rounded-xl p-4 transition-all cursor-pointer flex-1 flex flex-col justify-between ${selectedLearner === "fast"
              ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.01]"
              : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-white bg-[#14422D] px-2.5 py-0.5 rounded flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> FAST LEARNERS
                </span>
                <span className="font-mono text-xs font-bold text-[#14422D]">
                  <MathEquation latex="R > 0.5" displayMode={false} />
                </span>
              </div>

              <div className="font-mono text-xs bg-white p-2 rounded border border-[#C0C9C1] flex items-center justify-between">
                <span className="text-[#717973]">Positive Boost (<MathEquation latex="r > 0" displayMode={false} />):</span>
                <MathEquation latex="\alpha \to \alpha_{\max} = 0.875" displayMode={false} className="font-bold text-[#14422D]" />
              </div>

              <p className="text-xs sm:text-sm text-[#333C36] leading-relaxed">
                First-attempt accuracy (<MathEquation latex="t=1 \implies R=1.0" displayMode={false} />) yields <MathEquation latex="r > 0" displayMode={false} />, increasing <MathEquation latex="\alpha" displayMode={false} /> toward a maximum of <strong>0.875</strong>. Accelerates mastery accumulation, letting quick learners pass components rapidly.
              </p>
            </div>
          </div>

          {/* Card 2: Slow Learners (R < 0.5) */}
          <div
            onClick={() => setSelectedLearner("slow")}
            className={`border-2 rounded-xl p-4 transition-all cursor-pointer flex-1 flex flex-col justify-between ${selectedLearner === "slow"
              ? "bg-[#FAF9F5] border-[#D97757] shadow-md scale-[1.01]"
              : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-white bg-[#D97757] px-2.5 py-0.5 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> SLOW LEARNERS
                </span>
                <span className="font-mono text-xs font-bold text-[#D97757]">
                  <MathEquation latex="R < 0.5" displayMode={false} />
                </span>
              </div>

              <div className="font-mono text-xs bg-white p-2 rounded border border-[#C0C9C1] flex items-center justify-between">
                <span className="text-[#717973]">Dampening (<MathEquation latex="r < 0" displayMode={false} />):</span>
                <MathEquation latex="\alpha \to \alpha_{\min} = 0.325" displayMode={false} className="font-bold text-[#D97757]" />
              </div>

              <p className="text-xs sm:text-sm text-[#333C36] leading-relaxed">
                Multiple struggles (<MathEquation latex="t > 1" displayMode={false} />) decay recall (<MathEquation latex="R < 0.5" displayMode={false} />) and yield <MathEquation latex="r < 0" displayMode={false} />, dampening <MathEquation latex="\alpha" displayMode={false} /> toward <strong>0.325</strong>. Reduces score volatility, requiring consistent repeated correct answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
