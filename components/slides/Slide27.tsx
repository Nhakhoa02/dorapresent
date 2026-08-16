"use client";

import React, { useState } from "react";
import { Volume2, Sparkles, CheckCircle2 } from "lucide-react";

export const Slide27: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"phonetization" | "stopConsonant">("phonetization");

  const PHONETIZATION_EXAMPLES = [
    { raw: "t", tts: "tờ", rule: "Neutral Vowel Suffix 'ờ'" },
    { raw: "m", tts: "mờ", rule: "Neutral Vowel Suffix 'ờ'" },
    { raw: "k", tts: "ca", rule: "Special Case Exception" },
    { raw: "gh", tts: "gờ", rule: "Special Case Exception" },
    { raw: "ngh", tts: "ngờ", rule: "Special Case Exception" },
  ];

  const STOP_CONSONANT_EXAMPLES = [
    { word: "thích", ending: "ch", tone: "Sắc (/)", result: "Rising Pitch Preserved" },
    { word: "gốc", ending: "c", tone: "Sắc (/)", result: "Rising Pitch Preserved" },
    { word: "hộp", ending: "p", tone: "Sắc (/)", result: "Rising Pitch Preserved" },
    { word: "mắt", ending: "t", tone: "Sắc (/)", result: "Rising Pitch Preserved" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-2 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">27 — GOAL 2: PHONOLOGICAL DECOMPOSITION
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Auditory adaptation for text-to-speech engine
        </h2>
      </div>

      {/* Grid: 2 Equal Columns for 2 Main Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: Pillar 1 - Consonant Phonetization */}
        <div
          onClick={() => setActiveTab("phonetization")}
          className={`border-2 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between transition-all cursor-pointer min-h-0 overflow-hidden ${activeTab === "phonetization"
            ? "bg-[#FAF9F5] border-[#14422D] shadow-md"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex flex-col h-full min-h-0">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#14422D] text-white font-mono font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="font-heading font-black text-base sm:text-lg text-[#14422D]">
                Consonant Phonetization
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#29302B] leading-relaxed font-medium">
              Standalone initial and final consonants are suffixed with the neutral vowel <strong>“ờ”</strong> (e.g., <code className="font-mono bg-white px-1.5 py-0.5 rounded text-[#D97757] font-bold">“t” → “tờ”</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded text-[#D97757] font-bold">“m” → “mờ”</code>). Special cases are handled explicitly (e.g., <code className="font-mono bg-white px-1.5 py-0.5 rounded text-[#14422D] font-bold">“k” → “ca”</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded text-[#14422D] font-bold">“gh” → “gờ”</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded text-[#14422D] font-bold">“ngh” → “ngờ”</code>).
            </p>

            {/* Phonetization Rules Table (Fits Perfectly inside container) */}
            <div className="space-y-1.5 font-mono text-xs pt-1 flex-1 min-h-0 overflow-y-auto pr-0.5">
              {PHONETIZATION_EXAMPLES.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2 rounded-lg border border-[#C0C9C1] flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#D97757] text-xs sm:text-sm px-2 py-0.5 bg-[#EFEEEA] rounded border border-[#C0C9C1]">
                      {ex.raw}
                    </span>
                    <span className="text-[#717973] font-bold">→</span>
                    <span className="font-extrabold text-[#14422D] text-xs sm:text-sm px-2 py-0.5 bg-[#E0F2E9] rounded border border-[#B0AEA5]">
                      "{ex.tts}"
                    </span>
                  </div>
                  <span className="text-[11px] text-[#717973] uppercase font-bold tracking-wider">
                    {ex.rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Pillar 2 - Stop-Consonant Tone Correction */}
        <div
          onClick={() => setActiveTab("stopConsonant")}
          className={`border-2 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between transition-all cursor-pointer min-h-0 overflow-hidden ${activeTab === "stopConsonant"
            ? "bg-[#FAF9F5] border-[#14422D] shadow-md"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex flex-col h-full min-h-0">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D97757] text-white font-mono font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="font-heading font-black text-base sm:text-lg text-[#14422D]">
                Stop-Consonant Tone Correction
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#29302B] leading-relaxed font-medium">
              In Vietnamese phonology, syllables ending in stop consonants (<strong>“ch”, “c”, “p”, “t”</strong>) must carry a rising (<strong>Sắc</strong>) tone for acoustic stability during synthetic speech rendering.
            </p>

            {/* Stop Consonant Table (Fits Perfectly inside container) */}
            <div className="space-y-1.5 font-mono text-xs pt-1 flex-1 min-h-0 overflow-y-auto pr-0.5">
              {STOP_CONSONANT_EXAMPLES.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2 sm:p-2.5 rounded-lg border border-[#C0C9C1] flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-black text-[#14422D] text-sm sm:text-base">
                      {ex.word}
                    </span>
                    <span className="text-[11px] font-bold text-[#D97757] bg-[#EFEEEA] px-2 py-0.5 rounded border border-[#C0C9C1]">
                      Coda: -{ex.ending}
                    </span>
                  </div>
                  <span className="font-extrabold text-[#D97757] text-xs sm:text-sm bg-[#E0F2E9] px-2 py-0.5 rounded border border-[#B0AEA5]">
                    Tone: {ex.tone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
