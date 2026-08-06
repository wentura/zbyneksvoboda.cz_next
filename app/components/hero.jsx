import Link from "next/link";
import Image from "next/image";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Hero({ content }) {
<<<<<<< HEAD
  return (
    <section className="bg-modra2 text-brand-offwhite pb-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              {content.title}
            </h1>
            <p className="type-body-lg text-brand-offwhite/90 mb-8">
              {content.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={content.ctaPrimaryHref} className="ctaBtnPrimary text-center">
                {content.ctaPrimary}
              </Link>
              <Link
                href={content.ctaSecondaryHref}
                className="ctaBtnSecondary text-center"
              >
                {content.ctaSecondary}
              </Link>
            </div>
          </div>
=======
  const productSrc = content.productImage || "/hero_img.webp";
>>>>>>> cerven

  return (
    <SectionShell className="bg-modra2 text-brand-offwhite !pt-14 md:!pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6">
          <h1 className="type-hero-title mb-6">{content.title}</h1>
          <p className="type-body-lg text-brand-offwhite/85 mb-10 max-w-xl">
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
          className="relative order-first lg:order-last lg:col-span-6 hidden md:block"
          delay={0.08}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-modra2/40">
            <Image
              className="object-cover object-top"
              alt={content.imageAlt}
              src={productSrc}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <p className="label-meta text-brand-offwhite/50 mt-4 hidden md:block">
            Klientský portál v ostrém provozu — ne šablona
          </p>
        </Reveal>
      </div>

<<<<<<< HEAD
        {/* {content.trustStrip?.length > 0 && (
          <ul className="mt-12 pt-8 border-t border-brand-offwhite/15 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-2">
            {content.trustStrip.map((item) => (
              <li key={item} className="type-meta text-brand-offwhite/75 flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )} */}
        </div>
</section>
=======
      {/* {content.trustStrip?.length > 0 && (
        <ul className="mt-14 md:mt-16 pt-8 hairline border-brand-offwhite/15 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          {content.trustStrip.map((item) => (
            <li
              key={item}
              className="type-meta text-brand-offwhite/80 tracking-wide"
            >
              {item}
            </li>
          ))}
        </ul>
      )} */}
    </SectionShell>
>>>>>>> cerven
  );
}
