// * Komponenta běží na klientu kvůli stavu modalu.
// "use client";

/**
 * * Hero sekce - hlavní úvodní sekce homepage
 * * Zobrazuje hlavní nadpis, podnadpis, bulletpointy a CTA tlačítko
 * * Obsahuje také fotografii Zbyňka Svobody
 * * Používá ContactModal pro otevření kontaktního formuláře
 */
// * Importy pro navigaci, React state, modal a obrázek.
import Link from "next/link";
// import React, { useState } from "react";
// import ContactModal from "./ContactModal";
import Image from "next/image";

// * Export hlavní Hero komponentu.
export default function Hero({ content }) {
  // * State pro řízení otevření/zavření kontaktního modalu
  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="min-h-[70vh] flex items-center py-8 md:py-16 lg:py-24 bg-neutral-100">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
          {/* * Left: Text content */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1 min-h-[50vh] md:min-h-0 justify-between md:justify-start">
            <h1 className="type-hero mb-8 md:mb-16 tracking-tight text-modra2">
            Navrhuji weby a digitální systémy, které nahrazují <span className="text-red-800 font-thin">chaos</span> a podporují <span className="text-green-800 font-black underline font-extrabold decoration-[0.2em] decoration-green-800 underline-offset-[0.3em]">růst firmy</span>.
            {/* Pomáhám firmám proměnit web z <span className="text-red-600 font-thin">nákladové položky</span> na <span className="text-green-800 font-black underline font-extrabold decoration-[0.2em] decoration-green-800 underline-offset-[0.3em]">obchodní nástroj</span>. */}
            </h1>
            {/* <p className="text-lg md:text-xl mb-8 text-gray-700 tracking-tight hidden md:block">
              Jsem digitální konzultant, stratég a vývojář.</p> */}
              
              <div><p className="type-body-lg mb-4 text-gray-700 tracking-tight hidden">
              Pomáhám firmám ujasnit si směr, postavit funkční web a dlouhodobě ho rozvíjet tak, aby podporoval jejich byznys.
               {/* – ne ho brzdil. */}
            </p>
            {/* <p className="text-lg md:text-base mb-4 text-gray-700 tracking-tight">
              Web nevnímám jako vizitku.<br />
              Beru ho jako nástroj, který má jasný cíl, strukturu a měřitelný přínos.
            </p> */}
            <div className="hidden flex items-center justify-center mb-12">
            <Image
                  className="object-contain bg-white p-3 pb-4 mr-0 border-2 border-gray-200 drop-shadow-sm rotate-6 w-56 h-auto"
                  alt="Zbyněk Svoboda, já"
                  src="/ja.jpg"
                  width={200}
                  height={400}
                />
                </div>
            <ul className="space-y-1.5 md:space-y-2 mb-8 type-body-lg text-gray-700 tracking-tight">
              {content.bulletpoints.map((bulletpoint, index) => (
                <li className="flex items-start" key={index}>
                <span className="text-green-800 font-bold mr-2">•</span>
                <span>{bulletpoint}</span>
              </li>
              ))}
            </ul></div>
            
            {/* * CTA sekce s tlačítkem pro otevření kontaktního formuláře */}
            <div className="flex flex-col">
              {/* <button
                onClick={() => setModalOpen(true)}
                className="heroBtn"
              >
                Domluvit nezávaznou konzultaci
              </button> */}
              <Link
                href="/#kontakt"
                className="heroBtn uppercase tracking-wide"
              >
                {content.cta}
              </Link>
              {/* <Link
                href="/#pripadove-studie"
                className="heroBtnSecondary text-right mt-4"
              >
                Podívat se na případové studie
              </Link> */}
            </div>
          </div>
          {/* * Right: Photo or visual element */}
          <div className="hidden md:flex items-center justify-center">
          {/* <div className="flex items-center justify-center"> */}
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
      {/* <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}
    </section>
  );
}
