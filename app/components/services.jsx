import Link from "next/link";
import React from "react";
import { servicesData } from "../data/servicesData";
export default function Services() {
  return (
    <section
      className="py-20 mx-auto text-gray-300 bg-modra2 md:py-40"
      id="sluzby"
    >
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="flex flex-col flex-wrap py-6 mb-20">
          <h1 className="nadpisPageDark leading-snug sm:w-full text-center md:text-left">
            Web, který skutečně <span className="text-red-400">podporuje</span>{" "}
            váš byznys
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-16">
          <div className="text-xl leading-relaxed pb-4 font-light md:text-2xl text-center md:text-left">
            Tvořím weby, které z návštěvníků dělají{" "}
            <span className="text-red-400 font-bold">
              skutečné zákazníky
            </span>
            .
          </div>
          <div className="text-xl leading-relaxed md:text-2xl font-light text-center md:text-left">
            Rozumím technologiím, trendům i <span className="text-red-400 font-bold">kontextu 
            </span>.
          </div>
          <div className="text-xl leading-relaxed md:text-2xl font-light text-center md:text-left">
            Rozumím{" "}
            <span className="text-red-400 font-bold">
              vašim potřebám
            </span>
            , i potřebám vašich zákazníků.
          </div>
          <div className="text-xl leading-relaxed md:text-2xl font-light text-center md:text-left">
            Navrhuji digitální řešení, která skutečně{" "}
            <span className="text-red-400 font-bold">
              fungují
            </span>
            .
          </div></div>
          {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="pl-0 text-xl leading-relaxed">
              <strong>Stavím weby, které vám přinášejí klienty 24/7.</strong>
              <br />
              Specializuji se na freelancery a malé firmy, kteří potřebují web
              jako obchodní nástroj – ne jen vizitku.
              <div className="flex justify-center  md:hidden">
                <Link
                  href="/#kontakt"
                  className="my-12 ctaBtnSecondaryDark md:ml-4 text-base md:text-lg"
                >
                  Začněme tvořit
                </Link>
              </div>
            </div>

            <p className="pl-0 text-xl leading-relaxed pb-12">
              Každé řešení navrhuji s ohledem na vaše konkrétní obchodní cíle a
              cílovou skupinu.
              <br />
              Nedělám šablonové weby. Místo toho analyzuji, jak vaši klienti
              nakupují, kde vás hledají a co je přesvědčí k akci. Teprve pak
              navrhuji řešení, které skutečně funguje pro VÁŠE podnikání.
            </p>
            <ul className="pl-0 text-xl leading-relaxed pb-12 gap-y-3 flex flex-col">
              <li>Strategické konzultace s ohledem na vaše obchodní cíle</li>
              <li>Technická optimalizace pro rychlost a konverze</li>
              <li>Design, který vašim klientům usnadní rozhodování</li>
              <li>Integrace s vašimi obchodními systémy</li>
            </ul>
          </div> */}
        </div>
        {/* <div className="flex flex-wrap">
          {servicesData.map((service, index) => (
            <div className="flex md:w-1/2 pr-2 mb-10 md:mb-12" key={index}>
              <div className="flex-grow">
                <h2 className="mb-2 text-2xl md:text-3xl font-bold text-gray-400 underline underline-offset-[10px] decoration-gray-400">
                  {service.title}
                </h2>
                <p
                  className="text-base leading-relaxed pr-4 md:pr-12"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                <a className="inline-flex items-center mt-3 text-indigo-500">
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
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="mx-auto flex justify-center">
        <Link
          className="ctaBtnDarkSecondary bg-white text-modra2 hover:bg-white hover:text-modra2"
          href="/#kontakt"
        >
          {/* Kontaktujte mě */}
          Pojďme tvořit výsledky
        </Link>
      </div>
    </section>
  );
}
