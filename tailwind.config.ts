import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        darkestBlack: "#000000",
        darkBlack: "#313131",
        darkGray: "#525252",
        normalGray: "#8c8c8c",
        lightGray: "#b7b7b7",
        darkestBlue: "#010020",
        darkBlue: "#030160",
        normalBlue: "#0f52ba",
        lightBlue: "#6185bd",
        lightestBlue: "#4cbff6",
        Blue: "#46bff6",
      },
      fontFamily: {
        lexend: "Lexend, sans-serif",
      },
      backgroundImage: {
        lightBackground: "url('/lightBackground.jpg')",
        darkBackground: "url('/darkBackground.jpg')",
        triBackground: "url('/tri.jpg')",
        tri2Background: "url('/tri2.jpg')",
        tri3Background: "url('/tri3.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
