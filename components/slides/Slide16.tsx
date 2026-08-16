"use client";

import React from "react";
import { Flame, DollarSign } from "lucide-react";

export const Slide16: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 lg:p-8 select-none space-y-4 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">16 — GOAL 1: ASR MODEL SEARCH — CAPT
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          Candidate 2: TextPA — Two main weaknesses
        </h2>
      </div>

      {/* 2 Clean Side-by-Side Weakness Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0 my-auto py-2">
        {/* Weakness 1: Hallucinations */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-6 lg:p-8 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6 text-[#D97757]" />
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#14422D]">
                  LLM Hallucinations
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#414943] leading-relaxed">
              Generative multimodal models hallucinate feedback, producing inconsistent scores and fabricating non-existent errors across identical audio runs.
            </p>
          </div>
        </div>

        {/* Weakness 2: High Server Infrastructure Costs */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-6 lg:p-8 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-[#14422D]" />
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#14422D]">
                  High Server Infrastructure Costs
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#414943] leading-relaxed">
              Hosting a multimodal LLM requires dedicated server infrastructure, creating heavy recurring hosting costs that make it difficult to offer a completely free application for disadvantaged learners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
