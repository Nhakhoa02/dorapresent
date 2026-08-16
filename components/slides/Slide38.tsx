"use client";

import React, { useState } from "react";
import { Cpu, Smartphone, Database, Zap, CheckCircle2, HardDrive, ShieldCheck } from "lucide-react";

export const Slide38: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number>(4);

  const SPECS = [
    {
      id: 1,
      category: "Development Framework",
      tech: "Flutter",
      role: "Cross-platform mobile UI rendering & reactive state management for iOS & Android.",
      icon: <Smartphone className="w-5 h-5 text-[#14422D]" />,
    },
    {
      id: 2,
      category: "Programming Language",
      tech: "Dart",
      role: "Strongly-typed client logic & execution host for vi_spelling.dart phonological engine.",
      icon: <Cpu className="w-5 h-5 text-[#D97757]" />,
    },
    {
      id: 3,
      category: "Local Database",
      tech: "SQLite (sqflite)",
      role: "100% offline local storage persisting user profiles, EWMA mastery scores, & SM-2 review intervals.",
      icon: <Database className="w-5 h-5 text-[#14422D]" />,
    },
    {
      id: 4,
      category: "Speech Recognition Engine",
      tech: "Zipformer-30M (FP32 variant)",
      role: "30M parameter lightweight streaming transducer ASR model trained on Vietnamese speech.",
      icon: <Zap className="w-5 h-5 text-[#D97757]" />,
    },
    {
      id: 5,
      category: "ASR Deployment Runtime",
      tech: "Sherpa-ONNX",
      role: "Cross-compiled C++ ONNX Runtime bindings for real-time mobile ARM/x86 neural execution.",
      icon: <HardDrive className="w-5 h-5 text-[#14422D]" />,
    },
    {
      id: 6,
      category: "TTS Synthesis Engine",
      tech: "Native OS TTS (flutter_tts)",
      role: "Offline speech synthesis adapted with phonetization & stop-consonant pitch stability rules.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#D97757]" />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">38 — GOAL 6: MOBILE INTERFACE & LOCAL STORAGE
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Mobile system specifications &amp; tech stack
        </h2>
      </div>

      {/* Full Width Container */}
      <div className="w-full flex-1 flex flex-col justify-between bg-[#EFEEEA] border-2 border-[#C0C9C1] p-4 lg:p-6 rounded-xl min-h-0 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D97757]" />
            <span className="font-mono text-sm font-bold text-[#14422D] uppercase tracking-wider">
              TECHNICAL ARCHITECTURE SPECIFICATIONS
            </span>
          </div>
          <span className="font-mono text-xs text-white bg-[#14422D] px-3 py-1 rounded font-bold">
            Thesis §4.6 – §4.7
          </span>
        </div>

        {/* 2-Column Grid of High-Readability Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1 min-h-0 overflow-y-auto pr-1">
          {SPECS.map((spec) => {
            const isActive = spec.id === activeRow;
            return (
              <div
                key={spec.id}
                onClick={() => setActiveRow(spec.id)}
                className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${isActive
                  ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.005]"
                  : "bg-white border-[#C0C9C1] hover:bg-[#FAF9F5]"
                  }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono">
                    <div className="flex items-center gap-2">
                      {spec.icon}
                      <span className="font-bold text-[#717973] text-xs sm:text-sm">
                        {spec.category}
                      </span>
                    </div>
                    <span className="font-extrabold text-[#D97757] text-sm sm:text-base bg-[#EFEEEA] px-2.5 py-0.5 rounded border border-[#C0C9C1]">
                      {spec.tech}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#333C36] font-sans leading-relaxed pt-1 font-medium">
                    {spec.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
};
