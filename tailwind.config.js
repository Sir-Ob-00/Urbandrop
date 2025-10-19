/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5CB35E",       // main green
        primaryLight: "#5CB35E8C", // light translucent green
        dark: "#183A37",          // deep forest green
        muted: "#879EA4",         // gray-blue
        danger: "#F74242",        // alert red
        background: "#f2f5f9",    // light background
        darkGreen: "#173a36",    // darker green for hover states
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // ✅ brand font
        heading: ["Red Hat Display", "sans-serif"],
        body: ['Inter', 'sans-serif'],
        other: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
