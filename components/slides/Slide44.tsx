"use client";

import React, { useState } from "react";
import { CheckCircle2, Cpu, Mic, Volume2, RefreshCw, Layers, HardDrive } from "lucide-react";

export const Slide44: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number>(1);

  const CAPABILITIES = [
    {
      id: 1,
      goalNum: "Goal 1",
      req: "1. Speech Recognition (ASR)",
      tech: "Zipformer-30M engine deployed via Sherpa-ONNX",
      verification: "Accurately transcribes speech as spoken without auto-correcting dialect mispronunciations; 100% offline, on-device inference.",
      icon: <Mic className="w-5 h-5 text-[#D97757]" />,
      tag: "Goal 1: On-Device ASR",
    },
    {
      id: 2,
      goalNum: "Goal 2",
      req: "2. Phonological Decomposition",
      tech: "Syllable decomposition algorithm (vi_spelling.dart)",
      verification: "Decomposes 6,500 vocabulary words into Onset, Rime, and Tone elements to isolate phonological errors.",
      icon: <Cpu className="w-5 h-5 text-[#14422D]" />,
      tag: "Goal 2: Breakdown Engine",
    },
    {
      id: 3,
      goalNum: "Goal 3",
      req: "3. Diagnostic Feedback (CAPT)",
      tech: "Sub-syllable diagnostic matching engine",
      verification: "Aligns ASR transcript with target breakdown to pinpoint exact acoustic mistakes across Onset, Rime, and Tone.",
      icon: <Layers className="w-5 h-5 text-[#D97757]" />,
      tag: "Goal 3: CAPT Diagnostics",
    },
    {
      id: 4,
      goalNum: "Goal 4",
      req: "4. Adaptive Progression Tracking",
      tech: "Dynamic mastery tracking (EWMA) & SM-2 scheduling",
      verification: "Dynamically updates learning rates (α) and session ratios based on individual retrievability and recall speed.",
      icon: <RefreshCw className="w-5 h-5 text-[#14422D]" />,
      tag: "Goal 4: Adaptive Closed-Loop",
    },
    {
      id: 5,
      goalNum: "Goal 5",
      req: "5. Audio Feedback (TTS)",
      tech: "On-device Text-to-Speech (TTS) integration",
      verification: "Synthesizes target words and segmented spelling song sequences with phonetization and pitch stability.",
      icon: <Volume2 className="w-5 h-5 text-[#D97757]" />,
      tag: "Goal 5: Offline TTS",
    },
    {
      id: 6,
      goalNum: "Goal 6",
      req: "6. Mobile Interface & Local Storage",
      tech: "Flutter UI & Local SQLite (sqflite) Storage",
      verification: "Persists vocabulary banks & progress logs 100% offline; engages students through gamified Scramble & Speed Duel practice.",
      icon: <HardDrive className="w-5 h-5 text-[#14422D]" />,
      tag: "Goal 6: Local Storage & UI",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">44 — RESULT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Summary of application capabilities (Goals 1 – 6)
        </h2>
      </div>

      {/* Structured Table Container */}
      <div className="flex-1 bg-white border-2 border-[#14422D] rounded-xl p-3.5 lg:p-5 shadow-md flex flex-col justify-between min-h-0 overflow-hidden space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider">
            FUNCTIONAL REQUIREMENTS &amp; OPERATIONAL VERIFICATION MATRIX (GOALS 1 TO 6)
          </span>
          <span className="font-mono text-xs text-white bg-[#14422D] px-2.5 py-0.5 rounded font-bold">
            Thesis Table 4.1
          </span>
        </div>

        {/* Verification Table with Enlarged Typography */}
        <div className="flex-1 overflow-y-auto rounded-lg border-2 border-[#C0C9C1]">
          <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#14422D] text-white font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                <th className="p-3 sm:p-3.5 w-1/4">Functional Goal</th>
                <th className="p-3 sm:p-3.5 w-1/3">Technical Implementation</th>
                <th className="p-3 sm:p-3.5 w-5/12">Operational Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C0C9C1] font-sans">
              {CAPABILITIES.map((item) => {
                const isActive = item.id === activeRow;
                return (
                  <tr
                    key={item.id}
                    onClick={() => setActiveRow(item.id)}
                    className={`cursor-pointer transition-all ${isActive
                      ? "bg-[#E0F2E9] font-medium"
                      : "hover:bg-[#EFEEEA] text-[#1B1C1A]"
                      }`}
                  >
                    {/* Functional Requirement */}
                    <td className="p-3 sm:p-3.5 font-extrabold text-[#14422D]">
                      <div className="flex items-center gap-2.5">
                        {item.icon}
                        <span className="text-xs sm:text-sm leading-snug">{item.req}</span>
                      </div>
                    </td>

                    {/* Technical Implementation */}
                    <td className="p-3 sm:p-3.5 font-mono text-xs sm:text-sm text-[#1B1C1A]">
                      <span className="bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#C0C9C1] block w-fit font-bold text-[#D97757] mb-1 text-[11px]">
                        {item.tag}
                      </span>
                      <span className="font-semibold">{item.tech}</span>
                    </td>

                    {/* Operational Verification */}
                    <td className="p-3 sm:p-3.5 text-xs sm:text-sm text-[#333C36] leading-relaxed font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#14422D] shrink-0 mt-0.5" />
                        <span>{item.verification}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
