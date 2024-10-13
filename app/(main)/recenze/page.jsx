import { recenzeData } from "@/app/components/recenzeData";
import React from "react";

export default function Recenze() {
  return (
    <section className="py-10 mx-auto text-gray-600 md:py-20 px-5">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col flex-wrap py-0 mb-20 sm:flex-row">
          <h1 className="mb-2 md:w-1/3 md:mb-2 nadpisPage">
            Co říkají moji klienti
          </h1>
          <p className="pl-0 textPage md:w-2/3">
            Spolupracuji s klienty, kteří očekávají kvalitu, spolehlivost a
            inovativní přístup.
            <br />
            Podívejte se, co o naší spolupráci říkají.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {recenzeData.map((recenze, index) => (
            <div className="p-12 mb-6 lg:w-1/3 lg:mb-0" key={index}>
              <div className="h-full">
                <div className="flex flex-row justify-between mb-4 items-center">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 rounded-full drop-shadow-xl"
                    src={recenze.fotka}
                  />
                  <div className="flex flex-col	pr-8">
                    <span className="text-lg font-bold">{recenze.kdo}</span>
                    <span className="text-sm text-gray-400">{recenze.co}</span>
                  </div>
                </div>
                <p
                  className="pb-12 font-extralight text-sm leading-6 tracking-wide"
                  dangerouslySetInnerHTML={{ __html: recenze.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
