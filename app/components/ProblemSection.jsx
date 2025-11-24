import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
          Většina webů neprodává.<br />Ne proto, že špatně vypadají.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          Mnoho firem má web, který „nějak funguje“, ale reálně nepřináší nové klienty nebo poptávky.
          Problém většinou není v kódu nebo grafice, ale v tom, jak je web postavený.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="p-6 md:p-8 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Není jasné, co nabízíte
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Návštěvník během pár vteřin nepochopí, jestli jste pro něj ti praví. Ztrácí se a odejde.
            </p>
          </div>
          
          <div className="p-6 md:p-8 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Web mluví o vás, ne přínosech
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Texty jsou psané z vašeho pohledu, ne z pohledu člověka, který řeší konkrétní problém. 
            </p>
          </div>
          
          <div className="p-6 md:p-8 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Chybí struktura a logická cesta
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Uživatel neví, kam kliknout dál, kde začít a jak se dostat k poptávce / službě.
            </p>
          </div>
          
          <div className="p-6 md:p-8 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Nikdo neměří, co funguje
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Web žije vlastním životem. Změny se dělají pocitově, ne na základě dat a reálných zkušeností.
            </p>
          </div>
        </div>
        
        <p className="text-lg md:text-xl leading-relaxed text-center md:text-left text-gray-900 font-medium max-w-3xl">
          Moje práce začíná tam, kde klasická &quot;tvorba webů&quot; končí – u <strong>strategie, struktury a měřitelných výsledků</strong>.
        </p>
      </div>
    </section>
  );
}

