import Link from "next/link";
import Image from "next/image";
import SectionShell from "./SectionShell";

export default function Hero({ content }) {
  return (
    <SectionShell className="bg-modra2 text-brand-offwhite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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

          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <Image
              className="object-cover p-1 pr-12 w-full h-full"
              alt={content.imageAlt}
              src="/hero_img.webp"
              width={400}
              height={500}
              priority
            />
          </div>
        </div>

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
    </SectionShell>
  );
}
