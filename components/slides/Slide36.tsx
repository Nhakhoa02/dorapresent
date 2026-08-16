"use client";

import React, { useState } from "react";
import { Volume2, AlertTriangle, XCircle, CheckCircle2, AlertCircle } from "lucide-react";

export const Slide36: React.FC = () => {
  const [activeModel, setActiveModel] = useState<number>(1);

  const TTS_MODELS = [
    {
      id: 1,
      name: "VITS & Piper-based Models",
      tech: "Piper TTS / NghiTTS",
      tag: "Robotic Audio Quality",
      isFallback: true,
      desc: "End-to-end architectures integrating acoustic features and waveform generators into a single neural network.",
      pros: "High inference speed on lightweight hardware.",
      cons: "Synthesized voices exhibit a robotic, flat unnatural tone during testing, reducing engagement for primary school children.",
    },
    {
      id: 2,
      name: "Flow-Matching Models",
      tech: "F5-TTS Autoregressive",
      tag: "High Compute Latency",
      isFallback: true,
      desc: "Diffusion & flow-matching architectures generating high-fidelity acoustic waveforms.",
      pros: "Exceptional voice naturalness and emotional prosody.",
      cons: "High parameter count demands massive computational resources, causing severe latency on mid-range smartphone CPUs.",
    },
    {
      id: 3,
      name: "VieNeuTTS Engine",
      tech: "Sea G2P + Lightweight Generator",
      tag: "High Quality Continuous TTS",
      isFallback: false,
      desc: "Combines a custom Grapheme-to-Phoneme (G2P) frontend with a lightweight acoustic generator.",
      pros: "Optimized for continuous conversational Vietnamese speech with natural sentence-level prosody.",
      cons: "Suffers from Out-of-Distribution (OOD) corruption when fed fragmented spelling tokens.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">36 — GOAL 5: AUDITORY FEEDBACK
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          On-device neural TTS limitations
        </h2>
      </div>

      {/* Grid: 3 Comparative Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 items-stretch min-h-0">
        {TTS_MODELS.map((model) => {
          const isActive = model.id === activeModel;
          return (
            <div
              key={model.id}
              onClick={() => setActiveModel(model.id)}
              className={`border-2 rounded-xl p-4 flex flex-col justify-between transition-all cursor-pointer ${isActive
                ? "bg-[#FAF9F5] border-[#D97757] shadow-md scale-[1.01]"
                : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-[#E0F2E9]/50"
                }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${model.isFallback
                      ? "bg-[#D97757] text-white"
                      : "bg-[#14422D] text-white"
                      }`}
                  >
                    {model.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[#717973] font-bold">
                    {model.tech}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-[#D97757]" />
                  <h3 className="font-heading font-extrabold text-base text-[#14422D]">
                    {model.name}
                  </h3>
                </div>

                <p className="text-xs text-[#414943] leading-relaxed">
                  {model.desc}
                </p>

                {/* Pros & Cons */}
                <div className="space-y-1.5 pt-1 text-xs font-sans">
                  <div className="bg-white p-2 rounded border border-[#C0C9C1] flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14422D] shrink-0 mt-0.5" />
                    <span className="text-[#14422D] text-[11px] leading-snug">
                      <strong>Pros:</strong> {model.pros}
                    </span>
                  </div>

                  <div className="bg-[#D97757]/10 p-2 rounded border border-[#D97757]/30 text-[#D97757] flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-[#D97757] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">
                      <strong>Limitation:</strong> {model.cons}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-[#C0C9C1] flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#D97757]">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>Falls Short on Mobile Execution</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Out-Of-Distribution (OOD) Failure Banner */}
      <div className="bg-[#D97757]/15 border-2 border-[#D97757] p-3 rounded-xl flex items-center justify-between text-xs text-[#14422D]">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-[#D97757] shrink-0" />
          <p className="font-sans text-xs text-[#1B1C1A] leading-snug">
            <strong>Critical OOD Distortion Failure:</strong> When fed fragmented spelling sequences (e.g., <em>"i - ê - ngờ - iêng"</em>), neural models lack grammatical context, producing <strong>vocal distortions, static noise, and corrupted audio waveforms</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
