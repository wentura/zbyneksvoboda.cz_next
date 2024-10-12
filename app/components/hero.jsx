import Image from "next/image";
import React from "react";
import { ReactMatrixAnimation } from "react-matrix-animation";

export default function Hero() {
  return (
    // <section className="relative h-screen sm:max-h-screen max-h-[350px]">
    <section className="relative h-screen ">
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
        <div className="relative flex flex-col items-center py-2 text-center lg:flex-grow w-full min-w-fit lg:pr-8 md:pr-1 md:items-start md:text-left lg:my-64 my-4 z-10">
          <p className="mb-4">
            Vytvářím weby, které podpoří růst vašeho podnikání.
          </p>
          <p className="mb-4 md:w-1/2 lg:w-3/5">
            Moderní webové stránky, které nejen zaujmou, ale i přinášejí
            výsledky. Specializuji se na web design a vývoj pro malé a střední
            podniky.{" "}
          </p>
          <p className="mb-8  md:w-1/2 lg:w-4/5">
            Ať už hledáte stylový web pro prezentaci své značky, nebo robustní
            e-shop, který zvýší vaše prodeje, jsem tu, abych vám pomohl. Mým
            cílem je vytvořit pro vás online řešení, které bude jednoduše
            spravovatelné, rychlé a funkční. Pojďme spolu nastartovat váš online
            úspěch!
          </p>
          <div className="flex justify-center">
            <button className="ctaBtnPrimary">Prohlédněte si portfolio</button>
            <button className="ctaBtnSecondary">Kontaktujte mě</button>
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
