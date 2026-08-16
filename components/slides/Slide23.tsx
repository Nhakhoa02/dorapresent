"use client";

import React from "react";
import Image from "next/image";

export const Slide23: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">23 — GOAL 1: ASR MODEL SEARCH — ASR
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Inside Zipformer: Model architecture
        </h2>
      </div>

      {/* Full-Height Image Container */}
      <div className="flex flex-col justify-between items-center h-full min-h-0 flex-1">
        <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E]">
          <Image
            src="/images/model_structure.png"
            alt="Zipformer Model Architecture Diagram"
            fill
            className="object-contain object-center p-2"
            priority
          />
        </div>
        <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
          ZIPFORMER MODEL ARCHITECTURE
        </span>
      </div>
    </div>
  );
};
