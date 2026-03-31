/\*\*

- 📸 PANDUAN UPLOAD FOTO PROFIL & PROYEK
- ======================================
- Bagaimana cara menambahkan foto profil dan gambar proyek Anda
  \*/

// ============================================================================
// 1️⃣ UPLOAD FOTO PROFIL
// ============================================================================

/\*
STEP 1: Persiapkan Foto Profil Anda
────────────────────────────────────

- Siapkan foto profil Anda (JPG, PNG, atau format gambar lain)
- Recommended size: 400x400px atau lebih
- Harus square/berbentuk persegi

STEP 2: Copy Foto ke Folder Project
────────────────────────────────────
Letak folder: public/images/

Caranya:

1. Buka File Explorer
2. Navigate ke: C:\Users\lenovo\Desktop\portofolio\public\images\
3. Copy/paste foto profil Anda ke folder ini
4. Rename foto jadi: profile.jpg (atau profile.png)

Result:
c:\Users\lenovo\Desktop\portofolio\public\images\profile.jpg

STEP 3: Update lib/constants.ts
────────────────────────────────
Buka file: lib/constants.ts

Cari bagian:
personal: {
name: "Mickael William",
...
profileImage: "/images/profile.jpg", 👈 SUDAH OTOMATIS

Yang perlu Anda ubah:

- Jika foto Anda bernama berbeda (bukan profile.jpg),
  ubah nama file di sini
- Contoh: profileImage: "/images/foto-saya.jpg"

STEP 4: Selesai!
────────────────

- Reload browser (atau server auto-reload)
- Foto profil akan muncul di Hero section dengan circular frame
- Ada status badge hijau (online indicator) di pojok kanan bawah

📝 CATATAN:

- Path harus dimulai dengan "/" (dari folder public)
- Format: /images/nama-file-Anda.jpg
- Jika pakai format PNG: /images/profile.png
- Foto akan otomatis circular crop

\*/

// ============================================================================
// 2️⃣ UPLOAD GAMBAR PROYEK
// ============================================================================

/\*
STEP 1: Persiapkan Gambar Proyek
─────────────────────────────────

- Siapkan gambar/screenshot setiap proyek Anda
- Recommended size: 600x400px (16:9 ratio)
- Format: JPG, PNG, atau WEBP

STEP 2: Copy Gambar ke Folder Project
──────────────────────────────────────
Letak folder: public/projects/

Caranya:

1. Buka File Explorer
2. Navigate ke: C:\Users\lenovo\Desktop\portofolio\public\projects\
3. Copy/paste gambar proyek Anda ke folder ini
4. Rename sesuai proyek:
   - project1.jpg (untuk Web Portfolio)
   - project2.jpg (untuk Design System)
   - project3.jpg (untuk Video Production)

Result:
public/projects/project1.jpg
public/projects/project2.jpg
public/projects/project3.jpg

STEP 3: Update lib/constants.ts
────────────────────────────────
Buka file: lib/constants.ts

Cari bagian projects:
{
id: 1,
title: "Web Portfolio Interaktif",
...
imageUrl: "/projects/project1.jpg", 👈 SUDAH OTOMATIS
...
}

Yang sudah otomatis:

- imageUrl sudah point ke /projects/project1.jpg
- Jika nama file berbeda, ubah di sini
- Contoh: imageUrl: "/projects/portfolio-saya.jpg"

STEP 4: Customize Proyek (Optional)
────────────────────────────────────
Anda juga bisa ubah:

- title: Nama proyek
- description: Deskripsi singkat
- tags: Teknologi yang digunakan
- link: URL ke proyek (GitHub, demo, dll)

Contoh lengkap:
{
id: 1,
title: "E-Commerce Website", 👈 Ubah title
description: "Toko online responsive dengan payment gateway",
image: "🛍️", 👈 Bisa ubah emoji jika gak ada foto
imageUrl: "/projects/ecommerce.jpg", 👈 Path ke gambar Anda
tags: ["React", "Node.js", "MongoDB"],
link: "https://github.com/...", 👈 Link proyek Anda
}

STEP 5: Tambah Proyek Baru
──────────────────────────
Jika ingin tambah proyek baru:

1. Copy struktur project existing
2. Ubah id (misal dari 3 menjadi 4)
3. Ubah title, description, tags, link
4. Tambahkan foto ke public/projects/
5. Set imageUrl ke path foto baru
6. Save - otomatis muncul di halaman!

STEP 6: Selesai!
────────────────

- Reload browser (atau server auto-reload)
- Gambar proyek akan muncul dengan hover zoom effect
- Click "View" atau "Code" button untuk buka link

📝 CATATAN:

- Path harus dimulai dengan "/" (dari folder public)
- Format: /projects/nama-file-Anda.jpg
- Jika proyek gak ada foto, emoji tetap ditampilkan
- Hover effect auto-zoom image
- Responsive untuk mobile

\*/

// ============================================================================
// 🎨 STRUKTUR FOLDE SEKARANG
// ============================================================================

/\*
portofolio/
├── public/
│ ├── images/
│ │ └── profile.jpg 👈 FOTO PROFIL ANDA
│ └── projects/
│ ├── project1.jpg 👈 GAMBAR PROYEK 1
│ ├── project2.jpg 👈 GAMBAR PROYEK 2
│ └── project3.jpg 👈 GAMBAR PROYEK 3
│
├── lib/
│ └── constants.ts 👈 UPDATE PATH GAMBAR DI SINI
│
└── ... (file lain)

\*/

// ============================================================================
// 📋 CHECKLIST
// ============================================================================

/\*
✓ Checklist Setup Foto:

Foto Profil:
□ Foto sudah di public/images/profile.jpg
□ Sudah update profileImage di lib/constants.ts (jika nama berbeda)
□ Reload halaman - foto sudah tampil circular

Gambar Proyek:
□ project1.jpg ada di public/projects/
□ project2.jpg ada di public/projects/
□ project3.jpg ada di public/projects/
□ Sudah update imageUrl di lib/constants.ts (jika nama berbeda)
□ Reload halaman - gambar proyek sudah tampil

Optional:
□ Ubah project title, description, tags
□ Ubah project links (GitHub, demo)
□ Tambah proyek baru (jika perlu)
□ Resize gambar ke ukuran recommended

\*/

// ============================================================================
// 🚀 QUICK REFERENCE
// ============================================================================

/\*

Foto Profil:

- Folder: public/images/
- File: profile.jpg
- Update di: lib/constants.ts → personal.profileImage

Gambar Proyek:

- Folder: public/projects/
- Files: project1.jpg, project2.jpg, project3.jpg
- Update di: lib/constants.ts → projects[].imageUrl

Reload:

- Next.js auto-reload saat save file
- Atau refresh browser manual

Path Format:

- Selalu dimulai dengan "/"
- Contoh: /images/profile.jpg
- Contoh: /projects/project1.jpg

\*/

// ============================================================================
// ❓ TROUBLESHOOTING
// ============================================================================

/\*

❌ Foto tidak tampil?
✓ Cek path di constants.ts - harus sesuai nama file
✓ Cek folder sudah benar - public/images/ dan public/projects/
✓ Refresh browser (Ctrl + R atau Cmd + R)
✓ Cek file extension - .jpg atau .png?

❌ Gambar muncul kecil/blurry?
✓ Resize gambar ke size yang recommended
✓ Gunakan format JPG atau PNG berkualitas tinggi

❌ Gambar proyek hilang?
✓ Cek imageUrl di constants.ts - persis sesuai nama file?
✓ Cek folder public/projects/ - file sudah ada?
✓ Jika gak ada imageUrl, emoji akan ditampilkan (itu normal)

\*/
