/\*\*

- QUICK START GUIDE - Portfolio Next.js
- ====================================
- Panduan cepat untuk memulai dan memahami project
  \*/

// ============================================
// 1️⃣ INSTALASI & SETUP (10 menit)
// ============================================

/\*
Terminal Commands:

1. Install dependencies:
   npm install

2. Jalankan development server:
   npm run dev

3. Buka browser:
   http://localhost:3000

Done! Portfolio sudah berjalan.

\*/

// ============================================
// 2️⃣ STRUKTUR FILE DIJELASKAN
// ============================================

/\*

╔═══════════════════════════════════════════╗
║ FILE DIRECTORY STRUCTURE ║
╚═══════════════════════════════════════════╝

portofolio/
│
├── 📂 app/ ← Next.js Pages
│ ├── page.tsx ← HOME PAGE (Tempat semua components dikumpulkan)
│ ├── layout.tsx ← Root layout
│ └── globals.css ← Global styles
│
├── 📂 components/ ← React Components (Masing-masing punya fungsi berbeda)
│ ├── Navbar.tsx ← Menu navigasi + dark mode toggle
│ ├── Hero.tsx ← Landing/intro section
│ ├── Skills.tsx ← Tampil skill
│ ├── Experience.tsx ← Riwayat kerja
│ ├── Projects.tsx ← Portfolio projects
│ ├── Contact.tsx ← Form contact
│ └── Footer.tsx ← Footer bagian bawah
│
├── 📂 lib/ ← Utilities & Data
│ ├── constants.ts ← SEMUA DATA PORTFOLIO (nama, skill, experience, dll)
│ ├── types.ts ← TypeScript types
│ └── animations.ts ← Animation utilities untuk Framer Motion
│
├── 📄 Configuration Files
│ ├── package.json ← Dependencies
│ ├── tailwind.config.ts ← Tailwind CSS settings
│ ├── tsconfig.json ← TypeScript settings
│ ├── next.config.js ← Next.js settings
│ └── postcss.config.js ← PostCSS settings
│
└── 📄 Documentation
└── README.md ← Lengkap documentation

\*/

// ============================================
// 3️⃣ ALUR KERJA - BAGAIMANA SEMUANYA TERHUBUNG
// ============================================

/\*

FLOW (Alur):

1. User buka website
   ↓
2. Next.js load app/layout.tsx (Root layout + metadata)
   ↓
3. Next.js load app/page.tsx (Main page)
   ↓
4. page.tsx membaca dark mode state dari localStorage
   ↓
5. page.tsx render components dalam urutan:
   - <Navbar /> → Menu dan dark mode toggle
   - <Hero /> → Landing/intro
   - <Skills /> → Skills section
   - <Experience /> → Work experience
   - <Projects /> → Projects showcase
   - <Contact /> → Contact form
   - <Footer /> → Footer
     ↓
6. Setiap component:
   - Import data dari lib/constants.ts
   - Import animations dari lib/animations.ts
   - Render dengan Framer Motion untuk smooth animations
     ↓
7. Page sudah siap dengan dark mode, animations, responsive design

\*/

// ============================================
// 4️⃣ MENGUBAH DATA PORTFOLIO
// ============================================

/\*

LOKASI: lib/constants.ts

Bagian 1 - Personal Info:
───────────────────────────
export const PORTFOLIO_DATA = {
personal: {
name: "Mickael William", ← Ubah nama Anda
title: "...", ← Ubah title
email: "...", ← Ubah email
phone: "...", ← Ubah phone
location: "...", ← Ubah lokasi
// ...
}
}

Bagian 2 - Skills:
──────────────────
skills: {
soft: ["Communication", "Problem Solving", ...], ← Ubah soft skills
hard: ["React", "JavaScript", ...] ← Ubah hard skills
}

Bagian 3 - Experience:
──────────────────────
experience: [
{
id: 1,
company: "Company Name", ← Nama perusahaan
role: "Job Title", ← Posisi
period: "Jan 2024 - Mar 2024", ← Periode
desc: ["Task 1", "Task 2", ...] ← Daftar task
}
]

Bagian 4 - Projects:
────────────────────
projects: [
{
id: 1,
title: "Project Title",
description: "...",
image: "🎨", ← Emoji bisa dirubah
tags: ["React", "Next.js"],
link: "#"
}
]

\*/

// ============================================
// 5️⃣ SETIAP COMPONENT DIJELASKAN
// ============================================

/\*

