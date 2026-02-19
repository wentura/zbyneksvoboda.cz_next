// * Import React pro komponentu procesu.
import React from "react";

// * Export sekce procesu spolupráce.
export default function ProcessSection({ content }) {
  // * Definice kroků spolupráce.
  const steps = [
    {
      number: "1",
      title: "Krátká nezávazná konzultace",
      description: "Seznámíme se, ujasníme cíle a očekávání.",
    },
    {
      number: "2",
      title: "Analýza a audit",
      description: "Web, data, konkurence, cílové skupiny.",
    },
    {
      number: "3",
      title: "Návrh strategie a řešení",
      description: "Přehledný plán, podle kterého se dá rozhodovat i postupovat.",
    },
    {
      number: "4",
      title: "Realizace nebo vedení projektu",
      description: "Buď řešení realizuji, nebo vedu váš tým / dodavatele.",
    },
    {
      number: "5",
      title: "Ladění a měření výsledků",
      description: "Práce s daty, chováním uživatelů a reálným fungováním webu.",
    },
    {
      number: "6",
      title: "Dlouhodobá spolupráce (volitelně)",
      description: "Pokud dává smysl, pokračujeme dál.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">
          {content.title}
        </h2>
        <p className="type-body mb-4 text-gray-700 max-w-3xl">
            Spolupráci beru jako dialog.
        </p>
        <p className="type-body mb-12 text-gray-700 max-w-3xl">
          {content.description2}
        </p>
        
        <div className="space-y-6 md:space-y-8">
          {/* * Smyčka přes jednotlivé kroky */}
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-row gap-6 md:gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-400 text-white flex items-center justify-center type-body font-semibold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="type-h3 mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="type-body text-gray-700">
                  {step.description}
                </p>
                <p className="type-body text-gray-700">
                  <span className="font-bold"> Výstup: </span>{step.output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
