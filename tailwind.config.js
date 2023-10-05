/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "dark-bg-color": "var(--dark-bg-color)",
        "border-color": "var(--card-border)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "bg-surface-odd": "var(--bg-surface-odd)",
        "highlight-color": "var(--highlight-color)",
      },
      animation: {
        "spin-slow": "spin-slow 10s linear infinite",
        "pulse-colors": "pulse-colors 5s alternate-reverse infinite",
        "pulse-red": "pulse-red 3s alternate-reverse linear infinite",
        "fade-in-from-above": "fade-in-from-above 0.2s forwards",
        "pop-up": "pop-up 0.2s forwards",
        "pop-up-transparent": "pop-up-transparent 0.3s forwards",
      },
      keyframes: {
        "spin-slow": {
          "to": { transform: "rotate(360deg)" },
        },
        "pulse-colors": {
          "0%": {
            border: "2px solid orange",
          },
          "100%": {
            border: "2px solid blue",
          },
        },
        "pulse-red": {
          "0%": {
            backgroundColor: "#ff0000",
          },
          "100%": {
            backgroundColor: "#660000",
          },
        },
        "fade-in-from-above": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pop-up": {
          "0%": {
            opacity: "0",
            transform: "scale(0%)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(100%)",
          },
        },
        "pop-up-transparent": {
          "0%": {
            opacity: "0",
            transform: "scale(0%)",
          },
          "100%": {
            opacity: "0.5",
            transform: "scale(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
