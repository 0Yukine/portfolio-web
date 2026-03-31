import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Palette, 
  Code, 
  Video, 
  Smartphone, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  ChevronRight,
  ArrowUpRight,
  Send,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

// --- DATA DARI CV MICKAEL WILLIAM ---
const DATA = {
  name: "Mickael William",
  title: "Informatics Student & Creative Designer",
  location: "Semarang, Jawa Tengah",
  email: "williammcikael05@gmail.com",
  phone: "087820023322",
  summary: "Mahasiswa Teknik Informatika aktif di Universitas Semarang (USM) dengan minat kuat pada teknologi, desain grafis, dan pengembangan perangkat lunak. Memiliki pengalaman praktis dalam alur kerja cetak digital dan produksi desain melalui magang di Jeruk Offset Printing. Dikenal sebagai pribadi yang adaptif, kreatif, dan berorientasi pada detail.",
  skills: {
    soft: ["Well Communicate", "Problem Solving", "Creative"],
    hard: ["Canva", "Capcut", "Adobe Photoshop", "Figma (UI/UX Design)", "Visual Studio Code", "Microsoft Office"]
  },
  experience: [
    {
      company: "Indosat Ooredoo Hutchison",
      role: "Social Media Intern",
      period: "Jan 2026 - March 2026",
      desc: [
        "Mengembangkan ide konten kreatif dan menulis naskah untuk kampanye media sosial.",
        "Membuat konten video menarik, termasuk berperan sebagai talent on-screen.",
        "Mengedit video untuk platform media sosial dengan fokus pada engagement audiens.",
        "Mendesain postingan carousel dan banner promosi digital.",
        "Berkolaborasi dengan tim media sosial untuk menjaga kualitas konten."
      ]
    },
    {
      company: "Jeruk Offset.CV",
      role: "Internship Staff",
      period: "Jan 2022 - July 2022",
      desc: [
        "Membantu operasional percetakan harian termasuk persiapan layout dan kontrol kualitas.",
        "Mengoperasikan alat desain untuk brosur, banner, dan materi promosi lainnya.",
        "Memastikan akurasi dan ketepatan waktu penyelesaian pesanan klien.",
        "Mempelajari alur kerja operasional di lingkungan cetak digital dan offset."
      ]
    },
    {
      company: "Church Media Volunteer",
      role: "Graphic Designer",
      period: "March 2021 - Present",
      desc: [
        "Mendesain poster dan konten visual untuk acara gereja dan aktivitas komunitas.",
        "Berkolaborasi untuk menciptakan komunikasi visual yang informatif.",
        "Mengelola konsep desain dari pengembangan ide hingga produksi akhir.",
        "Menjaga konsistensi visual di semua materi yang dipublikasikan."
      ]
    }
  ],
  education: [
    {
      school: "Universitas Semarang (USM)",
      degree: "Bachelor of Informatics Engineering",
      period: "Aug 2023 - Present",
      desc: "Sedang mengembangkan keahlian dalam pemrograman, UI/UX, dan media kreatif."
    },
    {
      school: "SMK 17 Agustus",
      degree: "Vocational High School - Multimedia",
      period: "July 2020 - July 2023",
      desc: "Fokus pada desain grafis, video editing, fotografi, dan produksi digital kreatif."
    }
  ],
  certification: [
    "Sertifikat Prakerja: Membuat Desain Promosi di Photoshop untuk Desainer Grafis (2024)"
  ]
};

