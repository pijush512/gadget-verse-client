/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nav: ["var(--font-nav)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      }
    },
  },
  plugins: [
    require('daisyui'), 
  ],
}


