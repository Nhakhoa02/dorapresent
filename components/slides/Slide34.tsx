"use client";

import React, { useState } from "react";
import { BookOpen, RefreshCw, Target, PlusCircle, Award } from "lucide-react";
import { MathEquation } from "@/components/MathEquation";

export const Slide34: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<string>("fast");

  const ALLOCATIONS = [
    {
      id: "fast",
      profile: "Fast Learner",
      range: "R̄ > 0.7",
      srs: 50,
      weakness: 20,
      newAcq: 30,
      badgeColor: "bg-[#14422D] text-white",
      borderColor: "border-[#14422D]",
      desc: "High memory retrievability allows 30% allocation to rapid new syllable acquisition while spending 50% on scheduled reviews.",
    },
    {
      id: "normal",
      profile: "Normal Learner",
      range: "0.4 ≤ R̄ ≤ 0.7",
      srs: 60,
      weakness: 20,
      newAcq: 20,
      badgeColor: "bg-[#717973] text-white",
      borderColor: "border-[#C0C9C1]",
      desc: "Balanced curriculum split: 60% spaced repetition reviews, 20% diagnostic weakness remediation, and 20% new items.",
    },
    {
      id: "slow",
      profile: "Slow Learner",
      range: "R̄ < 0.4",
      srs: 70,
      weakness: 25,
      newAcq: 5,
      badgeColor: "bg-[#D97757] text-white",
      borderColor: "border-[#D97757]",
      desc: "Prevents cognitive overload by dedicating 95% of session time to consolidating retention and remediating weak phonemes, introducing only 5% new material.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">34 — GOAL 4: ADAPTIVE LEARNING FRAMEWORK
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          <span className="text-[#D97757]">Adaptive</span> learning curriculum
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: Dynamic Curriculum Allocation Table & Stacked Visualizer (7 Cols) */}
        <div className="lg:col-span-7 bg-[#EFEEEA] border border-[#C0C9C1] p-4 lg:p-5 rounded-xl flex flex-col justify-between space-y-3 min-h-0">
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D97757]" />
                <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                  LEARNER PROFILE ALLOCATION MATRIX
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#717973] bg-white px-2 py-0.5 rounded border border-[#C0C9C1]">
                Recall Range (R̄)
              </span>
            </div>

            {/* Matrix Table */}
            <div className="bg-white rounded-lg border border-[#C0C9C1] overflow-hidden text-xs">
              <table className="w-full text-left border-collapse font-mono">
                <thead>
                  <tr className="bg-[#14422D] text-white font-bold text-[11px] uppercase tracking-wider">
                    <th className="p-2.5">Learner Profile</th>
                    <th className="p-2.5">Recall Range (R̄)</th>
                    <th className="p-2.5 text-center">SRS Due</th>
                    <th className="p-2.5 text-center">Weakness</th>
                    <th className="p-2.5 text-center">New Acq</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C0C9C1]">
                  {ALLOCATIONS.map((item) => {
                    const isActive = item.id === activeProfile;
                    return (
                      <tr
                        key={item.id}
                        onClick={() => setActiveProfile(item.id)}
                        className={`cursor-pointer transition-all ${isActive
                          ? "bg-[#E0F2E9] font-bold text-[#14422D]"
                          : "hover:bg-[#EFEEEA] text-[#1B1C1A]"
                          }`}
                      >
                        <td className="p-2.5 flex items-center gap-1.5 font-sans font-bold">
                          <span
                            className={`w-2 h-2 rounded-full ${item.id === "fast"
                              ? "bg-[#14422D]"
                              : item.id === "normal"
                                ? "bg-[#717973]"
                                : "bg-[#D97757]"
                              }`}
                          />
                          {item.profile}
                        </td>
                        <td className="p-2.5 font-bold text-[#D97757]">{item.range}</td>
                        <td className="p-2.5 text-center font-bold">{item.srs}%</td>
                        <td className="p-2.5 text-center font-bold text-[#D97757]">{item.weakness}%</td>
                        <td className="p-2.5 text-center font-bold text-[#14422D]">{item.newAcq}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Allocation Stacked Bar Chart for Selected Profile */}
            <div className="bg-white p-3 rounded-lg border border-[#C0C9C1] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-[#14422D]">
                  Curriculum Mix for:{" "}
                  <span className="text-[#D97757]">
                    {ALLOCATIONS.find((a) => a.id === activeProfile)?.profile}
                  </span>
                </span>
                <span className="font-mono text-[10px] text-[#717973]">
                  Total: 100% Session Content
                </span>
              </div>

              {/* Multi-color Stacked Bar */}
              {(() => {
                const current = ALLOCATIONS.find((a) => a.id === activeProfile) || ALLOCATIONS[0];
                return (
                  <div>
                    <div className="w-full h-4 rounded-full overflow-hidden flex border border-[#C0C9C1]">
                      <div
                        className="bg-[#14422D] h-full transition-all duration-300 flex items-center justify-center text-[9px] text-white font-mono font-bold"
                        style={{ width: `${current.srs}%` }}
                      >
                        {current.srs}% SRS
                      </div>
                      <div
                        className="bg-[#D97757] h-full transition-all duration-300 flex items-center justify-center text-[9px] text-white font-mono font-bold"
                        style={{ width: `${current.weakness}%` }}
                      >
                        {current.weakness}%
                      </div>
                      <div
                        className="bg-[#C0C9C1] h-full transition-all duration-300 flex items-center justify-center text-[9px] text-[#14422D] font-mono font-bold"
                        style={{ width: `${current.newAcq}%` }}
                      >
                        {current.newAcq}% New
                      </div>
                    </div>

                    <p className="text-xs text-[#414943] mt-2 leading-relaxed font-sans">
                      {current.desc}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="bg-[#E0F2E9] border border-[#14422D] p-2.5 rounded-lg flex items-center gap-2">
            <Award className="w-4 h-4 text-[#14422D] shrink-0" />
            <span className="font-sans text-xs text-[#14422D] font-medium">
              Eliminates over-review frustration for fast learners while protecting slow learners from overload.
            </span>
          </div>
        </div>

        {/* Right Column: 3 Allocation Category Breakdown Cards (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 min-h-0">
          {/* Category 1: SRS Due */}
          <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-xl p-3.5 flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#14422D]" />
              <h3 className="font-heading font-extrabold text-sm text-[#14422D]">
                1. SRS Due (50% – 70%)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333C36] leading-relaxed mt-1">
              Components whose current session count meets or exceeds their scheduled SM-2 interval (<MathEquation latex="I" displayMode={false} />).
            </p>
          </div>

          {/* Category 2: Weakness */}
          <div className="bg-[#FAF9F5] border-2 border-[#D97757] rounded-xl p-3.5 flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[#D97757]" />
              <h3 className="font-heading font-extrabold text-sm text-[#D97757]">
                2. Weakness (20% – 25%)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333C36] leading-relaxed mt-1">
              Components where the estimated mastery <MathEquation latex="M < 0.75" displayMode={false} />, or those with high recent error streaks.
            </p>
          </div>

          {/* Category 3: New Acquisition */}
          <div className="bg-[#FAF9F5] border-2 border-[#C0C9C1] rounded-xl p-3.5 flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-[#717973]" />
              <h3 className="font-heading font-extrabold text-sm text-[#14422D]">
                3. New Acquisition (5% – 30%)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333C36] leading-relaxed mt-1">
              Unseen components, scaled by the user's historical acquisition limit (e.g., restricted to 5% for slow learners to prevent cognitive overload).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
