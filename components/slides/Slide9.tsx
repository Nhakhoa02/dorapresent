"use client";

import React from "react";
import Image from "next/image";
import { Mic, SearchCheck } from "lucide-react";

export const Slide9: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">09 — GOAL 1: ASR MODEL SEARCH
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          ASR vs. CAPT: Fundamental paradigm shift
        </h2>
      </div>

      {/* Grid: 2 Side-by-Side Cards (ASR vs CAPT) with Center Visual Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch min-h-0">
        {/* Left Column: 2 Concise Comparison Cards (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Card 1: ASR */}
          <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-4 rounded-xl space-y-2 flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#D97757] text-white flex items-center justify-center shrink-0">
                  <Mic className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider">
                  ASR (SPEECH RECOGNITION)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#414943] leading-snug">
                <strong>Goal:</strong> <em>&quot;What the user INTENT to say?&quot;</em>
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-1 mt-1 block">
              Output: Whole-Word Text Transcript
            </span>
          </div>

          {/* Card 2: CAPT */}
          <div className="bg-[#E0F2E9] border-2 border-[#14422D] p-4 rounded-xl space-y-2 flex-1 flex flex-col justify-between shadow-sm">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#14422D] text-white flex items-center justify-center shrink-0">
                  <SearchCheck className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider">
                  CAPT (PRONUNCIATION TUTOR)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#14422D] font-medium leading-snug">
                <strong>Goal:</strong> <em>&quot;What WAS said?&quot;</em>
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#14422D] font-bold border-t border-[#B0AEA5] pt-1 mt-1 block">
              OUTPUT: DIAGNOSTIC SCORES ON THE OUTPUT TRANSCRIPTION
            </span>
          </div>
        </div>

        {/* Right Column: High-Res Visual Illustration comparing ASR vs CAPT (7 Cols) */}
        <div className="lg:col-span-7 bg-[#EFEEEA] border-2 border-[#14422D] rounded-xl p-3 flex flex-col justify-between shadow-md">
          <div className="relative w-full flex-1 rounded-lg overflow-hidden min-h-[260px] bg-white">
            <Image
              src="/images/asr_vs_capt_hero.png"
              alt="Visual Comparison of ASR vs CAPT Paradigms"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
