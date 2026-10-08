import Link from "next/link";
import Image from "next/image";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Hero({ content }) {
  const productSrc = content.productImage || "/hero_img.webp";

  return (
    <SectionShell className="bg-modra2 text-brand-offwhite !pt-14 md:!pt-24">
      {/* Na mobilu text + CTA první; na lg zůstává text vlevo, vizuál vpravo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6 order-1 lg:order-1">
          {content.eyebrow ? (
            <p className="label-meta text-brand-offwhite/70 mb-4">
              {content.eyebrow}
            </p>
          ) : null}
          <h1 className="type-hero-title mb-6">{content.title}</h1>
          <p className="type-body-lg text-brand-offwhite/85 mb-8 md:mb-10 max-w-xl">
            {content.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href={content.ctaPrimaryHref}
              className="ctaBtnPrimary text-center"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href={content.ctaSecondaryHref}
              className="ctaBtnSecondary text-center"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </Reveal>

        <Reveal
          className="relative order-2 lg:order-2 lg:col-span-6"
          delay={0.08}
        >
          <div className="border border-brand-offwhite/20 p-2 bg-black/20">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                className="object-cover object-top"
                alt={content.imageAlt}
                src={productSrc}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
          <p className="label-meta text-brand-offwhite/50 mt-4">
            {content.imageCaption}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
