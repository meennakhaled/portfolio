/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0d10", panel: "#11161b", line: "#1f2830",
        cyan: { DEFAULT: "#22d3ee", dim: "#0e7490" }, mint: "#34d399", mute: "#8b98a5"
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
};
