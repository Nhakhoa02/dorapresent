"use client";

import React from "react";
import Image from "next/image";

export const Slide15: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">15 — GOAL 1: ASR MODEL SEARCH — CAPT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Candidate 2: TextPA — Hallucination case
        </h2>
      </div>

      {/* 2 Full-Height Side-by-Side Images (No Background, No Box Container) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0">
        {/* Left Column: textPA_bad_2 */}
        <div className="flex flex-col justify-between items-center h-full min-h-0">
          <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E]">
            <Image
              src="/images/textPA_bad_2.png"
              alt="TextPA LLM Hallucinated Error Feedback Case 1"
              fill
              className="object-contain object-center p-1"
              priority
            />
          </div>
          {/* <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
            HALLUCINATED ERROR FEEDBACK
          </span> */}
        </div>

        {/* Right Column: texPA_bad_3 */}
        <div className="flex flex-col justify-between items-center h-full min-h-0">
          <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E]">
            <Image
              src="/images/texPA_bad_3.png"
              alt="TextPA Non-Deterministic Scoring Output Case 2"
              fill
              className="object-contain object-center p-1"
              priority
            />
          </div>
          {/* <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
            NON-DETERMINISTIC OUTPUT
          </span> */}
        </div>
      </div>
    </div>
  );
};
