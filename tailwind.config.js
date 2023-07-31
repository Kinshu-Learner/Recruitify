/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "blob1": "blob1 6s infinite linear",
        "blob2": "blob2 9s infinite linear"
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "20%": {
            transform: "translate(60px, 160px) scale(1.1)"
          },
          "40%": {
            transform: "translate(160px, 200px) scale(0.9)"
          },
          "60%": {
            transform: "translate(220px, 120px) scale(1.1)"
          },
          "80%": {
            transform: "translate(170px, 50px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "20%": {
            transform: "translate(-60px, -160px) scale(1.1)"
          },
          "40%": {
            transform: "translate(-180px, -200px) scale(0.9)"
          },
          "60%": {
            transform: "translate(-300px, -120px) scale(1.1)"
          },
          "80%": {
            transform: "translate(-190px, -50px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      }
    },
  },
  plugins: [],
}