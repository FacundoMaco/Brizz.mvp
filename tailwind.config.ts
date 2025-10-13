import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        breeze: {
          blue: "#0f172a",
          teal: "#14b8a6",
          lime: "#bef264",
          dark: "#020617"
        }
      }
    }
  },
  plugins: []
};

export default config;
