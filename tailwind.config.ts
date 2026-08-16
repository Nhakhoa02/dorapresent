import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: "#14422D",
          DEFAULT: "#14422D",
          container: "#2D5A43",
          light: "#2A523E",
        },
        mint: {
          accent: "#E0F2E9",
          DEFAULT: "#E0F2E9",
          soft: "#EEF7F2",
        },
        sage: {
          muted: "#B0AEA5",
          DEFAULT: "#B0AEA5",
          light: "#C0C9C1",
        },
        terra: {
          highlight: "#D97757",
          DEFAULT: "#D97757",
          warm: "#E88A6B",
        },
        paper: {
          bg: "#FAF9F5",
          surface: "#FAF9F5",
          container: "#EFEEEA",
          high: "#E9E8E4",
          highest: "#E3E2DF",
          white: "#FFFFFF",
        },
        academic: {
          dark: "#1B1C1A",
          variant: "#414943",
          outline: "#717973",
        }
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "Source Sans 3", "sans-serif"],
        heading: ["var(--font-be-vietnam)", "Be Vietnam Pro", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'soft-lift': '0 4px 20px -2px rgba(20, 66, 45, 0.05)',
        'academic-card': '0 2px 12px rgba(27, 28, 26, 0.04)',
        'glow-terra': '0 0 25px rgba(217, 119, 87, 0.25)',
      },
      borderRadius: {
        'academic': '4px',
      }
    },
  },
  plugins: [],
};
export default config;
