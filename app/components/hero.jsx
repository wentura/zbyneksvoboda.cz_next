import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactMatrixAnimation } from "react-matrix-animation";

export default function Hero() {
  return (
    // <section className="relative h-screen sm:max-h-screen max-h-[350px]">
    <section className="relative h-screen max-h-[880px] md:max-h-[900px] ">
      <div className="absolute items-center justify-center w-full h-full -z-20 ">
        <ReactMatrixAnimation
          backgroundColor="#ffffff"
          tileSize={14}
          fadeFactor={0.1}
          // fontColor="#71B462"
          // fontColor="#bbd2a7"
          fontColor="#DCF6C3"
        />
      </div>
      <div className="container flex flex-col items-center max-w-screen-xl px-5 pt-0 md:pt-0 mx-auto md:flex-row max-h-[300px] md:max-h-screen">
        {/* <div className="absolute bottom-0 right-0 hidden w-1/3 md:block -z-10"> */}
        <div className="absolute bottom-0 right-0 w-2/3 sm:w-1/3 md:block -z-10">
          <div className="heroFotka max-h-[800px] max-w-[400px]">
            <Image src="/ja.png" width={600} height={800} alt="ja" />
          </div>
        </div>
        <div className="relative flex flex-col items-start py-2 lg:flex-grow w-full min-w-fit lg:pr-8 md:pr-1 md:items-start text-left lg:my-40 my-4 z-10">
          <h1 className="mt-2 mb-12 md:mt-0 md:mb-10 heroJmeno font-extrabold">
            <span className="block md:hidden">Zbyněk Svoboda</span>
            <span className="hidden">
              Digitální strategie, která dává smysl
            </span>
          </h1>
          <div className="mb-12 text-3xl  md:text-7xl text-modra2 jinyNadpis md:w-6/7 pLine font-bold flex flex-col gap-y-4">
            {/* <div className="mb-2 leading-[44px] md:leading-7 md:mb-4"></div> */}
            <div className="mb-2 md:leading-normal md:mb-44">
              Pomáhám firmám pochopit, co je v digitálním světě důležité
            </div>
            {/* <div className="">🚀 Pomohu vám najít správnou strategii</div> */}
            {/* <div className="">Pomáhám růstu vašeho podnikání. </div> */}
          </div>
          <p className="mb-20 md:w-1/2 lg:w-full text-xl font-light leading-snug tracking-normal hidden md:block">
            Váš web je jen jedna část skládačky.
            <br />
            Jak využít moderní technologie k růstu?
            <br />
            Žádné univerzální rady, ale reálné řešení.
          </p>

          <div className="flex justify-center flex-col md:flex-row mt-1 sm:mt-10 md:mt-0 mx-auto md:mx-0">
            <Link
              href="/portfolio"
              className="ctaBtnPrimary mb-4 md:mb-0 hidden md:block"
            >
              Prohlédněte si mou práci
            </Link>
            <Link
              href="/kontakt"
              className="ctaBtnSecondary md:ml-4 text-base md:text-lg"
            >
              Dohodněme si konzultaci
            </Link>
          </div>
        </div>
        <div className="w-5/6 bg-red-400 min-h-min lg:max-w-lg lg:w-full md:w-1/2">
          {" "}
          {/* <img
            className="object-cover object-center rounded-2xl"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
        </div>
      </div>

      {/* Bouncing arrow indicating scroll down */}
      <div className="absolute bottom-8 w-full flex justify-center cursor-pointer animate-bounce">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-200"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
