/** @type {import('tailwindcss').Config} */
// * Export Tailwind konfigurace projektu.
module.exports = {
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
        accent: "var(--accent)",
        brand: {
          navy: "#0D1824",
          navy2: "#101923",
          offwhite: "#F4F3F0",
          accent: "#E85D3F",
          green: "#168A5B",
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
