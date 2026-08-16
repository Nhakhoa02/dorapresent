"use client";

import React from "react";
import { Server, Layers } from "lucide-react";

export const Slide20: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 lg:p-8 select-none space-y-4 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">20 — GOAL 1: ASR MODEL SEARCH — ASR
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          Candidate 4: Whisper family — Two main weaknesses
        </h2>
      </div>

      {/* 2 Clean Side-by-Side Weakness Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0 my-auto py-2">
        {/* Weakness 1: Heavy Model Parameters & Hardware Constraints */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-6 lg:p-8 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6 text-[#D97757]" />
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#14422D]">
                  Hardware Constraints
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#414943] leading-relaxed">
              Heavy model parameters (Whisper ~800MB–1.5GB) require dedicated server setups or high-end mobile hardware, making it difficult to offer a free, accessible learning tool on budget smartphones.
            </p>
          </div>
        </div>

        {/* Weakness 2: Lack of Detailed Feedback */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-6 lg:p-8 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-[#14422D]" />
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#14422D]">
                  Lack of Detailed Phonological Feedback
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#414943] leading-relaxed">
              Standard ASR models transcribe text or return whole-word confidence scores without isolating Initial Consonants (Onset), Rimes, or Lexical Tones required for primary reading instruction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
