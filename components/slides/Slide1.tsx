"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const Slide1: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 lg:p-10 select-none overflow-hidden bg-[#FAF9F5]">
      {/* Background Image on Right Side (100% Clear Image with Soft Left-Edge Fade) */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/locall_title_hero.png"
            alt="Hero Background Illustration"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Soft Left Edge Fade Overlay ONLY */}
          <div className="absolute top-0 left-0 w-28 sm:w-36 h-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/60 to-transparent z-10" />
        </div>
      </div>

      {/* Top Header Bar: Constrained to Half Width (Left Half) */}
      <div className="w-1/2 max-w-[50%] flex items-center justify-between z-10 border-b border-[#C0C9C1]/60 pb-3">
        {/* Top-Left: VGU Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-36 sm:w-44">
            <Image
              src="/images/logo_vgu.png"
              alt="Vietnamese-German University Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="font-mono text-xs text-[#717973] border-l border-[#C0C9C1] pl-3 hidden sm:inline">
            Vietnamese-German University
          </span>
        </div>
      </div>

      {/* Main Hero Title Block: Constrained to Half Width (Left Half) */}
      <div className="my-auto z-10 space-y-2 max-w-[50%] pt-2 pb-1">
        {/* Tag: Text Only, No Box Color */}
        <div className="font-mono text-xs font-bold text-[#1B1C1A] uppercase tracking-widest">
          BACHELOR&apos;S THESIS DEFENSE
        </div>

        <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[#14422D] tracking-tight leading-none">
          Doraebin
        </h1>

        {/* Full Title Underline Rule with Arrow - Half Width */}
        <div className="w-full flex items-center gap-3 pt-1 pb-1.5 border-b-2 border-[#1B1C1A]">
          <h2 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-[#1B1C1A] flex-1 tracking-tight leading-snug">
            An offline mobile application for Vietnamese Reading Assessment and Learning
          </h2>
          <ArrowUpRight className="w-6 h-6 text-[#14422D] shrink-0" />
        </div>
      </div>

      {/* Bottom Metadata Bar: True 3-Column Layout Strictly Constrained to Left Half (50% Width) */}
      <div className="w-1/2 max-w-[50%] grid grid-cols-3 gap-4 z-10 border-t border-[#C0C9C1]/60 pt-3 text-xs font-sans">
        {/* Column 1: Candidate */}
        <div>
          <span className="font-mono text-[10px] text-[#717973] uppercase tracking-wider block mb-0.5">
            Candidate:
          </span>
          <span className="font-heading font-bold text-xs text-[#14422D] block leading-tight">
            Nguyen Hoang Anh Khoa
          </span>
        </div>

        {/* Column 2: Supervisors */}
        <div>
          <span className="font-mono text-[10px] text-[#717973] uppercase tracking-wider block mb-0.5">
            Supervisors:
          </span>
          <span className="font-heading font-semibold text-[11px] text-[#1B1C1A] block leading-tight">
            Prof. Dr. Garcia Clavel Manuel <br />Dr. Nguyen Tuan Cuong
          </span>
        </div>

        {/* Column 3: Date */}
        <div>
          <span className="font-mono text-[10px] text-[#717973] uppercase tracking-wider block mb-0.5">
            Date:
          </span>
          <span className="font-mono text-xs font-bold text-[#14422D] block">
            17/08/2026
          </span>
        </div>
      </div>
    </div>
  );
};
