/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' for OS-level preferences
  theme: {
    extend: {
      colors: {
        theme: {
          dark: {
            primary: "#243a65",
            content: "#212121",
            background: "rgba(20, 20, 20, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
