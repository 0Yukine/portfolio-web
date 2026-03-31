/**
 * next.config.js
 * ===============
 * Konfigurasi Next.js
 * Fungsi: Setup Next.js dengan berbagai optimization dan konfigurasi
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
