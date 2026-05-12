// * Komponenta běží na klientu kvůli stavu modalu.
// "use client";

/**
 * * Hero sekce - hlavní úvodní sekce homepage
 * * Texty z copy.json přes props `content`.
 */
import Link from "next/link";
import Image from "next/image";

export default function Hero({ content }) {
  return (
    <section className="min-h-[95vh] md:min-h-[70vh] flex items-center py-8 md:py-16 lg:py-24 bg-modra2">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1 min-h-[50vh] md:min-h-0 justify-between md:justify-start">
            <h1 className="type-hero mb-6 md:mb-10 tracking-tight text-brand-offwhite">
              {content.title}
            </h1>

            <div className="mb-6 space-y-3">
              {content.leadParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="type-body-lg text-brand-offwhite tracking-tight max-w-2xl"
                >
                  {paragraph}
                </p>
              ))}
              {/* {content.accentParagraphs.map((paragraph, index) => (
                <p
                  key={`accent-${index}`}
                  className="type-body text-brand-offwhite tracking-tight max-w-2xl"
                >
                  {paragraph}
                </p>
              ))} */}
            </div>

            <div className="hidden flex items-center justify-center mb-12">
              <Image
                className="object-contain bg-white p-3 pb-4 mr-0 border border-brand-navy/10 drop-shadow-sm rotate-6 w-56 h-auto"
                alt={content.imageAlt}
                src="/ja.jpg"
                width={200}
                height={400}
              />
            </div>
            {/* <ul className="space-y-1.5 md:space-y-2 mb-8 type-body-lg text-gray-200 tracking-tight">
              {content.bulletpoints.map((bulletpoint, index) => (
                <li className="flex items-start" key={index}>
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>{bulletpoint}</span>
                </li>
              ))}
            </ul> */}
            <div className="flex flex-col">
              <Link
                href="/#kontakt"
              className="ctaBtnSecondaryDark uppercase tracking-wide text-center mx-auto w-full"
              >
                {content.cta}
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
          {/* <div className="flex items-center justify-center"> */}
            <Image
              className="object-contain md:bg-white md:p-3 md:pb-8 mr-0 border border-brand-navy/10 drop-shadow-sm rotate-6"
              alt={content.imageAlt}
              src="/ja.jpg"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
