"use client";

import React, { useState } from "react";
import { Volume2, CheckCircle2, ShieldCheck, Sparkles, Mic } from "lucide-react";

export const Slide37: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(2);

  const PILLARS = [
    {
      id: 1,
      title: "1. Individual Letters",
      tag: "Alphabet Rendering",
      icon: <Mic className="w-5 h-5 text-[#14422D]" />,
      example: '"a", "b", "c"',
      desc: "Alphabet letters are read clearly and distinctly in isolation without requiring full sentence context or suffering from neural waveform distortion.",
      benefit: "Clean, zero-latency standalone letter speech rendering.",
    },
    {
      id: 2,
      title: "2. Phonetized Onset Consonants",
      tag: "Phonetic Labeling",
      icon: <Volume2 className="w-5 h-5 text-[#D97757]" />,
      example: 't → /tờ/, ngh → /ngờ/',
      desc: "Correctly pronounces isolated consonant clusters using phonetic labels (e.g., /tờ/, /ngờ/) rather than raw English/alphabet letter names (e.g., /ti/, /en-gi/).",
      benefit: "Matches primary school reading instruction rules.",
    },
    {
      id: 3,
      title: "3. Complex Syllables & Tones",
      tag: "Lexical Pitch Stability",
      icon: <Sparkles className="w-5 h-5 text-[#14422D]" />,
      example: '"toán", "giếng", "trường"',
      desc: "Engine correctly synthesizes standard vocabulary words in our database, strictly preserving lexical tone pitch contours (Huyền, Hỏi, Ngã, Sắc, Nặng).",
      benefit: "Preserves natural tonal pronunciation without cloud API latency.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">37 — GOAL 5: AUDITORY FEEDBACK
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Why native TTS?
        </h2>
      </div>

      {/* Grid: 3 Equal Pillar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 items-stretch min-h-0">
        {PILLARS.map((p) => {
          const isActive = p.id === activePillar;
          return (
            <div
              key={p.id}
              onClick={() => setActivePillar(p.id)}
              className={`border-2 rounded-xl p-4 lg:p-5 flex flex-col justify-between transition-all cursor-pointer ${isActive
                ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.01]"
                : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
                }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${isActive
                      ? "bg-[#14422D] text-white"
                      : "bg-[#EFEEEA] text-[#717973] border border-[#C0C9C1]"
                      }`}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {p.icon}
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-[#14422D]">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#D97757] font-bold block">
                      {p.example}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#414943] leading-relaxed">
                  {p.desc}
                </p>

                <div className="bg-white p-2.5 rounded-lg border border-[#C0C9C1] text-xs text-[#14422D] flex items-start gap-1.5 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14422D] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">
                    <strong>Key Advantage:</strong> {p.benefit}
                  </span>
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-[#C0C9C1] flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#14422D]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Robust On-Device Native Execution</span>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
};
