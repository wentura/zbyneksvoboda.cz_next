import Link from "next/link";
import Image from "next/image";
import SectionShell from "./SectionShell";

export default function CaseStudiesPreview({ content }) {
  return (
    <SectionShell id="pripadove-studie" className="bg-white">
      <h2 className="type-h1 text-modra2 mb-4">{content.title}</h2>
      <p className="type-body-lg text-gray-700 mb-12 max-w-3xl">
        {content.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {content.items.map((study) => (
          <article
            key={study.slug}
            className="border border-neutral-200 flex flex-col"
          >
            <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <p className="type-meta text-brand-accent mb-2">{study.type}</p>
              <h3 className="type-h3 text-modra2 mb-4">{study.title}</h3>

              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <p className="type-meta font-bold text-modra2 mb-1">
                    {content.labels.problem}
                  </p>
                  <p className="type-body text-gray-700">{study.problem}</p>
                </div>
                <div>
                  <p className="type-meta font-bold text-modra2 mb-1">
                    {content.labels.solution}
                  </p>
                  <p className="type-body text-gray-700">{study.solution}</p>
                </div>
                <div>
                  <p className="type-meta font-bold text-modra2 mb-1">
                    {content.labels.result}
                  </p>
                  <p className="type-body text-gray-700">{study.result}</p>
                </div>
                <div>
                  <p className="type-meta font-bold text-modra2 mb-1">
                    {content.labels.role}
                  </p>
                  <p className="type-body text-gray-600">{study.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href={content.ctaHref} className="ctaBtnSecondaryLight">
          {content.cta}
        </Link>
      </div>
    </SectionShell>
  );
}
