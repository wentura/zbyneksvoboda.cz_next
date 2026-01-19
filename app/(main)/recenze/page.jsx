// * Importy pro obrázky, data recenzí a bezpečný HTML render.
import Image from "next/image";
import { recenzeData } from "@/app/data/recenzeData";
import React from "react";
import SafeHtml from "@/app/components/SafeHtml";

// * Export stránky s detailními recenzemi.
export default function Recenze() {
  return (
    <section className="py-10 mx-auto text-gray-600 md:py-20 md:px-5">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col flex-wrap py-0 mb-20 sm:flex-row">
          <h1 className="mb-2 nadpisPage leading-snug sm:w-full sm:mb-8">
            Co říkají moji klienti
          </h1>
          <p className="pl-0 text-xl leading-relaxed">
            Spolupracuji s klienty, kteří očekávají kvalitu, spolehlivost a
            inovativní přístup.
            <br />
            Podívejte se, co o naší spolupráci říkají.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* * Smyčka přes recenze */}
          {recenzeData.map((recenze, index) => (
            <div className="p-4 md:p-12 mb-6 lg:w-1/3 lg:mb-0" key={index}>
              <div className="h-full">
                <div className="flex flex-row justify-between mb-4 items-center">
                  <Image
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 rounded-full drop-shadow-xl"
                    src={recenze.fotka}
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col	pr-4 text-right">
                    <span className="text-lg font-bold">{recenze.kdo}</span>
                    <span className="text-sm text-gray-500 font-medium">
                      {recenze.co}
                    </span>
                  </div>
                </div>
                {/* * Vykreslení dlouhé/krátké recenze podle přepínače */}
                <SafeHtml
                  html={recenze.short ? recenze.textShort : recenze.text}
                  className="pb-12 font-light text-sm leading-6 tracking-wide"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
