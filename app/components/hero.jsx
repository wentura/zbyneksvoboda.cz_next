"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="min-h-[90vh] flex items-center py-16 md:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col">
            <h1 className="nadpisPage mb-6 md:mb-8">
              Weby, které mají strategii, strukturu a přinášejí výsledky.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
              Jsem Zbyněk Svoboda, webový konzultant a digitální stratég.  
              Pomáhám firmám mít web, který není jen vizitka – ale funkční nástroj pro získávání klientů.
            </p>
            <ul className="space-y-3 mb-8 text-base md:text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>od nápadu po měřitelný výsledek</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>UX, obsah, strategie i technologie v jednom</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>spolupráce s menšími a středními firmami, které chtějí růst</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="heroBtn"
              >
                Domluvit nezávaznou konzultaci
              </button>
              <Link
                href="/#pripadove-studie"
                className="heroBtnSecondary"
              >
                Podívat se na případové studie
              </Link>
            </div>
          </div>
          {/* Right: Photo or visual element */}
          <div className="hidden md:flex items-center justify-center">
            {/* Placeholder for photo - can be added later */}
            <div className="w-full max-w-md aspect-square bg-neutral-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Foto Zbyňka</span>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
