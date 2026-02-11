// * Importy pro odkazy a React.
import Link from "next/link";
import React from "react";

// * Export sekce služeb se třemi pilíři.
export default function Services() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      id="sluzby"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
          S čím vám pomohu
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          Tři hlavní pilíře, jak pomáhám s digitálními řešeními, které fungují.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* * Service 1: Strategická webová konzultace */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Strategická webová konzultace
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              Když potřebujete nadhled, jasno a konkrétní doporučení.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Podívám se na váš web očima zákazníka i odborníka.
              Analyzuji strukturu, obsah, UX, důvěryhodnost i technické řešení – a pojmenuji, co dává smysl zlepšit.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>jasně pojmenované problémy a příležitosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>konkrétní návrhy změn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>doporučení k obsahu, UX a technické architektuře</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>srozumitelnou roadmapu dalších kroků</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <Link href="/#kontakt" className="odkaz text-sm">
                Chci tuto službu →
              </Link>
            </div>
            {/* <div className="mt-auto pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                od 5 000 Kč
              </p>
              <p className="text-sm text-gray-600">
                (podle rozsahu webu a hloubky analýzy)
              </p>
            </div> */}
          </div>
          
          {/* * Service 2: Web Leadership */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Webová režie a vedení
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              Dlouhodobé vedení webových projektů bez nutnosti mít vlastního &quot;webového šéfa&quot;.
            </p>
            <p className="text-base leading-relaxed mb-4 text-gray-600 font-medium">
              Jsem partner pro firmy, které nechtějí web řešit operativně, ale strategicky.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Pomáhám držet směr, kvalitu a souvislosti napříč webem, e-shopem nebo interními systémy.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>dlouhodobý dohled nad webem a digitálními projekty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>pomoc s výběrem dodavatelů a technologií</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>kontrolu kvality a smysluplnosti řešení</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>partnera, který rozumí byznysu i technické stránce věci</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <Link href="/#kontakt" className="odkaz text-sm">
                Chci tuto službu →
              </Link>
            </div>
            {/* <div className="mt-auto pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                od 10 000 Kč měsíčně
              </p>
              <p className="text-sm text-gray-600">
                (podle rozsahu a očekávané role)
              </p>
            </div> */}
          </div>
          
          {/* * Service 3: High-end web / redesign */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              High-end web / redesign
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              Když nechcete jen nový web, ale funkční systém pro prezentaci firmy.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Navrhnu a zrealizuji web, který vychází z vašich cílů, dat a reálných potřeb zákazníků.
              Vhodné pro firmy, které chtějí web jako stabilní součást svého podnikání – ne jednorázový projekt.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>jasné pozicování a strukturu webu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>promyšlený UX návrh a obsahovou kostru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>moderní technické řešení připravené na další rozvoj</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>web optimalizovaný pro rychlost, mobil a dlouhodobou udržitelnost</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <Link href="/#kontakt" className="odkaz text-sm">
                Chci tuto službu →
              </Link>
            </div>
            {/* <div className="mt-auto pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                od 30 000 Kč
              </p>
              <p className="text-sm text-gray-600">
                (podle rozsahu a náročnosti projektu)
              </p>
            </div> */}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link
            className="heroBtn"
            href="/#kontakt"
          >
            Chci spolupracovat
          </Link>
        </div>
      </div>
    </section>
  );
}
