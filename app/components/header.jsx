import * as motion from "framer-motion/client";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-black/10">
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
    </header>
  );
}
