import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function FitSection({ content }) {
  
  return (
    <SectionShell id="pro-koho" className="bg-white">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-2xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-4xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="label-meta text-modra2 mb-6">{content.forTitle}</p>
            <ul className="space-y-2">
              {content.for.map((item) => (
                <li
                  key={item}
                  className="flex items-start type-body text-neutral-700 gap-2"
                >
                  <span className="text-green-600 text-2xl shrink-0 font-bold" aria-hidden>
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-neutral-200 md:pl-10 lg:pl-14">
            <p className="label-meta text-modra2 mb-6">{content.notForTitle}</p>
            <ul className="space-y-2">
              {content.notFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start type-body text-neutral-700 gap-2"
                >
                  <span className="text-red-600 text-2xl shrink-0 font-bold" aria-hidden>
                    −
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
