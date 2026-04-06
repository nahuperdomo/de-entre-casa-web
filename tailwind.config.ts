import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tierra: "#2C2417",
        crema: "#F5EDE3",
        bronce: "#8B6F4E",
        campo: "#3B5141",
        sage: "#E8EEE5",
        lino: "#BFA887",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
