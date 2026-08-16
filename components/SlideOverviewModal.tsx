"use client";

import React from "react";
import { SLIDES_METADATA, CHAPTERS } from "@/types/presentation";
import { X, Grid } from "lucide-react";

interface SlideOverviewModalProps {
  currentSlide: number;
  totalSlides: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  currentSlide,
  totalSlides,
  isOpen,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1B1C1A]/70 backdrop-blur-md flex items-center justify-center p-6 select-none">
      <div className="bg-[#FAF9F5] border-2 border-[#14422D] rounded-sm shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#14422D] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm font-bold">
            <Grid className="w-5 h-5 text-[#D97757]" />
            <span>SLIDE OVERVIEW GRID (TOTAL: {totalSlides} SLIDES)</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#E0F2E9] hover:text-white p-1 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-8">
          {CHAPTERS.map((chapter) => (
            <div key={chapter.id} className="space-y-3">
              <h3 className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider bg-[#E0F2E9] px-3 py-1 rounded-sm border border-[#B0AEA5]/60 inline-block">
                {chapter.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {chapter.slides.map((slideNum) => {
                  const slide = SLIDES_METADATA[slideNum];
                  const isCurrent = slideNum === currentSlide;

                  return (
                    <button
                      key={slideNum}
                      onClick={() => {
                        onSelectSlide(slideNum);
                        onClose();
                      }}
                      className={`text-left p-4 rounded-sm border transition-all relative flex flex-col justify-between h-36 ${
                        isCurrent
                          ? "bg-[#E0F2E9] border-2 border-[#14422D] shadow-md ring-2 ring-[#14422D]/20"
                          : "bg-[#FAF9F5] border-[#C0C9C1] hover:border-[#14422D] hover:shadow-md hover:bg-[#EFEEEA]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-bold text-[#D97757]">
                            SLIDE {slideNum.toString().padStart(2, "0")}
                          </span>
                          {isCurrent && (
                            <span className="bg-[#14422D] text-white font-mono text-[10px] px-1.5 py-0.5 rounded-sm">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <h4 className="font-heading font-semibold text-xs text-[#14422D] line-clamp-2 leading-tight">
                          {slide?.title}
                        </h4>
                      </div>

                      <p className="text-[11px] font-sans text-[#414943] line-clamp-2 italic border-t border-[#C0C9C1]/40 pt-1.5 mt-2">
                        {slide?.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#EFEEEA] border-t border-[#C0C9C1] flex items-center justify-between text-xs font-mono text-[#717973]">
          <span>Click any slide card to jump directly. Press [Esc] to close.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#14422D] text-white rounded-sm hover:bg-[#2D5A43]"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
