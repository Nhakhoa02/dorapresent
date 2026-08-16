"use client";

import React from "react";
import { SLIDES_METADATA } from "@/types/presentation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideSidebarProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slideNum: number) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const SlideSidebar: React.FC<SlideSidebarProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <aside
      className={`h-full bg-[#1B1C1A] text-white flex flex-col border-r border-[#414943]/40 transition-all duration-300 relative z-30 select-none ${
        isCollapsed ? "w-12" : "w-64 sm:w-72"
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-3 border-b border-[#414943]/40 flex items-center justify-between bg-[#1B1C1A]">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#E0F2E9] uppercase tracking-wider">
              Slides ({totalSlides})
            </span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1 rounded-sm text-[#B0AEA5] hover:text-white hover:bg-[#414943]/50 transition-colors mx-auto"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Slide Thumbnails Scroll Container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
        {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slideNum) => {
          const slide = SLIDES_METADATA[slideNum];
          const isActive = slideNum === currentSlide;

          if (isCollapsed) {
            return (
              <button
                key={slideNum}
                onClick={() => onSelectSlide(slideNum)}
                className={`w-full py-2 font-mono text-xs font-bold rounded-sm border text-center transition-all ${
                  isActive
                    ? "bg-[#D97757] text-white border-[#D97757]"
                    : "bg-[#2F312E] text-[#B0AEA5] border-[#414943] hover:text-white hover:bg-[#414943]"
                }`}
                title={`Slide ${slideNum}: ${slide?.title}`}
              >
                {slideNum}
              </button>
            );
          }

          return (
            <div key={slideNum} className="flex items-start gap-2 group">
              {/* Slide Number Indicator */}
              <span
                className={`font-mono text-xs font-semibold shrink-0 w-5 text-right mt-1.5 ${
                  isActive ? "text-[#D97757] font-bold" : "text-[#717973] group-hover:text-white"
                }`}
              >
                {slideNum}
              </span>

              {/* Slide Thumbnail Preview Card */}
              <button
                onClick={() => onSelectSlide(slideNum)}
                className={`flex-1 p-3 rounded-sm border text-left transition-all relative overflow-hidden flex flex-col justify-between h-28 ${
                  isActive
                    ? "bg-[#D97757] text-white border-[#D97757] shadow-lg ring-2 ring-[#D97757]/40"
                    : "bg-[#2F312E] text-[#FAF9F5] border-[#414943] hover:border-[#B0AEA5] hover:bg-[#414943]"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-[9px] uppercase font-bold tracking-wider block mb-1 ${
                      isActive ? "text-white/80" : "text-[#D97757]"
                    }`}
                  >
                    {slide?.categoryTag || `SLIDE ${slideNum}`}
                  </span>
                  <h4 className="font-heading font-semibold text-xs leading-tight line-clamp-2">
                    {slide?.title}
                  </h4>
                </div>

                <div
                  className={`text-[10px] font-sans line-clamp-1 italic pt-1 border-t ${
                    isActive ? "border-white/20 text-white/90" : "border-[#414943] text-[#B0AEA5]"
                  }`}
                >
                  {slide?.subtitle}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
