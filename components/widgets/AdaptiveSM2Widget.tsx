"use client";

import React, { useState } from "react";
import { Sliders, RefreshCw, Award, TrendingUp, CheckCircle, XCircle } from "lucide-react";

export const AdaptiveSM2Widget: React.FC = () => {
  // Mastery EWMA parameters
  const [alpha, setAlpha] = useState(0.3); // EWMA learning rate
  const [currentMastery, setCurrentMastery] = useState(0.65); // initial mastery score
  const [sm2Interval, setSm2Interval] = useState(3); // review interval in days
  const [efactor, setEfactor] = useState(2.5); // SM-2 ease factor
  const [attempts, setAttempts] = useState<{ result: boolean; score: number; date: string }[]>([
    { result: true, score: 1.0, date: "Session 1" },
    { result: false, score: 0.0, date: "Session 2" },
    { result: true, score: 1.0, date: "Session 3" },
  ]);

  const handleSimulateAttempt = (isCorrect: boolean) => {
    const score = isCorrect ? 1.0 : 0.0;
    // EWMA update formula: M_new = alpha * score + (1 - alpha) * M_old
    const newMastery = alpha * score + (1 - alpha) * currentMastery;
    
    // Modified SM-2 update: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    const q = isCorrect ? 5 : 2; // quality score
    const newEF = Math.max(1.3, efactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    const newInterval = isCorrect ? Math.round(sm2Interval * newEF) : 1;

    setCurrentMastery(parseFloat(newMastery.toFixed(3)));
    setEfactor(parseFloat(newEF.toFixed(2)));
    setSm2Interval(newInterval);

    setAttempts((prev) => [
      ...prev,
      { result: isCorrect, score, date: `Session ${prev.length + 1}` },
    ]);
  };

  const handleReset = () => {
    setCurrentMastery(0.65);
    setSm2Interval(3);
    setEfactor(2.5);
    setAttempts([
      { result: true, score: 1.0, date: "Session 1" },
      { result: false, score: 0.0, date: "Session 2" },
      { result: true, score: 1.0, date: "Session 3" },
    ]);
  };

  return (
    <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-sm p-5 shadow-soft-lift space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-[#C0C9C1] pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#D97757]" />
          <h3 className="font-heading font-bold text-sm text-[#14422D] uppercase tracking-wide">
            Adaptive Learning Engine Simulator (EWMA + Modified SM-2)
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="p-1 text-[#717973] hover:text-[#14422D] transition-colors"
          title="Reset Simulation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Simulator Inputs & Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* EWMA Mastery Display */}
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-3 rounded-sm text-center">
          <span className="font-mono text-[10px] text-[#3E6658] uppercase font-bold tracking-wider">
            EWMA Mastery Score ($M_t$)
          </span>
          <div className="font-heading font-bold text-2xl text-[#14422D] mt-1">
            {(currentMastery * 100).toFixed(1)}%
          </div>
          <span className="font-mono text-[10px] text-[#717973]">
            $\alpha = {alpha}$ (Learning Rate)
          </span>
        </div>

        {/* SM-2 Ease Factor */}
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-3 rounded-sm text-center">
          <span className="font-mono text-[10px] text-[#3E6658] uppercase font-bold tracking-wider">
            SM-2 Ease Factor ($EF$)
          </span>
          <div className="font-heading font-bold text-2xl text-[#D97757] mt-1">
            {efactor}
          </div>
          <span className="font-mono text-[10px] text-[#717973]">
            Min $EF = 1.30$
          </span>
        </div>

        {/* Next Review Interval */}
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-3 rounded-sm text-center">
          <span className="font-mono text-[10px] text-[#3E6658] uppercase font-bold tracking-wider">
            Next Review Interval ($I_n$)
          </span>
          <div className="font-heading font-bold text-2xl text-[#14422D] mt-1">
            {sm2Interval} Days
          </div>
          <span className="font-mono text-[10px] text-[#717973]">
            Spaced repetition delay
          </span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-3.5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs font-mono text-[#1B1C1A]">
          <span className="font-bold text-[#14422D]">Simulate Practice Outcome:</span> Click to observe mastery trajectory
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSimulateAttempt(true)}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#14422D] hover:bg-[#2D5A43] text-white text-xs font-mono font-medium rounded-sm transition-colors"
          >
            <CheckCircle className="w-3.5 h-3.5" /> Correct (q=5)
          </button>
          <button
            onClick={() => handleSimulateAttempt(false)}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#D97757] hover:bg-[#E88A6B] text-white text-xs font-mono font-medium rounded-sm transition-colors"
          >
            <XCircle className="w-3.5 h-3.5" /> Incorrect (q=2)
          </button>
        </div>
      </div>

      {/* Session Log History */}
      <div className="space-y-1">
        <span className="font-mono text-[11px] text-[#717973] font-bold uppercase tracking-wider">
          Practice Trajectory History ({attempts.length} Attempts):
        </span>
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {attempts.map((att, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 text-[11px] font-mono rounded-sm border shrink-0 ${
                att.result
                  ? "bg-[#14422D]/10 border-[#14422D]/30 text-[#14422D]"
                  : "bg-[#D97757]/10 border-[#D97757]/30 text-[#D97757]"
              }`}
            >
              #{idx + 1}: {att.result ? "✓ Correct" : "✗ Error"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
