"use client";

import React, { useState, useEffect, useCallback } from "react";
import { SlideSidebar } from "@/components/SlideSidebar";
import { FloatingControlPill } from "@/components/FloatingControlPill";
import { PresenterNotesModal } from "@/components/PresenterNotesModal";
import { SlideOverviewModal } from "@/components/SlideOverviewModal";
import { motion, AnimatePresence } from "framer-motion";

// Import all 45 slide components in exact 1-to-1 collection order
import { Slide1 } from "@/components/slides/Slide1";
import { Slide2 } from "@/components/slides/Slide2";
import { Slide3 } from "@/components/slides/Slide3";
import { Slide4 } from "@/components/slides/Slide4";
import { Slide5 } from "@/components/slides/Slide5";
import { Slide6 } from "@/components/slides/Slide6";
import { Slide7 } from "@/components/slides/Slide7";
import { Slide8 } from "@/components/slides/Slide8";
import { Slide9 } from "@/components/slides/Slide9";
import { Slide10 } from "@/components/slides/Slide10";
import { Slide11 } from "@/components/slides/Slide11";
import { Slide12 } from "@/components/slides/Slide12";
import { Slide13 } from "@/components/slides/Slide13";
import { Slide14 } from "@/components/slides/Slide14";
import { Slide15 } from "@/components/slides/Slide15";
import { Slide16 } from "@/components/slides/Slide16";
import { Slide17 } from "@/components/slides/Slide17";
import { Slide18 } from "@/components/slides/Slide18";
import { Slide19 } from "@/components/slides/Slide19";
import { Slide20 } from "@/components/slides/Slide20";
import { Slide21 } from "@/components/slides/Slide21";
import { Slide22 } from "@/components/slides/Slide22";
import { Slide23 } from "@/components/slides/Slide23";
import { Slide24 } from "@/components/slides/Slide24";
import { Slide25 } from "@/components/slides/Slide25";
import { Slide26 } from "@/components/slides/Slide26";
import { Slide27 } from "@/components/slides/Slide27";
import { Slide28 } from "@/components/slides/Slide28";
import { Slide29 } from "@/components/slides/Slide29";
import { Slide30 } from "@/components/slides/Slide30";
import { Slide31 } from "@/components/slides/Slide31";
import { Slide32 } from "@/components/slides/Slide32";
import { Slide33 } from "@/components/slides/Slide33";
import { Slide34 } from "@/components/slides/Slide34";
import { Slide35 } from "@/components/slides/Slide35";
import { Slide36 } from "@/components/slides/Slide36";
import { Slide37 } from "@/components/slides/Slide37";
import { Slide38 } from "@/components/slides/Slide38";
import { Slide39 } from "@/components/slides/Slide39";
import { Slide40 } from "@/components/slides/Slide40";
import { Slide41 } from "@/components/slides/Slide41";
import { Slide42 } from "@/components/slides/Slide42";
import { Slide43 } from "@/components/slides/Slide43";
import { Slide44 } from "@/components/slides/Slide44";
import { Slide45 } from "@/components/slides/Slide45";

const TOTAL_SLIDES = 45;

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [direction, setDirection] = useState<"right" | "left">("right");

  // Navigation handlers
  const goToNextSlide = useCallback(() => {
    setDirection("right");
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setDirection("left");
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleSelectSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  const handleReset = useCallback(() => {
    setDirection("left");
    setCurrentSlide(1);
  }, []);

  // Fullscreen Handler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Keyboard navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "PageDown") {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        handleReset();
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentSlide(TOTAL_SLIDES);
      } else if (e.key === "n" || e.key === "N") {
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === "o" || e.key === "O") {
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, handleReset, toggleFullscreen]);

  // Slide renderer map
  const renderSlideComponent = (slideNum: number) => {
    switch (slideNum) {
      case 1: return <Slide1 />;
      case 2: return <Slide2 />;
      case 3: return <Slide3 />;
      case 4: return <Slide4 />;
      case 5: return <Slide5 />;
      case 6: return <Slide6 />;
      case 7: return <Slide7 />;
      case 8: return <Slide8 />;
      case 9: return <Slide9 />;
      case 10: return <Slide10 />;
      case 11: return <Slide11 />;
      case 12: return <Slide12 />;
      case 13: return <Slide13 />;
      case 14: return <Slide14 />;
      case 15: return <Slide15 />;
      case 16: return <Slide16 />;
      case 17: return <Slide17 />;
      case 18: return <Slide18 />;
      case 19: return <Slide19 />;
      case 20: return <Slide20 />;
      case 21: return <Slide21 />;
      case 22: return <Slide22 />;
      case 23: return <Slide23 />;
      case 24: return <Slide24 />;
      case 25: return <Slide25 />;
      case 26: return <Slide26 />;
      case 27: return <Slide27 />;
      case 28: return <Slide28 />;
      case 29: return <Slide29 />;
      case 30: return <Slide30 />;
      case 31: return <Slide31 />;
      case 32: return <Slide32 />;
      case 33: return <Slide33 />;
      case 34: return <Slide34 />;
      case 35: return <Slide35 />;
      case 36: return <Slide36 />;
      case 37: return <Slide37 />;
      case 38: return <Slide38 />;
      case 39: return <Slide39 />;
      case 40: return <Slide40 />;
      case 41: return <Slide41 />;
      case 42: return <Slide42 />;
      case 43: return <Slide43 />;
      case 44: return <Slide44 />;
      case 45: return <Slide45 />;
      default: return <Slide1 />;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-[#110E0B] text-[#FAF9F5] overflow-hidden select-none">
      {/* Left Sidebar: Vertical Slide Review / Thumbnails */}
      <SlideSidebar
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onSelectSlide={handleSelectSlide}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />

      {/* Main Slide Stage Area (Right) */}
      <main className="flex-1 h-full relative flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden bg-[#1B1C1A]">
        {/* Aspect-Ratio Main Slide Frame Card */}
        <div className="w-full max-w-6xl aspect-[16/9] max-h-[85vh] bg-[#FAF9F5] text-[#1B1C1A] border border-[#414943] rounded-lg shadow-2xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: direction === "right" ? 25 : -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "right" ? -25 : 25 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full h-full flex flex-col"
            >
              {renderSlideComponent(currentSlide)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Control Pill Overlay Bar (Bottom Center) */}
        <FloatingControlPill
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onNext={goToNextSlide}
          onPrev={goToPrevSlide}
          onReset={handleReset}
          onToggleNotes={() => setIsNotesOpen(true)}
          onToggleOverview={() => setIsOverviewOpen(true)}
          onToggleFullscreen={toggleFullscreen}
        />
      </main>

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onSelectSlide={handleSelectSlide}
      />

      {/* Presenter Notes & Defense Timer Modal */}
      <PresenterNotesModal
        currentSlide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />
    </div>
  );
}
