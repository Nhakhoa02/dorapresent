"use client";

import React, { useState } from "react";
import { Mic, Layers } from "lucide-react";

export const Slide42: React.FC = () => {
  const [activeImg, setActiveImg] = useState<"reading" | "bank">("reading");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">42 — RESULT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Demo: Assessment &amp; Word inventory
        </h2>
      </div>

      {/* Grid: 2 Side-by-Side Mobile Screenshots (Max 2 per slide) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 items-stretch min-h-0">
        {/* Screenshot 1: Word Reading Assessment */}
        <div
          onClick={() => setActiveImg("reading")}
          className={`border-2 rounded-xl p-3.5 flex flex-col justify-between transition-all cursor-pointer min-h-0 ${activeImg === "reading"
            ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.01]"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-[#D97757]" />
                <h3 className="font-heading font-extrabold text-sm text-[#14422D]">
                  3. Diagnostic CAPT Speech Assessment
                </h3>
              </div>
              <span className="font-mono text-[10px] text-white bg-[#14422D] px-2 py-0.5 rounded font-bold">
                Zipformer ASR
              </span>
            </div>

            {/* Mobile Screenshot Frame */}
            <div className="bg-white p-2 rounded-lg border border-[#C0C9C1] flex-1 flex items-center justify-center min-h-0 overflow-hidden shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/word_reading.jpg"
                alt="Doraebin Diagnostic Reading Assessment Interface"
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>


          </div>
        </div>

        {/* Screenshot 2: Word Bank Inventory */}
        <div
          onClick={() => setActiveImg("bank")}
          className={`border-2 rounded-xl p-3.5 flex flex-col justify-between transition-all cursor-pointer min-h-0 ${activeImg === "bank"
            ? "bg-[#FAF9F5] border-[#D97757] shadow-md scale-[1.01]"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D97757]" />
                <h3 className="font-heading font-extrabold text-sm text-[#14422D]">
                  4. Syllable Word Bank &amp; Curriculum
                </h3>
              </div>
              <span className="font-mono text-[10px] text-white bg-[#D97757] px-2 py-0.5 rounded font-bold">
                6,500 Syllable Inventory
              </span>
            </div>

            {/* Mobile Screenshot Frame */}
            <div className="bg-[#FAF9F5] p-2 rounded-lg border border-[#C0C9C1] flex-1 flex items-center justify-center min-h-0 overflow-hidden shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/word_bank.jpg"
                alt="Doraebin Word Bank Inventory Interface"
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
