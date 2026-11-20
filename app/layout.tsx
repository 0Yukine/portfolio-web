/**
 * app/layout.tsx
 * ==============
 * Root Layout Component
 * Layout utama aplikasi: menangani metadata, viewport, serta struktur HTML dasar.
 */

import type { Metadata, Viewport } from "next";
// @ts-ignore Next.js processes CSS side-effect imports during the build.
import "./globals.css";

export const metadata: Metadata = {
  title: "Mickael William | Portfolio",
  description:
    "Modern portfolio website showcasing projects and skills in Software Engineering, iOS Development (SwiftUI), and Creative Design.",
  keywords: [
    "Mickael William",
    "Portfolio",
    "Informatics Engineering",
    "SwiftUI",
    "iOS Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Mickael William",
      url: "https://portfolio-mikel.vercel.app/",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-[#0b0c10] text-white min-h-screen relative antialiased">
        {children}
      </body>
    </html>
  );
}