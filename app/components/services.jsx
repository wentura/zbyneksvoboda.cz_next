// * Importy pro odkazy a React.
import Link from "next/link";
import React from "react";

// * Export sekce služeb se třemi pilíři.
export default function Services({ content }) {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      id="sluzby"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl">
          {content.description}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* * Service 1: Strategická webová konzultace */}
          {content.bulletpoints.map((service, index) => (

          <div key={index} className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              {service.title}
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-700">
              {service.description}
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-600">
              {service.description2}
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-gray-900">Co získáte:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>jasně pojmenované problémy a příležitosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>konkrétní návrhy změn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>doporučení k obsahu, UX a technické architektuře</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>srozumitelnou roadmapu dalších kroků</span>
                </li>
              </ul>
            </div>
          </div>  
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            className="heroBtn uppercase tracking-wide"
            href="/#kontakt"
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
