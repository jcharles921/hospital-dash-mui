/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}", "./index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: () => ({
        gradientBlue: "linear-gradient(90deg, #00A5DF, #19459D)",
        "gradientBlue2  ": "linear-gradient(90deg, #22BCF2, #7CA4F4)",
      }),
    },
  },
  plugins: [],
};
