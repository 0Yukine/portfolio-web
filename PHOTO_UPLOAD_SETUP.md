# 📸 FITUR BARU: FOTO PROFIL & UPLOAD PROYEK

## ✨ Apa Yang Ditambahkan?

Saya sudah update portfolio Anda agar bisa:

1. ✅ **Menampilkan Foto Profil** (circular, di Hero section)
2. ✅ **Upload Gambar Proyek** (tangantikan emoji dengan foto asli)
3. ✅ **Tambah Proyek Baru** (unlimited, tidak hanya 3)

---

## 📁 Struktur Folder Baru

```
portofolio/
├── public/
│   ├── images/              ← FOLDER FOTO PROFIL
│   │   └── (Taruh foto profil di sini)
│   │
│   └── projects/            ← FOLDER GAMBAR PROYEK
│       ├── project1.jpg     ← Screenshot/gambar proyek 1
│       ├── project2.jpg     ← Screenshot/gambar proyek 2
│       └── project3.jpg     ← Screenshot/gambar proyek 3
│
└── (file lain)
```

---

## 🎬 LANGKAH 1: Upload Foto Profil

### Caranya:

**1. Siapkan Foto**

- Pakai foto profil Anda (JPG, PNG, atau WEBP)
- Recommended: 400x400px (square/persegi)
- Contoh: foto selfie, foto formal, atau avatar

**2. Copy ke Folder**

```
C:\Users\lenovo\Desktop\portofolio\public\images\
```

**3. Rename Jadi `profile.jpg`**

- Atau `profile.png` jika format PNG
- Harus tepat persis nama file-nya!

**4. Selesai!**

- Foto profil sudah otomatis muncul di Hero section
- Bentuk circular dengan status badge (green dot)
- Auto-animated saat page load

**Jika ingin ganti nama file:**

- Edit `lib/constants.ts`
- Cari: `profileImage: "/images/profile.jpg"`
- Ubah ke nama file baru Anda

---

## 🎨 LANGKAH 2: Upload Gambar Proyek

### Caranya:

**1. Siapkan Gambar Proyek**

- Screenshot atau mockup setiap proyek
- Recommended: 600x400px (16:9 ratio)
- Format: JPG atau PNG
- Bisa pakai screenshot, atau mockup design

**2. Copy ke Folder**

```
C:\Users\lenovo\Desktop\portofolio\public\projects\
```

**3. Rename File**
Sesuaikan dengan proyek:

- `project1.jpg` ← Web Portfolio Interaktif
- `project2.jpg` ← Design System UI/UX
- `project3.jpg` ← Video Content Production

**4. Selesai!**

- Gambar proyek sudah otomatis tampil di Projects section
- Hover effect: zoom in + shadow
- Mobile responsive

**Jika ingin ganti nama file:**

- Edit `lib/constants.ts`
- Cari setiap project:
  ```javascript
  imageUrl: "/projects/project1.jpg";
  ```
- Ubah ke nama file baru

---

## ✅ FILE YANG SUDAH DIUPDATE

### Modified Files:

1. **components/Hero.tsx**
   - ✅ Tambah profile image display
   - ✅ Circular frame dengan border
   - ✅ Status badge (green dot)
   - ✅ Fallback ke inisial jika gak ada foto

2. **components/Projects.tsx**
   - ✅ Support real images (selain emoji)
   - ✅ Image zoom on hover
   - ✅ Fallback ke emoji jika gak ada imageUrl

3. **lib/constants.ts**
   - ✅ Tambah field `profileImage`
   - ✅ Tambah field `imageUrl` di setiap project
   - ✅ Siap pakai dengan default paths

4. **lib/types.ts**
   - ✅ Tambah `profileImage?: string` di PersonalInfo
   - ✅ Tambah `imageUrl?: string` di Project

### New Guide Files:

- **UPLOAD_GUIDE.md** - Panduan detail upload foto
- **ADD_PROJECTS_GUIDE.md** - Cara tambah proyek baru

---

## 🚀 QUICK START

**Di Terminal:**

```powershell
npm run dev
```

**Buka Browser:**

```
http://localhost:3000
```

**Lihat Hasilnya:**

1. Hero section - akan muncul profile image circle (atau fallback ke "MW" jika belum diupload)
2. Projects section - akan tampil gambar proyek (atau emoji jika belum diupload)

---

