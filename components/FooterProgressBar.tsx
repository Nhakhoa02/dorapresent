"use client";

import React from "react";
import { CHAPTERS } from "@/types/presentation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FooterProgressBarProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (slideNumber: number) => void;
}

export const FooterProgressBar: React.FC<FooterProgressBarProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
}) => {
  const activeChapter = CHAPTERS.find((ch) => ch.slides.includes(currentSlide)) || CHAPTERS[0];

  return (
    <footer className="w-full px-8 py-3.5 bg-[#EFEEEA] border-t border-[#C0C9C1] flex flex-col md:flex-row items-center justify-between gap-3 select-none z-20">
      {/* Chapter Indicators */}
      <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-0.5">
        {CHAPTERS.map((chapter) => {
          const isActive = chapter.id === activeChapter.id;
          const firstSlide = chapter.slides[0];

          return (
            <button
              key={chapter.id}
              onClick={() => onSelectSlide(firstSlide)}
              className={`px-3 py-1 text-xs font-mono rounded-sm border transition-all whitespace-nowrap ${
                isActive
                  ? "bg-[#14422D] text-white border-[#14422D] font-semibold shadow-sm"
                  : "bg-[#FAF9F5] text-[#414943] border-[#B0AEA5] hover:bg-[#E0F2E9] hover:text-[#14422D]"
              }`}
            >
              {chapter.title}
            </button>
          );
        })}
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            className="p-1.5 rounded-sm bg-[#FAF9F5] border border-[#B0AEA5] text-[#1B1C1A] hover:bg-[#E0F2E9] disabled:opacity-30 disabled:hover:bg-[#FAF9F5] transition-colors"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs font-medium text-[#1B1C1A] px-2 min-w-[70px] text-center">
            {currentSlide} / {totalSlides}
          </span>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            className="p-1.5 rounded-sm bg-[#FAF9F5] border border-[#B0AEA5] text-[#1B1C1A] hover:bg-[#E0F2E9] disabled:opacity-30 disabled:hover:bg-[#FAF9F5] transition-colors"
            title="Next Slide (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Global Progress Bar track */}
        <div className="w-32 h-2 bg-[#FAF9F5] border border-[#B0AEA5] rounded-full overflow-hidden hidden sm:block">
          <div
            className="h-full bg-[#14422D] transition-all duration-300 ease-out"
            style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
          />
        </div>
      </div>
    </footer>
  );
};
