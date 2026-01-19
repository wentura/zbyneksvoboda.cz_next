// * Importy pro animace, obrázky, odkazy a data portfolia.
import { easeIn } from "framer-motion";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData } from "../data/portfolioData";
import SafeHtml from "./SafeHtml";
// * Export sekce portfolia pro homepage.
export default function Portfolio() {
  // * Filtrace projektů s case study.
  const portfolio = portfolioData.filter((item) => item.hasCaseStudy === true);
  // * Výběr projektů zobrazených na frontpage.
  const titlePortfolio = portfolioData.filter(
    (item) => item.frontpage === true,
  );
  // * Výběr projektů s case study pro frontpage.
  const titlePortfolio2 = portfolioData.filter(
    (item) => item.frontpage === true && item.fpCaseStudy === true,
  );

  return (
    <div
      className="px-5 py-20 mx-auto md:py-40 lg:px-0 scroll-mt-0 md:-scroll-mt-12"
      id="portfolio"
    >
      <div className="container flex flex-col flex-wrap max-w-screen-xl py-0 mx-auto mb-0 lg:pb-20 sm:flex-row">
        <h1 className="mb-8 md:mb-0 nadpisPage leading-snug sm:w-full sm:mb-8">
          Ukázky mé práce
        </h1>
        {/* <p className="pl-0 text-xl leading-relaxed">
          Každý web nebo e-shop, na kterém pracuji, má jasný cíl – ať už jde o
          lepší uživatelský zážitek, vyšší konverze, nebo technickou efektivitu.
          Podívejte se na vybrané projekty, kde se spojila technická preciznost
          s promyšlenou strategií.
        </p>
        <p className="mt-12 pl-0 text-xl leading-relaxed">
          Každý web, na kterém pracuji, je navržen s ohledem na potřeby a cíle
          klienta.
        </p> */}
      </div>
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-4 mb-4">
        {/* * Smyčka přes zvýrazněné projekty */}
        {titlePortfolio2.map((item, index) => (
          <div
            key={index}
            className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-center rounded-lg shadow-lg"
          >
            {/* * Náhledový obrázek pokud je k dispozici */}
            {item.images && item.images[0] && (
              <div className="relative w-full col-span-1">
                <Image
                  className=""
                  src={item.images[0].img}
                  alt={item.images[0].alt || item.title}
                  width={600}
                  height={900}
                />
              </div>
            )}
            <div className="col-span-2 flex flex-col justify-between h-full p-4 text-base md:text-xl">
              <div>
                <h3 className="mb-4 nadpisPortfolio">{item.title}</h3>
                {/* * Krátký popis projektu */}
                <SafeHtml
                  html={item.fpShortDec}
                  className="mb-4"
                />
                {/* * Číselné výsledky (pokud jsou v datech) */}
                <SafeHtml
                  html={item.fpNumbers}
                  className="mb-4"
                />
              </div>
              <div className="flex flex-row items-center justify-end">
                <a href={item.link} className="odkaz text-sm md:text-base">
                  {item.linkViewMore}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* * Tady je obrazkové portfolio bez detailu */}
      <div className="container max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* * Smyčka přes projekty pouze s obrázky */}
        {titlePortfolio.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center border-2 border-modra2 p-2"
          >
            {/* * Náhledový obrázek pokud je k dispozici */}
            {item.images && item.images[0] && (
              <div className="relative w-full">
                <Image
                  className=""
                  src={item.images[0].img}
                  alt={item.images[0].alt || item.title}
                  width={600}
                  height={900}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse items-end md:items-center md:justify-between mx-auto mt-10 mb-10 max-w-screen-xl">
        <Link
          href="/#kontakt"
          className="ctaBtnDark mb-4 md:mb-0 text-center md:text-left flex flex-row items-center justify-center gap-x-2 w-full md:w-fit"
        >
          Začněme spolupráci
        </Link>
        <Link href="/portfolio" className="ctaBtnDarkSecondary">
          Prohlédněte si více projektů
        </Link>
      </div>
      {/* * Smyčka přes case study sekce */}
      {portfolio.map((item, index) => (
        // <section className="max-w-full mx-auto mb-20 bg-rose-50" key={index}>
        <section
          className={`${
            // * Střídání směru layoutu podle indexu.
            index % 2 === 0
              ? "lg:bg-gradient-to-r"
              : "lg:bg-gradient-to-l flex-row-reverse"
          } ${
            item.caseStudy.bgFromColor
          } 2xl:from-35% 2xl:to-35% from-25% to-25% to-white max-w-full mb-20`}
          key={index}
        >
          <div
            className={`container max-w-screen-xl flex flex-wrap px-0 lg:px-20 py-10 lg:py-40 mx-auto  ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } ${item.caseStudy.bgFromColor} from-25% to-25% to-white`}
          >
            <div className="md:hidden mb-8 text-left flex justify-start w-full">
              <div className="flex-grow">
                <SafeHtml
                  html={item.title}
                  className="jinyNadpis text-lg mb-2"
                />
                <h2 className="mb-4 nadpisPortfolio">{item.caseStudy.title}</h2>
                <SafeHtml
                  html={item.caseStudy.subTitle}
                  className="mb-2"
                />
                <SafeHtml
                  html={item.caseStudy.studyTextShort}
                  className="mb-2"
                />
                <Link
                  className="odkaz"
                  href={`/portfolio/pripadovaStudie/${item.slug}`}
                >
                  zobrazit případovou studii {item.title}
                </Link>
              </div>
            </div>

            {/* <div className="w-full overflow-hidden rounded-lg lg:w-1/2 lg:mb-0 bg-gradient-to-r from-indigo-500 to-purple-200"> */}
            <div className=" w-full mx-auto mb-10 overflow-hidden rounded-lg h-fit sm:w-1/2 lg:w-1/3 lg:mb-0 md:drop-shadow-[0_20px_20px_rgba(0,0,0,0.7)] drop-shadow-2xl">
              <motion.div
                initial={{
                  opacity: 0.2,
                  x: index % 2 === 0 ? -180 : 180,
                }}
                whileInView={{ opacity: 1, duration: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ easeIn: easeIn, duration: 0.3 }}
              >
                <Image
                  alt={item.caseStudy.images[0]?.alt || item.title}
                  className="object-cover object-center w-full h-full"
                  src={item.caseStudy.images[0]?.img || item.images[0]?.img}
                  width={500}
                  height={700}
                />
              </motion.div>
            </div>
            {/* </div> */}
            <div className="hidden md:flex flex-col flex-wrap px-2 -mb-10 text-left lg:py-6 lg:w-2/3 lg:pl-12 sm:w-1/2 w-full justify-start">
              <div className="flex flex-col mb-10">
                {/* <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                  asd
                </div> */}
                <div className="flex-grow">
                  <SafeHtml
                    html={item.title}
                    className="jinyNadpis text-xl mb-4"
                  />
                  <h2 className="mb-8 nadpisPortfolio">
                    {item.caseStudy.title}
                  </h2>
                  <SafeHtml
                    html={item.caseStudy.subTitle}
                    className="mb-4"
                  />
                  <SafeHtml
                    html={item.caseStudy.studyTextShort}
                    className="mb-4"
                  />
                  <Link
                    className="odkaz"
                    href={`/portfolio/pripadovaStudie/${item.slug}`}
                  >
                    zobrazit případovou studii {item.title}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start mb-10">
                <div className="flex-grow">
                  {/* <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    najekuy dalsi text
                  </h2> */}
                </div>
              </div>
            </div>
            {/* <div className="text-sm mr-0 text-right w-full md:hidden">
              <a
                className="odkazVen odkaz font-thin "
                href={item.link}
                target="_blank"
              >
                {item.linkViewMore}
              </a>
            </div> */}
          </div>
        </section>
      ))}{" "}
    </div>
  );
}
