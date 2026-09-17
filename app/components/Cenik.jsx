import Link from "next/link";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Cenik({ content }) {
  return (
    <SectionShell id="cenik" className="bg-brand-offwhite">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-4xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-4xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-neutral-200">
          {content.pricing.map((item) => (
            <div
              key={item.title}
              className={`py-10 md:p-8 border-b border-neutral-200 lg:border-r lg:[&:nth-child(3n)]:border-r-0 flex flex-col ${
                item.highlight ? "bg-modra2 text-brand-offwhite" : ""
              }`}
            >
              {item.note ? (
                <p
                  className={`label-meta mb-3 ${
                    item.highlight ? "text-brand-offwhite/60" : ""
                  }`}
                >
                  {item.note}
                </p>
              ) : null}
              <h3
                className={`type-h3 mb-3 ${
                  item.highlight ? "text-brand-offwhite" : "text-modra2"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`type-body mb-4 flex-grow ${
                  item.highlight ? "text-brand-offwhite/80" : "text-neutral-700"
                }`}
              >
                {item.description}
              </p>
              <p
                className={`type-body font-semibold mt-auto ${
                  item.highlight ? "text-brand-offwhite" : "text-modra2"
                }`}
              >
                {item.price}
              </p>
            </div>
          ))}

          <div className="py-10 md:p-8 border-b border-neutral-200 flex flex-col md:col-span-2 lg:col-span-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="flex flex-col flex-grow min-w-0">
              <p className="label-meta mb-3">
                {content.consultationCallout.price}
              </p>
              <h3 className="type-h3 text-modra2 mb-3">
                {content.consultationCallout.title}
              </h3>
              <p className="type-body text-neutral-700 mb-8 md:mb-0 max-w-3xl">
                {content.consultationCallout.body}
              </p>
            </div>
            <Link
              href={content.consultationCallout.ctaHref}
              className="ctaBtnSecondaryLight text-center self-start md:self-end shrink-0"
            >
              {content.consultationCallout.cta}
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
