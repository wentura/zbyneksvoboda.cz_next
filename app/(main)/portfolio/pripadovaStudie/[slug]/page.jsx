import { portfolioData } from "@/app/components/portfolioData";
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
      <h1 className="nadpisPage">{item.title}</h1>
      <p>případová studie</p>
      <div className="flex flex-col sm:flex-row mt-10 flex-col-reverse">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <img
            alt="content"
            className="object-cover object-top h-full w-full"
            src={item.caseStudy.images[1].img}
          />
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90s scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn.
          </p>
          <a className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <div className="flex flex-col items-center text-center justify-center md:w-1/2 mx-auto">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Phoebe Caulfield
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
