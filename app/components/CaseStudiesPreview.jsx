import Link from "next/link";
import Image from "next/image";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function CaseStudiesPreview({ content }) {
  return (
    <SectionShell id="pripadove-studie" className="bg-white">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-3xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-3xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {content.items.map((study, index) => (
            <article
              key={study.slug}
              className="reveal group flex flex-col"
              style={index ? { animationDelay: `${index * 0.08}s` } : undefined}
            >
              <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden mb-6">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="label-meta text-brand-accent mb-3">{study.type}</p>
              <h3 className="type-h3 text-modra2 mb-6">{study.title}</h3>

              <div className="space-y-5 flex-grow">
                <div>
                  <p className="label-meta mb-2">{content.labels.problem}</p>
                  <p className="type-body text-neutral-700">
                    {study.problemShort || study.problem}
                  </p>
                </div>
                <div className="pt-5 border-t border-neutral-200">
                  <p className="label-meta mb-2">{content.labels.result}</p>
                  <p className="type-body text-modra2 font-medium">
                    {study.resultHighlight || study.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-start mt-14">
          <Link href={content.ctaHref} className="ctaBtnSecondaryLight">
            {content.cta}
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  );
}
