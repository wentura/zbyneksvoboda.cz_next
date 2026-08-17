import Link from "next/link";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Services({ content }) {
  return (
    <SectionShell id="sluzby" className="bg-brand-offwhite">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-4xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-4xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 border-t border-neutral-200">
          {content.items.map((service) => (
            <article
              key={service.slug}
              className="py-10 md:py-12 md:px-8 border-b md:border-b-1 border-neutral-200 md:border-l md:[&:nth-child(2n+1)]:border-l-0 lg:border-l lg:[&:nth-child(4n+1)]:border-l-0"
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
              <ul className="space-y-0 mb-6">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="type-body text-neutral-700">
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* {service.detailHref ? (
                <Link href={service.detailHref} className="odkaz type-body">
                  {content.detailLinkLabel}
                </Link>
              ) : null} */}
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
