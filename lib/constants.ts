/**
 * lib/constants.ts
 * ================
 * File ini menyimpan semua data konstanta portfolio
 * Fungsi: Memisahkan data dari logic untuk maintainability lebih baik
 * Semua data CV, skill, pengalaman, dan project disimpan di sini
 */

export const PORTFOLIO_DATA = {
  // Info Pribadi
  personal: {
    name: "Mickael William",
    title: "Informatics Student & Creative Designer",
    location: "Semarang, Jawa Tengah",
    email: "williammcikael05@gmail.com",
    phone: "087820023322",
    profileImage: "/images/profile.jpeg", // 👈 UBAH KE FOTO ANDA - Taro foto di folder public/images/
    summary:
      "Mahasiswa Teknik Informatika aktif di Universitas Semarang (USM) dengan minat kuat pada teknologi, desain grafis, dan pengembangan perangkat lunak. Memiliki pengalaman praktis dalam alur kerja cetak digital dan produksi desain melalui magang di Jeruk Offset Printing.",
    socials: {
      github: "https://github.com/0Yukine",
      linkedin: "https://linkedin.com",
      email: "williammcikael05@gmail.com",
    },
  },

  // Soft Skills & Hard Skills
  skills: {
    soft: ["Well Communicate", "Problem Solving", "Creative"],
    hard: [
      "Canva",
      "Capcut",
      "Adobe Photoshop",
      "Figma (UI/UX Design)",
      "Visual Studio Code",
      "Microsoft Office",
    ],
  },

  // Pengalaman Kerja
  experience: [
    {
      id: 1,
      company: "Indosat Ooredoo Hutchison",
      role: "Social Media Intern",
      period: "Jan 2026 - March 2026",
      desc: [
        "Mengembangkan ide konten kreatif dan menulis naskah untuk kampanye media sosial.",
        "Membuat konten video menarik, termasuk berperan sebagai talent on-screen.",
        "Mengedit video untuk platform media sosial dengan fokus pada engagement audiens.",
        "Mendesain postingan carousel dan banner promosi digital.",
        "Berkolaborasi dengan tim media sosial untuk menjaga kualitas konten.",
      ],
    },
    {
      id: 2,
      company: "Jeruk Offset.CV",
      role: "Design & Production Staff",
      period: "Oct 2023 - Dec 2023",
      desc: [
        "Melaksanakan tugas desain grafis dan produksi cetak digital.",
        "Mengoperasikan mesin cetak digital untuk produksi masal.",
        "Memastikan kualitas output cetak sesuai standar perusahaan.",
      ],
    },
  ],

  // Project Portfolio
  projects: [
    {
      id: 1,
      title: "Web Portfolio Interaktif",
      description:
        "Portfolio modern dengan animasi halus menggunakan Framer Motion",
      image: "🎨",
      imageUrl: "/projects/WebPorto.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#", // 👈 Link ke website/demo
      codeLink: "#", // 👈 Link ke GitHub
    },
    {
      id: 2,
      title: "Design System UI/UX",
      description:
        "Sistem desain lengkap dengan Figma untuk konsistensi branding",
      image: "🎭",
      imageUrl: "/projects/kopi.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["Figma", "UI/UX", "Design"],
      link: "https://0yukine.github.io/Kedai_kopi", // 👈 Link ke website/demo
      codeLink: "https://github.com/0Yukine/Kedai_kopi", // 👈 Link ke GitHub
    },
    {
      id: 3,
      title: "Video Content Production",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎬",
      imageUrl: "/projects/edukasi.jpg", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://www.instagram.com/reel/DVadmChkcjP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Link ke website/demo
      codeLink: "#", // 👈 Link ke GitHub
    },
  ],
};

// Animasi Variants - Digunakan untuk Framer Motion
export const ANIMATION_VARIANTS = {
  // Container untuk stagger animation
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },

  // Item untuk stagger animation
  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },

  // Fade In
  fadeInVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  },

  // Slide dari kiri
  slideLeftVariants: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  // Slide dari kanan
  slideRightVariants: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  // Scale Up
  scaleUpVariants: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
};
