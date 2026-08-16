"use client";

import React, { useState } from "react";

export const Slide5: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<"onset" | "rime" | "tone">("onset");
  const [selectedWord, setSelectedWord] = useState<string>("má");

  const MINIMAL_PAIRS = [
    { word: "ma", tone: "Ngang (Level)", meaning: "Ghost", symbol: "No mark" },
    { word: "má", tone: "Sắc (High Rising)", meaning: "Mother / Cheek", symbol: "Acute (´)" },
    { word: "mả", tone: "Hỏi (Dipping-Rising)", meaning: "Tomb / Grave", symbol: "Hook (ˀ)" },
    { word: "mã", tone: "Ngã (High Glottalized)", meaning: "Code / Horse", symbol: "Tilde (~)" },
    { word: "mạ", tone: "Nặng (Low Drop)", meaning: "Rice Seedling", symbol: "Dot under (•)" },
    { word: "mà", tone: "Huyền (Low Falling)", meaning: "But / Which", symbol: "Grave (`)" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 lg:p-5 select-none space-y-2 overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">05 — BACKGROUND
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Syllable structure of the Vietnamese language
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: 3 Clickable Structural Components (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2 min-h-0">
          {/* Card 1: Onset */}
          <button
            onClick={() => setSelectedComponent("onset")}
            className={`p-3 rounded-sm flex flex-col justify-between flex-1 text-left transition-all cursor-pointer ${selectedComponent === "onset"
              ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-md"
              : "bg-[#EFEEEA] border border-[#C0C9C1] hover:bg-[#FAF9F5]"
              }`}
          >
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-full font-mono font-bold text-xs flex items-center justify-center ${selectedComponent === "onset"
                      ? "bg-[#14422D] text-white"
                      : "bg-[#D97757] text-white"
                      }`}
                  >
                    1
                  </span>
                  <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#14422D] uppercase tracking-wider">
                    ONSET (ÂM ĐẦU)
                  </span>
                </div>
                <span
                  className={`font-mono text-[12px] sm:text-[13px] font-bold ${selectedComponent === "onset" ? "text-[#14422D]" : "text-[#D97757]"
                    }`}
                >
                  27 Initials
                </span>
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#414943] leading-snug">
                Initial consonant opening the syllable (e.g., <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">b</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">th</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">ngh</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">tr</code>).
              </p>
            </div>
            <span
              className={`font-mono text-[12px] sm:text-[13px] uppercase font-semibold border-t pt-1 mt-0.5 block ${selectedComponent === "onset"
                ? "border-[#B0AEA5] text-[#14422D]"
                : "border-[#C0C9C1] text-[#717973]"
                }`}
            >
              Example: &quot;th&quot; in &quot;thầy&quot;
            </span>
          </button>

          {/* Card 2: Rime */}
          <button
            onClick={() => setSelectedComponent("rime")}
            className={`p-3 rounded-sm flex flex-col justify-between flex-1 text-left transition-all cursor-pointer ${selectedComponent === "rime"
              ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-md"
              : "bg-[#EFEEEA] border border-[#C0C9C1] hover:bg-[#FAF9F5]"
              }`}
          >
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-full font-mono font-bold text-xs flex items-center justify-center ${selectedComponent === "rime"
                      ? "bg-[#14422D] text-white"
                      : "bg-[#D97757] text-white"
                      }`}
                  >
                    2
                  </span>
                  <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#14422D] uppercase tracking-wider">
                    RIME (VẦN)
                  </span>
                </div>
                <span
                  className={`font-mono text-[12px] sm:text-[13px] font-bold ${selectedComponent === "rime" ? "text-[#14422D]" : "text-[#D97757]"
                    }`}
                >
                  160 Rimes
                </span>
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#414943] leading-snug">
                Vowel nucleus + final coda (e.g., <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">a</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">ân</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">iêu</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">uyên</code>, <code className="font-mono text-[13px] sm:text-[14px] text-[#D97757] font-bold">ây</code>).
              </p>
            </div>
            <span
              className={`font-mono text-[12px] sm:text-[13px] uppercase font-semibold border-t pt-1 mt-0.5 block ${selectedComponent === "rime"
                ? "border-[#B0AEA5] text-[#14422D]"
                : "border-[#C0C9C1] text-[#717973]"
                }`}
            >
              Example: &quot;ây&quot; in &quot;thầy&quot;
            </span>
          </button>

          {/* Card 3: Tone */}
          <button
            onClick={() => setSelectedComponent("tone")}
            className={`p-3 rounded-sm flex flex-col justify-between flex-1 text-left transition-all cursor-pointer ${selectedComponent === "tone"
              ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-md"
              : "bg-[#EFEEEA] border border-[#C0C9C1] hover:bg-[#FAF9F5]"
              }`}
          >
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-full font-mono font-bold text-xs flex items-center justify-center ${selectedComponent === "tone"
                      ? "bg-[#14422D] text-white"
                      : "bg-[#D97757] text-white"
                      }`}
                  >
                    3
                  </span>
                  <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#14422D] uppercase tracking-wider">
                    LEXICAL TONE (THANH ĐIỆU)
                  </span>
                </div>
                <span
                  className={`font-mono text-[12px] sm:text-[13px] font-bold ${selectedComponent === "tone" ? "text-[#14422D]" : "text-[#D97757]"
                    }`}
                >
                  6 Pitch Tones
                </span>
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#414943] leading-snug">
                Pitch contour governing the syllable. Diacritic alters semantics completely.
              </p>
            </div>
            <span
              className={`font-mono text-[12px] sm:text-[13px] uppercase font-semibold border-t pt-1 mt-0.5 block ${selectedComponent === "tone"
                ? "border-[#B0AEA5] text-[#14422D]"
                : "border-[#C0C9C1] text-[#717973]"
                }`}
            >
              Example: &quot;Huyền (\)&quot; in &quot;thầy&quot;
            </span>
          </button>
        </div>

        {/* Right Column: Interactive Minimal Pair Pitch & Tone Box (5 Cols) */}
        <div className="lg:col-span-5 bg-[#EFEEEA] border border-[#C0C9C1] p-3.5 rounded-sm flex flex-col justify-between space-y-2 min-h-0">
          <div className="space-y-1.5">
            <span className="font-mono text-[13px] font-bold text-[#14422D] uppercase tracking-wider block">
              MINIMAL PAIR SEMANTIC DYNAMICS
            </span>
            <p className="text-[13px] sm:text-[14px] text-[#414943] leading-tight">
              Same base syllable <code className="font-mono text-[13px] sm:text-[14px] font-bold text-[#D97757]">&quot;ma&quot;</code> produces 6 distinct words depending on pitch contour:
            </p>

            {/* Minimal Pair Selector Grid */}
            <div className="grid grid-cols-2 gap-1.5 pt-0.5">
              {MINIMAL_PAIRS.map((item) => (
                <button
                  key={item.word}
                  onClick={() => setSelectedWord(item.word)}
                  className={`p-2 rounded-sm border text-left transition-colors flex items-center justify-between cursor-pointer ${selectedWord === item.word
                    ? "bg-[#14422D] text-white border-[#14422D]"
                    : "bg-[#FAF9F5] text-[#1B1C1A] border-[#C0C9C1] hover:bg-[#E0F2E9]"
                    }`}
                >
                  <span className="font-heading font-extrabold text-[15px] sm:text-[16px]">{item.word}</span>
                  <span className="font-mono text-[12px] opacity-90">{item.symbol}</span>
                </button>
              ))}
            </div>

            {/* Selected Word Details Card */}
            {(() => {
              const active = MINIMAL_PAIRS.find((m) => m.word === selectedWord)!;
              return (
                <div className="bg-[#FAF9F5] border border-[#14422D] p-2.5 rounded-sm space-y-1 mt-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-2xl text-[#D97757]">
                      &quot;{active.word}&quot;
                    </span>
                    <span className="font-mono text-[12px] font-bold text-[#14422D] bg-[#E0F2E9] px-2 py-0.5 rounded-sm border border-[#B0AEA5]">
                      {active.tone}
                    </span>
                  </div>
                  <div className="text-xs text-[#414943]">
                    <span className="font-mono font-bold text-[#717973] uppercase text-[11px] block mb-0.5">
                      ENGLISH MEANING:
                    </span>
                    <span className="font-sans font-bold text-[#14422D] text-[14px] sm:text-[15px] block">
                      {active.meaning}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* <span className="font-mono text-[11px] sm:text-[12px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-1 block text-center">
            Click any component card (1, 2, 3) or word to inspect
          </span> */}
        </div>
      </div>
    </div>
  );
};
