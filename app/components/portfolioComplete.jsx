import React from "react";
import { portfolioData } from "./portfolioData";
export default function PortfolioComplete() {
  return (
    <section className="text-gray-600 body-font bg-teal-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
            <h1 className="mb-2 sm:w-2/5 sm:mb-0 nadpisPage">
              Space The Final Frontier
            </h1>
            <p className="pl-0 sm:w-3/5 sm:pl-10 textPage">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          {portfolioData.map((item, index) => (
            <div className="p-4 mb-6 md:w-1/3 sm:mb-0" key={index}>
              <div className="h-64 overflow-hidden rounded-lg">
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
