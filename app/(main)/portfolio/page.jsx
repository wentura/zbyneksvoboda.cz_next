import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioPage() {
  // Projekty s case study - zobrazíme ve formátu podobném CaseStudiesSection
  // Zahrneme projekty, které mají caseStudy a nejsou explicitně označené jako hasCaseStudy: false
  const projectsWithCaseStudy = portfolioData.filter(
    (item) => item.caseStudy && item.hasCaseStudy !== false && item.slug
  );

  // Projekty bez case study - zobrazíme jednodušší formát
  const projectsWithoutCaseStudy = portfolioData.filter(
    (item) => !item.caseStudy || item.hasCaseStudy === false || !item.slug
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <h1 className="nadpisPage mb-6 md:mb-8 text-center md:text-left">
            Projekty & reference
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
            Každý web nebo e-shop, na kterém pracuji, má jasný cíl – ať už jde o
            lepší uživatelský zážitek, vyšší konverze, nebo technickou
            efektivitu. Podívejte se na vybrané projekty, kde se spojila
            technická preciznost s promyšlenou strategií.
          </p>

          {/* Projekty s case study - detailní formát */}
          {projectsWithCaseStudy.length > 0 && (
            <div className="space-y-16 md:space-y-24 mb-24">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
                Případové studie
              </h2>
              {projectsWithCaseStudy.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                >
                  {/* Levá strana - název, tag, obrázek */}
                  <div className="md:col-span-1">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-neutral-100 text-gray-700 rounded">
                        {item.caseStudy?.title || "Projekt"}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    {item.caseStudy?.subTitle && (
                      <p className="text-lg text-gray-600 mb-6">
                        {item.caseStudy.subTitle}
                      </p>
                    )}
                    {item.images && item.images[0] && (
                      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                        <Image
                          src={item.images[0].img}
                          alt={item.images[0].alt || item.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-auto"
                        />
                      </div>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="odkaz text-base"
                      >
                        Navštívit web →
                      </a>
                    )}
                  </div>

                  {/* Pravá strana - problém, řešení, výsledek */}
                  <div className="md:col-span-2 space-y-8">
                    {item.caseStudy?.studyTextLong && (
                      <div
                        className="text-base leading-relaxed text-gray-700 prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: item.caseStudy.studyTextLong,
                        }}
                      />
                    )}
                    {item.slug && (
                      <div className="pt-4 border-t border-neutral-200">
                        <Link
                          href={`/portfolio/pripadovaStudie/${item.slug}`}
                          className="odkaz text-base font-medium"
                        >
                          Zobrazit detailní případovou studii →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projekty bez case study - jednodušší grid */}
          {projectsWithoutCaseStudy.length > 0 && (
            <div>
              {/* <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
                Další projekty
              </h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {projectsWithoutCaseStudy.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {item.images && item.images[0] && (
                      <div className="overflow-hidden">
                        <Image
                          src={item.images[0].img}
                          alt={item.images[0].alt || item.title}
                          width={600}
                          height={400}
                          className="object-cover object-top w-full h-48 md:h-64"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                        {item.title}
                      </h3>
                      {item.shortDecs && (
                        <div
                          className="text-base leading-relaxed text-gray-700 mb-4 flex-grow"
                          dangerouslySetInnerHTML={{ __html: item.shortDecs }}
                        />
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="odkaz text-sm mt-auto"
                        >
                          {item.linkViewMore || "Navštívit web"} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA na konci */}
          <div className="mt-16 md:mt-24 p-8 md:p-12 bg-neutral-50 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Máte projekt, který byste chtěli realizovat?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-2xl mx-auto">
              Začněme spolupráci ještě dnes a posuňme vaše podnikání blíže
              klientům s moderním a funkčním webem.
            </p>
            <Link href="/#kontakt" className="heroBtn inline-block">
              Začít spolupráci
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
