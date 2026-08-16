"use client";

import React from "react";
import { Gamepad2, CheckCircle2, Award } from "lucide-react";

export const Slide43: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">43 — RESULT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Demo: Gamified reading scramble
        </h2>
      </div>

      {/* Main Feature Screenshot Frame */}
      <div className="flex-1 bg-white border-2 border-[#14422D] rounded-xl p-3.5 lg:p-4 shadow-md flex flex-col justify-between min-h-0 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-[#D97757]" />
            <h3 className="font-heading font-extrabold text-base text-[#14422D]">
              5. Interactive Sub-Syllable Scramble Game Mode
            </h3>
          </div>
          <span className="font-mono text-[10px] text-white bg-[#14422D] px-2 py-0.5 rounded font-bold">
            Gamified Learning Loop
          </span>
        </div>

        {/* Mobile Screenshot Frame */}
        <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-[#FAF9F5] rounded-lg border border-[#C0C9C1] p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/scramble.jpg"
            alt="Doraebin Gamified Reading Scramble Mode"
            className="max-h-full max-w-full object-contain rounded"
          />
        </div>


      </div>


    </div>
  );
};
