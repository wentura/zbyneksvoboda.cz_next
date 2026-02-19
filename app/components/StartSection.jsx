// * Import React pro JSX v komponentě.
import React from "react";

// * ProblemSection: sekce s formulací problému a rolí konzultanta.
export default function StartSection({ content }) {
  return (
    <section className="py-8 md:py-16 bg-neutral-100">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-4 md:mb-2">
            {content.title}
          </h2>
          <p className="type-h3 mb-4 text-gray-700 font-bold max-w-3xl">
            {content.description}
          </p>
          <div className="my-12 type-body-lg text-gray-700 flex flex-wrap gap-4">
          <ul className="p-0 w-fit list-disc list-outside pl-8">
            {content.bulletpoints.map((bulletpoint, index) => (
              <li className="type-body font-semibold text-green-800 mb-2" key={index}>
                {bulletpoint}
              </li>
            ))}
            </ul>
          </div>
          <p className="type-h3 text-right text-gray-900 font-semibold mb-8">
            Web je výsledek rozhodnutí.<br />Ne jeho začátek.
          </p>
        </div>
    
    </section>
  );
}

