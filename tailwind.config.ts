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
        primary: "#003C43",
        secondary: "#135D66",
        light: "#77B0AA",
        "max-light": "#E3FEF7",
        "primary-black": "#0F1010",
      },
    },
  },
  plugins: [],
};
export default config;
