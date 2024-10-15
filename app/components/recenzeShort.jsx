import Image from "next/image";
import Link from "next/link";
import React from "react";
import { recenzeData } from "./recenzeData";
export default function RecenzeShort() {
  return (
    <section className="py-20 mx-auto text-gray-300 bg-modra2 md:py-40">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="flex flex-col flex-wrap py-0 mb-20 sm:flex-row">
          <h1 className="mb-2 md:w-1/3 md:mb-2 nadpisPageDark">
            Moji klienti říkají...
          </h1>
          <p className="pl-0 md:w-2/3">
            Spolupracuji s klienty, kteří očekávají kvalitu, spolehlivost a
            inovativní přístup.
            <br />
            Podívejte se, co o naší spolupráci říkají.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 px-5 md:px-0 lg:divide-x-2 divide-gray-700">
          {recenzeData.map((recenze, index) =>
            recenze.short ? (
              <div
                className="px-2 md:px-4 mb-6 w-full lg:w-1/3 lg:mb-0"
                key={index}
              >
                <div className="h-full">
                  <div className="flex flex-row justify-between  flex-grow">
                    {" "}
                    <Image
                      width={200}
                      height={200}
                      alt="testimonial"
                      className="inline-block object-cover object-center w-20 h-20 mb-5 bg-gray-100 border-2 border-gray-200 rounded-full"
                      src={recenze.fotka}
                    />
                    <div className="flex flex-col justify-center pr-0 text-gray-100 items-end w-full text-right ">
                      <span className="">{recenze.kdo}</span>
                      <span className="">{recenze.co}</span>
                    </div>
                  </div>
                  <p
                    className="pb-5"
                    dangerouslySetInnerHTML={{
                      __html: recenze.textShort,
                    }}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="pt-8 md:pt-20 flex justify-end">
          <Link href="/recenze" className="odkaz">
            více recenzí
          </Link>
        </div>
      </div>
    </section>
  );
}
