import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { boxShadow: { soft: "0 8px 30px rgba(15,23,42,.07)" } } },
  plugins: []
};
export default config;