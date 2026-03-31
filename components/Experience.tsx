/**
 * components/Experience.tsx
 * ==========================
 * Komponen Experience Section
 * Fungsi: Menampilkan pengalaman kerja dalam format timeline yang menarik
 * Fitur: Timeline layout, expandable cards, smooth animations
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { cardHoverVariants } from "@/lib/animations";

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  const { experience } = PORTFOLIO_DATA;
  const [expandedId, setExpandedId] = useState<number | null>(
    experience[0]?.id,
  );

  // Animasi untuk section title
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Animasi untuk list items
  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto">
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
            Work{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Pengalaman dan pencapaian profesional saya
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={experienceVariants}
            >
              {/* Experience Card */}
              <motion.button
                onClick={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  isDark
                    ? "bg-slate-800 hover:bg-slate-700 border border-slate-700"
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                } focus:outline-none`}
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    {/* Company Name */}
                    <h3
                      className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {exp.company}
                    </h3>
                    {/* Job Title */}
                    <p
                      className={`text-lg font-semibold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                    >
                      {exp.role}
                    </p>
                    {/* Period */}
                    <p
                      className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    >
                      📅 {exp.period}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={24}
                      className={isDark ? "text-gray-400" : "text-gray-600"}
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden border-x border-b rounded-b-xl ${
                      isDark ? "border-slate-700" : "border-gray-200"
                    }`}
                  >
                    <div
                      className={`p-6 pt-0 space-y-2 ${isDark ? "bg-slate-800" : "bg-gray-50"}`}
                    >
                      {exp.desc.map((desc, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex gap-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                        >
                          <span className="text-orange-500 font-bold text-lg flex-shrink-0">
                            →
                          </span>
                          <p>{desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          className="absolute left-0 top-1/2 w-1 h-32 bg-gradient-to-b from-orange-500 to-red-600 rounded-full opacity-30"
          animate={{ scaleY: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
