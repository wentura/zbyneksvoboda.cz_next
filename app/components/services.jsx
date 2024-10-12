import React from "react";
import { servicesData } from "./servicesData";
export default function Services() {
  return (
    <section
      className="py-20 mx-auto text-gray-300 body-font bg-modra2 md:py-40"
      id="sluzby"
    >
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="flex flex-col flex-wrap py-6 mb-20 sm:flex-row">
          <h1 className="mb-2 nadpisPageDark  sm:w-1/3 sm:mb-0">Co nabízím</h1>
          <p className="pl-0 text-base leading-relaxed sm:w-2/3">
            Mým cílem je vytvářet weby, které nejen skvěle vypadají, ale hlavně
            fungují. Specializuji se na tvorbu uživatelsky přívětivých a
            technicky precizních řešení na míru.
          </p>
        </div>
        <div className="flex flex-wrap">
          {servicesData.map((service) => (
            <div className="flex md:w-1/3 pr-2">
              <div className="flex-grow">
                <h2 className="mb-2 text-xl font-bold text-gray-100 ">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed pr-2">
                  {service.description}
                </p>
                {/* <a className="inline-flex items-center mt-3 text-indigo-500">
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
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-20 flex max-w-screen-xl justify-end mx-auto">
        <button className="ctaBtnPrimary">Prohlédněte si portfolio</button>
        <button className="ctaBtnSecondary">Kontaktujte mě</button>
      </div>
    </section>
  );
}
