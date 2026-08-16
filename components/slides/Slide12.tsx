"use client";

import React, { useState } from "react";
import { Code, CheckCircle2, XCircle, FileJson } from "lucide-react";

export const Slide12: React.FC = () => {
  const [activeSide, setActiveSide] = useState<"us" | "vn">("vn");

  const US_JSON_SNIPPET = `{
  "Word": "today",
  "AccuracyScore": 100,
  "Phonemes": [
    {
      "Phoneme": "t",  // <--- IPA Phoneme Output
      "AccuracyScore": 100,
      "NBestPhonemes": [
        { "Phoneme": "t", "Score": 100 },
        { "Phoneme": "tʃ", "Score": 9 },
        { "Phoneme": "k", "Score": 4 }
      ]
    },
    {
      "Phoneme": "ə",  // <--- Vowel IPA Output
      "AccuracyScore": 100
    }
  ]
}`;

  const VN_JSON_SNIPPET = `{
  "Word": "Hôm",
  "AccuracyScore": 93,
  "Phonemes": [
    {
      "Phoneme": "",   // <--- EMPTY STRING FAILURE!
      "AccuracyScore": 91,
      "Offset": 8200000,
      "Duration": 1600000
    },
    {
      "Phoneme": "",   // <--- EMPTY STRING FAILURE!
      "AccuracyScore": 94,
      "Offset": 9800000,
      "Duration": 2000000
    }
  ]
}`;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">12 — APPENDIX I — Azure Speech Json Return
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          The differences in Vietnamese return JSON from the English one
        </h2>
      </div>

      {/* Side-by-Side JSON Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Card: US English JSON Response */}
        <div
          onClick={() => setActiveSide("us")}
          className={`border-2 rounded-xl p-3.5 flex flex-col justify-between transition-all cursor-pointer min-h-0 ${activeSide === "us"
            ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.005]"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileJson className="w-4 h-4 text-[#14422D]" />
                <h3 className="font-heading font-extrabold text-sm text-[#14422D]">
                  US English Azure API
                </h3>
              </div>
              <span className="font-mono text-[10px] text-white bg-[#14422D] px-2 py-0.5 rounded font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Full IPA Phonemes
              </span>
            </div>

            {/* Code Block Container */}
            <div className="bg-[#1B1C1A] text-[#FAF9F5] p-3 rounded-lg border border-[#414943] font-mono text-[11px] leading-relaxed flex-1 overflow-y-auto">
              <pre className="text-emerald-400 font-mono">
                {US_JSON_SNIPPET}
              </pre>
            </div>

            <p className="text-xs text-[#414943] leading-tight font-sans">
              <strong>English Result:</strong> Returns detailed IPA phoneme strings (e.g. <code className="bg-white px-1 py-0.5 rounded border border-[#C0C9C1]">"t"</code>, <code className="bg-white px-1 py-0.5 rounded border border-[#C0C9C1]">"ə"</code>) alongside N-Best candidate scores.
            </p>
          </div>
        </div>

        {/* Right Card: Vietnamese JSON Response Failure */}
        <div
          onClick={() => setActiveSide("vn")}
          className={`border-2 rounded-xl p-3.5 flex flex-col justify-between transition-all cursor-pointer min-h-0 ${activeSide === "vn"
            ? "bg-[#FAF9F5] border-[#D97757] shadow-md scale-[1.005]"
            : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
            }`}
        >
          <div className="space-y-2 flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#D97757]" />
                <h3 className="font-heading font-extrabold text-sm text-[#14422D]">
                  Vietnamese Azure API
                </h3>
              </div>
              <span className="font-mono text-[10px] text-white bg-[#D97757] px-2 py-0.5 rounded font-bold flex items-center gap-1">
                <XCircle className="w-3 h-3" /> Empty String Failure
              </span>
            </div>

            {/* Code Block Container */}
            <div className="bg-[#1B1C1A] text-[#FAF9F5] p-3 rounded-lg border border-[#D97757]/50 font-mono text-[11px] leading-relaxed flex-1 overflow-y-auto">
              <pre className="text-rose-400 font-mono">
                {VN_JSON_SNIPPET}
              </pre>
            </div>

            <p className="text-xs text-[#414943] leading-tight font-sans">
              <strong>Vietnamese Result:</strong> The <code className="bg-white px-1 py-0.5 rounded border border-[#C0C9C1]">"Phoneme"</code> field returns empty strings <code className="bg-white px-1 py-0.5 rounded border border-[#C0C9C1]">""</code>, proving lack of sub-syllable diagnostic support.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};
