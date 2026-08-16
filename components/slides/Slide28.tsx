"use client";

import React, { useState } from "react";
import { Scissors, Music, Volume2 } from "lucide-react";

export const Slide28: React.FC = () => {
  const [activeFunc, setActiveFunc] = useState<number>(1);

  const FUNCTIONS = [
    {
      id: 1,
      name: "1. Decouple",
      subtitle: "Syllable Analysis",
      icon: <Scissors className="w-6 h-6 text-[#D97757]" />,
      tag: "Word Decoupling",
      desc: "Separates Vietnamese words into Onset, Rime, and Lexical Tone.",
    },
    {
      id: 2,
      name: "2. Spelling Song Generate",
      subtitle: "Educational Adaption",
      icon: <Music className="w-6 h-6 text-[#14422D]" />,
      tag: "Educational Content",
      desc: "Synthesizes 6-step elementary school spelling songs matching Vietnam's primary school reading instruction rules.",
    },
    {
      id: 3,
      name: "3. Spelling Adapt to TTS",
      subtitle: "On-Device Voice Rendering",
      icon: <Volume2 className="w-6 h-6 text-[#D97757]" />,
      tag: "Auditory Generation",
      desc: "Adapts sub-syllable components for speech synthesis engines by applying phonetic rules and stop-consonant pitch stability.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">28 — GOAL 2: PHONOLOGICAL DECOMPOSITION
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Three core functions in <code className="font-mono text-[#D97757]">one class!</code>
        </h2>
      </div>

      {/* 3 Equal Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 items-stretch min-h-0">
        {FUNCTIONS.map((func) => {
          const isActive = func.id === activeFunc;
          return (
            <div
              key={func.id}
              onClick={() => setActiveFunc(func.id)}
              className={`border-2 rounded-xl p-5 lg:p-6 flex flex-col justify-between transition-all cursor-pointer ${isActive
                ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.01]"
                : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
                }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded ${isActive
                      ? "bg-[#14422D] text-white"
                      : "bg-[#EFEEEA] text-[#717973] border border-[#C0C9C1]"
                      }`}
                  >
                    {func.tag}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {func.icon}
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-[#14422D]">
                      {func.name}
                    </h3>
                    <span className="text-xs text-[#717973] font-mono block">
                      {func.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
                  {func.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
