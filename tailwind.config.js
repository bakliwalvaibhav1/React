/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-wheel": "spin 40s ease-in-out infinite",
        "spin-spokes": "spin-spokes 40s ease-in-out infinite",
      },
      keyframes: {
        "spin-wheel": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-spokes": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      fontFamily: {
        primaryFont: ["Roboto", "Dosis", "Playpen Sans"],
        headingFont: ["Montserrat Alternates", "sans-serif"],
        headingFont2: ["Montserrat Subrayada", "sans-serif"],
        headingFont3: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "bgColor",
      },
    ],
  ],
};
