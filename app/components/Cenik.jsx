import Link from "next/link";
import SectionShell from "./SectionShell";

export default function Cenik({ content }) {
  return (
    <SectionShell id="cenik" className="bg-white">
      <h2 className="type-h1 text-modra2 mb-4">{content.title}</h2>
      <p className="type-body-lg text-gray-700 mb-12 max-w-3xl">
        {content.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {content.pricing.map((item) => (
          <div
            key={item.title}
            className="p-6 md:p-8 border border-neutral-200 flex flex-col"
          >
            <h3 className="type-h3 text-modra2 mb-3">{item.title}</h3>
            <p className="type-body text-gray-700 mb-6 flex-grow">
              {item.description}
            </p>
            <p className="type-body font-semibold text-modra2 text-right">
              {item.price}
            </p>
          </div>
        ))}

        <div className="p-6 md:p-8 border border-neutral-200 flex flex-col bg-brand-offwhite md:col-span-2">
          <h3 className="type-h3 text-modra2 mb-3">
            {content.consultationCallout.title}
          </h3>
          <p className="type-body text-gray-700 mb-6 flex-grow">
            {content.consultationCallout.body}
          </p>
          <Link
            href={content.consultationCallout.ctaHref}
            className="ctaBtnSecondaryDark mb-4 text-center"
          >
            {content.consultationCallout.cta}
          </Link>
          <p className="type-body font-semibold text-modra2 text-right">
            {content.consultationCallout.price}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
