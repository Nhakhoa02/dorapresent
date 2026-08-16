"use client";

import React, { useState, useEffect } from "react";
import { SLIDES_METADATA } from "@/types/presentation";
import { X, Play, Pause, RotateCcw, Clock, Volume2 } from "lucide-react";

interface PresenterNotesModalProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  currentSlide,
  isOpen,
  onClose,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0 && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  if (!isOpen) return null;

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const slide = SLIDES_METADATA[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-[#1B1C1A]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-sm shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="bg-[#14422D] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm">
            <Clock className="w-4 h-4 text-[#D97757]" />
            <span className="font-bold">ORAL DEFENSE PRESENTER VIEW</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#E0F2E9] hover:text-white p-1 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Defense Timer Toolbar */}
        <div className="bg-[#E0F2E9] border-b border-[#B0AEA5] px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#3E6658] uppercase font-bold">Elapsed Defense Time:</span>
            <span className="font-mono text-xl font-bold text-[#14422D] bg-[#FAF9F5] px-3 py-0.5 rounded-sm border border-[#B0AEA5]">
              {formatTime(seconds)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsActive(!isActive)}
              className="flex items-center gap-1 px-3 py-1 bg-[#14422D] text-white rounded-sm text-xs font-mono font-medium hover:bg-[#2D5A43] transition-colors"
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isActive ? "Pause Timer" : "Start Defense"}
            </button>
            <button
              onClick={() => {
                setIsActive(false);
                setSeconds(0);
              }}
              className="p-1.5 bg-[#FAF9F5] text-[#1B1C1A] border border-[#B0AEA5] rounded-sm hover:bg-[#EFEEEA] transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Notes Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div>
            <div className="font-mono text-xs font-semibold text-[#D97757] uppercase tracking-wider mb-1">
              SLIDE {currentSlide}: {slide?.title}
            </div>
            <p className="text-sm font-semibold text-[#414943] italic border-l-2 border-[#D97757] pl-3 py-0.5 bg-[#EFEEEA]/50 rounded-r-sm">
              "{slide?.subtitle}"
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#C0C9C1] p-4 rounded-sm">
            <h4 className="font-heading font-semibold text-[#14422D] text-base mb-2 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#14422D]" /> Key Speaking Points & Oral Script
            </h4>
            <p className="text-sm text-[#1B1C1A] leading-relaxed whitespace-pre-line font-sans">
              {slide?.speakerNotes}
            </p>
          </div>

          <div className="bg-[#E0F2E9]/60 border border-[#B0AEA5] p-3.5 rounded-sm text-xs font-mono text-[#3E6658]">
            <span className="font-bold text-[#14422D]">Defense Tip:</span> Keep pace at approximately 1.5 - 2 minutes per slide. Total target defense duration is 15-20 minutes followed by Q&A.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#EFEEEA] border-t border-[#C0C9C1] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#14422D] text-white text-xs font-mono font-medium rounded-sm hover:bg-[#2D5A43]"
          >
            Close Notes [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
