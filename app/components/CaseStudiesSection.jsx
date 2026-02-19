// * Importy pro odkazy a React.
import Link from "next/link";
import Image from "next/image";
import React from "react";

// * Export sekce případových studií.
export default function CaseStudiesSection() {
  // * Lokální data případových studií.
  const caseStudies = [
    {
      title: "Autokemp Kokořín",
      tag: "Redesign webu",
      subtitle: "Od zastaralého webu k plné sezóně",
      problem: {
        title: "Co klient řešil",
        text: "Autokemp Kokořín měl zastaralý web, který se špatně zobrazoval na mobilu, byl nepřehledný a neodpovídal současnému standardu. Hosté na webu těžko hledali základní informace.",
      },
      solution: {
        title: "Co jsem udělal",
        text: [
          "navrhl jsem novou strukturu webu podle toho, co hosté nejčastěji hledají (ceny, fotky, možnosti ubytování, okolí)",
          "připravil jsem moderní responzivní web s důrazem na jednoduchost a rychlost",
          "zjednodušil jsem cestu k rezervaci a jasně oddělil sekce ubytování, služeb a kontaktů",
        ],
      },
      result: {
        title: "Výsledek",
        text: "Web, který působí důvěryhodně, je snadno použitelný na mobilu a lépe podporuje obsazenost kempu v sezóně.",
      },
      link: "https://www.autokempkokorin.cz/",
      image: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1728894623/zbyneksvoboda/portfolio2/autokempkokorin.webp",
    },
    {
      title: "KolemKrku",
      tag: "E-shop",
      subtitle: "E-shop, kde produkty konečně vyniknou",
      problem: {
        title: "Co klient řešil",
        text: "E-shop s ručně vyráběnými produkty na Shoptetu nedokázal na mobilu dobře odprezentovat produkty. Layout byl přeplácaný a zákazníci se hůř orientovali v kategoriích a produktech.",
      },
      solution: {
        title: "Co jsem udělal",
        text: [
          "upravil jsem strukturu kategorií a produktových stránek",
          "zjednodušil jsem zobrazení produktů s důrazem na fotky a jasný popis",
          "zlepšil jsem vizuální hierarchii informací a CTA prvků",
        ],
      },
      result: {
        title: "Výsledek",
        text: "Přehlednější e-shop, kde produkty vyniknou a zákazník se snáze dostane od úvodní stránky až k dokončení objednávky.",
      },
      link: "https://www.kolem-krku.cz/",
      image: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1728894625/zbyneksvoboda/portfolio2/kolemkrku.webp",
    },
    {
      title: "Zodpovědná výuka",
      tag: "Migrace na Shoptet",
      subtitle: "Bezpečný přesun na Shoptet",
      problem: {
        title: "Co klient řešil",
        text: "E-shop s výukovými materiály běžel na WordPressu/WooCommerce, byl technicky náročný na správu a čas od času nestabilní. Majitelka potřebovala řešení, které bude dlouhodobě udržovatelné a méně technicky náročné.",
      },
      solution: {
        title: "Co jsem udělal",
        text: [
          "navrhl jsem přechod na platformu Shoptet jako vhodnější řešení pro tento typ projektu",
          "pomohl jsem s migrací obsahu a nastavením struktury",
          "zaměřil jsem se na srozumitelnost pro rodiče a učitele a jednoduché dokončení nákupu",
        ],
      },
      result: {
        title: "Výsledek",
        text: "Stabilní e-shop, který šetří čas i nervy majitelce a je dobře použitelný pro cílovou skupinu.",
      },
      link: "https://www.zodpovednavyuka.cz/",
      image: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1728894627/zbyneksvoboda/portfolio2/zodpovednavyuka.webp",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white scroll-mt-24" id="pripadove-studie">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">
          Případové studie
        </h2>
        
        <div className="space-y-16 md:space-y-24 divide-y divide-neutral-100">
          {/* * Smyčka přes případové studie */}
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 pt-12 md:pt-16"
            >
              <div className="md:col-span-1">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 type-meta bg-neutral-100 text-gray-700 rounded">
                    {study.tag}
                  </span>
                </div>
                <h3 className="type-h2 mb-2 text-gray-900">
                  {study.title}
                </h3>
                <p className="type-body-lg text-gray-600 mb-6">
                  {study.subtitle}
                </p>
                <div className="px-4 md:px-16 w-full h-44 md:h-64 overflow-hidden">
                <Image src={study.image} alt={study.title} width={600} height={300} className="w-full h-full object-top object-cover" />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="type-h3 mb-3 text-gray-900">
                    {study.problem.title}
                  </h4>
                  <p className="type-body text-gray-700">
                    {study.problem.text}
                  </p>
                </div>
                
                <div>
                  <h4 className="type-h3 mb-3 text-gray-900">
                    {study.solution.title}
                  </h4>
                  <ul className="space-y-2">
                    {/* * Smyčka přes body řešení */}
                    {study.solution.text.map((item, idx) => (
                      <li key={idx} className="flex items-start type-body text-gray-700">
                        <span className="text-red-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="type-h3 mb-3 text-gray-900">
                    {study.result.title}
                  </h4>
                  <p className="type-body text-gray-700">
                    {study.result.text}
                  </p>
                </div>
                
                {/* * Odkaz na web pouze pokud existuje */}
                {study.link && study.link !== "#" && (
                  <div className="pt-4">
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="odkaz type-body"
                    >
                      Navštívit web →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="heroBtnSecondary">
            Více projektů
          </Link>
        </div>
      </div>
    </section>
  );
}

