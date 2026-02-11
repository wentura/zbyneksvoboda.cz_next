// * Komponenta běží na klientu kvůli stavu modalu.
"use client";

/**
 * * Hero sekce - hlavní úvodní sekce homepage
 * * Zobrazuje hlavní nadpis, podnadpis, bulletpointy a CTA tlačítko
 * * Obsahuje také fotografii Zbyňka Svobody
 * * Používá ContactModal pro otevření kontaktního formuláře
 */
// * Importy pro navigaci, React state, modal a obrázek.
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "./ContactModal";
import Image from "next/image";

// * Export hlavní Hero komponentu.
export default function Hero() {
  // * State pro řízení otevření/zavření kontaktního modalu
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="min-h-[50vh] flex items-center py-8 md:py-16 lg:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
          {/* * Left: Text content */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1 min-h-[83vh] md:min-h-0 justify-between md:justify-start">
            <h1 className="nadpisPage mb-6 md:mb-8">
              Pomáhám firmám dělat lepší rozhodnutí v digitálu.
            </h1>
            {/* <p className="text-lg md:text-xl mb-8 text-gray-700 tracking-tight hidden md:block">
              Jsem digitální konzultant, stratég a vývojář.</p> */}
              
              <div><p className="text-2xl md:text-lg mb-4 text-gray-700 tracking-tight hidden">
              Pomáhám firmám ujasnit si směr, postavit funkční web a dlouhodobě ho rozvíjet tak, aby podporoval jejich byznys.
               {/* – ne ho brzdil. */}
            </p>
            {/* <p className="text-lg md:text-base mb-4 text-gray-700 tracking-tight">
              Web nevnímám jako vizitku.<br />
              Beru ho jako nástroj, který má jasný cíl, strukturu a měřitelný přínos.
            </p> */}
            <ul className="space-y-1.5 md:space-y-2 mb-8 text-base text-gray-700 tracking-tight">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>nejdřív směr, potom řešení</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>byznys, UX a technologie v jednom kontextu</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>spolupráce založená na důvěře a dlouhodobém partnerství</span>
              </li>
            </ul></div>
            {/* * CTA sekce s tlačítkem pro otevření kontaktního formuláře */}
            <div className="flex flex-col">
              <button
                onClick={() => setModalOpen(true)}
                className="heroBtn"
              >
                Domluvit nezávaznou konzultaci
              </button>
              <Link
                href="/#pripadove-studie"
                className="heroBtnSecondary text-right mt-4"
              >
                Podívat se na případové studie
              </Link>
            </div>
          </div>
          {/* * Right: Photo or visual element */}
          <div className="hidden md:flex items-center justify-center">
            {/* * Placeholder for photo - can be added later */}
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
      {/* * Kontaktní modal - otevře se při kliknutí na CTA tlačítko */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
