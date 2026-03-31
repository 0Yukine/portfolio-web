/**
 * app/layout.tsx
 * ===============
 * Main Layout Component / Root Layout
 * Fungsi: Layout utama yang membungkus semua pages, setup global styles, metadata
 * Fitur: Dark mode support, global styles, font imports
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mickael William | Portfolio",
  description:
    "Modern portfolio website showcasing my projects and skills with React, Next.js, and Framer Motion",
  keywords: ["portfolio", "react", "nextjs", "framer-motion", "tailwind"],
  viewport: "width=device-width, initial-scale=1",
  authors: [
    {
      name: "Mickael William",
      url: "https://mickael-portfolio.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preload fonts jika diperlukan */}
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
