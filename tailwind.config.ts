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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cbutton': "#6c87d6",
        'bcard': '#f2f3ff',
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
