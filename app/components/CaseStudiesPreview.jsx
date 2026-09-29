import Link from "next/link";
import Image from "next/image";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import CaseStudyVisual from "./CaseStudyVisual";

export default function CaseStudiesPreview({ content }) {
  return (
    <SectionShell id="pripadove-studie" className="bg-white">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-4xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-4xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {content.items.map((study, index) => (
            <article
              key={study.slug}
              className="reveal group flex flex-col"
              style={index ? { animationDelay: `${index * 0.08}s` } : undefined}
            >
              <div className="mb-6">
                {study.showcaseImage ? (
                  <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
                    <Image
                      src={study.showcaseImage}
                      alt={study.showcaseImageAlt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : study.visualSteps ? (
                  <CaseStudyVisual study={study} />
                ) : (
                  <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                {study.metric && (
                  <div className="bg-modra2 px-4 py-3">
                    <p className="text-2xl md:text-3xl font-bold tabular-nums tracking-tight text-white">
                      {study.metric}
                    </p>
                    <p className="label-meta text-white/70 mt-1">
                      {study.metricLabel}
                    </p>
                  </div>
                )}
              </div>
              <p className="label-meta text-brand-accent mb-3">
                {study.client} · {study.type}
              </p>
              <h3 className="type-h3 text-modra2 mb-6">{study.title}</h3>

              <div className="space-y-5 flex-grow">
                <div>
                  <p className="label-meta mb-2">{content.labels.problem}</p>
                  <p className="type-body text-neutral-700">
                    {study.problemShort || study.problem}
                  </p>
                </div>
                {study.contributionShort && (
                  <div className="pt-5 border-t border-neutral-200">
                    <p className="label-meta mb-2">
                      {content.labels.contribution}
                    </p>
                    <p className="type-body text-neutral-700">
                      {study.contributionShort}
                    </p>
                  </div>
                )}
                <div className="pt-5 border-t border-neutral-200">
                  <p className="label-meta mb-2">{content.labels.result}</p>
                  <p className="type-body text-modra2 font-medium">
                    {study.resultHighlight || study.result}
                  </p>
                </div>
              </div>
              <Link
                href={`/portfolio/pripadovaStudie/${study.slug}`}
                className="odkaz type-body mt-6"
              >
                {content.labels.more}
              </Link>
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
