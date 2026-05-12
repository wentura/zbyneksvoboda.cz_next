import React from "react";

export default function StartSection({ content }) {
  return (
    <section className="py-8 md:py-16 bg-brand-offwhite">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-4 md:mb-2">{content.title}</h2>
        <p className="type-h3 mb-2 text-gray-700 font-bold max-w-3xl">
          {content.intro}
        </p>
        <div className="my-4 type-body-lg text-gray-700 flex flex-col gap-4">
          <ul className="p-0 w-fit list-disc list-outside pl-8">
            {content.bulletpoints.map((bulletpoint, index) => (
              <li
                className="type-body font-semibold text-brand-green mb-2"
                key={index}
              >
                {bulletpoint}
              </li>
            ))}
          </ul>
        </div>
        <p className="type-h3 text-right text-gray-900 font-semibold my-8 ">
          {content.closingLine1}
          <br />
          {content.closingLine2}
        </p>
      </div>
    </section>
  );
}
