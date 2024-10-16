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
          fontColor="#71B462"
        />
      </div>
      <div className="container flex flex-col items-center max-w-screen-xl px-5 pt-0 md:pt-0 mx-auto md:flex-row max-h-[300px] md:max-h-screen">
        {/* <div className="absolute bottom-0 right-0 hidden w-1/3 md:block -z-10"> */}
        <div className="absolute bottom-0 right-0 w-2/3 sm:w-1/3 md:block -z-10">
          <div className="heroFotka max-h-[800px] max-w-[400px] hidden sm:block">
            <Image src="/ja.png" width={600} height={800} alt="ja" />
          </div>
        </div>
        <div className="relative flex flex-col items-start py-2 lg:flex-grow w-full min-w-fit lg:pr-8 md:pr-1 md:items-start text-left lg:my-40 my-4 z-10">
          <h1 className="mt-10 md:mt-0 mb-10 heroJmeno font-extrabold">
            Zbyněk Svoboda
          </h1>
          <p className="mb-10 text-4xl md:text-7xl text-modra2 jinyNadpis md:w-2/3 pLine font-extralightlight ">
            Vytvářím moderní weby, podporující růst vašeho podnikání.
          </p>
          <p className="mb-20 md:w-1/2 lg:w-3/5 text-xl font-extralight leading-snug tracking-normal hidden md:block">
            <span className="text-modra2 font-black">
              Moderní webové stránky
            </span>
            , které nejen zaujmou, ale i přinášejí výsledky. Specializuji se na
            web design a vývoj pro jednotlice, malé a střední podniky.{" "}
          </p>

          <div className="flex justify-center flex-col md:flex-row mt-12 md:mt-0 mx-auto md:mx-0">
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
