"use client";

import React from "react";
import Image from "next/image";

export const Slide13: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 lg:p-8 select-none space-y-4 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">13 — GOAL 1: ASR MODEL SEARCH — CAPT
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          Candidate 2: TextPA (LLM audio evaluation)
        </h2>
      </div>

      {/* Clean Full-Height Image Container displaying TextPA Architecture */}
      <div className="relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-between flex-1 min-h-0 bg-[#EFEEEA] border border-[#C0C9C1]">
        {/* Top Tag Overlay */}
        <div className="absolute top-3 left-3 z-10 bg-[#14422D] text-white font-mono text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow">
          TEXTPA ARCHITECTURE OVERVIEW
        </div>

        {/* Image Container */}
        <div className="relative w-full flex-1 bg-white">
          <Image
            src="/images/textPA_architecture_ref.png"
            alt="TextPA Multimodal LLM Speech Assessment Architecture Diagram"
            fill
            className="object-contain p-3"
            priority
          />
        </div>

      </div>
    </div>
  );
};
