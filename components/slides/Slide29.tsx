"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

export const Slide29: React.FC = () => {
  const [spokenInput, setSpokenInput] = useState<string>("thấy");

  const TARGET = {
    word: "thầy",
    onset: "th",
    rime: "ây",
    tone: "Huyền",
  };

  const ATTEMPTS: Record<
    string,
    {
      onset: string;
      rime: string;
      tone: string;
      onsetPass: boolean;
      rimePass: boolean;
      tonePass: boolean;
      feedback: string;
    }
  > = {
    "thầy": {
      onset: "th",
      rime: "ây",
      tone: "Huyền",
      onsetPass: true,
      rimePass: true,
      tonePass: true,
      feedback: "Perfect Pronunciation! All sub-syllable components match accurately.",
    },
    "thấy": {
      onset: "th",
      rime: "ây",
      tone: "Sắc",
      onsetPass: true,
      rimePass: true,
      tonePass: false,
      feedback: "Tone Mispronunciation Detected: Spoke 'Sắc' (/) instead of target 'Huyền' (\\).",
    },
    "thây": {
      onset: "th",
      rime: "ây",
      tone: "Ngang",
      onsetPass: true,
      rimePass: true,
      tonePass: false,
      feedback: "Tone Omission Detected: Spoke 'Ngang' (flat) instead of target 'Huyền' (\\).",
    },
    "cầy": {
      onset: "c",
      rime: "ây",
      tone: "Huyền",
      onsetPass: false,
      rimePass: true,
      tonePass: true,
      feedback: "Onset Consonant Error: Spoke initial 'c' instead of target 'th'.",
    },
  };

  const currentEvaluation = ATTEMPTS[spokenInput] || ATTEMPTS["thấy"];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">29 — GOAL 3: PRONUNCIATION ASSESSMENT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Goal 3: Diagnostic pronunciation assessment
        </h2>
      </div>

      {/* Main Full-Width Interactive Assessment Visualizer Card */}
      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-2xl p-5 lg:p-7 shadow-lg flex flex-col justify-between flex-1 min-h-0">
          <div className="space-y-4">
            {/* Top Bar: Target Word Display */}
            <div className="flex items-center justify-between border-b border-[#C0C9C1] pb-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#D97757]" />
                <span className="font-mono text-sm sm:text-base font-bold text-[#14422D] uppercase tracking-wider">
                  Target Word: <span className="text-[#D97757] font-extrabold text-2xl sm:text-3xl ml-1">"{TARGET.word}"</span>
                </span>
              </div>

            </div>

            {/* Simulated Spoken Input Selector */}
            <div className="space-y-2">
              <span className="font-mono text-xs sm:text-sm text-[#414943] font-bold block">
                Simulate Child's Spoken Input Attempt:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-sm sm:text-base">
                {Object.keys(ATTEMPTS).map((w) => (
                  <button
                    key={w}
                    onClick={() => setSpokenInput(w)}
                    className={`py-2.5 px-4 rounded-xl border-2 font-extrabold transition-all text-center shadow-xs ${spokenInput === w
                      ? "bg-[#14422D] text-white border-[#14422D] shadow-md scale-[1.02]"
                      : "bg-[#EFEEEA] text-[#1B1C1A] border-[#C0C9C1] hover:bg-[#E0F2E9]"
                      }`}
                  >
                    "{w}"
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Sub-Syllable Diagnostic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Onset */}
              <div
                className={`p-4 sm:p-5 rounded-xl border-2 text-center transition-all ${currentEvaluation.onsetPass
                  ? "bg-[#E0F2E9] border-[#14422D] text-[#14422D] shadow-sm"
                  : "bg-[#D97757]/15 border-[#D97757] text-[#D97757] shadow-sm"
                  }`}
              >
                <span className="font-mono text-xs uppercase font-extrabold tracking-wider block">
                  1. Onset (Âm Đầu)
                </span>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl my-1">
                  {currentEvaluation.onset}
                </div>
                <span className="font-mono text-xs sm:text-sm font-extrabold block">
                  {currentEvaluation.onsetPass ? "✓ Match" : "✗ Error"}
                </span>
              </div>

              {/* Rime */}
              <div
                className={`p-4 sm:p-5 rounded-xl border-2 text-center transition-all ${currentEvaluation.rimePass
                  ? "bg-[#E0F2E9] border-[#14422D] text-[#14422D] shadow-sm"
                  : "bg-[#D97757]/15 border-[#D97757] text-[#D97757] shadow-sm"
                  }`}
              >
                <span className="font-mono text-xs uppercase font-extrabold tracking-wider block">
                  2. Rime (Vần)
                </span>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl my-1">
                  {currentEvaluation.rime}
                </div>
                <span className="font-mono text-xs sm:text-sm font-extrabold block">
                  {currentEvaluation.rimePass ? "✓ Match" : "✗ Error"}
                </span>
              </div>

              {/* Tone */}
              <div
                className={`p-4 sm:p-5 rounded-xl border-2 text-center transition-all ${currentEvaluation.tonePass
                  ? "bg-[#E0F2E9] border-[#14422D] text-[#14422D] shadow-sm"
                  : "bg-[#D97757]/15 border-[#D97757] text-[#D97757] shadow-sm"
                  }`}
              >
                <span className="font-mono text-xs uppercase font-extrabold tracking-wider block">
                  3. Tone (Thanh)
                </span>
                <div className="font-heading font-extrabold text-xl sm:text-2xl my-2">
                  {currentEvaluation.tone}
                </div>
                <span className="font-mono text-xs sm:text-sm font-extrabold block">
                  {currentEvaluation.tonePass ? "✓ Match" : "✗ Error"}
                </span>
              </div>
            </div>
          </div>

          {/* Feedback Summary Banner */}
          <div
            className={`p-4 rounded-xl flex items-center gap-3 border-2 font-sans text-sm sm:text-base font-extrabold mt-4 shadow-sm ${currentEvaluation.onsetPass &&
              currentEvaluation.rimePass &&
              currentEvaluation.tonePass
              ? "bg-[#E0F2E9] border-[#14422D] text-[#14422D]"
              : "bg-[#D97757]/15 border-[#D97757] text-[#D97757]"
              }`}
          >
            {currentEvaluation.onsetPass &&
              currentEvaluation.rimePass &&
              currentEvaluation.tonePass ? (
              <CheckCircle2 className="w-6 h-6 shrink-0 text-[#14422D]" />
            ) : (
              <XCircle className="w-6 h-6 shrink-0 text-[#D97757]" />
            )}
            <span>{currentEvaluation.feedback}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
