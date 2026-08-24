import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // palette families — source of truth, see app/globals.css :root for the CSS custom-property mirror
        baltic: {
          DEFAULT: "#22577a",
          100: "#071219",
          200: "#0e2331",
          300: "#15354a",
          400: "#1c4663",
          500: "#22577a",
          600: "#327fb2",
          700: "#5aa1d1",
          800: "#91c1e0",
          900: "#c8e0f0",
        },
        teal: {
          DEFAULT: "#38a3a5",
          100: "#0b2021",
          200: "#164141",
          300: "#226162",
          400: "#2d8183",
          500: "#38a3a5",
          600: "#52c2c4",
          700: "#7dd1d3",
          800: "#a8e0e1",
          900: "#d4f0f0",
        },
        emerald: {
          DEFAULT: "#57cc99",
          100: "#0e2c1f",
          200: "#1b593e",
          300: "#29855d",
          400: "#37b27c",
          500: "#57cc99",
          600: "#79d6ad",
          700: "#9ae0c2",
          800: "#bcead6",
          900: "#ddf5eb",
        },
        "light-green": {
          DEFAULT: "#80ed99",
          100: "#094016",
          200: "#12812c",
          300: "#1cc142",
          400: "#42e468",
          500: "#80ed99",
          600: "#9bf1af",
          700: "#b4f4c3",
          800: "#cdf8d7",
          900: "#e6fbeb",
        },
        "tea-green": {
          DEFAULT: "#c7f9cc",
          100: "#095110",
          200: "#11a220",
          300: "#25e839",
          400: "#76f183",
          500: "#c7f9cc",
          600: "#d3fad7",
          700: "#defce1",
          800: "#e9fdeb",
          900: "#f4fef5",
        },

        // semantic tokens — what components actually consume
        ink: "#071219",
        "ink-deep": "#050b10",
        surface: "#0e2331",
        "surface-2": "#15354a",
        line: "rgba(145,193,224,0.08)",
        "line-soft": "rgba(145,193,224,0.06)",
        accent: "#57cc99",
        "accent-secondary": "#38a3a5",
        highlight: "#80ed99",
        text: "#f4fef5",
        muted: "#91c1e0",
        body: "#d4f0f0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.15)",
        medium: "0 20px 70px rgba(0,0,0,0.18)",
        floating: "0 24px 60px -20px rgba(0,0,0,0.35)",
        "accent-glow": "0 10px 26px -8px rgba(87,204,153,0.24)",
        "teal-glow": "0 10px 26px -8px rgba(56,163,165,0.22)",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(60px, 40px)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-50px, -50px)" },
        },
        flashPulse: {
          "0%, 91%, 100%": { opacity: "0" },
          "91.5%": { opacity: "0.1" },
          "92%": { opacity: "0.02" },
          "92.6%": { opacity: "0.07" },
          "93.2%": { opacity: "0" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        recPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        drift1: "drift1 26s ease-in-out infinite",
        drift2: "drift2 30s ease-in-out infinite",
        flashPulse: "flashPulse 16s ease-in-out infinite",
        ticker: "ticker 30s linear infinite",
        recPulse: "recPulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
