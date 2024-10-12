import Image from "next/image";
import React from "react";
import { ReactMatrixAnimation } from "react-matrix-animation";

export default function Hero() {
  return (
    // <section className="relative h-screen sm:max-h-screen max-h-[350px]">
    <section className="relative h-screen max-h-[900px] ">
      <div className="absolute items-center justify-center w-full h-full -z-20 ">
        <ReactMatrixAnimation
          backgroundColor="#ffffff"
          tileSize={14}
          fadeFactor={0.1}
          fontColor="#71B462"
        />
      </div>
      <div className="container flex flex-col items-center max-w-screen-xl px-5 pt-0 md:pt-10 mx-auto md:flex-row max-h[300px] md:max-h-screen">
        {/* <div className="absolute bottom-0 right-0 hidden w-1/3 md:block -z-10"> */}
        <div className="absolute bottom-0 right-0 w-2/3 sm:w-1/3 md:block -z-10">
          <div className="heroFotka  max-h-[800px] max-w-[400px]">
            <Image src="/ja.png" width={600} height={800} alt="ja" />
          </div>
        </div>
        <div className="relative flex flex-col items-start py-2 lg:flex-grow w-full min-w-fit lg:pr-8 md:pr-1 md:items-start text-left lg:my-64 my-4 z-10">
          <h1 className="mb-4 text-xl md:text-4xl font-black text-modra2 tracking-tight">
            Zbyněk Svoboda
          </h1>
          <p className="mb-4 text-4xl md:text-6xl font-extralight leading-tight text-modra2 tracking-tight">
            Vytvářím weby, které podpoří růst
            <br />
            vašeho podnikání.
          </p>
          <p className="mb-4 md:w-1/2 lg:w-3/5 text-xl font-extralight leading-snug tracking-normal hidden md:block">
            <span class="text-modra2 font-black">Moderní webové stránky</span>,
            které nejen zaujmou, ale i přinášejí výsledky. Specializuji se na
            web design a vývoj pro jednotlice, malé a střední podniky.{" "}
          </p>

          <div className="flex justify-center flex-col md:flex-row">
            <button className="ctaBtnPrimary mb-4 md:mb-0">
              Prohlédněte si portfolio
            </button>
            <button className="ctaBtnSecondary md:ml-4">Kontaktujte mě</button>
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
