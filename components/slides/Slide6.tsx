"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle, WifiOff, DollarSign } from "lucide-react";

export const Slide6: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-4 bg-[#FAF9F5]">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-1">06 — MOTIVATION
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Why existing reading apps fall short?
        </h2>
      </div>

      {/* Grid: 2 Columns (3 Key Limitations on Left, Real App Examples Screenshot Image on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch min-h-0">
        {/* Left Column: 3 Core Limitations (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          {/* Card 1: No Sub-Syllable Feedback */}
          <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-4 rounded-sm flex flex-col justify-between flex-1">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#D97757] text-white flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider">
                  NO SUB-SYLLABLE DIAGNOSTIC FEEDBACK
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
                Commercial apps (e.g., Monkey Junior, Duolingo) use whole-word matching or flashcards, failing to pinpoint whether errors stem from initials, rimes, or tone contours.
              </p>
            </div>

          </div>

          {/* Card 2: Internet Dependency */}
          <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-4 rounded-sm flex flex-col justify-between flex-1">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#14422D] text-white flex items-center justify-center shrink-0">
                  <WifiOff className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider">
                  MANDATORY CLOUD INTERNET DEPENDENCY
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
                Require active wireless connection to use the apps, completely unusable during disaster blackouts in remote mountain communes.
              </p>
            </div>

          </div>

          {/* Card 3: High Subscription Costs */}
          <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-4 rounded-sm flex flex-col justify-between flex-1">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#D97757] text-white flex items-center justify-center shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider">
                  HIGH SUBSCRIPTION &amp; API FEES
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
                Monthly subscription fees or charge per audio minute, creating an impossible financial barrier for low-resource ethnic minority families.
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Real Commercial App Examples Image Container (5 Cols) */}
        <div className="lg:col-span-5 bg-[#EFEEEA] border border-[#C0C9C1] rounded-lg p-3 flex flex-col justify-between shadow-sm">
          <div className="relative w-full flex-1 rounded-sm overflow-hidden min-h-[260px] bg-white border border-[#C0C9C1]">
            <Image
              src="/images/vietnamese_learning_app_examples.png"
              alt="Existing Commercial Vietnamese Reading Apps Examples"
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Caption */}
          <div className="text-center pt-2.5 pb-1">
            <span className="font-mono text-[11px] font-bold text-[#717973] uppercase tracking-wider block">
              An example local app learning with rime "Ong"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
