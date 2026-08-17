import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function SolutionOptionsSection({ content }) {
  if (!content?.items?.length) return null;

  return (
    <SectionShell className="bg-brand-offwhite">
      <Reveal>
        <div className="max-w-4xl mb-14">
          <h2 className="type-h1 text-modra2 mb-6">{content.title}</h2>
          <p className="type-body-lg text-neutral-700">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-neutral-200 mb-12">
          {content.items.map((item) => (
            <article
              key={item.number}
              className="py-10 md:py-12 md:px-8 border-b border-neutral-200 md:border-l md:[&:nth-child(odd)]:border-l-0"
            >
              <p className="label-meta text-brand-accent mb-3">
                {String(item.number).padStart(2, "0")}
              </p>
              <h3 className="type-h3 text-modra2 mb-4">{item.title}</h3>
              <p className="type-body text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="type-body-lg text-modra2 font-medium max-w-4xl">
          {content.closing}
        </p>
      </Reveal>
    </SectionShell>
  );
}
