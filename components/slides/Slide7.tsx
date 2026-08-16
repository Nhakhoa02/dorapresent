"use client";

import React from "react";
import { AlertCircle, HelpCircle } from "lucide-react";

export const Slide7: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 select-none space-y-4 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">07 — MOTIVATIONS
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          The existing gaps
        </h2>

      </div>

      {/* 3 Core Gap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 items-stretch min-h-0 py-2">
        {/* Card 1: High-Resource Bias */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-5 rounded-2xl flex flex-col justify-start space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex items-center justify-between">
            <span className="w-8 h-8 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] font-mono font-extrabold text-xs text-[#14422D] flex items-center justify-center group-hover:scale-110 transition-transform">
              01
            </span>
            <span className="font-mono text-[10px] font-bold text-[#D97757] uppercase tracking-widest">
              LANGUAGE BIAS
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-base text-[#14422D] leading-snug">
            High-Resource Language Focus
          </h3>
          <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
            Advances in ASR and CAPT primarily target high-resource languages such as English and Mandarin, while Vietnamese spoken pronunciation assessment remains comparatively underexplored.
          </p>
        </div>

        {/* Card 2: Subscription Fees & Financial Barriers */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-5 rounded-2xl flex flex-col justify-start space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex items-center justify-between">
            <span className="w-8 h-8 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] font-mono font-extrabold text-xs text-[#14422D] flex items-center justify-center group-hover:scale-110 transition-transform">
              02
            </span>
            <span className="font-mono text-[10px] font-bold text-[#D97757] uppercase tracking-widest">
              FINANCIAL BARRIER
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-base text-[#14422D] leading-snug">
            Subscription Fees
          </h3>
          <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
            Existing commercial applications require subscription fees that reduce accessibility for economically disadvantaged learners.
          </p>
        </div>

        {/* Card 3: Missing Sub-Syllable & Adaptive Loops */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-5 rounded-2xl flex flex-col justify-start space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex items-center justify-between">
            <span className="w-8 h-8 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] font-mono font-extrabold text-xs text-[#14422D] flex items-center justify-center group-hover:scale-110 transition-transform">
              03
            </span>
            <span className="font-mono text-[10px] font-bold text-[#D97757] uppercase tracking-widest">
              METHODOLOGY GAP
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-base text-[#14422D] leading-snug">
            Missing Sub-Syllable &amp; Adaptive Loops
          </h3>
          <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
            Most solutions lack sub-syllable diagnostic analysis (Onset, Rime, Tone) and do not integrate dynamic adaptive tracking (such as EWMA and Spaced Repetition) tailored to individual learner profiles.
          </p>
        </div>
      </div>


    </div>
  );
};
