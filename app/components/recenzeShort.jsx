import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecenzeShort() {
  const testimonials = [
    {
      name: "Běla Šestáková",
      project: "SvouCestou.info",
      text: "Skvělá spolupráce – vše bylo zapracováno k oboustranné spokojenosti, včetně rychlých úprav. Výsledek je kvalitní a profesionální. Moc děkujeme!",
    },
    {
      name: "Jakub Skála",
      project: "AutokempKokorin.cz",
      text: "Se spoluprací se Zbyňkem Svobodou jsme moc spokojeni. Stránky pro Autokemp Kokořín, které pro nás udělal, odpovídají aktuálnímu trendu a hosté na ně reagují velmi pozitivně.",
    },
    {
      name: "Kateřina Hrabíková",
      project: "Zodpovědná výuka",
      text: "Velmi jsem ocenila pečlivost a ochotu přizpůsobit se mým potřebám. Každý detail byl promyšlen a díky tomu teď mám web, který je plně funkční a snadno použitelný pro naše návštěvníky.",
    },
  ];

  const otherClients = [
    "Doomantia",
    "AntonieEmma",
    "Hexfit",
    "Kolem-krku",
    "Kokostezky",
    "Zoe8",
    "Zodpovědný Hub",
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
          Co o spolupráci říkají klienti
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          Spolupracuji s klienty, kteří očekávají kvalitu, spolehlivost a lidský přístup.  
          Takhle popisují naši spolupráci:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col"
            >
              <div className="mb-4">
                <p className="text-base leading-relaxed text-gray-700 mb-6">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-200">
                <p className="font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-base md:text-lg text-center text-gray-700 mb-6">
            Dlouhodobě spolupracuji mimo jiné s projekty jako{" "}
            {otherClients.map((client, index) => (
              <React.Fragment key={index}>
                {index > 0 && index < otherClients.length - 1 && ", "}
                {index === otherClients.length - 1 && " a "}
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
