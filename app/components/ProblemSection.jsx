// * Import React pro JSX v komponentě.
import React from "react";

// * ProblemSection: sekce s formulací problému a rolí konzultanta.
export default function ProblemSection({ content }) {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="type-h1 tracking-tight text-modra2 mb-4 md:mb-2">
          {content.title}
        </h2>
        <p className="type-h3 mb-4 text-gray-700">
          {content.description}
        </p>
        {/* <p className="text-lg md:text-xl leading-relaxed my-12 text-gray-700">
          Firemní web, který <i className="italic">„nějak funguje"</i>.<br />
          Sice hezký na pohled, ale nepřináší nové poptávky ani lepší obchodní výsledky.
        </p> */}

        <div className="my-12 type-body-lg text-gray-700">
          Firmy často řeší:<br />
          <ul className="p-0 w-fit flex md:flex-row flex-col gap-4 items-start justify-start mt-4 list-disc list-outside pl-8 gap-x-8">
            {content.bulletpoints.map((bulletpoint, index) => (
              <li className="w-fit type-body font-semibold text-red-800 mb-2 whitespace-nowrap" key={index}>
                {bulletpoint}
              </li>
            ))}
          </ul>
        </div>
        {/* <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700">
          Chybí jasný záměr a struktura.
        </p> */}
        
      </div>
    </section>
  );
}

