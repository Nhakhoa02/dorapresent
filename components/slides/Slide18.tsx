"use client";

import React from "react";
import Image from "next/image";

export const Slide18: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-3 bg-[#FAF9F5] overflow-hidden">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-0.5">18 — GOAL 1: ASR MODEL SEARCH — ASR
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Candidate 4: OpenAI Whisper
        </h2>
      </div>

      {/* 2 Full-Height Side-by-Side Containers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch min-h-0">
        {/* Left Column: Whisper Setup Code */}
        <div className="flex flex-col justify-between items-center h-full min-h-0">
          <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E] p-5 flex flex-col justify-center border border-[#333333]">
            {/* VS Code Window Pill Header */}
            <div className="flex items-center gap-1.5 mb-3 border-b border-[#333333] pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="font-mono text-[11px] text-[#888888] ml-2">whisper_setup.py</span>
            </div>

            {/* Syntax Highlighted Code Snippet */}
            <pre className="font-mono text-xs sm:text-sm text-[#E6EDE6] leading-relaxed overflow-x-auto my-auto">
              <code>
                <span className="text-[#C792EA]">import</span> whisper{"\n\n"}
                <span className="text-[#546E7A]">// Load OpenAI Whisper Turbo checkpoint</span>{"\n"}
                model = whisper.load_model(<span className="text-[#C3E88D]">"turbo"</span>){"\n\n"}
                <span className="text-[#546E7A]">// Transcribe Vietnamese audio sample</span>{"\n"}
                result = model.transcribe(<span className="text-[#C3E88D]">"audio.mp3"</span>){"\n\n"}
                print(result[<span className="text-[#C3E88D]">"text"</span>])
              </code>
            </pre>
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
            WHISPER SETUP
          </span>
        </div>

        {/* Right Column: Whisper Result */}
        <div className="flex flex-col justify-between items-center h-full min-h-0">
          <div className="relative w-full flex-1 h-full rounded-xl overflow-hidden shadow-md bg-[#1E1E1E]">
            <Image
              src="/images/whisper_result.png"
              alt="Whisper ASR Transcription Result Screenshot"
              fill
              className="object-contain object-center p-2"
              priority
            />
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold text-[#14422D] uppercase tracking-widest pt-2 shrink-0">
            RESULT
          </span>
        </div>
      </div>
    </div>
  );
};
