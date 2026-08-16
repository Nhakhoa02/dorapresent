"use client";

import React, { useState } from "react";
import { Check, X, AlertTriangle, ShieldCheck, Zap, DollarSign } from "lucide-react";

interface ModelSpec {
  id: string;
  name: string;
  execution: string;
  cost: string;
  detail: string;
  dialectSensitivity: string;
  offline: boolean;
  score: number;
  highlight: boolean;
}

const MODELS: ModelSpec[] = [
  {
    id: "zipformer",
    name: "Zipformer-30M (Sherpa-ONNX)",
    execution: "Local on-device (C++ runtime)",
    cost: "Free ($0.00 operational cost)",
    detail: "Literal transcription mapped to Onset/Rime/Tone",
    dialectSensitivity: "Low error tolerance; captures exact Southern/Northern sounds",
    offline: true,
    score: 98,
    highlight: true,
  },
  {
    id: "azure",
    name: "Microsoft Azure CAPT API",
    execution: "Cloud-dependent (API call)",
    cost: "Billed per hour of processed audio",
    detail: "Word accuracy only; empty phoneme labels for Vietnamese",
    dialectSensitivity: "High error tolerance; normalizes tone/vowel mispronunciations",
    offline: false,
    score: 55,
    highlight: false,
  },
  {
    id: "textpa",
    name: "TextPA (LLM Assessment)",
    execution: "Cloud-dependent (LLM Prompting)",
    cost: "Billed per API token per prompt",
    detail: "Qualitative text feedback; prone to hallucinations",
    dialectSensitivity: "Unpredictable alignment depending on LLM prompt",
    offline: false,
    score: 62,
    highlight: false,
  },
  {
    id: "whisper",
    name: "Whisper-turbo (OpenAI)",
    execution: "Local or Cloud heavy",
    cost: "Free (local heavy compute) / API fee",
    detail: "Literal transcription; missing frame-level phoneme alignment",
    dialectSensitivity: "Smooths dialect errors into intended words",
    offline: true,
    score: 75,
    highlight: false,
  },
];

export const ASRComparisonWidget: React.FC = () => {
  const [filterOffline, setFilterOffline] = useState(false);

  const displayedModels = filterOffline ? MODELS.filter(m => m.offline) : MODELS;

  return (
    <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-sm p-5 shadow-soft-lift space-y-4">
      {/* Widget Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#C0C9C1] pb-3">
        <div>
          <h3 className="font-heading font-bold text-sm text-[#14422D] uppercase tracking-wide flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#D97757]" /> Comparative Model Evaluation Matrix (Table 5.2)
          </h3>
          <p className="text-xs text-[#717973] font-sans">
            Benchmarking speech recognition & pronunciation assessment paradigms
          </p>
        </div>

        <button
          onClick={() => setFilterOffline(!filterOffline)}
          className={`px-3 py-1 text-xs font-mono rounded-sm border transition-colors flex items-center gap-1.5 ${
            filterOffline
              ? "bg-[#14422D] text-white border-[#14422D] font-bold"
              : "bg-[#EFEEEA] text-[#1B1C1A] border-[#B0AEA5] hover:bg-[#E0F2E9]"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          {filterOffline ? "Showing Offline Models Only" : "Filter Offline Only"}
        </button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-sans">
          <thead>
            <tr className="bg-[#E0F2E9] border-b border-[#B0AEA5] text-[#14422D] font-mono uppercase font-bold text-[11px]">
              <th className="p-2.5">ASR Model</th>
              <th className="p-2.5">Execution & Hardware</th>
              <th className="p-2.5">Cost Model</th>
              <th className="p-2.5">Diagnostic Feedback</th>
              <th className="p-2.5">Dialect Sensitivity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#C0C9C1]">
            {displayedModels.map((model) => (
              <tr
                key={model.id}
                className={`transition-colors ${
                  model.highlight
                    ? "bg-[#E0F2E9]/60 font-semibold text-[#14422D]"
                    : "hover:bg-[#EFEEEA] text-[#1B1C1A]"
                }`}
              >
                <td className="p-2.5 font-heading font-bold">
                  <div className="flex items-center gap-1.5">
                    {model.highlight && (
                      <span className="bg-[#14422D] text-white font-mono text-[9px] px-1.5 py-0.5 rounded-sm uppercase">
                        SELECTED
                      </span>
                    )}
                    <span>{model.name}</span>
                  </div>
                </td>
                <td className="p-2.5 font-mono text-[11px]">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm ${
                    model.offline ? "bg-[#14422D]/10 text-[#14422D]" : "bg-[#D97757]/10 text-[#D97757]"
                  }`}>
                    {model.offline ? <Check className="w-3 h-3 text-[#14422D]" /> : <X className="w-3 h-3 text-[#D97757]" />}
                    {model.execution}
                  </span>
                </td>
                <td className="p-2.5 font-mono text-[11px] text-[#414943]">
                  {model.cost}
                </td>
                <td className="p-2.5 leading-tight text-[#1B1C1A]">
                  {model.detail}
                </td>
                <td className="p-2.5 leading-tight text-[#414943]">
                  {model.dialectSensitivity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Rationale Banner */}
      <div className="bg-[#14422D] text-white p-3 rounded-sm flex items-start gap-3 text-xs font-sans">
        <ShieldCheck className="w-5 h-5 text-[#E0F2E9] shrink-0 mt-0.5" />
        <div>
          <span className="font-mono font-bold text-[#E0F2E9] uppercase block mb-0.5">
            Key Architectural Conclusion:
          </span>
          <p className="leading-relaxed text-[#FAF9F5]/90">
            <strong>Zipformer-30M (Sherpa-ONNX)</strong> was chosen for the final system because it requires zero cloud operational costs, executes 100% offline on low-spec mobile devices, and preserves literal dialectal pronunciation without smoothing errors into false positives.
          </p>
        </div>
      </div>
    </div>
  );
};
