"use client";

import React, { useState } from "react";
import { TrendingUp, CheckCircle2, Award, LineChart } from "lucide-react";

export const Slide35: React.FC = () => {
  const [activeChart, setActiveChart] = useState<"initial" | "rime">("initial");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">35 — GOAL 4: ADAPTIVE LEARNING FRAMEWORK
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Progress tracking
        </h2>
      </div>

      {/* Grid: Side-by-Side Dual Image Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Chart Card: Onset / Initial Consonants */}
        <div
          onClick={() => setActiveChart("initial")}
          className={`border-2 rounded-xl p-4 flex flex-col justify-between transition-all cursor-pointer min-h-0 ${activeChart === "initial"
            ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.01]"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-[#D97757]" />
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#14422D]">
                  1. Initial Consonant (Onset) Progression
                </h3>
              </div>
              <span className="font-mono text-[10px] text-white bg-[#14422D] px-2 py-0.5 rounded font-bold">
                Thesis §5.3
              </span>
            </div>

            {/* Image Container */}
            <div className="bg-white p-2 rounded-lg border border-[#C0C9C1] flex-1 flex items-center justify-center min-h-0 overflow-hidden shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/adaptive_progress_initial.png"
                alt="Adaptive Learning Progress - Initial Consonants"
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>


          </div>
        </div>

        {/* Right Chart Card: Rime Units */}
        <div
          onClick={() => setActiveChart("rime")}
          className={`border-2 rounded-xl p-4 flex flex-col justify-between transition-all cursor-pointer min-h-0 ${activeChart === "rime"
            ? "bg-[#FAF9F5] border-[#D97757] shadow-md scale-[1.01]"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#D97757]" />
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#14422D]">
                  2. Rime Unit Progression
                </h3>
              </div>
              <span className="font-mono text-[10px] text-white bg-[#D97757] px-2 py-0.5 rounded font-bold">
                Thesis §5.3
              </span>
            </div>

            {/* Image Container */}
            <div className="bg-white p-2 rounded-lg border border-[#C0C9C1] flex-1 flex items-center justify-center min-h-0 overflow-hidden shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/adaptive_progress_rime.png"
                alt="Adaptive Learning Progress - Rime Units"
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>


          </div>
        </div>
      </div>


    </div>
  );
};
