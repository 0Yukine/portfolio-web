/**
 * components/Skills.tsx
 * =====================
 * Komponen Skills Section
 * Fungsi: Menampilkan soft skills dan hard skills dalam layout yang menarik
 * Fitur: Card dengan hover effect, staggered animation, skill categorization
 */

"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from "@/lib/constants";
import {
  cardHoverVariants,
  listContainerVariants,
  listItemVariants,
} from "@/lib/animations";

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const { skills } = PORTFOLIO_DATA;

  // Animasi untuk section title
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${isDark ? "bg-slate-800" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-black mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Teknologi dan tools yang saya kuasai
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Soft Skills Card */}
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardHoverVariants}
            className={`p-8 rounded-xl transition-all ${
              isDark
                ? "bg-slate-900 border border-slate-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              🧠 Soft Skills
            </h3>
            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isDark
                      ? "bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  <span className="text-xl">✓</span>
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hard Skills Card */}
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardHoverVariants}
            className={`p-8 rounded-xl transition-all ${
              isDark
                ? "bg-slate-900 border border-slate-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              ⚙️ Hard Skills
            </h3>
            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {skills.hard.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isDark
                      ? "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                >
                  <span className="text-xl">✓</span>
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 rounded-lg border border-blue-500"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
