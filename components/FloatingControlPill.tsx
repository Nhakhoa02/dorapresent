"use client";

import React from "react";
import { ChevronLeft, ChevronRight, RotateCcw, FileText, Grid, Maximize2 } from "lucide-react";

interface FloatingControlPillProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  onToggleNotes: () => void;
  onToggleOverview: () => void;
  onToggleFullscreen: () => void;
}

export const FloatingControlPill: React.FC<FloatingControlPillProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onReset,
  onToggleNotes,
  onToggleOverview,
  onToggleFullscreen,
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-[#1B1C1A] text-white border border-[#414943] rounded-full px-4 py-2 shadow-2xl flex items-center gap-3 backdrop-blur-md select-none">
      {/* Prev Slide Button */}
      <button
        onClick={onPrev}
        disabled={currentSlide === 1}
        className="p-1 rounded-full text-[#FAF9F5] hover:bg-[#414943] disabled:opacity-30 transition-colors"
        title="Previous Slide (Left Arrow)"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Counter */}
      <span className="font-mono text-xs font-bold tracking-wider px-1 text-[#E0F2E9]">
        {currentSlide} / {totalSlides}
      </span>

      {/* Next Slide Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        className="p-1 rounded-full text-[#FAF9F5] hover:bg-[#414943] disabled:opacity-30 transition-colors"
        title="Next Slide (Right Arrow)"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Divider */}
      <div className="w-[1px] h-4 bg-[#414943]" />

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono text-[#B0AEA5] hover:text-white hover:bg-[#414943] transition-colors"
        title="Reset to Slide 1 [R]"
      >
        <span>Reset</span>
        <span className="bg-[#414943] text-white text-[10px] px-1.5 py-0.2 rounded-sm font-bold">
          R
        </span>
      </button>

      {/* Divider */}
      <div className="w-[1px] h-4 bg-[#414943]" />

      {/* Notes Toggle */}
      <button
        onClick={onToggleNotes}
        className="flex items-center gap-1 text-xs font-mono text-[#D97757] hover:text-white px-2 py-0.5 rounded-full hover:bg-[#414943] transition-colors"
        title="Speaker Notes & Defense Timer [P]"
      >
        <FileText className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Notes</span>
      </button>

      {/* Grid Overview Toggle */}
      <button
        onClick={onToggleOverview}
        className="p-1.5 rounded-full text-[#B0AEA5] hover:text-white hover:bg-[#414943] transition-colors"
        title="Overview Grid [O]"
      >
        <Grid className="w-4 h-4" />
      </button>

      {/* Fullscreen Toggle */}
      <button
        onClick={onToggleFullscreen}
        className="p-1.5 rounded-full text-[#B0AEA5] hover:text-white hover:bg-[#414943] transition-colors"
        title="Fullscreen [F]"
      >
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
  );
};
