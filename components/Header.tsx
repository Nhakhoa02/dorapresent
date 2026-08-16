"use client";

import React from "react";
import { SLIDES_METADATA } from "@/types/presentation";
import { Maximize2, HelpCircle, FileText, Grid } from "lucide-react";

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  onToggleOverview: () => void;
  onToggleNotes: () => void;
  onToggleFullscreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  totalSlides,
  onToggleOverview,
  onToggleNotes,
  onToggleFullscreen,
}) => {
  const slide = SLIDES_METADATA[currentSlide];

  return (
    <header className="w-full px-8 pt-6 pb-4 flex items-center justify-between border-b border-[#C0C9C1]/50 bg-[#FAF9F5] select-none z-20">
      {/* Category Indicator & Title */}
      <div className="flex flex-col gap-1 max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#3E6658] uppercase bg-[#E0F2E9] px-2.5 py-0.5 rounded-sm border border-[#B0AEA5]/40">
            {slide?.categoryTag || "THESIS DEFENSE"}
          </span>
          <span className="font-mono text-xs text-[#717973]">
            SLIDE {currentSlide.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
          </span>
        </div>
        <h1 className="font-heading font-semibold text-2xl lg:text-3xl text-[#14422D] tracking-tight leading-snug">
          {slide?.title}
        </h1>
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleOverview}
          title="Slide Overview (O)"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#1B1C1A] bg-[#EFEEEA] hover:bg-[#E0F2E9] hover:text-[#14422D] border border-[#B0AEA5] rounded-sm transition-colors"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Grid [O]</span>
        </button>

        <button
          onClick={onToggleNotes}
          title="Speaker Notes & Defense Timer (P)"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#14422D] bg-[#E0F2E9] hover:bg-[#2D5A43] hover:text-white border border-[#B0AEA5] rounded-sm transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Notes [P]</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          title="Toggle Fullscreen (F)"
          className="p-1.5 text-[#1B1C1A] bg-[#EFEEEA] hover:bg-[#E0F2E9] border border-[#B0AEA5] rounded-sm transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
