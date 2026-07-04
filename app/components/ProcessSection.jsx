import SectionShell from "./SectionShell";

export default function ProcessSection({ content }) {
  return (
    <SectionShell className="bg-brand-offwhite">
      <h2 className="type-h1 text-modra2 mb-4">{content.title}</h2>
      <p className="type-body-lg text-gray-700 mb-12 max-w-3xl">
        {content.description}
      </p>

      <ol className="space-y-8">
        {content.steps.map((step) => (
          <li key={step.number} className="flex gap-5 md:gap-8 items-start">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-modra2 text-brand-offwhite flex items-center justify-center type-body font-semibold">
              {step.number}
            </span>
            <div>
              <h3 className="type-h3 text-modra2 mb-2">{step.title}</h3>
              <p className="type-body text-gray-700">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
