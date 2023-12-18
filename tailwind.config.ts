import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font-ephesis": "var(--ephesis)",
      },
      transitionProperty: {
        visible: "visibility, opacity",
        svg: "color, transform",
      },
      colors: {
        "dark-grey": "#373D3F",
      },
    },
  },
  plugins: [],
};
export default config;
