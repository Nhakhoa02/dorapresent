"use client";

import React from "react";
import Image from "next/image";
import { CloudLightning, WifiOff, DollarSign } from "lucide-react";

export const Slide4: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 lg:p-8 select-none bg-[#FAF9F5]">
      {/* Header */}
      <div className="space-y-1">
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest">04 — BACKGROUND
        </div>
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#14422D] tracking-tight">
          Why need an app?
        </h2>
      </div>

      {/* Main Layout: 3 Vertical Rows on Left (No Box), Framed Disaster Photo on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 items-center my-auto pt-4">
        {/* Left Side: 3 Clean Rows (No Box Container) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:space-y-8 pl-2">
          {/* Row 1: Disaster */}
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#EFEEEA] border border-[#C0C9C1] flex items-center justify-center text-[#D97757] shrink-0 group-hover:scale-110 transition-transform duration-300">
              <CloudLightning className="w-8 h-8" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-2xl lg:text-3xl text-[#14422D] block">
                Disaster
              </span>
            </div>
          </div>

          {/* Row 2: Weak Internet */}
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#EFEEEA] border border-[#C0C9C1] flex items-center justify-center text-[#14422D] shrink-0 group-hover:scale-110 transition-transform duration-300">
              <WifiOff className="w-8 h-8" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-2xl lg:text-3xl text-[#14422D] block">
                Weak Internet
              </span>
            </div>
          </div>

          {/* Row 3: Poverty */}
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#EFEEEA] border border-[#C0C9C1] flex items-center justify-center text-[#D97757] shrink-0 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-2xl lg:text-3xl text-[#14422D] block">
                Poverty
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Typhoon Yagi Disaster Photo Container (7 Cols) */}
        <div className="lg:col-span-7 h-full min-h-[300px] flex flex-col justify-between bg-[#EFEEEA] border border-[#C0C9C1] rounded-2xl p-3 shadow-sm">
          <div className="relative w-full flex-1 rounded-xl overflow-hidden min-h-[260px] bg-black">
            <Image
              src="/images/typhoon_yagi_disaster.png"
              alt="Typhoon Yagi Disaster Impact in Vietnam"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Caption */}
          <div className="text-center pt-2.5 pb-1">
            <span className="font-mono text-[11px] font-bold text-[#717973] uppercase tracking-wider block">
              TYPHOON YAGI CRISIS CONTEXT — VIETNAM (2024)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
