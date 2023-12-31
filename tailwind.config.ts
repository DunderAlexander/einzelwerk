import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content: {
        "en-flag": 'url("/Flag_of_the_United_Kingdom.svg")',
        "de-flag": 'url("/Flag_of_Germany.svg")',
      },
      colors: {
        "gray-100": "#F3F4F6",
        "gray-950": "#030712",
      },
      fontFamily: {
        "arboria-medium": ["Arboria-Medium"],
        "arboria-book": ["Arboria-Book"],
      },
      backgroundColor: {
        "header-background": "rgba(3, 7, 18, 0.72)",
        button: "#4F46E5",
      },
      backgroundImage: {
        "body-background": "linear-gradient(180deg, #111827 0%, #1F293E 100%);",
        "about-button": "linear-gradient(90deg, #6366F1 0%, #AC54F1 100%)",
        footer:
          "linear-gradient(110deg, hsl(0deg 0% 100%) 0%, hsl(249deg 87% 83%) 59%, hsl(239deg 84% 67%) 100%)",
        "accordion-text": "linear-gradient(270deg, #FFF 7.55%, #666A77 100%)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
