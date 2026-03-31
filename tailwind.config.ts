/**
 * tailwind.config.ts
 * ==================
 * Konfigurasi Tailwind CSS
 * Fungsi: Mengatur tema, warna, font, dan customization Tailwind CSS
 * Digunakan untuk styling yang konsisten di seluruh aplikasi
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors untuk branding
        primary: "#3B82F6",
        secondary: "#8B5CF6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
