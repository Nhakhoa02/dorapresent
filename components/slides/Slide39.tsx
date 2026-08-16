"use client";

import React from "react";
import { Workflow } from "lucide-react";

export const Slide39: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">39 — GOAL 6: MOBILE INTERFACE & LOCAL STORAGE
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          End-to-End System Workflow
        </h2>
      </div>

      {/* Main Image Frame Container taking full height */}
      <div className="flex-1 bg-white border-2 border-[#14422D] rounded-xl p-3 lg:p-4 shadow-md flex flex-col justify-between min-h-0 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-[#D97757]" />
            <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
              DORAEBIN ARCHITECTURAL PIPELINE &amp; FUNCTIONAL FLOW
            </span>
          </div>
          <span className="font-mono text-[10px] text-white bg-[#14422D] px-2 py-0.5 rounded font-bold">
            Thesis §4.1
          </span>
        </div>

        {/* Image Container expanding to fill all available space */}
        <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-[#FAF9F5] rounded-lg border border-[#C0C9C1] p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/full_app_function.png"
            alt="Doraebin Full App Functional Flow Architecture"
            className="max-h-full max-w-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
};
