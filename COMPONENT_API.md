/\*\*

- COMPONENT API REFERENCE
- =====================
- Quick reference untuk setiap component dan cara menggunakannya
  \*/

// ============================================
// 📍 NAVBAR COMPONENT
// ============================================

// File: components/Navbar.tsx
// Props:
interface NavbarProps {
isDark: boolean; // Current dark mode state
setIsDark: (value: boolean) => void; // Function to toggle dark mode
}

// Export:
// export default function Navbar({ isDark, setIsDark }: NavbarProps)

// Features:
// ✓ Responsive navigation menu
// ✓ Dark mode toggle button
// ✓ Mobile hamburger menu
// ✓ Smooth scroll links
// ✓ Scroll detection for navbar styling

// Usage:
// <Navbar isDark={isDark} setIsDark={setIsDark} />

// ============================================
// 🎨 HERO COMPONENT
// ============================================

// File: components/Hero.tsx
// Props:
interface HeroProps {
isDark: boolean; // Current dark mode state
}

// Features:
// ✓ Animated greeting text
// ✓ Gradient name text
// ✓ Professional title & summary
// ✓ CTA buttons with animations
// ✓ Social media links
// ✓ Parallax background effects
// ✓ Scroll indicator

// Usage:
// <Hero isDark={isDark} />

// Data Used:
// - PORTFOLIO_DATA.personal
// - useParallax() animation hook

// ============================================
// ⚙️ SKILLS COMPONENT
// ============================================

// File: components/Skills.tsx
// Props:
interface SkillsProps {
isDark: boolean; // Current dark mode state
}

// Features:
// ✓ Soft skills card
// ✓ Hard skills card
// ✓ Card hover effects
// ✓ Staggered list animations
// ✓ Checkmark icons

// Usage:
// <Skills isDark={isDark} />

// Data Used:
// - PORTFOLIO_DATA.skills

// ============================================
// 📊 EXPERIENCE COMPONENT
// ============================================

// File: components/Experience.tsx
// Props:
interface ExperienceProps {
isDark: boolean; // Current dark mode state
}

// Features:
// ✓ Expandable timeline cards
// ✓ Accordion-style expand/collapse
// ✓ Company info & job description
// ✓ Smooth animations on expand
// ✓ Only one expanded at a time

// Usage:
// <Experience isDark={isDark} />

// Data Used:
// - PORTFOLIO_DATA.experience

// Internal State:
// - expandedId: Tracks which experience card is expanded

// ============================================
// 🚀 PROJECTS COMPONENT
// ============================================

// File: components/Projects.tsx
// Props:
interface ProjectsProps {
isDark: boolean; // Current dark mode state
}

// Features:
// ✓ Responsive grid layout (1-3 columns)
// ✓ Project cards with emoji/image
// ✓ Description text
// ✓ Technology tags/badges
// ✓ View & Code action buttons
// ✓ Hover lift animations

// Usage:
// <Projects isDark={isDark} />

// Data Used:
// - PORTFOLIO_DATA.projects

// ============================================
// 📧 CONTACT COMPONENT
// ============================================

// File: components/Contact.tsx
// Props:
interface ContactProps {
isDark: boolean; // Current dark mode state
}

// Features:
// ✓ Contact information display
// ✓ Contact form with validation
// ✓ Email, phone, location cards
// ✓ Form submission handling
// ✓ Loading state with spinner
// ✓ Success message on submit

// Usage:
// <Contact isDark={isDark} />

// Data Used:
// - PORTFOLIO_DATA.personal

// Internal State:
// - formData: { name, email, message }
// - isSubmitting: Boolean for submission state

// Form Fields:
// - Name (text input)
// - Email (email input)
// - Message (textarea)

// ============================================
// 👣 FOOTER COMPONENT
// ============================================

// File: components/Footer.tsx
// Props:
interface FooterProps {
isDark: boolean; // Current dark mode state
}

// Features:
// ✓ Brand info
// ✓ Quick navigation links
// ✓ Social media links
// ✓ Scroll to top button
// ✓ Copyright info
// ✓ Footer year auto-update

// Usage:
// <Footer isDark={isDark} />

// Data Used:
// - PORTFOLIO_DATA.personal

// ============================================
// 📚 LIB - UTILITIES & DATA
// ============================================

// ===== CONSTANTS (lib/constants.ts) =====
export const PORTFOLIO_DATA = {
personal: {
name: string;
title: string;
location: string;
email: string;
phone: string;
summary: string;
socials: {
github: string;
linkedin: string;
email: string;
};
};
skills: {
soft: string[];
hard: string[];
};
experience: Experience[];
projects: Project[];
};

