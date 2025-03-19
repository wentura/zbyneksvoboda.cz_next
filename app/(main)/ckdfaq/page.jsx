import React from "react";
import { Ckd } from "./ckd";
export default function Ckdfaq() {
  return (
    <section className="py-10 mx-auto md:py-20 px-5 h-[92vh]">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col flex-wrap py-0 mb-20 sm:flex-row">
          <h1 className="nadpisPage">
            <span className="nadpisPageDark">Č</span>asto{" "}
            <span className="nadpisPageDark">K</span>ladené{" "}
            <span className="nadpisPageDark">D</span>otazy
            <br />
            <span className="text-lg">
              <span className="nadpisPageDark text-lg">F</span>requently{" "}
              <span className="nadpisPageDark text-lg">A</span>sked{" "}
              <span className="nadpisPageDark text-lg">Q</span>uestion
            </span>
          </h1>
        </div>

        <div className="container px-5 py-10 mx-auto">
          {Ckd.map((ckd, index) => (
            <div className="py-8 flex flex-wrap flex-col" key={index}>
              <div className="md:mb-0 mb-4">
                <span className="nadpisPageDark uppercase text-2xl md:text-3xl">
                  {ckd.headTitle}
                </span>
                <span className="mt-0">{ckd.title}</span>
              </div>
              <div className="md:flex-grow">
                {/* <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Spolupráce začíná úvodní konzultací, během které si projdeme
                  vaše požadavky a cíle. Následně navrhnu řešení na míru vašim
                  potřebám.
                </h2> */}
                <p
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: ckd.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