// --- COMPONENTS ---

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center md:text-left">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 dark:text-slate-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Kontak', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          MICKAEL<span className="text-blue-600">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium hover:text-blue-600 transition-colors dark:text-slate-200"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl py-6 flex flex-col items-center space-y-6 md:hidden"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ExperienceCard = ({ exp, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-0 mb-12"
  >
    <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
      <div className="hidden md:block w-1/2 px-12 text-right">
        {index % 2 === 0 ? (
          <div>
            <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
            <p className="text-blue-600 font-semibold mb-2">{exp.role}</p>
            <p className="text-sm text-slate-500 mb-4 italic">{exp.period}</p>
          </div>
        ) : null}
      </div>

      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10" />

      <div className="md:w-1/2 md:px-12">
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
          <div className="md:hidden mb-4">
            <h3 className="text-xl font-bold">{exp.company}</h3>
            <p className="text-blue-600 font-semibold text-sm">{exp.role}</p>
            <p className="text-xs text-slate-500 mt-1">{exp.period}</p>
          </div>
          <div className="hidden md:block mb-4">
             {index % 2 !== 0 ? (
                <>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{exp.role}</p>
                  <p className="text-xs text-slate-500 mt-1">{exp.period}</p>
                </>
             ) : null}
          </div>
          <ul className="space-y-2">
            {exp.desc.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                <ChevronRight size={14} className="mt-1 text-blue-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const Marquee = () => (
  <div className="py-20 bg-blue-600 overflow-hidden select-none flex whitespace-nowrap">
    {[1, 2].map((i) => (
      <motion.div 
        key={i}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center"
      >
        <span className="text-5xl md:text-8xl font-black text-white/20 px-8 uppercase">Informatics</span>
        <span className="text-5xl md:text-8xl font-black text-white px-8 outline-text uppercase">Design</span>
        <span className="text-5xl md:text-8xl font-black text-white/20 px-8 uppercase">UI/UX</span>
        <span className="text-5xl md:text-8xl font-black text-white px-8 outline-text uppercase">Multimedia</span>
        <span className="text-5xl md:text-8xl font-black text-white/20 px-8 uppercase">Creative</span>
      </motion.div>
    ))}
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
        
        {/* Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left" style={{ scaleX }} />

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6"
              >
                AVAILABLE FOR NEW OPPORTUNITIES
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
              >
                I am <span className="text-blue-600">Mickael William</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
              >
                {DATA.title} dari Semarang yang berfokus pada pengembangan teknologi berbasis data dan estetika desain visual premium.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-2 transition-all group"
                >
                  Hubungi Saya <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </a>
                <a 
                  href="#experience" 
                  className="px-8 py-4 border border-slate-300 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  Lihat Pengalaman
                </a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full -z-10" />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 group"
              >
                {/* Mock Image Placeholder with Initials */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white text-9xl font-black opacity-90 group-hover:scale-105 transition-transform duration-700">
                  MW
                </div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                  <p className="font-bold text-xl mb-1">{DATA.name}</p>
                  <p className="text-sm opacity-80">{DATA.location}</p>
                </div>
              </motion.div>
              
              <div>
                <SectionTitle subtitle="Siapa saya sebenarnya?">Executive Summary</SectionTitle>
                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
                  <p>{DATA.summary}</p>
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    {DATA.education.map((edu, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-slate-900 dark:text-white">{edu.school}</h4>
                        <p className="text-sm text-blue-600 font-medium mb-2">{edu.degree}</p>
                        <p className="text-xs opacity-70 italic">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Effect */}
        <Marquee />

        {/* Experience Section */}
        <section id="experience" className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="Perjalanan karir dan kontribusi saya di industri.">Work Experiences</SectionTitle>
            
            <div className="relative mt-20">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform -translate-x-1/2 hidden md:block" />
              
              {DATA.experience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-8">Keahlian Utama</h2>
                <p className="text-slate-400 mb-12 max-w-md">
                  Menggabungkan logika teknis Informatika dengan intuisi desain kreatif untuk menghasilkan solusi digital yang komprehensif.
                </p>
                
                <div className="space-y-12">
                  <div>
                    <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-6">Hard Skills</h4>
                    <div className="flex flex-wrap gap-4">
                      {DATA.skills.hard.map((skill) => (
                        <div key={skill} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition-all cursor-default">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-6">Soft Skills</h4>
                    <div className="flex flex-wrap gap-4">
                      {DATA.skills.soft.map((skill) => (
                        <div key={skill} className="px-5 py-3 border border-white/20 rounded-xl">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Palette className="text-pink-500" />, title: "Graphic Design", desc: "Expertise in Canva & Photoshop" },
                  { icon: <Smartphone className="text-blue-500" />, title: "UI/UX Design", desc: "Focusing on Figma workflows" },
                  { icon: <Video className="text-green-500" />, title: "Video Editing", desc: "Short-form content creator" },
                  { icon: <Code className="text-orange-500" />, title: "Tech Engineering", desc: "Student of Informatics (VS Code)" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between"
                  >
                    <div className="p-3 bg-white/10 rounded-2xl w-fit mb-6">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8">Mari Berkolaborasi!</h2>
                  <p className="text-blue-100 text-lg mb-12 max-w-sm">
                    Punya ide proyek menarik atau butuh bantuan desain? Hubungi saya sekarang.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Email Saya</p>
                        <p className="font-bold">{DATA.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Telepon / WhatsApp</p>
                        <p className="font-bold">{DATA.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Lokasi</p>
                        <p className="font-bold">{DATA.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex gap-4">
                    <a 
                      href={`https://wa.me/${DATA.phone.replace(/[^0-9]/g, '')}`} 
                      className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <MessageCircle size={20} /> WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                   {/* Google Maps Embed for Semarang */}
                  <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d110.3470242!3d-6.9944243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ea5879391%3A0xf9f0d14ef975d49a!2sSemarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1711234567890!5m2!1sid!2sid" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy"
                    ></iframe>
                  </div>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Nama Lengkap" 
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white transition-all placeholder:text-white/50"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Aktif" 
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white transition-all placeholder:text-white/50"
                    />
                    <textarea 
                      placeholder="Pesan Anda" 
                      rows="4" 
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white transition-all placeholder:text-white/50"
                    ></textarea>
                    <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
                      Kirim Pesan <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Background Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-black tracking-tighter italic text-blue-600">
              MICKAEL.
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              © 2026 Mickael William. Built with Passion & Technology.
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
          color: transparent;
        }
        @media (max-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.4);
          }
        }
      `}</style>
    </div>
  );
}