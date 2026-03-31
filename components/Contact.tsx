/**
 * components/Contact.tsx
 * =======================
 * Komponen Contact Section
 * Fungsi: Menampilkan form contact dan informasi kontak dengan animasi menarik
 * Fitur: Contact form, multiple contact methods, email/phone display
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animasi untuk section title
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Animasi untuk contact items
  const contactItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate send delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      alert("Terima kasih! Pesan Anda telah dikirim.");
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto">
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
            Let's{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Hubungi saya untuk kolaborasi atau pertanyaan
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className={`text-2xl md:text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Hubungi Saya
            </h3>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href={`mailto:${personal.email}`}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className={`block p-6 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-pink-500"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 hover:from-pink-50 hover:to-pink-100 border border-gray-200 hover:border-pink-300"
                }`}
                whileHover={{ x: 12, y: -4 }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-16 h-16 flex items-center justify-center p-4 rounded-xl flex-shrink-0 ${isDark ? "bg-pink-500/20" : "bg-pink-200/40"}`}
                  >
                    <Mail
                      size={32}
                      className={isDark ? "text-pink-400" : "text-pink-600"}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      Email
                    </h4>
                    <p
                      className={`text-sm md:text-base break-all ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {personal.email}
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${personal.phone}`}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className={`block p-6 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 border border-gray-200 hover:border-blue-300"
                }`}
                whileHover={{ x: 12, y: -4 }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-16 h-16 flex items-center justify-center p-4 rounded-xl flex-shrink-0 ${isDark ? "bg-blue-500/20" : "bg-blue-200/40"}`}
                  >
                    <Phone
                      size={32}
                      className={isDark ? "text-blue-400" : "text-blue-600"}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      Telepon
                    </h4>
                    <p
                      className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {personal.phone}
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className={`block p-6 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800 border border-slate-700 hover:border-purple-500"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-purple-100 border border-gray-200 hover:border-purple-300"
                }`}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-16 h-16 flex items-center justify-center p-4 rounded-xl flex-shrink-0 ${isDark ? "bg-purple-500/20" : "bg-purple-200/40"}`}
                  >
                    <MapPin
                      size={32}
                      className={isDark ? "text-purple-400" : "text-purple-600"}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      Lokasi
                    </h4>
                    <p
                      className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {personal.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl ${
              isDark
                ? "bg-slate-800 border border-slate-700"
                : "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Form Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  className={`block text-sm font-bold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Nama <span className="text-pink-500">*</span>
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-pink-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  className={`block text-sm font-bold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email <span className="text-pink-500">*</span>
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Anda"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-pink-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  className={`block text-sm font-bold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Pesan <span className="text-pink-500">*</span>
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none resize-none ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-pink-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-xl hover:shadow-pink-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-xl hover:shadow-pink-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sedang Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Kirim Pesan
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
