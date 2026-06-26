import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#f6f6f3",
        muted: "#737373",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
