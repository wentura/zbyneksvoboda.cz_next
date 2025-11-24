import React from "react";

export default function FitSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
          Pro koho jsem – a pro koho ne
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Pro koho jsem */}
          <div className="p-6 md:p-8 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Pro koho jsem ideální partner:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro malé a střední firmy, které chtějí růst a berou web jako důležitý kanál
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro projekty, které chtějí promyšlený web, ne jen &quot;nějaké stránky&quot;
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro klienty, kteří ocení otevřenou komunikaci a upřímnou zpětnou vazbu
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro podnikatele, kteří chtějí dlouhodobý vztah, ne jednorázovou levnou zakázku
                </span>
              </li>
            </ul>
          </div>
          
          {/* Pro koho nejsem */}
          <div className="p-6 md:p-8 bg-red-50 rounded-2xl border border-red-200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Pro koho nejsem:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro projekty, kde je hlavním kritériem nejnižší cena
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro &quot;rychlý web do pátku&quot; bez jasného zadání a cíle
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro zadání typu &quot;udělejte něco hezkého, ono se to nějak použije&quot;
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">•</span>
                <span className="text-base md:text-lg leading-relaxed text-gray-700">
                  pro firmy, které nechtějí přemýšlet o svém byznysu a zákaznících
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

