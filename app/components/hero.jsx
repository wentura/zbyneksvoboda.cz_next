"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "../components/ContactModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10 py-16 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 md:min-h-[800px]">
        <div className="col-span-1 md:col-span-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-[-0.02em] text-modra2">
            Tvořím weby a aplikace, které vydělávají.
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed">
            Jsem full‑stack vývojář s marketingovým přesahem. Web chápu jako
            nástroj růstu — od nápadu po měřitelný výsledek.
          </p>
          <div className="mt-8 flex gap-4 flex-col sm:flex-row">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 sm:px-6 py-3 bg-modra2 text-white hover:opacity-90 font-bold text-sm sm:text-base"
            >
              Domluvme si nezávaznou konzultaci{" "}
              <span className="text-xs md:text-sm text-neutral-500 text-center block sm:inline">
                (30 min, online)
              </span>
            </button>
            <Link
              href="/portfolio"
              className="ctaBtnDarkSecondary text-center text-sm sm:text-base"
            >
              Portfolio projektů
            </Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 md:self-end">
          <p className="text-sm text-black/60 font-medium">
            Důraz na rychlost, přístupnost, měření a návratnost. Minimum ozdob,
            maximum funkce.
          </p>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
