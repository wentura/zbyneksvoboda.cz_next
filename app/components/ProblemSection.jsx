// * Import React pro JSX v komponentě.
import React from "react";

// * ProblemSection: sekce s formulací problému a rolí konzultanta.
export default function ProblemSection({ content }) {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-4 md:mb-2 leading-[1.2] md:leading-[1.23]">
          {content.title}
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] md:leading-[1.23] mb-4 text-gray-700 font-extrabold">
          {content.description}
        </p>
        <p className="text-lg md:text-xl leading-relaxed my-12 text-gray-700">
          Firemní web, který <i className="italic">„nějak funguje"</i>.<br />
          Sice hezký na pohled, ale nepřináší nové poptávky ani lepší obchodní výsledky.
        </p>
        {/* <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700">
          Chybí jasný záměr a struktura.
        </p> */}
        
      </div>
    </section>
  );
}

