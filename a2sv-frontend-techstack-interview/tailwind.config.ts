import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#D05858",
        "custom-black": "#181B21",
        "log-out-border": "#343434",
        "button-bg": "#7893F1",
        "card-bg": "#7879F1",
        distance: "#424242",
        open: "#B8FFB7",
        "open-text": "#54B752",
        close: "#FDC6C6",
      },
      spacing: {
        "0.5": "2px",
        "1.2": "5px",
        "1.5": "6px",
        "2.5": "10px",
        "4.5": "18px",
        "4.55": "18.5px",
        "4.6": "19px",
        "7.5": "30px",
        "12.5": "50px",
        "18": "72px",
        "25.5": "99px",
        "26": "102px",
        "9/10": "90%",
      },
      fontSize: {
        "4.5": "18px",
        "7.6": "31px",
      },
      borderRadius: {
        "2.5": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
