import Link from "next/link";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Services({ content }) {
  return (
    <SectionShell id="sluzby" className="bg-brand-offwhite">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-3xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-3xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border-t border-neutral-200">
          {content.items.map((service) => (
            <article
              key={service.slug}
              className="py-10 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-l border-neutral-200 first:md:border-l-0"
            >
              <h3 className="type-h3 text-modra2 mb-4">{service.title}</h3>
              <p className="type-body text-neutral-700 mb-3">
                <span className="font-semibold text-modra2">Situace: </span>
                {service.situation}
              </p>
              <p className="type-body text-neutral-700 mb-8">
                <span className="font-semibold text-modra2">Výsledek: </span>
                {service.outcome}
              </p>
              <p className="label-meta mb-2">{content.gainTitle}</p>
              <ul className="space-y-0 mb-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="type-body text-neutral-700">
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* {service.detail?.priceHint && (
                <p className="type-body font-semibold text-modra2 pt-6 border-t border-neutral-200">
                  {service.detail.priceHint}
                </p>
              )} */}
            </article>
          ))}
        </div>

        {content.cta && (
          <div className="flex justify-start mt-14">
            <Link href={content.ctaHref} className="ctaBtnSecondaryDark">
              {content.cta}
            </Link>
          </div>
        )}
      </Reveal>
    </SectionShell>
  );
}
