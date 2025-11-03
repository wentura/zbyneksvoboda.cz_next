import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cenikData } from "../data/cenikData";
export default function PortfolioComplete() {
  return (
    <section
      id="cenik"
      className="py-10 text-gray-600 md:py-20 px-5 container max-w-screen-xl mx-auto lg:scroll-mt-20"
    >
      <div className="flex flex-col">
        <div className="flex flex-col flex-wrap mb-12 sm:flex-row">
          <h1 className="mb-2 nadpisPage leading-snug sm:w-full sm:mb-8 text-center md:text-left">
            Orientační ceník
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="pl-0 text-xl leading-relaxed col-span-2">
              Cena vždy vychází z reálného rozsahu, ambicí projektu a
              požadovaných funkcí.
            </div>
            <div className="leading-relaxed justify-end w-full flex justify-end flex-col px-0 lg:px-10">
              <div className="text-xl md:text-2xl font-medium">
                Úvodní konzultace
              </div>
              <div className="py-2">
                Abychom se lépe poznali, pochopil jsem Váš záměr, či projekt
                nabízím Vám úvodní konzultaci v délce 30 minut{" "}
                <span className="font-medium">zdarma</span>.
              </div>
              {/* <ul>
                <li>Nedělám „weby s pěti podstránkami za 10 000 Kč“.</li>
                <li>Nedělám „SEO na jedno kliknutí“.</li>
                <li>Nedělám černou magii.</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 lg:divide-x-2 divide-gray-400 divide-y-2 lg:divide-y-0">
        {cenikData.map((item, index) => (
          <div
            className="p-4 lg:p-10 w-full lg:w-1/3 flex flex-col"
            key={index}
          >
            <div className="pb-4 overflow-hidden drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] lg:hover:scale-150 transition duration-200"></div>
            <div className="pb-4 nadpisPage text-xl md:text-3xl">
              {item.title}
            </div>
            <div
              className="py-4"
              dangerouslySetInnerHTML={{ __html: item.about }}
            />
            {item.price !== "0" && (
              <div className="flex justify-end text-lg md:text-xl font-medium mt-auto pt-4">
                od {item.price}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
