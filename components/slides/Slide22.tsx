"use client";

import React from "react";
import { Check, X, Minus, Trophy } from "lucide-react";

export const Slide22: React.FC = () => {
  const CANDIDATES = [
    // CAPT Group
    {
      group: "CAPT",
      name: "Azure Speech CAPT",
      type: "Commercial Cloud CAPT",
      diagnostic: "x",
      accuracy: "-",
      cost: "x",
      verdict: "Rejected",
      isWinner: false,
    },
    {
      group: "CAPT",
      name: "TextPA LLM",
      type: "Multimodal Audio LLM",
      diagnostic: "tick",
      accuracy: "-",
      cost: "x",
      verdict: "Rejected",
      isWinner: false,
    },
    // ASR Group
    {
      group: "ASR",
      name: "Google STT",
      type: "Cloud Commercial ASR",
      diagnostic: "x",
      accuracy: "x",
      cost: "x",
      verdict: "Rejected",
      isWinner: false,
    },
    {
      group: "ASR",
      name: "OpenAI Whisper / WhisperX",
      type: "Server ASR + Alignment",
      diagnostic: "x",
      accuracy: "tick",
      cost: "-",
      verdict: "Rejected",
      isWinner: false,
    },
    {
      group: "ASR",
      name: "Zipformer-30M",
      type: "On-Device Neural ASR",
      diagnostic: "x",
      accuracy: "tick",
      cost: "tick",
      verdict: "CHOSEN SOLUTION",
      isWinner: true,
    },
  ];

  const renderStatusIcon = (status: string) => {
    if (status === "tick") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#14422D] text-white shadow-sm">
          <Check className="w-4 h-4" />
        </span>
      );
    }
    if (status === "x") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D97757]/20 text-[#D97757]">
          <X className="w-4 h-4" />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#EFEEEA] text-[#717973] border border-[#C0C9C1]">
        <Minus className="w-4 h-4" />
      </span>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">22 — GOAL 1: ASR MODEL SEARCH — ASR
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Goal 1: Comparative decision matrix
        </h2>
      </div>

      {/* Styled Decision Matrix Table with tick, x, and - */}
      <div className="flex-1 overflow-auto rounded-xl border-2 border-[#C0C9C1] bg-[#FAF9F5] shadow-sm flex flex-col justify-between">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#14422D] text-white font-mono text-[11px] uppercase tracking-wider">
              <th className="p-3 border-b border-[#14422D]">Paradigm</th>
              <th className="p-3 border-b border-[#14422D]">Candidate Model</th>
              <th className="p-3 border-b border-[#14422D] text-center">Diagnostic Feedback</th>
              <th className="p-3 border-b border-[#14422D] text-center">Accuracy</th>
              <th className="p-3 border-b border-[#14422D] text-center">Cost ($0.00 / Free)</th>
              <th className="p-3 border-b border-[#14422D] text-center">Final Decision</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#C0C9C1]">
            {CANDIDATES.map((item, idx) => (
              <tr
                key={idx}
                className={
                  item.isWinner
                    ? "bg-[#E0F2E9] font-bold border-l-4 border-l-[#14422D]"
                    : item.group === "CAPT"
                      ? "bg-[#FAF9F5] hover:bg-[#EFEEEA]"
                      : "bg-[#F5F4F0] hover:bg-[#EFEEEA]"
                }
              >
                {/* Paradigm Tag */}
                <td className="p-3 font-mono">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.group === "CAPT"
                      ? "bg-[#EFEEEA] text-[#D97757] border border-[#C0C9C1]"
                      : "bg-[#E0F2E9] text-[#14422D] border border-[#B0AEA5]"
                      }`}
                  >
                    {item.group}
                  </span>
                </td>

                {/* Candidate Name */}
                <td className="p-3">
                  <div className="font-heading font-extrabold text-[#14422D] flex items-center gap-1.5 text-xs sm:text-sm">
                    {item.isWinner && <Trophy className="w-4 h-4 text-[#D97757] shrink-0" />}
                    {item.name}
                  </div>
                  <span className="text-[10px] text-[#717973] font-mono block">
                    {item.type}
                  </span>
                </td>

                {/* Diagnostic Feedback Icon */}
                <td className="p-3 text-center">
                  {renderStatusIcon(item.diagnostic)}
                </td>

                {/* Accuracy Icon */}
                <td className="p-3 text-center">
                  {renderStatusIcon(item.accuracy)}
                </td>

                {/* Cost Icon */}
                <td className="p-3 text-center">
                  {renderStatusIcon(item.cost)}
                </td>

                {/* Final Decision */}
                <td className="p-3 text-center">
                  {item.isWinner ? (
                    <span className="bg-[#14422D] text-white font-mono text-[10px] font-extrabold px-2.5 py-1 rounded shadow-sm inline-flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-[#D97757]" />
                      CHOSEN
                    </span>
                  ) : (
                    <span className="bg-[#EFEEEA] text-[#717973] font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-[#C0C9C1]">
                      REJECTED
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
