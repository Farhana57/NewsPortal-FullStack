/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ডার্ক মোড সাপোর্ট করার জন্য
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // UpToTechSyl থিম কালারসমূহ
        primary: "#1e40af", 
        amber: {
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        }
      },
      // ড্রপডাউন মেনুর জন্য fadeIn এনিমেশন যোগ করা হয়েছে
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}