## 📸 CONTOH HASIL

### Profile Image

```
┌─────────────────────────────┐
│                             │
│         ┌───────┐           │
│         │ PHOTO │ ← Circular
│         │  (MW) │   dengan badge
│         └───────┘           │
│                             │
│   Mickael William           │
│                             │
└─────────────────────────────┘
```

### Project Cards

```
┌──────────────────┐
│  ┌────────────┐  │
│  │   PHOTO    │  │  ← Image dengan hover zoom
│  └────────────┘  │
│                  │
│  Project Title   │
│  Description...  │
│  [React] [Node]  │  ← Tags
│  [View] [Code]   │  ← Buttons
└──────────────────┘
```

---

## 📝 CUSTOMIZE PROYEK

Anda juga bisa change:

- **Title** - Nama proyek
- **Description** - Deskripsi singkat (1-2 kalimat)
- **Tags** - Teknologi yang digunakan
- **Link** - URL ke GitHub/demo/portfolio

Edit di: `lib/constants.ts`

```javascript
{
  id: 1,
  title: "Web Portfolio Interaktif",     // 👈 Ubah
  description: "Portfolio modern...",     // 👈 Ubah
  image: "🎨",                            // 👈 Ubah emoji
  imageUrl: "/projects/project1.jpg",     // 👈 Path gambar
  tags: ["React", "Next.js"],            // 👈 Ubah teknologi
  link: "#",                              // 👈 Ubah URL
}
```

---

## ➕ TAMBAH PROYEK BARU

Tidak cuma 3 proyek! Anda bisa tambah sebanyak mungkin:

**Step 1:** Upload gambar ke `public/projects/project4.jpg`

**Step 2:** Edit `lib/constants.ts`, tambah di array `projects`:

```javascript
{
  id: 4,
  title: "Mobile App Todo",
  description: "Aplikasi todo dengan React Native",
  image: "📱",
  imageUrl: "/projects/project4.jpg",
  tags: ["React Native", "Firebase"],
  link: "https://github.com/...",
}
```

**Step 3:** Save - proyek baru otomatis muncul!

Lihat detail di: **ADD_PROJECTS_GUIDE.md**

---

## 🎯 CHECKLIST

Siap upload foto?

Foto Profil:

- [ ] Foto sudah di `public/images/profile.jpg`
- [ ] Format JPG atau PNG
- [ ] Size sekitar 400x400px (square)

Gambar Proyek:

- [ ] project1.jpg di `public/projects/`
- [ ] project2.jpg di `public/projects/`
- [ ] project3.jpg di `public/projects/`
- [ ] Format JPG atau PNG
- [ ] Size sekitar 600x400px (16:9)

Update Data (Opsional):

- [ ] Ubah project title jika perlu
- [ ] Ubah tags teknologi
- [ ] Ubah links ke GitHub/demo

---

## 📖 DOKUMENTASI LENGKAP

1. **UPLOAD_GUIDE.md**
   - Cara upload foto profil
   - Cara upload gambar proyek
   - Troubleshooting

2. **ADD_PROJECTS_GUIDE.md**
   - Template proyek baru
   - Field explanations
   - Contoh variasi proyek
   - Tips & best practices

---

## ❓ PERTANYAAN UMUM

**Q: Berapa ukuran foto yang ideal?**
A: Foto profil 400x400px, gambar proyek 600x400px. Flexible, bisa lebih besar.

**Q: Format apa yang support?**
A: JPG, PNG, WEBP. Rekomendasikan JPG atau PNG.

**Q: Bisa ganti emoji jika gak ada foto?**
A: Ya! Field `image` bisa isi emoji apa saja (🌐, 📱, 🎨, dll).

**Q: Gambar saya tidak muncul?**
A: Cek path di constants.ts harus sesuai nama file. Refresh browser.

**Q: Bisa tambah lebih dari 3 proyek?**
A: Ya! Bisa unlimited. Lihat `ADD_PROJECTS_GUIDE.md`.

---

## 🎉 Selesai!

Portfolio Anda sekarang punya:

- ✅ Foto profil circular dengan badge
- ✅ Gambar proyek dengan hover effect
- ✅ Bisa unlimited proyek
- ✅ Fully responsive & animated

**Sekarang upload foto Anda dan lihat hasilnya!** 📸

---

**Butuh bantuan?** Baca guide files lengkap di folder project! 😊
