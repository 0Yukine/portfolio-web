/**
 * components/Hero.tsx
 * ===================
 * Komponen Hero Section / Landing Section
 * Fungsi: Menampilkan intro, nama, title, dan CTA buttons dengan animasi menarik
 * Fitur: Gradient text, animated icons, smooth scroll buttons
 */

"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle, Mail, Linkedin, Github } from "lucide-react";
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from "@/lib/constants";
import { useParallax } from "@/lib/animations";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;
  const yOffset = useParallax(50);

  // Animasi untuk main title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Background Gradient Element */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ y: yOffset }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Profile Image Container */}
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r ${
                isDark
                  ? "border-blue-500/50 bg-slate-800"
                  : "border-blue-400/50 bg-gray-100"
              } flex items-center justify-center`}
            >
              {personal.profileImage ? (
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {personal.name.charAt(0)}
                  {personal.name.split(" ")[1]?.charAt(0)}
                </span>
              )}
            </div>
            {/* Status Badge */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              isDark
                ? "bg-blue-500/20 text-blue-300"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            custom={0}
            variants={titleVariants}
            className={isDark ? "text-white" : "text-gray-900"}
          >
            Hi, I'm{" "}
          </motion.span>
          <motion.span
            custom={1}
            variants={titleVariants}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {personal.name}
          </motion.span>
        </motion.h1>

        {/* Title/Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`text-2xl md:text-3xl font-semibold mb-6 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {personal.title}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {personal.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Contact Button */}
          <motion.a
            href="#contact"
            className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-400/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Get in Touch
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            {[
              { icon: Github, href: personal.socials.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: personal.socials.linkedin,
                label: "LinkedIn",
              },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg transition-all ${
                  isDark
                    ? "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-blue-400"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
                }`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <motion.a
            href="#skills"
            className={isDark ? "text-blue-400" : "text-blue-600"}
            whileHover={{ scale: 1.2 }}
          >
            <ArrowDownCircle size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
