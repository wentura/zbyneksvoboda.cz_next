// * Klientská komponenta kvůli animaci přechodu.
"use client";

// * Import framer-motion pro animace.
import { motion } from "framer-motion";

// * Export layout template s fade-in animací.
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
