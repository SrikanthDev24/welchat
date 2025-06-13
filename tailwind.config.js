/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#fb923c',      // orange-400
        secondary: '#ef4444',    // red-500
        accent: '#facc15',       // yellow-400
        background: '#fafafa',   // zinc-50 or gray-50
        textMain: '#1f2937',     // gray-800
        textMuted: '#6b7280',    // gray-500
        success: '#22c55e',      // green-500
        info: '#0ea5e9',         // sky-500
      },
    },
  },
  plugins: [],
}
