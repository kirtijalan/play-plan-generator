/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        motor: "#0EA5E9",      // sky-500
        social: "#10B981",     // emerald-500
        pretend: "#F59E0B",    // amber-500
        sensory: "#A78BFA"     // violet-400 (spare)
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
