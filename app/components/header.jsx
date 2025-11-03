"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Navigation from "./navigation";

export default function Header({kde}) {
  const pathname = usePathname();
  const isLanding = kde === "landing" || pathname === "/";
  const [isMobile, setIsMobile] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint in Tailwind
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isLanding && isMobile) {
      // Calculate opacity based on scroll position
      // At half screen (typically 50vh = ~400px for common viewport), opacity should be 100%
      const halfScreen = window.innerHeight / 2;
      const newOpacity = Math.min(latest / halfScreen, 1);
      setOpacity(newOpacity);
    }
  });

  return (
    <motion.header 
      className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-black/10 max-w-screen-full mx-auto w-full"
      animate={{ opacity: isLanding && isMobile ? opacity : 1 }}
      transition={{ 
        duration: 0.5
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link className="cursor-pointer" href="/">
          <span className="text-base md:text-2xl font-extrabold tracking-tight text-modra2">
            Zbyněk Svoboda
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Navigation />
          <Link
            href="#kontakt"
            className="hidden md:inline-flex items-center px-4 py-2 border border-modra2 text-modra2 hover:bg-modra2 hover:text-white transition font-bold"
          >
            Konzultace
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
