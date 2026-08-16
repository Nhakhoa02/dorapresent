"use client";

import React, { useState } from "react";
import { Sparkles, TrendingUp, CheckCircle2, XCircle, RotateCcw, Sliders, Calculator } from "lucide-react";
import { MathEquation } from "@/components/MathEquation";

interface StepRecord {
  step: number;
  S: number; // 1 for Correct, 0 for Wrong
  score: number;
  prevScore: number;
}

export const Slide31: React.FC = () => {
  const [alpha, setAlpha] = useState<number>(0.5);

  // Initial preset simulation steps (S1=1, S2=1, S3=1, S4=0 at alpha=0.5)
  const [history, setHistory] = useState<StepRecord[]>([
    { step: 1, S: 1, score: 0.5, prevScore: 0 },
    { step: 2, S: 1, score: 0.75, prevScore: 0.5 },
    { step: 3, S: 1, score: 0.875, prevScore: 0.75 },
    { step: 4, S: 0, score: 0.4375, prevScore: 0.875 },
  ]);

  const latestRecord = history.length > 0 ? history[history.length - 1] : null;
  const currentScore = latestRecord ? latestRecord.score : 0;

  // Add attempt handler (Correct = 1, Wrong = 0)
  const handleAddAttempt = (outcome: 0 | 1) => {
    const prev = history.length > 0 ? history[history.length - 1].score : 0;
    // EWMA Recurrence: M_t = (1 - alpha) * M_{t-1} + alpha * S_t
    const newScore = (1 - alpha) * prev + alpha * outcome;
    const nextStep = history.length + 1;

    setHistory((prevHistory) => [
      ...prevHistory,
      { step: nextStep, S: outcome, score: newScore, prevScore: prev },
    ]);
  };

  // Recalculate full history when alpha changes
  const handleAlphaChange = (newAlpha: number) => {
    setAlpha(newAlpha);
    let runningScore = 0;
    const recalculated = history.map((item) => {
      const newScore = (1 - newAlpha) * runningScore + newAlpha * item.S;
      const record = { ...item, prevScore: runningScore, score: newScore };
      runningScore = newScore;
      return record;
    });
    setHistory(recalculated);
  };

  // Reset simulator
  const handleReset = () => {
    setHistory([]);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">31 — GOAL 3: PRONUNCIATION ASSESSMENT
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Exponentially Weighted Moving Average (EWMA)
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: Mathematical Model & Formulations (6 Cols) */}
        <div className="lg:col-span-6 bg-[#EFEEEA] border border-[#C0C9C1] p-4 lg:p-5 rounded-xl flex flex-col justify-between space-y-3 min-h-0">
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D97757]" />
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                MATHEMATICAL RECURRENCE FORMULATION
              </span>
            </div>

            {/* Recurrence Equation 4.3 */}
            <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#C0C9C1] space-y-1">
              <span className="font-mono text-[10px] text-[#717973] uppercase font-bold block">
                Recurrence Relation (Eq. 4.3):
              </span>
              <div className="bg-white p-2.5 rounded border border-[#C0C9C1] text-center shadow-xs overflow-x-auto">
                <MathEquation
                  latex="M_t = (1 - \alpha) \cdot M_{t-1} + \alpha \cdot S_t \quad (S_t \in \{0, 1\})"
                  displayMode={true}
                />
              </div>
              <p className="text-[11px] text-[#414943] pt-0.5">
                where <MathEquation latex="\alpha \in (0, 1)" displayMode={false} /> is the smoothing factor. Ensures <MathEquation latex="M_t" displayMode={false} /> is strictly bounded within <MathEquation latex="[0, 1]" displayMode={false} />.
              </p>
            </div>

            {/* Expanded Exponential Decay Equation 4.4 */}
            <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#C0C9C1] space-y-1">
              <span className="font-mono text-[10px] text-[#717973] uppercase font-bold block">
                Expanded Exponential Decay (Eq. 4.4):
              </span>
              <div className="bg-white p-2.5 rounded border border-[#C0C9C1] text-center shadow-xs overflow-x-auto">
                <MathEquation
                  latex="M_t = \sum_{i=0}^{t-1} \alpha(1 - \alpha)^i S_{t-i} + (1 - \alpha)^t M_0"
                  displayMode={true}
                />
              </div>
              <p className="text-[11px] text-[#414943] pt-0.5">
                Past initial errors decay exponentially while recent attempts receive higher cognitive weight.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive EWMA Simulator (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 min-h-0">
          <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-xl p-4 lg:p-5 shadow-md flex flex-col justify-between flex-1 min-h-0">
            <div className="flex flex-col h-full min-h-0 space-y-2.5">
              {/* Header Bar with Live Current Score Readout */}
              <div className="flex items-center justify-between border-b border-[#C0C9C1] pb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#D97757]" />
                  <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                    LIVE EWMA SIMULATOR
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-xs text-[#717973]">Current <MathEquation latex="M_t" displayMode={false} />:</span>
                  <span className="font-extrabold text-sm text-[#14422D] bg-[#E0F2E9] px-2.5 py-0.5 rounded border border-[#14422D]">
                    {currentScore.toFixed(4)} ({(currentScore * 100).toFixed(1)}%)
                  </span>
                </div>
              </div>

              {/* Alpha Adjustment Controls */}
              <div className="bg-[#EFEEEA] p-2 rounded-lg border border-[#C0C9C1] space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#14422D] font-bold">
                    <Sliders className="w-3.5 h-3.5 text-[#D97757]" />
                    <span>Smoothing (<MathEquation latex="\alpha" displayMode={false} />): <strong className="text-[#D97757]">{alpha.toFixed(2)}</strong></span>
                  </div>
                  {/* Preset Alpha Chips */}
                  <div className="flex gap-1">
                    {[0.1, 0.3, 0.5, 0.7, 0.9].map((val) => (
                      <button
                        key={val}
                        onClick={() => handleAlphaChange(val)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${alpha === val
                            ? "bg-[#14422D] text-white shadow-xs"
                            : "bg-white text-[#414943] border border-[#C0C9C1] hover:bg-[#E0F2E9]"
                          }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  type="range"
                  min="0.05"
                  max="0.95"
                  step="0.05"
                  value={alpha}
                  onChange={(e) => handleAlphaChange(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-[#C0C9C1] rounded-lg appearance-none cursor-pointer accent-[#14422D]"
                />
              </div>

              {/* Action Buttons: Correct / Wrong / Reset */}
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <button
                  onClick={() => handleAddAttempt(1)}
                  className="bg-[#14422D] hover:bg-[#14422D]/90 text-white py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Correct (S=1)</span>
                </button>
                <button
                  onClick={() => handleAddAttempt(0)}
                  className="bg-[#D97757] hover:bg-[#D97757]/90 text-white py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <XCircle className="w-4 h-4 text-rose-200" />
                  <span>Wrong (S=0)</span>
                </button>
                <button
                  onClick={handleReset}
                  className="bg-[#EFEEEA] hover:bg-[#C0C9C1]/50 text-[#414943] border border-[#C0C9C1] py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#717973]" />
                  <span>Reset (M₀=0)</span>
                </button>
              </div>

              {/* Interactive Step History Timeline List */}
              <div className="space-y-1.5 font-mono text-xs flex-1 min-h-0 overflow-y-auto pr-0.5">
                {history.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-[#717973] text-xs italic bg-white rounded-lg border border-[#C0C9C1] p-3 text-center">
                    Click "Correct" or "Wrong" above to simulate live steps!
                  </div>
                ) : (
                  history.map((st) => {
                    const isSuccess = st.S === 1;
                    return (
                      <div
                        key={st.step}
                        className={`p-2 rounded-lg border transition-all ${isSuccess
                            ? "bg-[#E0F2E9]/60 border-[#14422D]/40"
                            : "bg-[#D97757]/15 border-[#D97757]/50"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-bold ${isSuccess ? "text-[#14422D]" : "text-[#D97757]"}`}>
                            t = {st.step}: {isSuccess ? "✓ Correct (S=1)" : "✗ Wrong (S=0)"}
                          </span>
                          <span className="font-extrabold text-[#14422D] bg-white px-2 py-0.5 rounded border border-[#C0C9C1]">
                            M_{st.step} = {st.score.toFixed(4)}
                          </span>
                        </div>

                        {/* Progress Bar Visualizer */}
                        <div className="w-full bg-white h-1.5 rounded-full mt-1 overflow-hidden border border-[#C0C9C1]">
                          <div
                            className={`h-full transition-all duration-300 ${isSuccess ? "bg-[#14422D]" : "bg-[#D97757]"
                              }`}
                            style={{ width: `${Math.min(100, Math.max(0, st.score * 100))}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Below-Example Calculation Breakdown Box */}
              {latestRecord && (
                <div className="bg-[#14422D] text-white p-2.5 rounded-lg border border-[#414943] font-mono text-xs space-y-1 shadow-sm shrink-0">
                  <div className="flex items-center justify-between text-[#D97757] font-bold text-[10px] uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-[#D97757]" />
                      <span>Step t={latestRecord.step} Numerical Calculation Breakdown</span>
                    </div>
                    <span className="text-[#E0F2E9]">
                      S_{latestRecord.step} = {latestRecord.S}
                    </span>
                  </div>
                  <div className="text-emerald-300 font-bold bg-[#110E0B]/60 p-1.5 rounded border border-white/10 text-center overflow-x-auto text-[11px]">
                    <MathEquation
                      latex={`M_{${latestRecord.step}} = (1 - ${alpha.toFixed(2)}) \\cdot ${latestRecord.prevScore.toFixed(4)} + ${alpha.toFixed(2)} \\cdot ${latestRecord.S} = ${latestRecord.score.toFixed(4)}`}
                      displayMode={false}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
