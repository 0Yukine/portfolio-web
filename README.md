# 🎨 Modern Portfolio Website

## Mickael William's Digital Portfolio

Portfolio website modern dengan React, Next.js, Tailwind CSS, dan Framer Motion dengan animasi halus dan responsif.

---

## 📁 Struktur Project

```
portofolio/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Layout utama aplikasi
│   ├── page.tsx                   # Halaman utama (HOME PAGE)
│   ├── globals.css                # Global styles & Tailwind imports
│   └── favicon.ico
│
├── components/                    # React Components
│   ├── Navbar.tsx                 # Navigation bar dengan dark mode toggle
│   ├── Hero.tsx                   # Hero section / landing intro
│   ├── Skills.tsx                 # Skills section (Soft & Hard skills)
│   ├── Experience.tsx             # Work experience dengan timeline
│   ├── Projects.tsx               # Project portfolio showcase
│   ├── Contact.tsx                # Contact form & contact info
│   └── Footer.tsx                 # Footer dengan social links
│
├── lib/                           # Utility & Configuration
│   ├── constants.ts               # Data portfolio dan animation variants
│   ├── types.ts                   # TypeScript interfaces & types
│   └── animations.ts              # Framer Motion animation utilities
│
├── public/                        # Static assets (images, icons)
│
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── next.config.js                 # Next.js configuration
└── README.md                      # Dokumentasi project (file ini)
```

---

## 🎯 Penjelasan Setiap File

### **app/page.tsx** (MAIN PAGE - Entry Point)

**Fungsi:** Halaman utama yang mengintegrasikan semua components

- State management untuk dark mode
- Menyimpan preferensi dark mode ke localStorage
- Mengumpulkan semua section: Navbar → Hero → Skills → Experience → Projects → Contact → Footer

### **components/Navbar.tsx**

**Fungsi:** Navigation bar / header dengan fitur:

- Responsive menu (hamburger untuk mobile)
- Dark mode toggle button
- Smooth scroll navigation
- Logo dengan gradient

### **components/Hero.tsx**

**Fungsi:** Landing section yang menampilkan:

- Animated greeting text dengan stagger effect
- Nama dengan gradient text
- Professional title & summary
- CTA buttons dengan hover animations
- Social media links
- Scroll indicator dengan bounce animation

### **components/Skills.tsx**

**Fungsi:** Menampilkan skill dalam 2 kategori:

- **Soft Skills:** Communication, Problem Solving, Creative
- **Hard Skills:** Tools & technologies yang dikuasai
- Card hover effects dengan shadow animation
- Staggered list animation

### **components/Experience.tsx**

**Fungsi:** Riwayat pekerjaan dengan:

- Expandable timeline cards
- Accordion-style reveal untuk job descriptions
- Smooth expand/collapse animation
- Multiple experience entries

### **components/Projects.tsx**

**Fungsi:** Portfolio project showcase dengan:

- Grid layout (responsive 1-3 kolom)
- Project cards dengan image placeholder & emoji
- Tag badges untuk technologies
- Action buttons (View & Code)
- Hover lift animation

### **components/Contact.tsx**

**Fungsi:** Contact section dengan:

- Contact information display (Email, Phone, Location)
- Contact form dengan validation
- Form submission handling
- Smooth focus animations

### **components/Footer.tsx**

**Fungsi:** Footer dengan:

- Brand info & quick links
- Social media links
- Scroll to top button dengan smooth animation
- Copyright info

### **lib/constants.ts**

**Fungsi:** Menyimpan semua data:

- Personal information
- Skills (soft & hard)
- Work experience
- Projects
- Pre-defined animation variants untuk Framer Motion

### **lib/types.ts**

**Fungsi:** TypeScript interfaces untuk type safety:

- PersonalInfo
- Skills
- Experience
- Project
- PortfolioData

### **lib/animations.ts**

**Fungsi:** Reusable Framer Motion animations & hooks:

