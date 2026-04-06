import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          teal: "#00f5c4",
          blue: "#00b4ff",
          green: "#39ff14",
        },
      },
    },
  },
  plugins: [],
};
export default config;
