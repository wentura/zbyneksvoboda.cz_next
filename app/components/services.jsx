import Link from "next/link";
import SectionShell from "./SectionShell";

export default function Services({ content }) {
  return (
    <SectionShell id="sluzby" className="bg-brand-offwhite">
      <h2 className="type-h1 text-modra2 mb-4">{content.title}</h2>
      <p className="type-body-lg text-gray-700 mb-12 max-w-3xl">
        {content.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {content.items.map((service) => (
          <article
            key={service.slug}
            className="p-6 md:p-8 bg-white border border-neutral-200 flex flex-col"
          >
            <h3 className="type-h3 text-modra2 mb-3">{service.title}</h3>
            <p className="type-body text-gray-700 mb-3">
              <span className="font-semibold text-gray-900">Situace: </span>
              {service.situation}
            </p>
            <p className="type-body text-gray-700 mb-6">
              <span className="font-semibold text-gray-900">Výsledek: </span>
              {service.outcome}
            </p>
            <div className="mb-6 flex-grow">
              <p className="type-body font-semibold text-gray-900 mb-3">
                {content.gainTitle}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start type-body text-gray-700">
                    <span className="text-brand-green mr-2 shrink-0">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <Link
              href={service.detailHref}
              className="ctaBtnSecondaryLight w-full sm:w-auto text-center self-start"
            >
              {content.detailLinkLabel}
            </Link> */}
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href={content.ctaHref} className="ctaBtnSecondaryDark">
          {content.cta}
        </Link>
      </div>
    </SectionShell>
  );
}
