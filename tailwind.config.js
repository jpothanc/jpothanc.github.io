/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' for OS-level preferences
  theme: {
    extend: {
      fontSize: {
        md: "14px",
      },
      colors: {
        theme: {
          dark: {
            primary: "#243a65",
            content: "#212121",
            hover: "text-amber-500",
            background: "#09090b",
            contentbg: "#0a0a0a",
          },
          backgroundImage: {
            "dark-content-gradient":
              "linear-gradient(180deg, #212121 0%, #0a0a0a 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
