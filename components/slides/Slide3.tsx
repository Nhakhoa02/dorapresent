"use client";

import React, { useState } from "react";
import { Mic, Layers, Volume2, RefreshCw, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Slide3: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const STEPS = [
    {
      id: 1,
      num: "01",
      title: "1. Learner Speaks",
      tag: "Speech Input",
      icon: <Mic className="w-8 h-8" />,
    },
    {
      id: 2,
      num: "02",
      title: "2. Diagnose Mistake",
      tag: "Speech analysis",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      id: 3,
      num: "03",
      title: "3. Give Auditory Feedback",
      tag: "Guidance & Feedback",
      icon: <Volume2 className="w-8 h-8" />,
    },
    {
      id: 4,
      num: "04",
      title: "4. Adapt Next Exercise",
      tag: "Adaptive learning",
      icon: <RefreshCw className="w-8 h-8" />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">03 — THE PROBLEM
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          How to learn to <span className="text-[#D97757]">READ</span> a language!
        </h2>
      </div>

      {/* Main Container (Outer Box Removed) */}
      <div className="flex-1 flex flex-col justify-between space-y-4 min-h-0">


        {/* 4-Step Connected Clean Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 min-h-0">
          {STEPS.map((step, idx) => {
            const isActive = step.id === activeStep;
            return (
              <div key={step.id} className="flex flex-col justify-between">
                <div
                  onClick={() => setActiveStep(step.id)}
                  className={`p-5 sm:p-6 rounded-2xl border-2 transition-all cursor-pointer flex-1 flex flex-col justify-between items-center text-center ${isActive
                    ? "bg-white border-[#14422D] shadow-xl scale-[1.03]"
                    : "bg-[#EFEEEA] border-[#C0C9C1] hover:bg-white"
                    }`}
                >
                  {/* Top Badge & Tag */}
                  <div className="w-full flex items-center justify-between font-mono">
                    <span
                      className={`text-xs font-black px-2.5 py-0.5 rounded-md ${isActive
                        ? "bg-[#14422D] text-white"
                        : "bg-[#E0F2E9] text-[#14422D]"
                        }`}
                    >
                      {step.num}
                    </span>
                    <span className="text-[11px] font-extrabold text-[#717973] uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>

                  {/* Centered Large Green Icon & Main Title */}
                  <div className="flex flex-col items-center justify-center space-y-3.5 my-auto py-2">
                    <div
                      className={`p-3.5 rounded-2xl transition-all ${isActive
                        ? "bg-[#14422D] text-white shadow-sm"
                        : "bg-[#E0F2E9] text-[#14422D]"
                        }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="font-heading font-black text-base sm:text-lg text-[#14422D] leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Arrow Indicator */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:flex justify-center w-full pt-1">
                      <ArrowRight className="w-5 h-5 text-[#14422D]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
};
