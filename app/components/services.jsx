import Link from "next/link";
import React from "react";
import { servicesData } from "./servicesData";
export default function Services() {
  return (
    <section
      className="py-20 mx-auto text-gray-300 bg-modra2 md:py-40"
      id="sluzby"
    >
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="flex flex-col flex-wrap py-6 mb-20 sm:flex-row">
          <h1 className="mb-2 nadpisPageDark leading-snug sm:w-full sm:mb-8">
            Potřebujete web, který skutečně podporuje váš byznys?
          </h1>
          <p className="pl-0 text-xl leading-relaxed">
            Vytvářím <strong>promyšlené digitální strategie</strong>, které
            nejsou jen o pěkném webu, ale o <strong>výsledcích</strong>. Pomohu
            vám{" "}
            <strong>
              najít nejlepší řešení pro váš produkt, službu nebo firmu
            </strong>{" "}
            – od návrhu webu po efektivní online prezentaci.
          </p>
          <p className="mt-12 pl-0 text-xl leading-relaxed">
            <strong>
              Kombinace technického know-how a strategického přístupu
            </strong>
          </p>
          <p className="mt-1 pl-0 text-xl leading-relaxed">
            Pomohu vám nejen s vývojem webu nebo e-shopu, ale také s celkovou
            strategií digitálního růstu. Každý projekt je jiný – ať už
            potřebujete <strong>komplexní redesign</strong>,{" "}
            <strong>optimalizaci výkonu</strong>, nebo{" "}
            <strong>strategické konzultace</strong>, společně najdeme{" "}
            <strong>řešení, které má smysl</strong>.
          </p>
        </div>
        <div className="flex flex-wrap">
          {servicesData.map((service, index) => (
            <div className="flex md:w-1/2 pr-2 mb-10 md:mb-12" key={index}>
              <div className="flex-grow">
                <h2 className="mb-2 text-2xl md:text-3xl font-bold text-gray-400 underline underline-offset-[10px] decoration-gray-400">
                  {service.title}
                </h2>
                {/* <p
                  className="text-base leading-relaxed pr-4 md:pr-12"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                /> */}

                {/* <a className="inline-flex items-center mt-3 text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container max-w-screen-xl px-5 mx-auto flex flex-col md:flex-row justify-between items-center mt-12 md:mt-24">
        <h2 className="nadpisPageDark2">
          {/* Potřebujete web, který skutečně podporuje váš byznys? */}
          {/* Máte projekt, který potřebuje správný směr? */}
          {/* Pojďme to probrat. */}
        </h2>
        <Link
          className="ctaBtnSecondaryDark mx-auto md:mx-0 py-6 px-12 h-8 justify-center items-center"
          href="/kontakt"
        >
          {/* Kontaktujte mě */}
          Pojďme to probrat.
        </Link>
      </div>
    </section>
  );
}
