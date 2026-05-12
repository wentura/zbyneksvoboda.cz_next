import React from "react";

export default function ProcessSection({ content }) {
  const outputLabel = content.outputLabel ?? "Výstup:";

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">{content.title}</h2>
        <p className="type-body mb-4 text-gray-700 max-w-3xl">
          {content.description}
        </p>
        <p className="type-body mb-12 text-gray-700 max-w-3xl">
          {content.description2}
        </p>

        <div className="space-y-6 md:space-y-8">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-row gap-6 md:gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-400 text-white flex items-center justify-center type-body font-semibold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="type-h3 mb-2 text-gray-900">{step.title}</h3>
                <p className="type-body text-gray-700">{step.description}</p>
                {step.output ? (
                  <p className="type-body text-gray-700 mt-2">
                    <span className="font-bold"> {outputLabel} </span>
                    {step.output}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
