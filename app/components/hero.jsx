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
          <h1 className="mt-10 mb-5 md:mt-0 md:mb-10 heroJmeno font-extrabold">
            Zbyněk Svoboda
          </h1>
          <div className="mb-12 text-2xl md:text-5xl text-modra2 jinyNadpis md:w-4/7 pLine font-light flex flex-col gap-y-4">
            <div className="">Tvořím moderní weby.</div>
            <div className="">Zlepšuji vaši online prezenci. </div>
            <div className="">Pomáhám růstu vašeho podnikání. </div>
          </div>
          <p className="mb-20 md:w-1/2 lg:w-3/5 text-xl font-light leading-snug tracking-normal hidden md:block">
            Vytvářím{" "}
            <span className="text-modra2 font-bold">
              weby a webové aplikace
            </span>
            , které zaujmou a{" "}
            <span className="text-modra2 font-bold">
              pomáhají růstu vašeho podnikání
            </span>
            . Specializuji se na web design a vývoj pro jednotlice, malé a
            střední fimry.{" "}
          </p>

          <div className="flex justify-center flex-col md:flex-row mt-5 sm:mt-10 md:mt-0 mx-auto md:mx-0">
            <Link href="/portfolio" className="ctaBtnPrimary mb-4 md:mb-0">
              Prohlédněte si portfolio
            </Link>
            <Link href="/kontakt" className="ctaBtnSecondary md:ml-4">
              Kontaktujte mě
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
    </section>
  );
}
