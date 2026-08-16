"use client";

import React from "react";

export const Slide2: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-6">
      {/* Header matching Image 2 */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-1">02 — CONTRIBUTIONS
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Four contributions
        </h2>
      </div>

      {/* 2x2 Grid of Numbered Contribution Cards matching Image 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* Card 1 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                1
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                PHONOLOGICAL ADAPTATION FOR TONAL LANGUAGES
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Developed a rule-based syllable decomposition engine that isolates initials, rimes, and tones. This allows the application to pinpoint phonetic bottlenecks and enable cross-word skill transfer.
            </p>
          </div>
          <span className="font-mono text-[13px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            eg. <span className="text-red-500 font mono">"Thầy"</span> → initials:
            <span className="text-red-500 font mono"> Th</span> · rimes:
            <span className="text-red-500 font mono"> ây</span> · tone:
            <span className="text-red-500 font mono"> Huyền</span>
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                2
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                ON-DEVICE NEURAL EXECUTION
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Deployed the 30M-parameter Zipformer RNN-T ASR model via the Sherpa-ONNX C++ runtime, achieving 100% offline functionality with zero costs.
            </p>
          </div>
          {/* <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            Zero Operational Cost Architecture
          </span> */}
        </div>

        {/* Card 3 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                3
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                VIETNAMESE SYLLABLES INVENTORY MAPPING
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Compiled and verified a complete structured database of 27 initials, 160 rimes, and 5 tones by processing a corpus of 6,500 Vietnamese standard syllables, creating a benchmark vocabulary model for primary reading.
            </p>
          </div>
          {/* <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            6,500 Syllable Inventory Corpus
          </span> */}
        </div>

        {/* Card 4 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                4
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                CLOSED-LOOP ADAPTIVE ENGINE
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Formulated a closed-loop personalization engine combining EWMA component-level mastery estimation and a modified SuperMemo-2 spaced repetition scheduler to optimize daily review intervals.
            </p>
          </div>
          {/* <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            Personalized Spaced Review Engine
          </span> */}
        </div>
      </div>
    </div>
  );
};