export const ANIMATION_VARIANTS = {
containerVariants: MotionProps;
itemVariants: MotionProps;
fadeInVariants: MotionProps;
slideLeftVariants: MotionProps;
slideRightVariants: MotionProps;
scaleUpVariants: MotionProps;
};

// ===== ANIMATIONS (lib/animations.ts) =====

// useParallax(offset?: number)
// Hook untuk parallax scroll effect
// Usage: const yOffset = useParallax(50);
// Return: MotionValue yang bisa di-bind ke motion.div dengan style={{ y: yOffset }}

const buttonHoverVariants = {
hover: { scale: 1.05, transition: { duration: 0.3 } },
tap: { scale: 0.95 }
};

const cardHoverVariants = {
rest: { boxShadow: '...' },
hover: { boxShadow: '...', y: -8, transition: { duration: 0.3 } }
};

const listContainerVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const listItemVariants = {
hidden: { opacity: 0, x: -20 },
visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const sectionTitleVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const modalVariants = {
hidden: { opacity: 0, scale: 0.95 },
visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const fadeInVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { duration: 0.6 } }
};

// ===== TYPES (lib/types.ts) =====

interface PersonalInfo {
name: string;
title: string;
location: string;
email: string;
phone: string;
summary: string;
socials: { github: string; linkedin: string; email: string };
}

interface Skills {
soft: string[];
hard: string[];
}

interface Experience {
id: number;
company: string;
role: string;
period: string;
desc: string[];
}

interface Project {
id: number;
title: string;
description: string;
image: string;
tags: string[];
link: string;
}

interface PortfolioData {
personal: PersonalInfo;
skills: Skills;
experience: Experience[];
projects: Project[];
}

// ============================================
// 🏠 MAIN PAGE
// ============================================

// File: app/page.tsx
// This is where everything comes together!

// Features:
// ✓ Manages dark mode state
// ✓ Persists dark mode preference to localStorage
// ✓ Respects system color scheme preference
// ✓ Renders all sections in order
// ✓ Prevents hydration mismatch with isMounted check

// Section Order:
// 1. <Navbar /> - Navigation
// 2. <Hero /> - Landing/intro
// 3. <Skills /> - Skills display
// 4. <Experience /> - Work experience
// 5. <Projects /> - Projects showcase
// 6. <Contact /> - Contact form
// 7. <Footer /> - Footer

// Internal State:
// - isDark: Boolean for dark mode
// - isMounted: Boolean to prevent hydration mismatch

// ============================================
// 🎨 STYLING APPROACH
// ============================================

// All components use:
// 1. Tailwind CSS utility classes
// 2. 'dark:' prefix for dark mode styles
// 3. 'className' with conditional logic:
// className={`base-class ${isDark ? 'dark-class' : 'light-class'}`}

// Example:
// <div className={`//   px-4 py-2 rounded-lg transition-all
//   ${isDark
//     ? 'bg-slate-800 text-white hover:bg-slate-700'
//     : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//   }
//`}>

// ============================================
// 🎬 ANIMATION PATTERNS
// ============================================

// All animations use Framer Motion components:
// - motion.div, motion.a, motion.button, etc.

// Common Patterns:

// 1. Scroll-triggered Animation
// ---
// <motion.div
// initial="hidden"
// whileInView="visible"
// viewport={{ once: true, margin: "-100px" }}
// variants={itemVariants}
// >

// 2. Stagger Children Animation
// ---
// <motion.div
// variants={containerVariants}
// initial="hidden"
// whileInView="visible"
// >
// {items.map(item => (
// <motion.div key={item} variants={itemVariants}>
// {item}
// </motion.div>
// ))}
// </motion.div>

// 3. Hover Animation
// ---
// <motion.button
// variants={buttonHoverVariants}
// initial="rest"
// whileHover="hover"
// whileTap="tap"
// >

// 4. Parallax with Scroll
// ---
// const yOffset = useParallax(50);
// <motion.div style={{ y: yOffset }} />

// ============================================
// 📦 IMPORTS REFERENCE
// ============================================

// From React:
// import { useState, useEffect } from 'react';

// From Framer Motion:
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// From Lucide React (Icons):
// import { Menu, X, Moon, Sun, Github, Linkedin, Mail, ... } from 'lucide-react';

// From lib:
// import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from '@/lib/constants';
// import { useParallax, cardHoverVariants, ... } from '@/lib/animations';
// import type { Experience, Project, ... } from '@/lib/types';

// From components:
// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// ...
