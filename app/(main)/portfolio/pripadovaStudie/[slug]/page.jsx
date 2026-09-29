import { portfolioData } from "@/app/data/portfolioData";
import { caseStudiesData } from "@/app/data/caseStudiesData";
import Image from "next/image";
import Link from "next/link";
import SafeHtml from "@/app/components/SafeHtml";
import Reveal from "@/app/components/Reveal";
import CaseStudyVisual from "@/app/components/CaseStudyVisual";
import { notFound } from "next/navigation";

const stripHtml = (value) =>
  String(value || "")
    .replace(/<[^>]*>/g, "")
    .trim();

function getStudy(slug) {
  const portfolioItem = portfolioData.find((entry) => entry.slug === slug);
  const caseItem = caseStudiesData.items.find((entry) => entry.slug === slug);
  if (!portfolioItem && !caseItem) return null;
  return { portfolioItem, caseItem };
}

export function generateStaticParams() {
  const slugs = new Set([
    ...portfolioData.filter((p) => p.slug && p.hasCaseStudy).map((p) => p.slug),
    ...caseStudiesData.items.map((c) => c.slug),
  ]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getStudy(slug);
  if (!data) {
    return {
      title: "Případová studie – Zbyněk Svoboda",
      description: "Detailní případová studie.",
    };
  }

  const { portfolioItem, caseItem } = data;
  const title = `${caseItem?.title || portfolioItem?.title} – případová studie`;
  const description =
    caseItem?.metaDescription ||
    caseItem?.problemShort ||
    stripHtml(portfolioItem?.shortDecs) ||
    "Detailní případová studie.";
  const image = caseItem?.image || portfolioItem?.images?.[0]?.img || "/ja.jpg";

  return {
    title,
    description,
    alternates: { canonical: `/portfolio/pripadovaStudie/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://zbyneksvoboda.cz/portfolio/pripadovaStudie/${slug}`,
      images: [{ url: image }],
      type: "article",
      locale: "cs_CZ",
    },
  };
}

export default async function PripadovaStudie({ params }) {
  const { slug } = await params;
  const data = getStudy(slug);
  if (!data) notFound();

  const { portfolioItem, caseItem } = data;
  const title = caseItem?.title || portfolioItem?.title;
  const type = caseItem?.type;
  const image = caseItem?.image || portfolioItem?.images?.[0]?.img;
  const imageAlt = portfolioItem?.images?.[0]?.alt || title;
  const labels = caseStudiesData.labels;

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <Reveal>
            <p className="label-meta mb-4">
              <Link href="/portfolio" className="odkaz text-neutral-500">
                Portfolio
              </Link>
              <span className="mx-2 text-neutral-300">/</span>
              <span className="text-modra2">Případová studie</span>
            </p>

            {type && (
              <p className="label-meta text-brand-accent mb-4">
                {caseItem?.client ? `${caseItem.client} · ` : ""}
                {type}
              </p>
            )}
            <h1 className="type-h1 text-modra2 mb-6 max-w-4xl">{title}</h1>
            {caseItem?.contributionShort && (
              <p className="type-body-lg text-neutral-700 mb-10 max-w-3xl">
                {caseItem.contributionShort}
              </p>
            )}

            {caseItem?.metric && (
              <div className="mb-10 border-t border-b border-neutral-200 py-5 max-w-3xl">
                <span className="type-h2 text-modra2 mr-3">
                  {caseItem.metric}
                </span>
                <span className="type-body text-neutral-700">
                  {caseItem.metricLabel}
                </span>
              </div>
            )}

            {caseItem?.visualSteps ? (
              <div className="mb-14 md:mb-16">
                <CaseStudyVisual study={caseItem} large />
              </div>
            ) : (
              image && (
                <div className="aspect-[16/9] relative bg-neutral-100 overflow-hidden mb-14 md:mb-16">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    priority
                  />
                </div>
              )
            )}

            {caseItem?.showcaseImage && (
              <figure className="mb-14 md:mb-16 max-w-[600px]">
                <Image
                  src={caseItem.showcaseImage}
                  alt={caseItem.showcaseImageAlt}
                  width={600}
                  height={caseItem.showcaseImageHeight}
                  className="h-auto w-full border border-neutral-200"
                  sizes="(max-width: 640px) 100vw, 600px"
                />
                <figcaption className="type-body text-neutral-500 mt-3">
                  Ukázka aplikace s anonymizovanými demonstračními údaji.
                </figcaption>
              </figure>
            )}

            {caseItem ? (
              <div>
                {caseItem.context && (
                  <p className="type-body-lg text-neutral-700 max-w-4xl mb-14">
                    {caseItem.context}
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                  <div className="md:col-span-7 space-y-10">
                    <div>
                      <p className="label-meta mb-3">{labels.problem}</p>
                      <p className="type-body-lg text-neutral-700">
                        {caseItem.problem}
                      </p>
                    </div>
                    <div className="pt-8 border-t border-neutral-200">
                      <p className="label-meta mb-3">{labels.solution}</p>
                      <p className="type-body-lg text-neutral-700">
                        {caseItem.solution}
                      </p>
                    </div>
                    {caseItem.approach?.length > 0 && (
                      <div className="pt-8 border-t border-neutral-200">
                        <p className="label-meta mb-6">{labels.approach}</p>
                        <div className="space-y-8">
                          {caseItem.approach.map((step, index) => (
                            <div
                              key={step.title}
                              className="grid grid-cols-[2rem_1fr] gap-4"
                            >
                              <span className="label-meta text-brand-accent pt-1">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <h2 className="type-h3 text-modra2 mb-2">
                                  {step.title}
                                </h2>
                                <p className="type-body text-neutral-700">
                                  {step.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="pt-8 border-t border-neutral-200">
                      <p className="label-meta mb-3">{labels.result}</p>
                      <p className="type-body-lg text-modra2 font-medium">
                        {caseItem.result}
                      </p>
                    </div>
                    {caseItem.takeaway && (
                      <div className="pt-8 border-t border-neutral-200">
                        <p className="label-meta mb-3">{labels.takeaway}</p>
                        <p className="type-body-lg text-neutral-700">
                          {caseItem.takeaway}
                        </p>
                      </div>
                    )}
                  </div>

                  <aside className="md:col-span-5 md:border-l md:border-neutral-200 md:pl-10 lg:pl-14">
                    <p className="label-meta mb-3">{labels.role}</p>
                    <p className="type-body text-neutral-700 mb-10">
                      {caseItem.role}
                    </p>
                    {caseItem.scope?.length > 0 && (
                      <div className="mb-10">
                        <p className="label-meta mb-3">{labels.scope}</p>
                        <ul className="space-y-3 type-body text-neutral-700 list-disc pl-5">
                          {caseItem.scope.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {portfolioItem?.link && portfolioItem.link !== "#" && (
                      <a
                        href={portfolioItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ctaBtnSecondaryLight inline-flex"
                      >
                        {portfolioItem.linkViewMore || "Navštívit web"}
                      </a>
                    )}
                  </aside>
                </div>
                {caseItem.testimonial && (
                  <blockquote className="mt-16 max-w-4xl border-l-2 border-brand-accent pl-6 md:pl-8">
                    <p className="type-body-lg text-modra2">
                      „{caseItem.testimonial.text}“
                    </p>
                    <footer className="label-meta mt-5 text-neutral-600">
                      {caseItem.testimonial.author}
                    </footer>
                  </blockquote>
                )}
                {caseItem.closingPrompt && (
                  <div className="mt-16 bg-neutral-100 px-6 py-8 md:px-10 md:py-12">
                    <p className="type-h3 text-modra2 max-w-3xl mb-6">
                      {caseItem.closingPrompt}
                    </p>
                    <Link
                      href="/#kontakt"
                      className="ctaBtnSecondaryLight inline-flex"
                    >
                      Probrat váš proces
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="max-w-2xl">
                {portfolioItem?.shortDecs && (
                  <SafeHtml
                    html={portfolioItem.shortDecs}
                    className="type-body-lg text-neutral-700"
                  />
                )}
              </div>
            )}

            <div className="mt-20 pt-12 border-t border-neutral-200">
              <Link href="/portfolio" className="odkaz type-body text-modra2">
                ← Zpět na portfolio
              </Link>
              <span className="mx-4 text-neutral-300">|</span>
              <Link href="/#kontakt" className="odkaz type-body text-modra2">
                Probrat konkrétní problém
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
