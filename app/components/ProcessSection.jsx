import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Nezávazná konzultace (cca 30 minut)",
      description: "Seznámím se s vaším projektem, cíli a aktuálním stavem webu. Řekneme si, jestli a jak vám můžu pomoci.",
    },
    {
      number: "2",
      title: "Analýza a audit",
      description: "Podívám se na váš web, data (pokud jsou), konkurenci a cílové skupiny. V této fázi vznikají první konkrétní doporučení.",
    },
    {
      number: "3",
      title: "Návrh strategie a řešení",
      description: "Připravím návrh struktury, změn na webu a doporučení k obsahu a technologii. Výstupem je přehledný dokument, podle kterého se dá postupovat.",
    },
    {
      number: "4",
      title: "Realizace / vedení projektu",
      description: "Mohu řešení sám realizovat, nebo vést váš tým či externí dodavatele. Pomáhám držet kvalitu a směr projektu.",
    },
    {
      number: "5",
      title: "Ladění a měření výsledků",
      description: "Po spuštění se díváme na data, reakce uživatelů a reálné fungování webu. Podle toho děláme další úpravy.",
    },
    {
      number: "6",
      title: "Dlouhodobá podpora (volitelně)",
      description: "Pokud to dává smysl, pokračuji jako váš webový konzultant a pomáhám s dalším rozvojem.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
          Jak spolupráce probíhá
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          Každý projekt je jiný, ale osvědčil se mi následující postup:
        </p>
        
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-400 text-white flex items-center justify-center text-xl md:text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

