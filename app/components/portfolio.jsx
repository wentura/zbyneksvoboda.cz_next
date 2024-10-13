import { easeIn } from "framer-motion";
import * as motion from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { portfolioData } from "./portfolioData";
export default function Portfolio() {
  const portfolio = portfolioData.filter((item) => item.hasCaseStudy === true);

  return (
    <div className="px-5 py-20 mx-auto md:py-40 lg:px-0">
      <div className="container flex flex-col flex-wrap max-w-screen-xl py-0 mx-auto mb-0 lg:pb-20 sm:flex-row">
        <h1 className="mb-2 nadpisPage sm:w-1/3 sm:mb-0">Moje práce</h1>
        <p className="pl-0 textPage sm:w-2/3">
          Prohlédněte si ukázky mých projektů
          <span className="hidden md:inline-block">
            &nbsp;a nechte se inspirovat
          </span>
          .
          <br className="" />
          Každý web, na kterém pracuji, je navržen s ohledem na potřeby a cíle
          klienta.
          <span className="hidden md:inline-block">
            Moje projekty kombinují estetiku, použitelnost a technickou kvalitu,
            abych vždy dosáhl optimálního výsledku.
          </span>
        </p>
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
                <h2 className="mb-5 nadpisPortfolio">{item.title}</h2>
                <p
                  className="textPage"
                  dangerouslySetInnerHTML={{
                    __html: item.caseStudy.studyTextShort,
                  }}
                />
                <a
                  className="flex mt-5 odkaz "
                  href={`/portfolio/pripadovaStudie/${item.slug}`}
                >
                  případová studie
                </a>
              </div>
            </div>

            {/* <div className="w-full overflow-hidden rounded-lg lg:w-1/2 lg:mb-0 bg-gradient-to-r from-indigo-500 to-purple-200"> */}
            <div className="w-full mx-auto mb-10 overflow-hidden rounded-lg h-fit sm:w-1/2 lg:w-1/3 lg:mb-0 md:drop-shadow-[0_40px_40px_rgba(0,0,0,0.7)] drop-shadow-2xl">
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
                  alt={item.caseStudy.images[0].alt}
                  className="object-cover object-center w-full h-1/3"
                  src={item.caseStudy.images[0].img}
                  width={400}
                  height={600}
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
                  <h2 className="mb-5 nadpisPortfolio">{item.title}</h2>
                  <p
                    className="textPage"
                    dangerouslySetInnerHTML={{
                      __html: item.caseStudy.studyTextShort,
                    }}
                  />
                  <a
                    className="flex mt-5 odkaz "
                    href={`/portfolio/pripadovaStudie/${item.slug}`}
                  >
                    případová studie
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start mb-10">
                <div className="flex-grow">
                  {/* <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    najekuy dalsi text
                  </h2> */}
                  <p className="text-base leading-relaxed">
                    jeste nevim co sem dat...
                  </p>
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
