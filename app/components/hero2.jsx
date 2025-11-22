"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "../components/ContactModal";
import RotatingTextComponent from "./RotatingText";
const kdoJsem = [
//   "full‑stack vývojář s marketingovým přesahem",
//   "web chápu jako nástroj růstu",
//   "od nápadu po měřitelný výsledek",
//   "minimum ozdob, maximum funkce",
//   "rychlost, přístupnost, měření a návratnost",
//   "tvůrce webů s přesahem",
// "*web*/designer", "*web*/developer", "*web*/konzultant"
"designer", "developer", "konzultant"
];

export default function Hero2() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="h-[100vh] flex xl:grid xl:grid-cols-5 xl:grid-rows-6 max-w-screen-3xl mx-auto ">
      <div className="sticky top-0 md:col-span-2 md:col-start-4 items-end bg-red-400  text-right row-span-2 hidden xl:block">
          <h1 className="xl:text-4xl 2xl:text-5xl font-black leading-tight tracking-[-0.03em] text-white sticky top-16 pr-16 pb-24">
            Zbyněk&nbsp;Svoboda
          </h1>
        </div>
        
        <div className="xl:col-span-3 xl:p-16 bg-blue-200 xl:row-span-4 xl:row-start-3 p-2 sm:p-8 md:p-16 flex flex-col h-full sm:block sm:h-auto items-center justify-center w-full">
        <h1 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-modra2 text-center sm:text-right xl:hidden pb-2 pt-8">
            Zbyněk&nbsp;Svoboda
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold leading-tight tracking-[-0.02em] text-modra2 text-center sm:text-left -space-y-3 flex flex-col items-center md:items-start">
            <div className="text-red-400">web</div>
            <RotatingTextComponent rotatingText={kdoJsem} />
          </h1>
          <p className="hidden md:block md:mt-16 mt-8 text-lg sm:text-xl md:text-2xl md:max-w-3xl leading-relaxed">
           Jsem webdesigner a vývojář webových aplikací s marketingovým přesahem. Web chápu jako
           nástroj růstu.<span className="hidden sm:block"><br /></span>{" "}Od nápadu po měřitelný výsledek.
          </p>
          <p className="block md:hidden md:mt-16 mt-8 text-lg sm:text-xl md:text-2xl md:max-w-2xl leading-relaxed text-center">
           Jsem webdesigner a vývojář webových aplikací s marketingovým přesahem. Web chápu jako
           nástroj růstu.
          </p>
          <p className="block md:hidden md:mt-16 mt-8 text-xl sm:text-2lx leading-relaxed text-center font-bold">Od nápadu po měřitelný výsledek.</p>
          <div className="my-8 flex gap-4 flex-col sm:flex-row">
            <button
              onClick={() => setModalOpen(true)}
              className="heroBtn"
            >
              Domluvme si nezávaznou konzultaci{" "}
              
            </button>
            {/* <Link
              href="/portfolio"
              
              className="heroBtnSecondary"
            >
              Portfolio projektů
            </Link> */}
          </div>
        </div>
        {/* <div className="col-span-1 md:self-end">
          <p className="text-sm text-black/60 font-medium">
            Zbyněk Svoboda je full‑stack vývojář s marketingovým přesahem. Web chápu jako nástroj růstu — od nápadu po měřitelný výsledek.
          </p>
        </div> */}
        
      
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
