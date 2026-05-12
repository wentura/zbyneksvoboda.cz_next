import React from "react";

export default function ProblemSection({ content }) {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="type-h1 tracking-tight text-modra2 mb-4 md:mb-2">
          {content.title}
        </h2>
        <p className="type-h3 mb-6 text-gray-700">{content.subtitle}</p>

        <div className="space-y-4 mb-10 type-body-lg text-gray-700 max-w-3xl">
          {content.introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="my-12 type-body-lg text-gray-700">
          <p className="mb-2 font-semibold text-gray-900">{content.listLead}</p>
          <ul className="p-0 w-fit flex md:flex-row flex-col gap-4 items-start justify-start mt-4 list-disc list-outside pl-8 gap-x-8">
            {content.bulletpoints.map((bulletpoint, index) => (
              <li
                className="w-fit type-body font-semibold text-red-800 mb-2 whitespace-nowrap md:whitespace-normal"
                key={index}
              >
                {bulletpoint}
              </li>
            ))}
          </ul>
        </div>

        <p className="type-body-lg text-gray-800 max-w-3xl font-medium">
          {content.closing}
        </p>
      </div>
    </section>
  );
}
