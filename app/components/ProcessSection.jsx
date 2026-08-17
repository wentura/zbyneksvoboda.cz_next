import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function ProcessSection({ content }) {
  return (
    <SectionShell id="jak-pracuji" className="bg-white">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-4xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-4xl">
          {content.description}
        </p>

        <ol className="space-y-0 border-t border-neutral-200">
          {content.steps.map((step, index) => (
            <li
              key={step.number}
              className="reveal grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 md:py-10 border-b border-neutral-200 items-baseline"
              style={
                index ? { animationDelay: `${index * 0.04}s` } : undefined
              }
            >
              <span className="type-display-num text-neutral-300 w-16 md:w-20">
                {String(step.number).padStart(2, "0")}
              </span>
              <div>
                <h3 className="type-h3 text-modra2 mb-2">{step.title}</h3>
                <p className="type-body text-neutral-700 max-w-2xl">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </SectionShell>
  );
}
