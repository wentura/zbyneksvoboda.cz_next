import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function PortfolioImpactSection({ content }) {
  if (!content) return null;

  const highlightMetrics = (text) => {
    const parts = text.split(/(\d+\s?%|\d+x|\d+\+)/gi);

    return parts.map((part, index) => {
      const isMetric = /^(\d+\s?%|\d+x|\d+\+)$/i.test(part);
      if (!isMetric) return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;

      return (
        <span key={`${part}-${index}`} className="font-semibold text-gray-900">
          {part}
        </span>
      );
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">{content.title}</h2>
        <p className="type-body-lg text-gray-700 max-w-4xl">
          {content.introOne}
        </p>
        <p className="type-body-lg text-gray-700 max-w-4xl mb-12">
          {content.introTwo}
        </p>

        <div className="space-y-16 md:space-y-24 divide-y divide-neutral-100">
          {content.items.map((item) => (
            <article key={item.name} className="grid grid-cols-1 md:grid-cols-3 pt-12 md:pt-16 gap-8">
              <div className="md:col-span-1">
                <h3 className="type-h2 text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="type-body-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: item.subtitle }} />

                <div className="w-full min-h-[200px] md:min-h-96 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                  {item.image ? (
                    <div
                      className="w-full min-h-[200px] md:min-h-96 max-h-[400px] overflow-hidden"
                      aria-label={`${item.name} náhled projektu`}
                      role="img"
                    >
                      <Image src={item.image} alt={item.name} width={600} height={400} className="w-full h-full object-cover" />
                      </div>
                  ) : (
                    <div className="w-full min-h-[200px] md:min-h-96 flex items-center justify-center type-meta text-gray-500">
                      Obrázek projektu doplníme
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 space-y-8 mt-8 md:mt-32">
                <div>
                  <h4 className="type-meta uppercase tracking-tight font-bold mb-1 text-gray-400">Kontext</h4>
                  <p className="type-body text-gray-900">{item.context}</p>
                </div>

                <div>
                  <h4 className="type-meta uppercase tracking-tight font-bold mb-1 text-gray-400">Výsledek</h4>
                  <ul className="space-y-2">
                    {item.results.map((result) => (
                      <li key={result} className="flex items-start type-body text-gray-700">
                        <span className="text-gray-400 ml-2 md:ml-4 mr-1 md:mr-2 font-bold">•</span>
                        <span>{highlightMetrics(result)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="type-meta uppercase tracking-tight font-bold mb-1 text-gray-400">Moje role</h4>
                  <p className="type-body text-gray-900">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link className="heroBtn uppercase tracking-wide" href="/#kontakt">
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
