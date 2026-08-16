"use client";

import React from "react";
import { Cpu, Layers, SearchCheck, Repeat, Volume2, HardDrive } from "lucide-react";

export const Slide8: React.FC = () => {
  const SYSTEM_GOALS = [
    {
      icon: Cpu,
      title: "On-Device Vietnamese ASR",
      tag: "GOAL 1: ASR MODEL",
      desc: "Deploys a lightweight Zipformer-based ASR model using Sherpa-ONNX runtime, enabling speech assessment 100% offline without cloud services or recurring API costs.",
    },
    {
      icon: Layers,
      title: "Rule-Based Phonological Decomposition",
      tag: "GOAL 2: DECOMPOSITION ENGINE",
      desc: "Decomposes Vietnamese syllables into Onset consonants, Rimes, and Lexical Tones to mirror primary-school spelling instruction.",
    },
    {
      icon: SearchCheck,
      title: "Diagnostic Pronunciation Feedback",
      tag: "GOAL 3: EVALUATION SYSTEM",
      desc: "Compares expected and observed phonological components instead of coarse word matching to pinpoint exact mispronounced parts.",
    },
    {
      icon: Repeat,
      title: "Adaptive Learning Framework",
      tag: "GOAL 4: ADAPTIVE ENGINE",
      desc: "Estimates learner mastery per component (EWMA) and schedules personalized review sessions using a modified SuperMemo-2 algorithm.",
    },
    {
      icon: Volume2,
      title: "Offline Text-to-Speech Support",
      tag: "GOAL 5: OFFLINE TTS",
      desc: "Uses native platform offline TTS technology to provide pronunciation examples and spelling guidance in zero-connectivity areas.",
    },
    {
      icon: HardDrive,
      title: "Mobile Interface & Local Storage",
      tag: "GOAL 6: UI/UX DESIGN & LOCAL STORAGE",
      desc: "Stores practice activities, vocabulary data, and performance history locally on-device for independent student practice.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-5 lg:p-7 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">08 — GOALS
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14422D] tracking-tight">
          Goals of our solution
        </h2>
      </div>

      {/* 6-Box Grid Layout (3 Columns x 2 Rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 items-stretch min-h-0 my-auto py-1">
        {SYSTEM_GOALS.map((goal, idx) => {
          const IconComponent = goal.icon;
          return (
            <div
              key={idx}
              className="bg-[#FAF9F5] border-2 border-[#C0C9C1] p-4 rounded-xl flex flex-col justify-between space-y-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2E9] border border-[#B0AEA5] text-[#14422D] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-[#D97757] uppercase tracking-widest bg-[#EFEEEA] px-2 py-0.5 rounded border border-[#C0C9C1]">
                    {goal.tag}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#14422D] leading-snug">
                  {goal.title}
                </h3>
                <p className="text-xs text-[#414943] leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
};
