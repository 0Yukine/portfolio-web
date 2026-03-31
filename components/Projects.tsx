/**
 * components/Projects.tsx
 * =======================
 * Komponen Projects Section
 * Fungsi: Menampilkan project portfolio dalam grid layout dengan hover effects
 * Fitur: Project cards, tag badges, link buttons, image placeholders
 */

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const { projects } = PORTFOLIO_DATA;

  // Animasi untuk section title
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Animasi untuk project cards
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Hover animation untuk cards
  const cardHover = {
    rest: { y: 0 },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
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
            Featured{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Projek-projek terbaik yang telah saya kerjakan
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
            >
              <motion.div
                className={`h-full rounded-xl overflow-hidden border transition-all ${
                  isDark
                    ? "bg-slate-900 border-slate-700 hover:border-green-500"
                    : "bg-white border-gray-200 hover:border-green-500"
                } shadow-lg hover:shadow-2xl`}
                initial="rest"
                whileHover="hover"
                variants={cardHover}
              >
                {/* Project Image/Icon */}
                <div
                  className={`h-48 flex items-center justify-center text-8xl transition-all overflow-hidden ${
                    isDark ? "bg-slate-800" : "bg-gray-100"
                  }`}
                >
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <span>{project.image}</span>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${
                          isDark
                            ? "bg-green-500/20 text-green-300"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        isDark
                          ? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                          : "bg-green-50 text-green-700 hover:bg-green-100"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      View
                    </motion.a>
                    <motion.a
                      href={project.codeLink || "#"}
                      target={project.codeLink ? "_blank" : undefined}
                      rel={project.codeLink ? "noopener noreferrer" : undefined}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        isDark
                          ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className={`inline-block px-8 py-4 rounded-lg font-semibold transition-all ${
              isDark
                ? "bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-lg hover:shadow-green-500/50"
                : "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:shadow-lg hover:shadow-green-400/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
