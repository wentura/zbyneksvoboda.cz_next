import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";

export default function PortfolioLandingPage() {
  const portfolio = portfolioData;
  const titlePortfolio = portfolioData.filter(
    (item) => item.frontpage === true,
  );

  return (
    <div className="relative overflow-hidden bg-white py-20 md:py-40">
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-4 mb-4">
        <h1 className="mb-8 nadpisPage leading-snug sm:w-full sm:mb-8 text-center md:text-left">
          Ukázky mé práce
        </h1>
      </div>
      <div className="animate-scroll whitespace-nowrap flex flex-row gap-12">
        {/* First set of logos */}
        <div className="flex items-center md:space-x-12 md:pl-12 pl-12 space-x-12">
          {portfolio.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-24 h-auto md:w-44"
            >
              <Image
                className="object-cover object-top w-full h-full"
                src={item.images[0].img}
                alt={item.images[0].alt || item.title}
                width={400}
                height={600}
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center md:space-x-12 md:pl-12 pl-12 space-x-12">
          {portfolio.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-24 h-auto md:w-44"
            >
              <Image
                className="object-cover object-top w-full h-full"
                src={item.images[0].img}
                alt={item.images[0].alt || item.title}
                width={400}
                height={600}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center md:space-x-12 md:pl-12 pl-12 space-x-12">
          {portfolio.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-24 h-auto md:w-44"
            >
              <Image
                className="object-cover object-top w-full h-full"
                src={item.images[0].img}
                alt={item.images[0].alt || item.title}
                width={400}
                height={600}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center md:space-x-12 md:pl-12 pl-12 space-x-12">
          {portfolio.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-24 h-auto md:w-44"
            >
              <Image
                className="object-cover object-top w-full h-full"
                src={item.images[0].img}
                alt={item.images[0].alt || item.title}
                width={400}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link href="/portfolio" className="ctaBtnDarkSecondary text-center">
          Portfolio projektů
        </Link>
      </div>
    </div>
  );
}
