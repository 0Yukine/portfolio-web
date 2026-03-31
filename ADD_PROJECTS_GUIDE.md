/\*\*

- 📋 GUIDE MENAMBAH PROYEK BARU
- =============================
- Bagaimana cara menambah proyek lebih dari 3
  \*/

// ============================================================================
// CARA MENAMBAH PROYEK BARU
// ============================================================================

/\*

Sekarang portfolio punya 3 proyek. Ingin tambah lebih banyak?
Gampang! Ikuti langkah berikut:

\*/

// ============================================================================
// STEP 1: Prepare Project Image
// ============================================================================

/\*

1. Siapkan gambar/screenshot proyek Anda
2. Recommended size: 600x400px (16:9 ratio)
3. Format: JPG atau PNG
4. Copy ke: public/projects/project4.jpg
   (untuk proyek ke-4, atau project5.jpg untuk proyek ke-5, dst)

\*/

// ============================================================================
// STEP 2: Edit lib/constants.ts
// ============================================================================

/\*

Buka file: lib/constants.ts

Cari section projects, akan terlihat seperti ini:

projects: [
{
id: 1,
title: "Web Portfolio Interaktif",
description: "Portfolio modern dengan animasi halus menggunakan Framer Motion",
image: "🎨",
imageUrl: "/projects/project1.jpg",
tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
link: "#",
},
{
id: 2,
title: "Design System UI/UX",
description: "Sistem desain lengkap dengan Figma untuk konsistensi branding",
image: "🎭",
imageUrl: "/projects/project2.jpg",
tags: ["Figma", "UI/UX", "Design"],
link: "#",
},
{
id: 3,
title: "Video Content Production",
description: "Produksi video marketing dengan editing profesional",
image: "🎬",
imageUrl: "/projects/project3.jpg",
tags: ["CapCut", "Video Editing", "Content Creation"],
link: "#",
},
],

\*/

// ============================================================================
// STEP 3: TAMBAH PROYEK BARU - COPY PASTE TEMPLATE
// ============================================================================

/\*

Sekarang TAMBAH proyek baru setelah project ke-3, SEBELUM closing bracket ]

Template Proyek Baru:
────────────────────

    {
      id: 4,                           👈 Ubah id sesuai urutan
      title: "Nama Proyek Anda",       👈 Ubah judul
      description: "Deskripsi singkat", 👈 Ubah deskripsi (1-2 kalimat)
      image: "🎪",                     👈 Ubah emoji (opsional)
      imageUrl: "/projects/project4.jpg", 👈 Ubah path gambar
      tags: ["React", "Node.js"],      👈 Ubah teknologi
      link: "https://github.com/...",  👈 Ubah link
    },

PENTING: Jangan lupa tanda koma "," setelah closing brace }

CONTOH LENGKAP - Menambah Proyek ke-4 dan ke-5:
────────────────────────────────────────────────

projects: [
{ id: 1, ... },
{ id: 2, ... },
{ id: 3, ... },
{
id: 4,
title: "Mobile App Todo",
description: "Aplikasi todo list dengan React Native dan Firebase",
image: "📱",
imageUrl: "/projects/project4.jpg",
tags: ["React Native", "Firebase", "Async Storage"],
link: "https://github.com/username/todo-app",
},
{
id: 5,
title: "Landing Page Company",
description: "Website landing page company modern dengan Next.js",
image: "🌐",
imageUrl: "/projects/project5.jpg",
tags: ["Next.js", "Tailwind CSS", "Responsive"],
link: "https://company-landing.com",
},
],

\*/

// ============================================================================
// STEP 4: FIELDS PENJELASAN
// ============================================================================

/\*

FIELD YANG BISA DIUBAH:

id: Number - Nomor urut proyek. Harus unik!
Contoh: 4, 5, 6, 7, dst

title: String - Nama proyek Anda
Batasi 2-5 kata untuk cukup dalam card
Contoh: "E-Commerce Platform", "Task Manager App"

description: String - Deskripsi singkat (1-2 kalimat)
Jelaskan singkat apa itu proyek
Contoh: "Aplikasi e-commerce dengan pembayaran online"

image: Emoji - Ditampilkan jika imageUrl tidak ada
Pilih emoji yang relevan: - 🌐 Website/Landing page - 📱 Mobile app - 🛍️ E-commerce - 🎮 Game - 📊 Dashboard/Analytics - 📚 Educational - 🎵 Music/Media - 💼 Business/CMS

imageUrl: String - Path ke gambar proyek
Format: "/projects/namafile.jpg"
Pastikan file sudah di public/projects/

