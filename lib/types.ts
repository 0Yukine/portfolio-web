/**
 * lib/types.ts
 * ============
 * File ini mendefinisikan TypeScript types untuk seluruh aplikasi
 * Fungsi: Type safety dan autocompletion di seluruh project
 */

// Tipe untuk Info Pribadi
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  profileImage?: string; // 👈 Path ke foto profil Anda
  summary: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

// Tipe untuk Skills
export interface Skills {
  soft: string[];
  hard: string[];
}

// Tipe untuk Pengalaman
export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  desc: string[];
}

// Tipe untuk Project
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageUrl?: string; // 👈 Path ke gambar proyek Anda
  tags: string[];
  link: string; // 👈 Link ke website/demo
  codeLink?: string; // 👈 Link ke GitHub/source code
}

// Tipe untuk Portfolio Data
export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
}
