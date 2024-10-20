import { portfolioData } from "@/app/components/portfolioData";
import { color } from "framer-motion";
import Image from "next/image";
import React from "react";
export default function PripadovaStudie({ params }) {
  const item = portfolioData.find((item) => item.slug === params.slug);

  return (
    <section className="container px-5 py-24 mx-auto flex flex-col">
      {/* <div className="h-96 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-top h-full w-full"
          src={item.caseStudy.images[0].img}
        />
      </div> */}
      <h1 className="nadpisPage">{item.caseStudy.title}</h1>
      <h2 className="nadpisPortfolio mt-4">{item.title}</h2>
      <p></p>
      <div className="flex flex-col sm:flex-row mt-10 flex-col-reverse">
        <div className={`sm:w-1/3 text-center sm:pr-8 sm:py-8 divide-y-8`}>
          <Image
            alt="content"
            className="pb-12"
            src={item.caseStudy.images[0].img}
            width={600}
            height={1000}
          />
          <Image
            alt="content"
            className="pt-12"
            src={item.caseStudy.images[1].img}
            width={600}
            height={1000}
          />
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0text-left  leading-relaxed">
          <div
            dangerouslySetInnerHTML={{ __html: item.caseStudy.studyTextLong }}
          />

          <div className="flex flex-col items-center text-center justify-center md:w-1/2 mx-auto mt-12">
            {/* <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Phoebe Caulfield
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
