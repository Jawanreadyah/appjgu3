/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "rgba(255, 255, 255, 0.1)",
        primary: "#4f46e5", // Indigo-600
        background: "#0f172a", // Slate-900
        foreground: "#f8fafc", // Slate-50
        muted: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
