/**
 * app/page.tsx
 * =============
 * Main Page / Home Page Component
 * Fungsi: Halaman utama yang mengintegrasikan semua components
 * Fitur: Dark mode state management, semua sections dalam satu halaman
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

  // Initialize dark mode from localStorage
  useEffect(() => {
    setIsMounted(true);
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      const isDarkMode = JSON.parse(savedDarkMode);
      setIsDark(isDarkMode);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save dark mode preference to localStorage
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
        className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-white"}`}
      >
        {/* Navigation */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Main Content - Semua Section */}
        <main>
          {/* Hero Section - Landing page utama dengan intro */}
          <Hero isDark={isDark} />

          {/* Skills Section - Menampilkan soft & hard skills */}
          <Skills isDark={isDark} />

          {/* Experience Section - Riwayat pekerjaan dengan timeline */}
          <Experience isDark={isDark} />

          {/* Projects Section - Portfolio project showcase */}
          <Projects isDark={isDark} />

          {/* Contact Section - Form kontak dan informasi kontak */}
          <Contact isDark={isDark} />
        </main>

        {/* Footer - Bagian bawah dengan meta info dan social links */}
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
