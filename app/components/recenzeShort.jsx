// * Importy pro odkazy a React.
import Image from "next/image";
import Link from "next/link";
import React from "react";

// * Export zkrácené sekce recenzí na homepage.
export default function RecenzeShort() {
  // * Lokální seznam hlavních referencí.
  const testimonials = [
    {
      name: "Běla Šestáková",
      project: "SvouCestou.info",
      text: "Skvělá spolupráce – vše bylo zapracováno k oboustranné spokojenosti, včetně rychlých úprav. Výsledek je kvalitní a profesionální. Moc děkujeme!",
      fotka:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1754939908/zbyneksvoboda/portfolio2/recenze/bela.webp",
    },
    {
      name: "Jakub Skála",
      project: "AutokempKokorin.cz",
      text: "Se spoluprací se Zbyňkem Svobodou jsme moc spokojeni. Stránky pro Autokemp Kokořín, které pro nás udělal, odpovídají aktuálnímu trendu a hosté na ně reagují velmi pozitivně.",
      fotka:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1731687135/zbyneksvoboda/ref/jakub_skala.png.webp",
    },
    {
      name: "Kateřina Hrabíková",
      project: "Zodpovědná výuka",
      text: "Velmi jsem ocenila pečlivost a ochotu přizpůsobit se mým potřebám. Každý detail byl promyšlen a díky tomu teď mám web, který je plně funkční a snadno použitelný pro naše návštěvníky.",
      fotka:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1730489771/zbyneksvoboda/portfolio2/recenze/kaca.webp",
    },
  ];

  // * Seznam dalších klientů pro textovou řádku.
  const otherClients = [
    "Doomentia",
    "Ergo-product.cz",
    "UGHighers",
    "SvouCestou.info",
    "Letovisko Harasov",
    "Kokostezky",
    "Zodpovědná výuka",
    "Biozahájí",
    "Autokemp Kokořín",
    "Diavita","Nikola Smejkalová",
    
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">
          Co o spolupráci říkají klienti
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          Spolupracuji s klienty, kteří očekávají kvalitu, spolehlivost a lidský přístup.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* * Smyčka přes hlavní recenze */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col"
            >
              <div className="mb-4">
                <p className="text-base leading-relaxed text-gray-700 mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-200 flex flex-row items-center gap-2 justify-between">
                <div>
                <p className="font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.project}
                </p>
                </div>
                <Image
                  src={testimonial.fotka}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover object-center w-16 h-16 mr-1"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Dlouhodobě spolupracuji s {" "}
            {/* * Vypiš seznam klientů s čárkami a spojkou */}
            {otherClients.map((client, index) => (
              <React.Fragment key={index}>
                {/* * Přidej čárku mezi položkami */}
                {index > 0 && index < otherClients.length && ", "}
                {/* * Přidej spojku před poslední položku */}
                <strong>{client}</strong>
              </React.Fragment>
            ))}
            {" "}a dalšími.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link href="/recenze" className="odkaz text-base">
            více recenzí
          </Link>
        </div>
      </div>
    </section>
  );
}
