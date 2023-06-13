/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#110B49",
      secondary: "#FFAB00",
      "secondary-2": "rgba(255, 171, 0, 0.2)",
      placeholder: "rgba(0, 0, 0, 0.5)",
      "horizontal-line": "rgba(102, 102, 102, 0.2)",
    },
    extend: {
      boxShadow: {
        sm: "5px 3px 10px 2px rgba(0, 0, 0, 0.2);",
      },
    },
  },
  plugins: [],
};
