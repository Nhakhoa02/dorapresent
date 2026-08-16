"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathEquationProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

export const MathEquation: React.FC<MathEquationProps> = ({
  latex,
  displayMode = true,
  className = "",
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
      });
    } catch (error) {
      console.error("KaTeX rendering error:", error);
      return latex;
    }
  }, [latex, displayMode]);

  return (
    <span
      className={`inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
