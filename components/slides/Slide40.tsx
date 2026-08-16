"use client";

import React, { useState } from "react";
import { FolderTree, Cpu, Layout, ShieldCheck, Folder } from "lucide-react";

export const Slide40: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(2);

  const MODULES = [
    {
      id: 1,
      name: "1. Assets Module",
      tech: "Static Resources & Model Weights",
      icon: <Folder className="w-5 h-5 text-[#D97757]" />,
      desc: "Stores static local assets: graphics, Zipformer neural network model parameters (.onnx), font configurations, and JSON-encoded syllable inventory metadata.",
    },
    {
      id: 2,
      name: "2. Core Module",
      tech: "Global Infrastructure Services",
      icon: <Cpu className="w-5 h-5 text-[#14422D]" />,
      subItems: [
        { key: "theme", desc: "Styling, color palettes, and typographic scales." },
        { key: "data", desc: "SQLite database service executing queries & persisting offline scores." },
        { key: "router", desc: "Declarative navigation routes using go_router." },
        { key: "signals", desc: "Reactive Signals state for fine-grained UI rebuilds (active lesson, current word, history queue)." },
      ],
    },
    {
      id: 3,
      name: "3. Features Module",
      tech: "Isolated Domain & UI Packages",
      icon: <Layout className="w-5 h-5 text-[#D97757]" />,
      desc: "Implements specific user interfaces & feature flows. Each sub-feature (dashboard, home, spelling, games) is isolated into its own package, separating domain logic from UI widgets.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">40 — GOAL 6: MOBILE INTERFACE & LOCAL STORAGE
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Application Directory &amp; Modular Structure
        </h2>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
        {/* Left Column: Project Directory Structure Diagram (6 Cols) */}
        <div className="lg:col-span-6 bg-[#EFEEEA] border border-[#C0C9C1] p-4 lg:p-5 rounded-xl flex flex-col justify-between space-y-3 min-h-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <FolderTree className="w-4 h-4 text-[#D97757]" />
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                FLUTTER PROJECT DIRECTORY DIAGRAM
              </span>
            </div>
            <span className="font-mono text-[10px] text-white bg-[#14422D] px-2 py-0.5 rounded font-bold">
              Thesis §4.6
            </span>
          </div>

          {/* Image Display */}
          <div className="flex-1 bg-white p-2 rounded-lg border border-[#C0C9C1] flex items-center justify-center min-h-0 overflow-hidden shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/project_structure.png"
              alt="Doraebin Directory and Modular Structure"
              className="max-h-full max-w-full object-contain rounded"
            />
          </div>


        </div>

        {/* Right Column: 3 Module Breakdown Cards with Bigger Typography (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 min-h-0 overflow-y-auto pr-1">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-wider block">
            APPLICATION MODULE SPECIFICATIONS
          </span>

          {MODULES.map((mod) => {
            const isActive = mod.id === activeModule;
            return (
              <div
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex-1 flex flex-col justify-between ${isActive
                  ? "bg-[#FAF9F5] border-[#14422D] shadow-md scale-[1.005]"
                  : "bg-white border-[#C0C9C1] hover:bg-[#EFEEEA]"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono">
                    <div className="flex items-center gap-2">
                      {mod.icon}
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#14422D]">
                        {mod.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-[#D97757] font-bold bg-[#EFEEEA] px-2.5 py-0.5 rounded border border-[#C0C9C1]">
                      {mod.tech}
                    </span>
                  </div>

                  {mod.desc && (
                    <p className="text-xs sm:text-sm text-[#333C36] leading-relaxed font-sans mt-2 font-medium">
                      {mod.desc}
                    </p>
                  )}

                  {mod.subItems && (
                    <div className="mt-2.5 space-y-1.5 text-xs sm:text-sm">
                      {mod.subItems.map((sub, idx) => (
                        <div
                          key={idx}
                          className="bg-[#EFEEEA] p-2 rounded-lg border border-[#C0C9C1] font-sans text-xs sm:text-sm text-[#14422D] flex items-start gap-1.5"
                        >
                          <span className="font-mono font-bold text-[#D97757] shrink-0">• {sub.key}:</span>
                          <span className="font-medium text-[#333C36]">{sub.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
