import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#212838",
          50: "#f0f1f4",
          100: "#d4d7de",
          200: "#a9afc0",
          300: "#7e87a1",
          400: "#535f83",
          500: "#212838",
          600: "#1b2130",
          700: "#161a27",
          800: "#10131e",
          900: "#0a0c14",
        },
        gold: {
          DEFAULT: "#FFBA60",
          50: "#fff8ee",
          100: "#ffedcc",
          200: "#ffdb99",
          300: "#ffca66",
          400: "#FFBA60",
          500: "#e6a050",
          600: "#cc8e40",
          700: "#997030",
          800: "#665020",
          900: "#332810",
        },
        dark: {
          DEFAULT: "#0F0F0F",
          50: "#e6e6e6",
          100: "#b3b3b3",
          200: "#808080",
          300: "#4d4d4d",
          400: "#1a1a1a",
          500: "#0F0F0F",
          600: "#0d0d0d",
          700: "#0a0a0a",
          800: "#070707",
          900: "#030303",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        "roboto-slab": ["var(--font-roboto-slab)", "serif"],
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-mobile": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-title": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-subtitle": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "section": "5rem",
        "section-mobile": "3rem",
      },
      maxWidth: {
        "content": "1200px",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #212838 0%, #0F0F0F 100%)",
        "gradient-gold": "linear-gradient(135deg, #FFBA60 0%, #e6a050 100%)",
      },
      boxShadow: {
        "card": "0 4px 20px rgba(0, 0, 0, 0.15)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.25)",
        "gold-glow": "0 0 20px rgba(255, 186, 96, 0.3)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
