"use client";

import React from "react";
import Image from "next/image";

export const Slide14: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">14 — GOAL 1: ASR MODEL SEARCH — CAPT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Candidate 2: TextPA — Re-implementation &amp; Evaluation
        </h2>
      </div>

      {/* 2 Full-Height Side-by-Side Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0">
        {/* Left Column: Project Structure */}
        <div className="flex flex-col justify-between items-center h-full min-h-0">
          <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E]">
            <Image
              src="/images/test_textPA.png"
              alt="TextPA Re-implementation Project Structure"
              fill
              className="object-contain object-center p-1"
              priority
            />
          </div>
          <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
            PROJECT STRUCTURE
          </span>
        </div>

        {/* Right Column: Result */}
        <div className="flex flex-col justify-between items-center h-full min-h-0">
          <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E]">
            <Image
              src="/images/textPA_good.png"
              alt="TextPA Phonetic Alignment Result"
              fill
              className="object-contain object-center p-1"
              priority
            />
          </div>
          <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
            RESULT
          </span>
        </div>
      </div>
    </div>
  );
};
