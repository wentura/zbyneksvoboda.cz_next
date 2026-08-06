import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function ProblemSection({ content }) {
  return (
    <SectionShell className="bg-white">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-8">
            <h2 className="type-h1 text-modra2 mb-8 max-w-full">
              {content.title}
            </h2>
            <div className="space-y-5 type-body-lg text-neutral-700 max-w-full">
              {content.introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="type-body-lg text-modra2 font-medium mt-10 max-w-full">
              {content.closing}
            </p>
          </div>

          <div className="md:col-span-4 md:border-l md:border-neutral-200 md:pl-8">
            <p className="label-meta mb-6">{content.listLead}</p>
            <ul className="space-y-2">
              {content.bulletpoints.map((bulletpoint, index) => (
                <li
                  key={index}
                  className="type-body text-neutral-700 border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
                >
                  {bulletpoint}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
