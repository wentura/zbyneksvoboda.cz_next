import Link from "next/link";

export default function ServiceDetailPage({ service }) {
  const { detail } = service;

  return (
    <article className="py-12 md:py-16">
      <p className="type-meta text-brand-accent mb-4">
        <Link href="/#sluzby" className="hover:underline">
          Služby
        </Link>
        {" / "}
        {service.title}
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-modra2 mb-6 max-w-3xl">
        {service.title}
      </h1>

      <p className="type-body-lg text-gray-700 mb-8 max-w-3xl">{detail.intro}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl">
        <div>
          <h2 className="type-h3 text-modra2 mb-3">Typická situace</h2>
          <p className="type-body text-gray-700">{service.situation}</p>
        </div>
        <div>
          <h2 className="type-h3 text-modra2 mb-3">Co z toho máte</h2>
          <p className="type-body text-gray-700">{service.outcome}</p>
        </div>
      </div>

      <div className="mb-12 max-w-3xl">
        <h2 className="type-h3 text-modra2 mb-3">Pro koho</h2>
        <p className="type-body text-gray-700">{detail.forWho}</p>
      </div>

      <div className="mb-12 max-w-3xl">
        <h2 className="type-h3 text-modra2 mb-4">Co je součástí</h2>
        <ul className="space-y-2">
          {detail.includes.map((item) => (
            <li key={item} className="flex items-start type-body text-gray-700">
              <span className="text-brand-green mr-2 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12 max-w-3xl">
        <h2 className="type-h3 text-modra2 mb-3">Typický výstup</h2>
        <p className="type-body text-gray-700">{detail.deliverable}</p>
      </div>

      <div className="mb-12 max-w-3xl">
        <h2 className="type-h3 text-modra2 mb-4">Přínosy</h2>
        <ul className="space-y-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start type-body text-gray-700">
              <span className="text-brand-accent mr-2 shrink-0">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 md:p-8 bg-brand-offwhite border border-neutral-200 max-w-3xl">
        <p className="type-body text-gray-700 mb-2">
          Orientační cena:{" "}
          <span className="font-semibold text-modra2">{detail.priceHint}</span>
        </p>
        <p className="type-meta text-gray-600 mb-6">
          <Link href={detail.priceHref} className="underline">
            Kompletní ceník
          </Link>
        </p>
        <Link href="/#kontakt" className="ctaBtnSecondaryDark">
          Domluvit konzultaci
        </Link>
      </div>
    </article>
  );
}