┌────────────────────────────────────────────┐
│ Navbar.tsx (Navigation Bar) │
├────────────────────────────────────────────┤
│ ✓ Menu navigation (Home, Skills, etc) │
│ ✓ Dark mode toggle button │
│ ✓ Hamburger menu untuk mobile │
│ ✓ Smooth scroll ke section │
│ ✓ Logo dengan gradient │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ Hero.tsx (Landing/Intro Section) │
├────────────────────────────────────────────┤
│ ✓ Animated greeting text │
│ ✓ Nama dengan gradient color │
│ ✓ Professional title & summary │
│ ✓ CTA buttons (Get in Touch) │
│ ✓ Social media links │
│ ✓ Scroll indicator dengan bounce anim │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ Skills.tsx (Skills Display) │
├────────────────────────────────────────────┤
│ ✓ Soft Skills card │
│ ✓ Hard Skills card │
│ ✓ Hover effects dengan shadow │
│ ✓ Staggered list animation │
│ ✓ Icons dengan checkmark │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ Experience.tsx (Work Experience) │
├────────────────────────────────────────────┤
│ ✓ Expandable timeline cards │
│ ✓ Accordion-style reveal │
│ ✓ Company name & job title │
│ ✓ Period & job description │
│ ✓ Smooth expand/collapse anim │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ Projects.tsx (Portfolio Projects) │
├────────────────────────────────────────────┤
│ ✓ Grid layout (1-3 kolom) │
│ ✓ Project cards dengan emoji/image │
│ ✓ Description & tag badges │
│ ✓ View & Code buttons │
│ ✓ Hover lift animation │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ Contact.tsx (Contact Section) │
├────────────────────────────────────────────┤
│ ✓ Contact information (Email, Phone) │
│ ✓ Location display │
│ ✓ Contact form dengan validation │
│ ✓ Form submission handling │
│ ✓ Smooth focus animations │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ Footer.tsx (Footer) │
├────────────────────────────────────────────┤
│ ✓ Brand info │
│ ✓ Quick links navigation │
│ ✓ Social media links │
│ ✓ Scroll to top button │
│ ✓ Copyright info │
└────────────────────────────────────────────┘

\*/

// ============================================
// 6️⃣ ANIMASI - FRAMER MOTION
// ============================================

/\*

Lokasi: lib/animations.ts

Jenis-jenis Animations:

1. staggerChildren Animation
   └─ Items muncul satu per satu dengan delay

2. Parallax Effect
   └─ Background bergerak dengan scroll

3. Hover Effects
   └─ Scale, shadow, transform saat hover

4. Scroll-triggered Animation
   └─ Elements animate saat masuk viewport

5. List Animation
   └─ Items dalam list muncul bersamaan

Cara Menggunakan:
────────────────
import { cardHoverVariants, listItemVariants } from '@/lib/animations';

<motion.div
variants={cardHoverVariants}
initial="rest"
whileHover="hover"

> Content...
> </motion.div>

\*/

// ============================================
// 7️⃣ DARK MODE - BAGAIMANA KERJANYA
// ============================================

/\*

File: app/page.tsx

State Management:
─────────────────
const [isDark, setIsDark] = useState(false);

1. Initialize dari localStorage saat component mount:
   const savedDarkMode = localStorage.getItem('darkMode');

2. Fallback ke system preference jika tidak ada di localStorage:
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

3. Saat isDark berubah:
   - Simpan ke localStorage
   - Add/remove 'dark' class ke <html>
   - Tailwind CSS handle styling dengan 'dark:' prefix

4. Pass isDark ke semua components sebagai prop:
   <Navbar isDark={isDark} setIsDark={setIsDark} />
   <Hero isDark={isDark} />
   ...

Styling dengan Dark Mode:
─────────────────────────
className={`  ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}

\*/

// ============================================
// 8️⃣ RESPONSIVE DESIGN - MOBILE FRIENDLY
// ============================================

/\*

Breakpoints (dari Tailwind):
───────────────────────────

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

Contoh Penggunaan:
─────────────────

<div className="grid md:grid-cols-2 lg:grid-cols-3">
  └─ Mobile: 1 kolom
  └─ Tablet: 2 kolom
  └─ Desktop: 3 kolom

<div className="hidden md:flex">
  └─ Disembunyikan di mobile, tampil di tablet+

\*/

// ============================================
// 9️⃣ NPM SCRIPTS
// ============================================

/\*

npm run dev → Start development server (dengan hot reload)
npm run build → Build untuk production
npm run start → Run production build
npm run lint → Check code quality

\*/

// ============================================
// 🔟 TIPS & TRICKS
// ============================================

/\*

1. Update Portfolio Data:
   └─ Edit lib/constants.ts, save, auto-reload (hot reload)

2. Customize Colors:
   └─ Edit tailwind.config.ts
   └─ Gunakan 'dark:' prefix untuk dark mode colors

3. Add New Section:
   └─ Buat component baru di components/
   └─ Import di app/page.tsx
   └─ Add data di lib/constants.ts jika perlu

4. Test Dark Mode:
   └─ localStorage.clear() → Reset preferences
   └─ Then toggle dark mode button

5. Smooth Scrolling:
   └─ Already enabled: scroll-behavior: smooth di globals.css

6. Performance:
   └─ Use 'whileInView' untuk scroll-triggered animations
   └─ Use 'viewport={{ once: true }}' untuk animate only once

\*/
