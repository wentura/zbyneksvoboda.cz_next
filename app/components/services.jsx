import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      id="sluzby"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
          S čím vám pomůžu
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          Tři hlavní pilíře, jak pomáhám firmám mít web, který skutečně funguje.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Service 1: UX & Web Consulting */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              UX & Web Consulting
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              Když potřebujete zjistit, proč váš web nefunguje – a co s tím.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Podívám se na váš web očima zákazníka i odborníka.  
              Analyzuji strukturu, obsah, navigaci, důvěryhodnost i technické řešení.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>jasně pojmenované problémy a příležitosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>konkrétní návrhy změn na webu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>doporučení k obsahu, UX a technické architektuře</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>jednoduchou roadmapu, co má smysl řešit jako první</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                od 5 000 Kč
              </p>
              <p className="text-sm text-gray-600">
                (podle rozsahu webu a hloubky analýzy)
              </p>
            </div>
          </div>
          
          {/* Service 2: Web Leadership */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Web Leadership
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              Dlouhodobé vedení webových projektů bez nutnosti mít vlastního &quot;webového šéfa&quot;.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Pokud máte více webů, e-shop, interní systém nebo rozjetý projekt, je snadné se ztratit v detailech.  
              V roli webového konzultanta / &quot;CTO na částečný úvazek&quot; pomáhám firmám držet směr a udržet weby funkční a rozvíjené.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>dlouhodobý dohled nad webem a souvisejícími projekty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>pomoc s výběrem dodavatelů a technologií</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>kontrolu kvality a směru vývoje</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>partnera, který rozumí byznysu i technické stránce věci</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                10–20 000 Kč měsíčně
              </p>
              <p className="text-sm text-gray-600">
                (podle rozsahu a očekávané role)
              </p>
            </div>
          </div>
          
          {/* Service 3: High-end web / redesign */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              High-end web / redesign
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              Když nechcete jen nový web, ale funkční systém pro prezentaci vaší firmy.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Navrhnu a zrealizuji web, který vychází z vašich cílů, dat a reálných potřeb vašich zákazníků.  
              Ne &quot;web za 15 tisíc&quot;, ale promyšlené řešení, na které se můžete spolehnout.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>jasné pozicování a strukturu webu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>návrh UX a obsahové kostry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>technické řešení postavené na moderních technologiích</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>web optimalizovaný pro rychlost, mobil a budoucí rozvoj</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                30–60 000 Kč
              </p>
              <p className="text-sm text-gray-600">
                (podle rozsahu a náročnosti projektu)
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link
            className="heroBtn"
            href="/#kontakt"
          >
            Chci toto řešení
          </Link>
        </div>
      </div>
    </section>
  );
}
