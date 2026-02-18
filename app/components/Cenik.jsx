// * Importy pro odkazy a React.
import Link from "next/link";
import React from "react";

// * Export sekce orientačního ceníku.
export default function Cenik({ content }) {
  // * Definice položek ceníku.
  const pricing = [
    {
      title: "Strategická webová konzultace",
      description: "Když potřebujete nadhled, jasno a konkrétní doporučení.",
      price: "od 5 000 Kč",
      note: "(podle rozsahu webu a hloubky analýzy)",
    },
    {
      title: "Webová režie a vedení",
      description: "Dlouhodobé vedení webových projektů bez nutnosti mít vlastního 'webového šéfa'.",
      price: "od 10 000 Kč",
      note: "(podle počtu projektů a očekávané role)",
    },
    {
      title: "High-end web / redesign",
      description: "Když nechcete jen nový web, ale funkční systém pro prezentaci firmy.",
      price: "od 30 000 Kč",
      note: "(podle rozsahu, funkcí a náročnosti projektu)",
    },
  ];

  return (
    <section
      id="cenik"
      className="py-16 md:py-24 bg-neutral-100"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          {content.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* * Smyčka přes položky ceníku */}
          {content.pricing.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed mb-6 text-gray-700">
                {item.description}
              </p>
              <div className="mt-auto pt-4 border-t border-neutral-200">
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-2 text-right">
                  {item.price}
                </p>
                <p className="text-xs text-gray-600 text-right">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
            Úvodní konzultace
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
            Abychom se lépe poznali, pochopil jsem váš záměr či projekt, nabízím vám úvodní konzultaci v délce 30 minut{" "}
            <strong className="text-gray-900">zdarma</strong>.
          </p>
          <Link href="/#kontakt" className="heroBtn inline-block w-full">
            Domluvit nezávaznou konzultaci
          </Link>
        </div>
      </div>
    </section>
  );
}