tags: Array - Teknologi yang digunakan
Format: ["Tech1", "Tech2", "Tech3", ...]
Contoh: ["React", "TypeScript", "Tailwind CSS"]

link: String - URL ke proyek
Format: "https://..."
Contoh: "https://github.com/username/project"
Bisa juga demo link atau portfolio link

\*/

// ============================================================================
// STEP 5: SAVE & TEST
// ============================================================================

/\*

Setelah menambah proyek baru:

1. Save file lib/constants.ts
2. Lihat di browser - halaman auto-refresh
3. Scroll ke Projects section
4. Proyek baru sudah muncul di grid!

\*/

// ============================================================================
// CONTOH VARIASI PROYEK
// ============================================================================

/\*

VARIASI 1: Web Developer Project
──────────────────────────────
{
id: 4,
title: "Inventory Management System",
description: "Dashboard manajemen inventory dengan real-time analytics dan export ke Excel",
image: "📊",
imageUrl: "/projects/inventory.jpg",
tags: ["React", "Node.js", "MongoDB", "Chart.js"],
link: "https://github.com/username/inventory-system",
}

VARIASI 2: Designer Project
────────────────────────────
{
id: 5,
title: "Mobile App UI Kit",
description: "Comprehensive UI kit untuk aplikasi mobile dengan 100+ components",
image: "🎨",
imageUrl: "/projects/uikit.jpg",
tags: ["Figma", "UI Design", "Component Library"],
link: "https://figma.com/...",
}

VARIASI 3: Content Creator Project
───────────────────────────────────
{
id: 6,
title: "YouTube Channel Branding",
description: "Complete branding package: intro, thumbnail, banner, dan 50+ video edits",
image: "🎬",
imageUrl: "/projects/youtube.jpg",
tags: ["CapCut", "Adobe Premiere", "Photoshop"],
link: "https://youtube.com/@username",
}

VARIASI 4: Freelance Project
─────────────────────────────
{
id: 7,
title: "Client Resume Website",
description: "Custom resume website dengan contact form dan smooth animations",
image: "👔",
imageUrl: "/projects/client-resume.jpg",
tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
link: "https://clientresume.com",
}

\*/

// ============================================================================
// TIPS & BEST PRACTICES
// ============================================================================

/\*

✓ TIPS:

1. ID harus unik dan sequential
   Jangan pakai id yang sudah ada
   Contoh: 1, 2, 3, 4, 5 (bukan 1, 2, 2, 3, 5)

2. Title ringkas
   Usahakan 2-5 kata saja
   Terlalu panjang akan terpotong atau wrap ke 2 baris

3. Tags yang sering digunakan
   ["React", "Next.js", "Tailwind CSS", "JavaScript",
   "TypeScript", "Node.js", "MongoDB", "Firebase",
   "Figma", "UI/UX Design", "CapCut", "Adobe Creative Suite"]

4. Link bisa ke berbagai tempat
   - GitHub repo: https://github.com/username/project
   - Demo website: https://project-demo.com
   - Portfolio link: https://myportfolio.com/project
   - LinkedIn post: https://linkedin.com/...

5. Untuk emoji
   Pilih yang representatif dengan proyek
   Jangan terlalu random

6. Description jangan terlalu panjang
   Max 2 kalimat, singkat dan padat
   Cukup jelaskan apa itu dan teknologi apa

\*/

// ============================================================================
// CHECKLIST TAMBAH PROYEK
// ============================================================================

/\*

□ Siapkan gambar proyek (600x400px recommended)
□ Copy ke public/projects/projectX.jpg
□ Buka lib/constants.ts
□ Copy template proyek baru
□ Ubah id sesuai urutan (id: 4, 5, 6, dst)
□ Ubah title dengan nama proyek Anda
□ Ubah description singkat
□ Ubah emoji yang relevan
□ Ubah imageUrl ke path gambar Anda
□ Ubah tags dengan teknologi yang digunakan
□ Ubah link ke URL proyek/GitHub Anda
□ Save file
□ Reload browser / tunggu auto-refresh
□ Cek di Projects section - proyek sudah tampil!

\*/

// ============================================================================
// BERAPA BANYAK PROYEK BISA DITAMBAH?
// ============================================================================

/\*

Tidak ada batasan! Anda bisa tambah sebanyak mungkin proyek.

Grid akan auto-responsive:

- Mobile: 1 kolom
- Tablet: 2 kolom
- Desktop: 3 kolom

Semakin banyak proyek, semakin banyak baris di halaman.

\*/
