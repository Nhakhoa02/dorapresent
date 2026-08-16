"use client";

import React from "react";
import Image from "next/image";

export const Slide10: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 lg:p-8 select-none space-y-4 bg-[#FAF9F5] overflow-hidden">
      {/* Header matching Reference */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">10 — GOAL 1: ASR MODEL SEARCH — CAPT
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          Candidate 1: Azure Speech — The differences
        </h2>
      </div>

      {/* 2 Clean Side-by-Side Framed Image Cards (No Outer Box, Matching Reference Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0">
        {/* Left Card: Azure English (US) Assessment */}
        <div className="relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-between bg-[#EFEEEA] border border-[#C0C9C1]">
          {/* Top Pill Overlay */}
          <div className="absolute top-3 left-3 z-10 bg-[#14422D] text-white font-mono text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow">
            AZURE ENGLISH (US) ASSESSMENT
          </div>

          {/* Image Container */}
          <div className="relative w-full flex-1 bg-white">
            <Image
              src="/images/azure_Pronunciation_USCriteria.png"
              alt="Azure English Pronunciation Assessment Benchmark"
              fill
              className="object-contain p-2"
              priority
            />
          </div>


        </div>

        {/* Right Card: Azure Vietnamese Assessment */}
        <div className="relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-between bg-[#EFEEEA] border border-[#C0C9C1]">
          {/* Top Pill Overlay */}
          <div className="absolute top-3 left-3 z-10 bg-[#D97757] text-white font-mono text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow">
            AZURE VIETNAMESE ASSESSMENT
          </div>

          {/* Image Container */}
          <div className="relative w-full flex-1 bg-white">
            <Image
              src="/images/azure_Pronunciation_VNCriteria.png"
              alt="Azure Vietnamese Pronunciation Assessment Benchmark"
              fill
              className="object-contain p-2"
              priority
            />
          </div>


        </div>
      </div>
    </div>
  );
};
