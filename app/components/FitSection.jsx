import React from "react";

export default function FitSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left leading-tight">
          Pro koho jsem - <br className="md:hidden" /><span className="text-neutral-300 font-normal"><b>a pro koho ne</b></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pro koho jsem */}
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Pro koho jsem ideální partner?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  jednotlivci a firmy, které chtějí mít ve svém digitálu jasno
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  projekty, které berou web jako důležitý nástroj, ne nutnost
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  klienti, kteří ocení otevřenou komunikaci a upřímnou zpětnou vazbu
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  dlouhodobé spolupráce založené na důvěře
                </span>
              </li>
            </ul>
          </div>
          
          {/* Pro koho nejsem */}
          <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Pro koho nejsem:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  když je hlavním kritériem nejnižší cena
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  &quot;rychlý web do pátku&quot; bez cíle a zadání
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  zadání typu &quot;udělejte něco hezkého&quot;
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  projekty, které nechtějí přemýšlet o svém byznysu
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