- `useParallax()`: Hook untuk parallax scroll effect
- `buttonHoverVariants`: Hover animation untuk buttons
- `cardHoverVariants`: Hover shadow effect untuk cards
- `listContainerVariants & listItemVariants`: Stagger animation
- `modalVariants`: Fade & scale animation

### **app/globals.css**

**Fungsi:** Global CSS styles:

- Tailwind CSS imports (@tailwind directives)
- Custom animations (@keyframes)
- Scrollbar styling
- Dark mode utilities
- Selection & focus styles

### **tailwind.config.ts**

**Fungsi:** Tailwind CSS configuration:

- Content paths setup
- Custom theme colors & extensions
- Animation configs
- Dark mode setup

---

## 🚀 Installation & Setup

### 1. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Server akan berjalan di `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Fitur Utama

### ✨ Animasi Framer Motion

- **Stagger Animation:** Items muncul satu per satu dengan delay
- **Parallax Effect:** Background bergerak dengan scroll
- **Hover Effects:** Smooth scale, shadow, dan transform transitions
- **Scroll-triggered Animation:** Elements animate saat scroll ke viewport

### 🌙 Dark Mode Support

- Toggle button di navbar
- Persistent preference di localStorage
- Respects system color scheme preference
- Smooth transition antar mode

### 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Hamburger menu untuk mobile
- Adaptive grid layouts

### ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus visible outlines

---

## 📝 Cara Menggunakan

### Update Data Portfolio

Edit `lib/constants.ts`:

```typescript
export const PORTFOLIO_DATA = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... update sesuai kebutuhan
  },
  skills: {
    /* ... */
  },
  experience: [
    /* ... */
  ],
  projects: [
    /* ... */
  ],
};
```

### Customize Colors & Animations

Edit `tailwind.config.ts` untuk colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
    },
  },
}
```

Edit `lib/animations.ts` untuk customize animations.

### Add New Sections

1. Buat component baru di `components/`
2. Import di `app/page.tsx`
3. Add section data di `lib/constants.ts` jika diperlukan

---

## 🔗 Koneksi Antar Components

```
app/page.tsx (Main)
    ↓
├── Navbar ← Dark mode state
├── Hero ← Portfolio data, animations
├── Skills ← Skills data dari constants
├── Experience ← Experience data
├── Projects ← Projects data
├── Contact ← Contact data
└── Footer ← Personal info
    ↑
    └─ Semua import data dari lib/constants.ts
    └─ Semua use animations dari lib/animations.ts
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** npm/yarn/pnpm

---

## 📦 Dependencies

```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "next": "^14.0.0",
  "framer-motion": "^10.16.0",
  "lucide-react": "^0.292.0",
  "tailwindcss": "^3.3.0"
}
```

---

## 🎓 Konsep & Pembelajaran

### Component Komposisi

- Small, reusable components
- Props drilling untuk data passing
- Clear separation of concerns

### State Management

- React hooks (useState, useEffect)
- localStorage untuk persistence
- Context API ready (bisa di-extend)

### Animation Best Practices

- Use `whileInView` untuk scroll-triggered animations
- Optimize dengan `initial`, `animate`, `exit` states
- Stagger untuk sequential animations

### TypeScript Benefits

- Type safety across components
- IntelliSense & autocomplete
- Catch errors at compile time

---

## 🚨 Troubleshooting

### Dark Mode tidak working

- Clear localStorage: `localStorage.clear()`
- Restart dev server

### Animations tidak smooth

- Update Framer Motion: `npm install framer-motion@latest`
- Check GPU acceleration di browser

### Tailwind styles tidak apply

- Restart server setelah update `tailwind.config.ts`
- Clear next cache: `rm -rf .next`

---

## 📞 Contact

- Email: williammcikael05@gmail.com
- Phone: 087820023322
- Location: Semarang, Jawa Tengah

---

## 📄 License

© 2026 Mickael William. All rights reserved.

---

**Built with ❤️ using React, Next.js, Tailwind CSS & Framer Motion**
