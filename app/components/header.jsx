// * Klientská komponenta kvůli usePathname.
"use client";

/**
 * * Header komponenta - hlavní navigační lišta
 * * Sticky header s logem, navigací a CTA tlačítkem
 * * Používá Next.js usePathname pro detekci aktuální stránky
 */
// * Importy pro linky, routing a navigaci.
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Navigation from "./navigation";

// * Export Header komponenty s navigací a CTA.
export default function Header({ content_name }) {
  // * Získání aktuální cesty pro detekci landing page
  const pathname = usePathname();
  // * Kontrola, zda je aktuální stránka landing page
  const isLanding = content_name === "Zbyněk Svoboda" || pathname === "/";

  return (
    <header className="sticky top-0 z-30 bg-neutral-100/95 backdrop-blur border-b border-black/10 max-w-screen-full mx-auto w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link className="cursor-pointer" href="/">
          <span className="type-body-lg font-extrabold tracking-tight text-modra2">
            {content_name}
          </span>
        </Link>
        {/* * Navigační sekce s menu a CTA tlačítkem */}
        <div className="flex items-center gap-6">
          <Navigation />
          {/* * CTA tlačítko - zobrazuje se pouze na větších obrazovkách */}
          <Link
            href="#kontakt"
            className="hidden lg:inline-flex items-center px-3 py-1 border border-modra2 text-modra2 hover:bg-modra2 hover:text-white transition font-bold uppercase tracking-tight"
          >
            kontakt
          </Link>
        </div>
      </div>
    </header>
  );
}
