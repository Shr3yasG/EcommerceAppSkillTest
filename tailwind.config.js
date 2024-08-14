/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue for primary actions
        secondary: '#64748B', // Cool Gray for secondary text
        accent: '#F59E0B', // Amber for accents
        background: '#F9FAFB', // Light Gray background
        textPrimary: '#111827', // Dark Gray for main text
        textSecondary: '#6B7280', // Lighter Gray for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

