"use client";

import React from "react";

export const Slide45: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 lg:p-6 select-none space-y-6">
      {/* Header matching Image 2 */}
      <div>
        <div className="font-mono text-xs font-bold text-[#D97757] uppercase tracking-widest mb-1">45 — FUTURE ROADMAP
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14422D] tracking-tight">
          Four future research directions, on one roadmap
        </h2>
      </div>

      {/* 2x2 Grid of Numbered Roadmap Cards matching Image 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* Card 1 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                1
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                FORCED ALIGNMENT &amp; LOGIT EXPOSURE
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Expose Zipformer encoder frame-level logits and character emission probabilities to compute continuous Goodness of Pronunciation (GOP) confidence scores instead of binary correctness (S_t ∈ &#123;0, 1&#125;).
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            Continuous GOP Acoustic Scoring
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                2
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                LONGITUDINAL FIELD VALIDATION
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Conduct long-term user studies with primary school children in rural Vietnam to empirically calibrate learning rate (α), forgetting coefficient (λ), and SM-2 ease factor adjustments against real recall data.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            Empirical Parameter Calibration
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                3
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                IPA-BASED SPEECH RECOGNITION
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Train end-to-end ASR models predicting International Phonetic Alphabet (IPA) sequences directly, eliminating contextual language model smoothing that masks dialect pronunciation errors.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            Unbiased Phonetic ASR Decoding
          </span>
        </div>

        {/* Card 4 */}
        <div className="bg-[#EFEEEA] border border-[#C0C9C1] p-5 rounded-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#D97757] text-white font-mono font-bold text-xs flex items-center justify-center">
                4
              </span>
              <span className="font-mono text-xs font-bold text-[#14422D] uppercase tracking-wider">
                NEURAL TTS &amp; VOICE CLONING
              </span>
            </div>
            <p className="text-sm text-[#414943] leading-relaxed">
              Fine-tune on-device neural TTS (VieNeuTTS) with voice cloning (teacher/parent voice) and acoustic target exaggeration—dynamically stretching pitch peaks to emphasize subtle tone boundaries.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#717973] uppercase font-semibold border-t border-[#C0C9C1] pt-2 mt-3 block">
            Voice Cloning &amp; Target Exaggeration
          </span>
        </div>
      </div>
    </div>
  );
};
