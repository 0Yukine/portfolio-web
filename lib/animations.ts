/**
 * lib/animations.ts
 * =================
 * File ini menyimpan utility functions untuk animasi Framer Motion
 * Fungsi: Menyediakan hook dan helper functions untuk animasi reusable di berbagai komponenMenggunakan Framer Motion untuk efek transisi halus dan sinematik
 */

import { useScroll, useTransform, useMotionTemplate } from "framer-motion";

/**
 * Hook untuk parallax effect dengan scroll
 * Gunakan untuk membuat elemen yang bergerak dengan kecepatan berbeda saat scroll
 */
export const useParallax = (offset: number = 50) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1000], [0, offset]);
};

/**
 * Animasi hover untuk button dan interactive elements
 * Memberikan efek transform saat hover
 */
export const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

/**
 * Animasi untuk card components
 * Memberikan efek shadow dan scale saat di-hover
 */
export const cardHoverVariants = {
  rest: {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.2)",
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

/**
 * Animasi untuk list items dengan stagger effect
 * Items akan muncul satu per satu dengan delay
 */
export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Animasi untuk section titles
 * Memberikan efek split letter / staggered text animation
 */
export const sectionTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/**
 * Animasi untuk modal atau overlay
 * Memberikan efek fade dan scale saat muncul
 */
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Animasi untuk fade in content
 * Sederhana namun efektif untuk content yang muncul
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
