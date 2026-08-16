"use client";

import React from "react";
import Image from "next/image";
import { DollarSign, AlertCircle } from "lucide-react";

export const Slide11: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-5 lg:p-7 select-none space-y-4 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">11 — GOAL 1: ASR MODEL SEARCH — CAPT
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          Candidate 1: Azure Speech — Two main weaknesses
        </h2>
      </div>

      {/* 2 Main Weakness Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0">
        {/* Weakness 1: Financial Unviability */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-5 rounded-2xl flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#14422D]">
                  Financial Unviability
                </h3>
              </div>
              {/* <span className="font-mono text-[10px] font-bold text-[#D97757] bg-[#EFEEEA] px-2.5 py-1 rounded border border-[#C0C9C1] uppercase tracking-wider">
                COST LIMITATION
              </span> */}
            </div>

            <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
              Recurring usage fees make it difficult to offer a free, long-term educational tool for disadvantaged communities in remote mountain communes.
            </p>
          </div>

          {/* Screenshot Evidence Container */}
          <div className="bg-[#EFEEEA] border border-[#C0C9C1] rounded-xl p-2 flex flex-col justify-between">
            <div className="relative w-full h-[140px] rounded-lg overflow-hidden bg-white border border-[#C0C9C1]">
              <Image
                src="/images/azure_Pronunciation_Payasyougo.png"
                alt="Azure Pronunciation Pay As You Go Pricing Tier"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

          </div>
        </div>

        {/* Weakness 2: Incomplete Diagnostic Feedback */}
        <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-5 rounded-2xl flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-[#D97757]" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#14422D]">
                  Incomplete Diagnostic Feedback
                </h3>
              </div>
              {/* <span className="font-mono text-[10px] font-bold text-[#D97757] bg-[#EFEEEA] px-2.5 py-1 rounded border border-[#C0C9C1] uppercase tracking-wider">
                DIAGNOSTIC LIMITATION
              </span> */}
            </div>

            <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
              The lack of phoneme string returns in Vietnamese prevents the application from providing targeted correction instructions for learners.
            </p>
          </div>

          {/* Screenshot Evidence Container */}
          <div className="bg-[#EFEEEA] border border-[#C0C9C1] rounded-xl p-2 flex flex-col justify-between">
            <div className="relative w-full h-[140px] rounded-lg overflow-hidden bg-white border border-[#C0C9C1]">
              <Image
                src="/images/azure_Pro_test_VNfail.png"
                alt="Azure Speech API Test Failure Screenshot"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
