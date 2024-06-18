import { Opacity } from "@mui/icons-material";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        test: "url('https://img.freepik.com/premium-vector/space-stars-background-illustration-night-sky_160081-239.jpg')",
      },
      fontFamily: {
        font1: ["font1"],
        font2: ["font2"],
      },
      margin: {
        "440px": "440px",
        "150px": "150px",
      },
      screens: {
        desktop: "1600px",
      },
      animation: {
        TransBottomTest: "TransBottomTest 1.5s ease-in-out",
        Transleft: "TransRight 1.5s ease-in-out",
        TransRightTest: "TransRightTest 1.5s ease-in-out",
        TransleftTest: "TransleftTest 1.5s ease-in-out",
        TransTopTest: "TransTopTest 1.5s ease-in-out",
        TransRight: "TransRight 1.5s ease-in-out",
      },
      keyframes: {
        TransBottomTest: {
          "0%": { transform: "translateY(70rem)",
                  opacity: "0"
           },
          "100%": { transform: "translateX(0rem)",
                    opacity: "1"
          },
        },
        TransleftTest: {
          "0%": { transform: "translateX(-70rem)",
                  opacity: "0"
           },
          "100%": { transform: "translateX(0rem)",
                    opacity: "1"
          },
        },
        TransRightTest: {
          "0%": { transform: "translateX(70rem)",
                  opacity: "0"
           },
          "100%": { transform: "translateX(0rem)",
                    opacity: "1"
          },
        },
        TransTopTest: {
          "0%": { transform: "translateY(-70rem)",
                  opacity: "0"
           },
          "100%": { transform: "translateY(0rem)",
                    opacity: "1"
          },
        },
        Transleft: {
          "0%": { transform: "translateX(23rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
        TransRight: {
          "0%": { transform: "translateX(0rem)" },
          "100%": { transform: "translateX(23rem)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
