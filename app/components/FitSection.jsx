// * Import React pro sekci fit.
import React from "react";

// * Export sekce "Pro koho jsem / nejsem".
export default function FitSection({ content }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="nadpisPage mb-6 md:mb-8 leading-tight w-full flex flex-col md:flex-row justify-between">
          <div className="text-left">{content.title}</div>
          <div className="text-neutral-400 font-normal text-right md:min-w-fit md:self-end">{content.not_for_description}</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* * Pro koho jsem */}
          
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              {content.for_title}
            </h3>

            <ul className="space-y-1 md:space-y-2">
              {content.for.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">•</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* * Pro koho nejsem */}
          <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              {content.not_for_title}
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {content.not_for.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
                
          </div>
        </div>
      </div>
    </section>
  );
}

