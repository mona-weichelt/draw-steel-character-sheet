/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        recovery: "var(--recovery)",
        stamina: "var(--stamina)",
        resolve: "var(--resolve)",
        positive: "var(--positive)",
        negative: "var(--negative)",
      },
    },
  },
  plugins: [],
};
