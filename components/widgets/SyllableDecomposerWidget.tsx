"use client";

import React, { useState, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";

// ==================== EXACT VI_SPELLING.DART LOGIC ====================

const INITIALS = [
  "ngh", "ng", "gh", "gi", "qu", "ch", "kh", "nh", "ph", "th", "tr",
  "b", "c", "d", "đ", "g", "h", "k", "l", "m", "n", "p", "q", "r",
  "s", "t", "v", "x"
];

const ENDINGS = ["ch", "nh", "ng", "c", "m", "n", "p", "t"];

const TONE_MAP: Record<string, string> = {
  "\u0300": "Huyền",
  "\u0309": "Hỏi",
  "\u0303": "Ngã",
  "\u0301": "Sắc",
  "\u0323": "Nặng"
};

const GI_SPECIAL_CASES: Record<string, { initial: string; rime: string; tone: string; spell: string }> = {
  "gì": { initial: "gi", rime: "(none)", tone: "Huyền", spell: "gi huyền gì" },
  "gìn": { initial: "gi", rime: "in", tone: "Huyền", spell: "gi in gin huyền gìn" },
  "giếng": { initial: "gi", rime: "iêng", tone: "Sắc", spell: "gi iêng giêng sắc giếng" },
  "giềng": { initial: "gi", rime: "iêng", tone: "Huyền", spell: "gi iêng giêng huyền giềng" },
  "giết": { initial: "gi", rime: "iết", tone: "Sắc", spell: "gi iết giết sắc giết" },
  "giêng": { initial: "gi", rime: "iêng", tone: "Ngang", spell: "gi iêng giêng" }
};

export interface DecomposedSyllable {
  word: string;
  initial: string;
  rime: string; // Rime = Nucleus (vowel) + Ending consonant
  tone: string;
  spellString: string;
}

export function decomposeVietnameseSyllable(word: string): DecomposedSyllable {
  if (!word.trim()) {
    return {
      word: "",
      initial: "(none)",
      rime: "(none)",
      tone: "Ngang",
      spellString: ""
    };
  }

  const lowerWord = word.toLowerCase().trim();

  // 1. Check GI special cases
  if (GI_SPECIAL_CASES[lowerWord]) {
    const sp = GI_SPECIAL_CASES[lowerWord];
    return {
      word: lowerWord,
      initial: sp.initial,
      rime: sp.rime,
      tone: sp.tone,
      spellString: sp.spell
    };
  }

  // 2. Normalize to NFD & extract tone
  const normalized = lowerWord.normalize("NFD");
  let tone = "Ngang";
  for (const char of normalized) {
    if (TONE_MAP[char]) {
      tone = TONE_MAP[char];
      break;
    }
  }

  // Strip combining tone marks
  const base = Array.from(normalized)
    .filter((c) => !TONE_MAP[c])
    .join("");

  // 3. Find initial consonant (sorted by length descending)
  const sortedInitials = [...INITIALS].sort((a, b) => b.length - a.length);
  let initial = "";
  let i = 0;

  for (const init of sortedInitials) {
    if (base.startsWith(init)) {
      initial = init;
      i = init.length;
      break;
    }
  }

  const remainingBase = base.slice(i);

  // 4. Find ending consonant (sorted by length descending)
  const sortedEndings = [...ENDINGS].sort((a, b) => b.length - a.length);
  let ending = "";
  let nucleusStr = remainingBase;

  for (const end of sortedEndings) {
    if (remainingBase.endsWith(end) && remainingBase.length > end.length) {
      ending = end;
      nucleusStr = remainingBase.slice(0, remainingBase.length - end.length);
      break;
    }
  }

  const nucleus = nucleusStr.normalize("NFC") || "";
  const rime = (nucleus + ending) || "(none)";

  // 5. Build spelling song path
  const parts: string[] = [];

  if (initial) parts.push(initial);
  if (rime !== "(none)") parts.push(rime);
  if (initial && rime !== "(none)") parts.push(initial + rime);
  if (tone !== "Ngang") parts.push(tone.toLowerCase());
  parts.push(lowerWord);

  return {
    word: lowerWord,
    initial: initial || "(none)",
    rime: rime,
    tone: tone,
    spellString: parts.join(" - ")
  };
}

interface SyllableDecomposerWidgetProps {
  defaultWord?: string;
}

const QUICK_SAMPLES = ["giếng", "tiếng", "thích", "chuối", "thầy"];

export const SyllableDecomposerWidget: React.FC<SyllableDecomposerWidgetProps> = ({
  defaultWord = "giếng"
}) => {
  const [inputWord, setInputWord] = useState(defaultWord);
  const [activeWord, setActiveWord] = useState<DecomposedSyllable>(
    decomposeVietnameseSyllable(defaultWord)
  );

  useEffect(() => {
    if (defaultWord) {
      setInputWord(defaultWord);
      setActiveWord(decomposeVietnameseSyllable(defaultWord));
    }
  }, [defaultWord]);

  const handleDecompose = (wordToDecompose: string) => {
    const result = decomposeVietnameseSyllable(wordToDecompose);
    setActiveWord(result);
  };

  return (
    <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-xl p-5 shadow-soft-lift flex flex-col justify-between space-y-4 h-full">
      {/* Widget Title & Search */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D97757]" />
            <h3 className="font-heading font-bold text-sm text-[#14422D] uppercase tracking-wide">
              Rule-Based Syllable Decomposer
            </h3>
          </div>

        </div>

        {/* Word Quick Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[#717973]">Quick Select:</span>
          {QUICK_SAMPLES.map((w) => (
            <button
              key={w}
              onClick={() => {
                setInputWord(w);
                handleDecompose(w);
              }}
              className={`px-2.5 py-0.5 text-xs font-mono rounded border transition-colors ${activeWord.word === w
                ? "bg-[#14422D] text-white border-[#14422D] font-bold"
                : "bg-[#EFEEEA] text-[#1B1C1A] border-[#B0AEA5] hover:bg-[#E0F2E9]"
                }`}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              placeholder="Enter Vietnamese word..."
              className="w-full pl-8 pr-3 py-1.5 font-sans text-sm bg-[#FAF9F5] border border-[#B0AEA5] rounded focus:outline-none focus:border-[#14422D] text-[#1B1C1A]"
            />
            <Search className="w-4 h-4 text-[#717973] absolute left-2.5 top-2.5" />
          </div>
          <button
            onClick={() => handleDecompose(inputWord)}
            className="px-4 py-1.5 bg-[#14422D] text-white text-xs font-mono font-medium rounded hover:bg-[#2D5A43] transition-colors"
          >
            Decompose
          </button>
        </div>
      </div>

      {/* Breakdown Display Cards */}
      <div className="grid grid-cols-3 gap-3">
        {/* Onset Card */}
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-3 rounded-lg text-center">
          <span className="font-mono text-[10px] text-[#3E6658] uppercase font-bold tracking-wider">
            1. ONSET (ÂM ĐẦU)
          </span>
          <div className="font-heading font-bold text-2xl text-[#14422D] mt-1">
            {activeWord.initial}
          </div>
        </div>

        {/* Rime Card (Vần = Nucleus + Ending) */}
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-3 rounded-lg text-center">
          <span className="font-mono text-[10px] text-[#3E6658] uppercase font-bold tracking-wider">
            2. RIME (VẦN)
          </span>
          <div className="font-heading font-bold text-2xl text-[#14422D] mt-1">
            {activeWord.rime}
          </div>
        </div>

        {/* Tone Card */}
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-3 rounded-lg text-center">
          <span className="font-mono text-[10px] text-[#3E6658] uppercase font-bold tracking-wider">
            3. TONE (THANH ĐIỆU)
          </span>
          <div className="font-heading font-bold text-sm text-[#D97757] mt-2 capitalize font-mono">
            {activeWord.tone}
          </div>
        </div>
      </div>

      {/* Spelling Song Assembly Output */}
      <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-3.5 rounded-lg flex items-center justify-between">
        <div>
          <span className="font-mono text-[11px] font-bold text-[#717973] uppercase tracking-wider block">
            Synthesized Spelling-Song Path
          </span>
          <span className="font-mono text-sm font-bold text-[#14422D] mt-0.5 block">
            "{activeWord.spellString}"
          </span>
        </div>
      </div>
    </div>
  );
};
