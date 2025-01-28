module.exports = {
  darkMode: "class", // or 'media'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #aa70e0, #7059e2)",
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
        typing: "typing 4s steps(30, end), blink 0.75s step-end infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },

          "50%": { transform: "rotate(20deg)" },

          "100%": { transform: "rotate(0deg)" }, // Animation completes at 2s, with a 2s pause
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
      },
    },
  },
  plugins: [],
};
