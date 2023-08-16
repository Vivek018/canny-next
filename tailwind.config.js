/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "340px",
      sm: "500px",
      md: "700px",
      lg: "1000px",
      xl: "1300px",
    },
    colors: {
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
      "article-background": "var(--article-background)",
      "card-1": "var(--card1-bg)",
      "card-2": "var(--card2-bg)",
      "card-3": "var(--card3-bg)",
      "card-4": "var(--card4-bg)",
      "card-5": "var(--card5-bg)",
      primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)",
      },
      destructive: {
        DEFAULT: "var(--destructive) / <alpha-value>",
        foreground: "var(--destructive-foreground) / <alpha-value>",
      },
      muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)",
      },
      accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)",
      },
      popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)",
      },
      modal: {
        primary: "var(--modal-primary)",
        secondary: "var(--modal-secondary)",
      },
    },
    extend: {
      backgroundImage: {
        text: "linear-gradient(180deg,var(--foreground), #adadad);",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
