import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ansor: {
          // Hijau khas NU/Ansor
          50: "#eafaf1",
          100: "#c9f0da",
          200: "#94e0b6",
          300: "#5cca90",
          400: "#2fae70",
          500: "#0f8a54", // primer
          600: "#0a6f44",
          700: "#0a5738", // dasar identitas
          800: "#0b452f",
          900: "#0a3a28",
          950: "#04211a",
        },
        maroon: {
          500: "#8a1c2b",
          600: "#711623",
          700: "#5a121c",
        },
        gold: {
          400: "#e6b84f",
          500: "#d4a72c",
          600: "#b28a1f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
