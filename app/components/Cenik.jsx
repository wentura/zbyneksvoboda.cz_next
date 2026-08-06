import Link from "next/link";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Cenik({ content }) {
  return (
    <SectionShell id="cenik" className="bg-white">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-3xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-3xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-neutral-200">
          {content.pricing.map((item) => (
            <div
              key={item.title}
              className={`py-10 md:p-8 border-b border-neutral-200 lg:border-r lg:odd:border-r lg:[&:nth-child(3n)]:border-r-0 flex flex-col`}
            >
              <h3 className="type-h3 text-modra2 mb-3">{item.title}</h3>
              <p className="type-body text-neutral-700 mb-4 flex-grow">
                {item.description}
              </p>
              {item.note && (
                <p className="label-meta mb-4 normal-case tracking-normal font-medium">
                  {item.note}
                </p>
              )}
              <p className="type-body font-semibold text-modra2 mt-auto">
                {item.price}
              </p>
            </div>
          ))}

          <div className="p-2 py-10 md:p-8 border-b border-neutral-200 bg-brand-offwhite flex flex-col lg:col-span-1 ">
            <h3 className="type-h3 text-modra2 mb-3">
              {content.consultationCallout.title}
            </h3>
            <p className="type-body text-neutral-700 mb-8 flex-grow">
              {content.consultationCallout.body}
            </p>
            <Link
              href={content.consultationCallout.ctaHref}
              className="ctaBtnSecondaryDark mb-4 text-center self-start"
            >
              {content.consultationCallout.cta}
            </Link>
            <p className="type-body font-semibold text-modra2 mb-4">
              {content.consultationCallout.price}
            </p>
            {content.consultationCallout.disclaimer && (
              <p className="type-meta text-neutral-500">
                {content.consultationCallout.disclaimer}
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
