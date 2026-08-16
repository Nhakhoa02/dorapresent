"use client";

import React, { useState } from "react";
import { Mic, Volume2, Award, Zap, RefreshCcw, CheckCircle, Flame, Swords } from "lucide-react";

export const AppSimulatorWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"scramble" | "duel" | "diagnostic">("scramble");
  const [isRecording, setIsRecording] = useState(false);
  const [userScore, setUserScore] = useState<number | null>(null);
  const [botScore, setBotScore] = useState<number>(85);

  const handleSimulateVoiceInput = () => {
    setIsRecording(true);
    setUserScore(null);
    setTimeout(() => {
      setIsRecording(false);
      setUserScore(92);
    }, 1500);
  };

  return (
    <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-sm p-4 shadow-soft-lift space-y-3">
      {/* App Header Bar */}
      <div className="bg-[#14422D] text-white p-3 rounded-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#E0F2E9] text-[#14422D] font-bold font-heading text-xs flex items-center justify-center">
            D
          </div>
          <span className="font-heading font-bold text-sm">Doraebin (Locall App)</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="bg-[#E0F2E9] text-[#14422D] px-2 py-0.5 rounded-sm font-bold flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#D97757]" /> 7 Day Streak
          </span>
          <span className="bg-[#D97757] text-white px-2 py-0.5 rounded-sm font-bold">
            1,250 XP
          </span>
        </div>
      </div>

      {/* App Mode Tabs */}
      <div className="flex items-center gap-1 bg-[#EFEEEA] p-1 rounded-sm border border-[#C0C9C1]">
        <button
          onClick={() => setActiveTab("scramble")}
          className={`flex-1 py-1 text-xs font-mono font-medium rounded-sm transition-colors ${
            activeTab === "scramble"
              ? "bg-[#14422D] text-white font-bold"
              : "text-[#414943] hover:text-[#14422D]"
          }`}
        >
          1. Syllable Scramble
        </button>
        <button
          onClick={() => setActiveTab("duel")}
          className={`flex-1 py-1 text-xs font-mono font-medium rounded-sm transition-colors ${
            activeTab === "duel"
              ? "bg-[#14422D] text-white font-bold"
              : "text-[#414943] hover:text-[#14422D]"
          }`}
        >
          2. Speed Duel vs Bot
        </button>
        <button
          onClick={() => setActiveTab("diagnostic")}
          className={`flex-1 py-1 text-xs font-mono font-medium rounded-sm transition-colors ${
            activeTab === "diagnostic"
              ? "bg-[#14422D] text-white font-bold"
              : "text-[#414943] hover:text-[#14422D]"
          }`}
        >
          3. Diagnostic Card
        </button>
      </div>

      {/* Simulator Display Body */}
      {activeTab === "scramble" && (
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-4 rounded-sm space-y-3 text-center">
          <span className="font-mono text-xs text-[#3E6658] uppercase font-bold">
            Pronunciation Challenge: Target Syllable
          </span>
          <div className="font-heading font-extrabold text-4xl text-[#14422D]">
            nghiêng
          </div>
          <p className="text-xs text-[#414943] italic">
            Assemble the onset "ngh", rime "iêng", and flat tone. Speak into your microphone.
          </p>

          <div className="flex justify-center py-2">
            <button
              onClick={handleSimulateVoiceInput}
              disabled={isRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-[#D97757] text-white animate-pulse ring-4 ring-[#D97757]/30"
                  : "bg-[#14422D] hover:bg-[#2D5A43] text-white shadow-lg"
              }`}
            >
              <Mic className="w-8 h-8" />
            </button>
          </div>

          {isRecording && (
            <span className="font-mono text-xs text-[#D97757] font-bold animate-pulse block">
              Sherpa-ONNX Zipformer Inference Active...
            </span>
          )}

          {userScore !== null && !isRecording && (
            <div className="bg-[#FAF9F5] border border-[#14422D] p-3 rounded-sm text-center animate-fade-in">
              <span className="font-mono text-xs text-[#14422D] font-bold block">
                ✓ Perfect Pronunciation Accuracy: {userScore}%
              </span>
              <span className="text-xs text-[#414943] block mt-0.5 font-mono">
                Onset [ngh] 100% | Rime [iêng] 100% | Tone [flat] 100%
              </span>
            </div>
          )}
        </div>
      )}

      {activeTab === "duel" && (
        <div className="bg-[#E0F2E9] border border-[#B0AEA5] p-4 rounded-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-[#14422D]">Learner (Child)</span>
            <span className="text-[#D97757] flex items-center gap-1">
              <Swords className="w-3.5 h-3.5" /> VS
            </span>
            <span className="text-[#3E6658]">AI Learning Bot</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#FAF9F5] border border-[#14422D] p-3 rounded-sm text-center">
              <span className="font-mono text-[10px] text-[#717973]">Your Score</span>
              <div className="font-heading font-bold text-2xl text-[#14422D]">
                {userScore !== null ? `${userScore}%` : "Ready"}
              </div>
            </div>
            <div className="bg-[#FAF9F5] border border-[#B0AEA5] p-3 rounded-sm text-center">
              <span className="font-mono text-[10px] text-[#717973]">Bot Score</span>
              <div className="font-heading font-bold text-2xl text-[#3E6658]">
                {botScore}%
              </div>
            </div>
          </div>

          <button
            onClick={handleSimulateVoiceInput}
            className="w-full py-2 bg-[#14422D] hover:bg-[#2D5A43] text-white font-mono text-xs font-bold rounded-sm transition-colors"
          >
            Start Speed Duel Round
          </button>
        </div>
      )}

      {activeTab === "diagnostic" && (
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-4 rounded-sm space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between text-[#14422D] font-bold border-b border-[#C0C9C1] pb-1.5">
            <span>Diagnostic Component Error Isolation</span>
            <span className="text-[#D97757]">Word: "thầy"</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span>Onset [th]:</span>
              <span className="text-[#14422D] font-bold">100% Match (Correct)</span>
            </div>
            <div className="flex justify-between">
              <span>Rime [ây]:</span>
              <span className="text-[#14422D] font-bold">100% Match (Correct)</span>
            </div>
            <div className="flex justify-between">
              <span>Tone [huyền]:</span>
              <span className="text-[#D97757] font-bold">Mild Pitch Deviation (-12Hz)</span>
            </div>
          </div>
          <p className="text-[11px] font-sans italic text-[#717973] pt-1 border-t border-[#C0C9C1]/50">
            TTS audio feedback automatically plays standard tone contour for corrective guidance.
          </p>
        </div>
      )}
    </div>
  );
};
