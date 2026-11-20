/**
 * app/page.tsx
 * =============
 * Main Page / Home Page Component
 * Fungsi: Halaman utama yang mengintegrasikan semua components
 * Fitur: Dark mode state management, pembatas overflow mobile, dan integrasi section
 */

"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize dark mode from localStorage / system preference
  useEffect(() => {
    setIsMounted(true);
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      const isDarkMode = JSON.parse(savedDarkMode);
      setIsDark(isDarkMode);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Sync class 'dark' ke <html> agar Tailwind Dark Mode berjalan presisi
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("darkMode", JSON.stringify(isDark));
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDark, isMounted]);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className={`min-h-screen w-full transition-colors duration-300 ${
          isDark ? "bg-slate-900" : "bg-white"
        }`}
      >
        {/* Navigation */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Main Content dengan Pembatas Overflow Horizontal (Mencegah Bug Layar Putih & Double Scrollbar) */}
        <main className="relative w-full overflow-x-hidden">
          {/* Hero Section */}
          <Hero isDark={isDark} />

          {/* Skills Section */}
          <Skills isDark={isDark} />

          {/* Experience Section */}
          <Experience isDark={isDark} />

          {/* Projects Section */}
          <Projects isDark={isDark} />

          {/* Contact Section */}
          <Contact isDark={isDark} />
        </main>

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}