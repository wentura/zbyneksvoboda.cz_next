"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "./ContactModal";
import Image from "next/image";
export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="min-h-[50vh] flex items-center py-8 md:py-16 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col">
            <h1 className="nadpisPage mb-6 md:mb-8">
              Weby, které mají strategii, strukturu a přinášejí výsledky.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 tracking-tight">
              Jsem Zbyněk Svoboda,<br />webový konzultant, digitální stratég a vývojář.</p>
              <p className="text-lg md:text-xl mb-8 text-gray-700 tracking-tight">
              Pomáhám firmám mít web, který není jen vizitka - ale funkční nástroj pro získávání klientů.
            </p>
            <ul className="space-y-1.5 md:space-y-2 mb-8 text-base md:text-lg text-gray-700 tracking-tight">
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
            <div className="flex flex-col">
              <button
                onClick={() => setModalOpen(true)}
                className="heroBtn"
              >
                Domluvit nezávaznou konzultaci
              </button>
              {/* <Link
                href="/#pripadove-studie"
                className="heroBtnSecondary text-right mt-4"
              >
                Podívat se na případové studie
              </Link> */}
            </div>
          </div>
          {/* Right: Photo or visual element */}
          <div className="hidden md:flex items-center justify-center">
            {/* Placeholder for photo - can be added later */}
            <Image
                  className="object-contain bg-white p-3 pb-8 mr-0 border-2 border-gray-200 drop-shadow-sm md:rotate-6"
                  alt="Zbyněk Svoboda, já"
                  src="/ja.jpg"
                  width={400}
                  height={600}
                />
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
