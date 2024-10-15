import Image from "next/image";
import React from "react";
import { portfolioData } from "../components/portfolioData";
export default function PortfolioComplete() {
  return (
    <section className="py-10 mx-auto text-gray-600 md:py-20 px-5">
      <div className="flex flex-col">
        <div className="flex flex-col flex-wrap mb-12 sm:flex-row">
          <h1 className="mb-2 nadpisPage sm:w-1/3 sm:mb-0">Moje práce</h1>
          <p className="pl-0 sm:w-2/3">
            Prohlédněte si ukázky mých projektů a nechte se inspirovat. Každý
            web, na kterém pracuji, je navržen s ohledem na potřeby a cíle
            klienta. Moje projekty kombinují estetiku, použitelnost a technickou
            kvalitu, abych vždy dosáhl optimálního výsledku.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
        {portfolioData.map((item, index) => (
          <div className="p-12 pb-10 md:pb-20 md:w-1/3" key={index}>
            <div className="overflow-hidden drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] hover:scale-150 transition duration-200">
              <Image
                alt={item.images[0].alt}
                width={400}
                height={600}
                className="object-cover object-top w-full h-96"
                src={item.images[0].img}
              />
            </div>
            <div className="py-4 nadpisPortfolio">{item.title}</div>

            <p
              className="pb-4"
              dangerouslySetInnerHTML={{ __html: item.shortDecs }}
            />
            <a
              className={item.hasCaseStudy ? `odkaz` : `hidden`}
              href={`/portfolio/pripadovaStudie/${item.slug}`}
            >
              případová studie
            </a>
            {/* <div className="text-sm mr-0 text-right">
              <a
                className="odkazVen odkaz font-thin "
                href={item.link}
                target="_blank"
              >
                {item.linkViewMore}
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
