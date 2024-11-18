import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "576px" },
      md: { min: "768px" },
      lg: { min: "992px" },
      xl: { min: "1200px" },
      "2xl": { min: "1400px" },
    },
    extend: {
      colors: {
        primary: {
          1: "var(--theme-primary-1)",
          2: "var(--theme-primary-2)",
          3: "var(--theme-primary-3)",
        },
        secondary: {
          1: "var(--theme-secondary-1)",
          2: "var(--theme-secondary-2)",
          3: "var(--theme-secondary-3)",
        },
        neutral: {
          0: "var(--neutral-0)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          1000: "var(--neutral-1000)",
        },
        system: {
          success: "var(--system-success)",
          info: "var(--system-info)",
          warning: "var(--system-warning)",
          danger: "var(--system-danger)",
          muted: "var(--system-muted)",
        },
        border: {
          1: "var(--border-1)",
        },
        bg: {
          "1": "var(--bg-1)",
          "2": "var(--bg-2)",
          "3": "var(--bg-3)",
          "4": "var(--bg-4)",
          "5": "var(--bg-5)",
          "6": "var(--bg-6)",
        },
      },
      fontFamily: {
        body: "var(--font-dm-mono)",
        secondary: "var(--font-urbanist)",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
        flicker: {
          "0%": { color: "transparent" },
          "50%": { color: "var(--neutral-0)" },
          "100%": { color: "transparent" },
        },
        flickering: {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(0.9)" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        rotateme: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        flicker: "flicker 800ms infinite",
        flickering: "flickering 3s infinite",
        rotateme: "rotateme 10s linear infinite",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        "custom-ease-2": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      lineHeight: {
        "extra-tight": "1.2",
      },
      boxShadow: {
        'custom-shadow': '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
