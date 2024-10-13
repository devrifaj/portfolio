import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  corePlugins: {
    container: false,
  },
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    flowbite.content(),
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [flowbite.plugin(),],
};
export default config;
