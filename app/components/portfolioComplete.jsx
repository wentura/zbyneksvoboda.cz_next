"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData } from "../data/portfolioData";
portfolioData.splice(2, 0, { title: "vasprojekt" });
export default function PortfolioComplete() {
  return (
    <section className="py-10 mx-auto text-gray-600 md:py-20 px-5">
      <div className="flex flex-col">
        <div className="flex flex-col flex-wrap mb-12 sm:flex-row">
          <h1 className="mb-2 nadpisPage leading-snug sm:w-full sm:mb-8">
            Projekty & reference
          </h1>
          <p className="pl-0 text-xl leading-relaxed">
            Každý web nebo e-shop, na kterém pracuji, má jasný cíl – ať už jde o
            lepší uživatelský zážitek, vyšší konverze, nebo technickou
            efektivitu. Podívejte se na vybrané projekty, kde se spojila
            technická preciznost s promyšlenou strategií.
          </p>
          <p className="mt-12 pl-0 text-xl leading-relaxed">
            Každý web, na kterém pracuji, je navržen s ohledem na potřeby a cíle
            klienta.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 -mx-4 -mt-4 -mb-10 sm:-m-4 gap-8 lg:gap-12 lg:gap-y-24">
        {portfolioData.map((item, index) =>
          item.title != "vasprojekt" ? (
            item.colSpan ? (
              // Special layout for items with colSpan - 2-column grid with image left, text right
              <div
                className={`col-span-1 ${item.colSpan} h-full md:mt-12`}
                key={index}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:max-h-[700px]">
                  {/* Image on the left */}
                  <div className="py-4 nadpisPage md:hidden text-lg md:text-xl">
                    {item.title}
                  </div>
                  <div className="overflow-hidden">
                    <Image
                      alt={item.images[0].alt}
                      width={400}
                      height={600}
                      className="object-cover object-top w-full h-full lg:max-h-[700px]"
                      src={item.images[0].img}
                    />
                  </div>
                  {/* Text content on the right */}
                  <div className="flex flex-col justify-top md:p-4 md:py-12">
                    <div className="hidden md:flex pb-4 nadpisPage text-lg md:text-2xl">
                      {item.title}
                    </div>
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
                  </div>
                </div>
              </div>
            ) : (
              // Regular layout for items without colSpan
              <div className={` ${item.colSpan}`} key={index}>
                <div className="py-4 nadpisPage md:hidden text-lg md:text-xl">
                  {item.title}
                </div>
                <div className="pb-4 overflow-hidden">
                  <Image
                    alt={item.images[0].alt}
                    width={400}
                    height={600}
                    className="object-cover object-top w-full h-96"
                    src={item.images[0].img}
                  />
                </div>
                <div className="pb-4 nadpisPage hidden md:flex text-lg md:text-2xl">
                  {item.title}
                </div>
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
            )
          ) : (
            <div className="w-full" key={index}>
              <div className="py-4 nadpisPage md:hidden text-lg md:text-2xl">
                Váš projekt
              </div>
              <div className="pb-4 overflow-hidden">
                <img
                  alt="váš nový projekt"
                  width={400}
                  height={600}
                  className="object-cover object-center w-full h-96"
                  src="https://dummyimage.com/400x600.png?text=zde%20m%C5%AF%C5%BEe%20b%C3%BDt%20v%C3%A1%C5%A1%20projekt"
                />{" "}
              </div>
              <div className="pb-4 nadpisPage hidden md:flex text-lg md:text-2xl">
                Váš projekt
              </div>
              <p className="pb-4">
                Začněme spolupráci ještě dnes a posuňme vaše podnikání blíže
                klientům s{" "}
                <span className="font-bold">moderním a funčním webem.</span>.
              </p>
              <Link
                href="/#kontakt"
                className="ctaBtnDark flex justify-center items-center"
              >
                Začít spolupráci
              </Link>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
