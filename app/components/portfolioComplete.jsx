import React from "react";
import { portfolioData } from "./portfolioData";
export default function PortfolioComplete() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
            <h1 className="mb-2 nadpisPage sm:w-1/3 sm:mb-0">Moje práce</h1>
            <p className="pl-0 textPage sm:w-2/3">
              Prohlédněte si ukázky mých projektů a nechte se inspirovat. Každý
              web, na kterém pracuji, je navržen s ohledem na potřeby a cíle
              klienta. Moje projekty kombinují estetiku, použitelnost a
              technickou kvalitu, abych vždy dosáhl optimálního výsledku.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          {portfolioData.map((item, index) => (
            <div className="p-4 mb-6 md:w-1/3 sm:mb-0" key={index}>
              <div className="overflow-hidden rounded-lg">
                <img
                  alt={item.images[0].alt}
                  className="object-cover object-center w-full h-full"
                  src={item.images[0].img}
                />
              </div>
              <div className="flex justify-between pt-4">
                <span className="nadpis">{item.title}</span>
                <a
                  className={item.hasCaseStudy ? `odkaz` : `hidden`}
                  href={`/portfolio/pripadovaStudie/${item.slug}`}
                >
                  případová studie
                </a>
              </div>
              <p className="mt-2">{item.shortDecs}</p>
              <a className="odkazVen odkaz" href={item.link} target="_blank">
                {item.linkViewMore}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
