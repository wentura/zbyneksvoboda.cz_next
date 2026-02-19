import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "Web funguje. Výsledky ne.",
    text: "Potřebujete jasně pojmenovat problém a vědět, co změnit.",
    gains: [
      "pojmenovaný problém",
      "konkrétní návrhy změn",
      "jasnou prioritu kroků",
    ],
  },
  {
    title: "Máte web. Chybí mu směr.",
    text: "Držím kontext, kvalitu a rozhodování napříč webem, e-shopem i interními systémy.",
    gains: [
      "jednoho partnera místo několika dodavatelů",
      "konzistentní rozhodování",
      "dlouhodobý dohled",
    ],
  },
  {
    title: "Potřebujete nový web. Ne jen další šablonu.",
    text: "Navrhnu řešení, které vychází z vašich cílů a reálného fungování firmy.",
    gains: [
      "promyšlenou strukturu",
      "jasné sdělení",
      "technicky stabilní základ",
    ],
  },
];

export default function CollaborationFitSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-4 text-left">Kdy má naše spolupráce smysl</h2>
        <p className="type-body-lg mb-12 text-gray-700 max-w-3xl">
          Typické situace, kde naše spolupráce přináší největší hodnotu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card) => (
            <article
              key={card.title}
              className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm"
            >
              <h3 className="type-h2 mb-4 text-gray-900">
                {card.title}
              </h3>
              <p className="type-body mb-6 text-gray-700">
                {card.text}
              </p>
              <p className="type-meta font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 type-meta text-gray-700">
                {card.gains.map((gain) => (
                  <li key={gain} className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{gain}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link className="heroBtn uppercase tracking-wide" href="/#kontakt">
            Chci probrat svůj projekt
          </Link>
        </div>
      </div>
    </section>
  );
}
