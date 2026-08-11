import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SafeHtml from "../../components/SafeHtml";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Případové studie a projekty – Zbyněk Svoboda",
  description:
    "Výběr projektů a případových studií. Portály, interní systémy a weby s provozním dopadem.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const featured = portfolioData.filter(
    (item) => item.hasCaseStudy === true || item.frontpage === true,
  );
  const archive = portfolioData.filter(
    (item) => item.hasCaseStudy !== true && item.frontpage !== true,
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <Reveal>
            <h1 className="type-h1 text-modra2 mb-4 max-w-4xl">
              Projekty &amp; reference
            </h1>
            <p className="type-body-lg mb-16 text-neutral-700 max-w-4xl">
              Vybrané projekty, kde šlo o provoz, data nebo proces — ne jen o
              novou vizitku. U každého je vidět, jaký problém firma řešila a jaký
              dopad spolupráce přinesla.
            </p>
          </Reveal>

          {featured.length > 0 && (
            <div className="mb-20 md:mb-28">
              <h2 className="label-meta text-modra2 mb-10">
                Případové studie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {featured.map((item, index) => (
                  <article
                    key={item.slug || item.title}
                    className="reveal group flex flex-col"
                    style={
                      index ? { animationDelay: `${index * 0.08}s` } : undefined
                    }
                  >
                    {item.images?.[0] && (
                      <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden mb-6">
                        <Image
                          src={item.images[0].img}
                          alt={item.images[0].alt || item.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <h3 className="type-h3 text-modra2 mb-4">{item.title}</h3>
                    {item.shortDecs && (
                      <SafeHtml
                        html={item.shortDecs}
                        className="type-body text-neutral-700 mb-6 flex-grow"
                      />
                    )}
                    <div className="pt-5 border-t border-neutral-200 flex flex-wrap gap-x-6 gap-y-2 mt-auto">
                      {item.slug && item.hasCaseStudy && (
                        <Link
                          href={`/portfolio/pripadovaStudie/${item.slug}`}
                          className="odkaz type-body font-medium text-modra2"
                        >
                          Detailní studie
                        </Link>
                      )}
                      {item.link && item.link !== "#" && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="odkaz type-body text-neutral-600"
                        >
                          {item.linkViewMore || "Navštívit web"}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {archive.length > 0 && (
            <div className="border-t border-neutral-200 pt-16 md:pt-20">
              <h2 className="label-meta mb-10">Další projekty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-neutral-200">
                {archive.map((item) => (
                  <article
                    key={item.slug || item.title}
                    className="py-10 md:p-8 border-b border-neutral-200 lg:border-r lg:[&:nth-child(3n)]:border-r-0 flex flex-col"
                  >
                    {item.images?.[0] && (
                      <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden mb-6">
                        <Image
                          src={item.images[0].img}
                          alt={item.images[0].alt || item.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <h3 className="type-h3 text-modra2 mb-3">{item.title}</h3>
                    {item.shortDecs && (
                      <SafeHtml
                        html={item.shortDecs}
                        className="type-body text-neutral-700 mb-6 flex-grow"
                      />
                    )}
                    {item.link && item.link !== "#" && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="odkaz type-meta mt-auto text-modra2"
                      >
                        {item.linkViewMore || "Navštívit web"}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="mt-20 md:mt-28 pt-12 md:pt-16 border-t border-neutral-200">
            <h2 className="type-h2 text-modra2 mb-4 max-w-2xl">
              Řešíte web, portál nebo chaos v datech a procesech?
            </h2>
            <p className="type-body-lg text-neutral-700 mb-8 max-w-2xl">
              Nejdřív ověříme, kde digitál brzdí obchod nebo provoz — a jestli
              dává smysl web, automatizace konkrétního procesu, nebo interní
              systém. Nemusíte mít jasno předem.
            </p>
            <Link href="/#kontakt" className="ctaBtnSecondaryDark inline-flex">
              Probrat konkrétní problém
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
