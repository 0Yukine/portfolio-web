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
    email: "williammickael05@gmail.com",
    phone: "087820023322",
    profileImage: "/images/profile1.jpg", // 👈 UBAH KE FOTO ANDA - Taro foto di folder public/images/
    summary:
      "Mahasiswa Teknik Informatika aktif di Universitas Semarang (USM) dengan minat kuat pada software engineering, pengembangan aplikasi iOS, dan desain visual. Memiliki rekam jejak pengalaman yang beragam, mulai dari Apple Developer Academy (Foundation Program) di Universitas Ciputra, Social Media Intern di PT Indosat Ooredoo Hutchison, hingga staf produksi cetak digital di Jeruk Offset Printing.",
    socials: {
      github: "https://github.com/0Yukine",
      linkedin: "https://www.linkedin.com/in/mickaelwilliam/",
      email: "williammickael05@gmail.com",
    },
  },

  // Soft Skills & Hard Skills
  skills: {
    soft: [
      "Communication & Teamwork",
      "Problem Solving & Analytical Thinking",
      "Creative Content & Visual Storytelling",
      "Challenge Based Learning (CBL)",
    ],
    hard: [
      "JavaScript / HTML / CSS",
      "Swift & SwiftUI",
      "UI/UX Design (Figma)",
      "Graphic Design (Adobe Photoshop & Canva)",
      "Video Editing (CapCut)",
      "Microsoft Office",
    ],
  },

  // Pengalaman Kerja
  experience: [
    {
      id: 1,
      company: "Apple Developer Academy @UC",
      role: "Foundation Program Participant",
      period: "19 Oct 2026 - 13 Nov 2026",
      desc: [
        "Mengikuti program intensif selama satu bulan berbasis Challenge Based Learning (CBL).",
        "Berkolaborasi dalam tim untuk merancang dan memprototipe solusi aplikasi iOS menggunakan Swift & SwiftUI.",
        "Menerapkan ideasi produk, pemecahan masalah (problem solving), dan standar desain UI/UX ala Apple.",
      ],
    },
    {
      id: 2,
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
      id: 3,
      company: "Jeruk Offset.CV",
      role: "Design & Production Staff",
      period: "Jan 2022 - July 2022",
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
      link: "https://portfolio-web-hjzy.vercel.app/", // 👈 Link ke website/demo
      codeLink: "https://github.com/0Yukine/portfolio-web", // 👈 Link ke GitHub
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
      title: "Seecat Sepatoe",
      description:
        "Website katalog produk UMKM untuk mendukung promosi digital jasa perawatan sepatu dengan tampilan modern dan responsif.",
      image: "👟",
      imageUrl: "/projects/seecat.png", // Tambahkan screenshot proyek ke folder public/projects
      tags: ["React", "Vite", "Tailwind CSS", "UI/UX"],
      link: "https://seecat-sepatoe.vercel.app/",
      codeLink: "https://github.com/0Yukine/seecat_sepatoe",
    },

    {
      id: 4,
      title: "LPK Kapibara",
      description:
        "Sistem manajemen operasional dan landing page terintegrasi untuk LPK Kapibara. Dilengkapi pendataan peserta diklat, pencatatan keuangan, serta Sistem Autentikasi Multi-Role (Super Admin, Admin, dan User).",
      image: "💼",
      imageUrl: "/projects/LPK.png", // Tambahkan screenshot proyek ke folder public/projects
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Full-Stack"],
      link: "https://capybara.xo.je/Capybara/",
      codeLink: "", // Isi URL GitHub jika ada (atau kosongkan "")
    },

    {
      id: 5,
      title: "BeeWise - Gamified Productivity App",
      description:
        "Aplikasi iOS berbasis SwiftUI yang memadukan manajemen jadwal dan produktivitas dengan elemen gamifikasi (Pet Points, task collection, dan shareable achievement cards) hasil pengembangan proyek CBL di Apple Developer Academy.",
      image: "🐝",
      imageUrl: "/projects/beewise.jpg", // Tambahkan screenshot/mockup preview ke folder public/projects
      tags: ["Swift", "SwiftUI", "iOS Development", "CBL", "UI/UX Design"],
      link: "", // Isi link App Store / TestFlight / Demo jika ada
      codeLink: "https://github.com/0Yukine/BeeWise", // Isi link repository GitHub jika ada
    },

    {
      id: 6,
      title: "Portal UMKM Langenharjo",
      description:
        "Website portal UMKM Desa Langenharjo yang menampilkan profil, produk, galeri, dan informasi tiga UMKM sebagai media promosi digital berbasis web.",
      image: "🏪",
      imageUrl: "/projects/portal.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive"],
      link: "https://umkm-langenharjo.vercel.app",
      codeLink: "https://github.com/0Yukine/umkm-langenharjo",
    },

    {
      id: 7,
      title: "Won Dimsum Website",
      description:
        "Website landing page modern untuk Won Dimsum By Woengkoesan Eatery dengan katalog menu, galeri, testimoni pelanggan, FAQ, dan integrasi WhatsApp untuk pemesanan.",
      image: "🥟",
      imageUrl: "/projects/wondimsum.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Landing Page"],
      link: "https://wondimsum.vercel.app",
      codeLink: "https://github.com/0Yukine/wondimsum",
    },

    {
      id: 8,
      title: "Video Content Education",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎬",
      imageUrl: "/projects/edukasi.jpg", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://drive.google.com/file/d/1ApyrPJBuX1MDkyADasbRFYQoViUPf05J/view?usp=drive_link", // 👈 Link ke website/demo
      codeLink: "#", // 👈 Link ke GitHub
    },
    {
      id: 9,
      title: "Carousel Promosi Digital",
      description:
        "Desain konten visual interaktif untuk kampanye media sosial, fokus pada alur informasi yang komunikatif dan estetika desain yang modern.",
      image: "🎯",
      imageUrl: "/projects/2.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["Design", "Canva"],
      link: "https://drive.google.com/open?id=1Mrr_F8zGZzowPz35zOAF1kEj99P7mK9G&usp=drive_copy",
      codeLink: "#",
    },
    {
      id: 10,
      title: "Carousel Promosi Digital",
      description:
        "Desain konten visual interaktif untuk kampanye media sosial, fokus pada alur informasi yang komunikatif dan estetika desain yang modern.",
      image: "🎯",
      imageUrl: "/projects/4.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["Design", "Canva"],
      link: "https://drive.google.com/file/d/1Yt9YGkz8ikzT-nWYN3MqYGu2zKiNHoLw/view?usp=drive_link",
      codeLink: "#",
    },
    {
      id: 11,
      title: "Video Content Bombastri",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎯",
      imageUrl: "/projects/bombastri.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://drive.google.com/file/d/1IgntZovzLmY6UHmjrce-Psf189cjjOFL/view?usp=drive_link",
      codeLink: "#",
    },
    {
      id: 12,
      title: "Video Content Imlek",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎯",
      imageUrl: "/projects/Imlek.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://www.instagram.com/reel/DU17ilrCTKJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      codeLink: "#",
    },
    {
      id: 13,
      title: "Video Content Umi",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎯",
      imageUrl: "/projects/umi.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://drive.google.com/file/d/1UtiB0_KLITRqhOEyF3hq81nWmSkj3Yis/view?usp=drive_link",
      codeLink: "#",
    },
    {
      id: 14,
      title: "Video Content Warisan",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎯",
      imageUrl: "/projects/warisan.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://drive.google.com/file/d/1742A7VThjkG5He1nvhprCgWz2737qscL/view?usp=drive_link",
      codeLink: "#",
    },
    {
      id: 15,
      title: "Video Content Eatbulaga",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎯",
      imageUrl: "/projects/eat bulaga.png", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://drive.google.com/file/d/1tUi9KjVVyKIbZceHwSGqdZCKYT-PxJeZ/view?usp=sharing",
      codeLink: "#",
    },
    {
      id: 16,
      title: "Video Content GRWM",
      description: "Produksi video marketing dengan editing profesional",
      image: "🎯",
      imageUrl: "/projects/grwm.jpg", // 👈 UBAH KE GAMBAR PROYEK ANDA
      tags: ["CapCut", "Video Editing", "Content Creation"],
      link: "https://drive.google.com/file/d/1N5jwAajHO32My6GczrQmbPuDS4fKQD9P/view?usp=drive_link",
      codeLink: "#",
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
