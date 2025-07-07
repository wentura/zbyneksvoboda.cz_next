"use client";
import { easeIn } from "framer-motion";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData } from "../data/portfolioData";
export default function Portfolio() {
  const portfolio = portfolioData.filter((item) => item.hasCaseStudy === true);
  const allPortfolio = portfolioData.filter((item) => item.frontpage === true); // For the grid view

  return (
    <div className="px-5 py-20 mx-auto md:py-40 lg:px-0">
      <div className="container flex flex-col flex-wrap max-w-screen-xl py-0 mx-auto mb-0 lg:pb-20 sm:flex-row">
        <h1 className="mb-2 nadpisPage leading-snug sm:w-full sm:mb-8">
          Ukázky z mé práce
        </h1>
        <p className="pl-0 text-xl leading-relaxed">
          Každý web nebo e-shop, na kterém pracuji, má jasný cíl – ať už jde o
          lepší uživatelský zážitek, vyšší konverze, nebo technickou efektivitu.
          Podívejte se na vybrané projekty, kde se spojila technická preciznost
          s promyšlenou strategií.
        </p>
        <p className="mt-12 pl-0 text-xl leading-relaxed">
          Každý web, na kterém pracuji, je navržen s ohledem na potřeby a cíle
          klienta.
        </p>
      </div>
      <div className="container max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {allPortfolio.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg"
          >
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
      <div className="w-full flex justify-center mx-auto mt-10 mb-10 max-w-screen-xl">
        <Link href="/portfolio" className="ctaBtnSecondaryDark mb-4 md:mb-0">
          Prohlédněte si více mých projektů
        </Link>
      </div>
      {portfolio.map((item, index) => (
        // <section className="max-w-full mx-auto mb-20 bg-rose-50" key={index}>
        <section
          className={`${
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
                <p
                  className="jinyNadpis text-lg mb-2"
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                />
                <h2 className="mb-4 nadpisPortfolio">{item.caseStudy.title}</h2>
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{
                    __html: item.caseStudy.subTitle,
                  }}
                />
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{
                    __html: item.caseStudy.studyTextShort,
                  }}
                />
                <a
                  className="odkaz"
                  href={`/portfolio/pripadovaStudie/${item.slug}`}
                >
                  zobrazit případovou studii {item.title}
                </a>
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
            <div className="flex flex-col flex-wrap px-2 -mb-10 text-left lg:py-6 lg:w-2/3 lg:pl-12 sm:w-1/2 w-full justify-start md:flex hidden">
              <div className="flex flex-col mb-10">
                {/* <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                  asd
                </div> */}
                <div className="flex-grow">
                  <p
                    className="jinyNadpis text-xl mb-4"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                  <h2 className="mb-8 nadpisPortfolio">
                    {item.caseStudy.title}
                  </h2>
                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{
                      __html: item.caseStudy.subTitle,
                    }}
                  />
                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{
                      __html: item.caseStudy.studyTextShort,
                    }}
                  />
                  <a
                    className="odkaz"
                    href={`/portfolio/pripadovaStudie/${item.slug}`}
                  >
                    zobrazit případovou studii {item.title}
                  </a>
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
