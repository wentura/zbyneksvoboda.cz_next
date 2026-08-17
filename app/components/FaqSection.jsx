import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function FaqSection({ content }) {
  if (!content?.items?.length) return null;

  return (
    <SectionShell id="namitky" className="bg-brand-offwhite">
      <Reveal>
        <h2 className="type-h1 text-modra2 mb-4 max-w-4xl">{content.title}</h2>
        <p className="type-body-lg text-neutral-700 mb-14 max-w-4xl">
          {content.description}
        </p>

        <dl className="border-t border-neutral-200">
          {content.items.map((item) => (
            <div
              key={item.question}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-3 md:gap-10 py-8 md:py-10 border-b border-neutral-200"
            >
              <dt className="type-h3 text-modra2">{item.question}</dt>
              <dd className="type-body text-neutral-700 max-w-2xl">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </SectionShell>
  );
}
