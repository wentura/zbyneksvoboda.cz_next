// * Import React pro JSX v komponentě.
import React from "react";

// * ProblemSection: sekce s formulací problému a rolí konzultanta.
export default function ProblemSection({ content }) {
  return (
    <section className="py-8 md:py-16 bg-neutral-100">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-4 md:mb-2 leading-[1.2] md:leading-[1.23]">
            {content.title}
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] md:leading-[1.23] mb-4 text-gray-700 font-extrabold max-w-3xl">
            {content.description}
          </p>
          <div className="my-12 text-xl md:text-2xl text-gray-700 flex flex-wrap gap-4">
          <ul className="p-0 w-fit list-disc list-outside pl-8">
            {content.bulletpoints.map((bulletpoint, index) => (
              <li className="text-xl font-extrabold text-green-800 leading-[1.2] md:leading-[1.23] mb-2" key={index}>
                {bulletpoint}
              </li>
            ))}
            </ul>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-right text-gray-900 font-semibold mb-8">
            Web je výsledek rozhodnutí.<br />Ne jeho začátek.
          </p>
        </div>
    
    </section>
  );
}

