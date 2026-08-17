import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function ProblemSection({ content }) {
  const paths = content.paths || [];

  return (
    <SectionShell id="problemy" className="bg-white">
      <Reveal>
        <div className="max-w-4xl mb-14">
          <h2 className="type-h1 text-modra2 mb-6 max-w-full">
            {content.title}
          </h2>
          <div className="space-y-5 type-body-lg text-neutral-700 max-w-4xl">
            {(content.introParagraphs || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {paths.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-neutral-200 mb-12">
            {paths.map((path) => (
              <article
                key={path.label}
                className="py-10 md:py-12 md:px-8 first:md:pl-0 border-b md:border-b-0 md:border-l border-neutral-200 first:md:border-l-0"
              >
                <p className="label-meta text-brand-accent mb-3">
                  Cesta {path.label}
                </p>
                <h3 className="type-h3 text-modra2 mb-4">{path.title}</h3>
                <p className="type-body text-neutral-700 mb-4">
                  {path.situation}
                </p>
                {path.symptoms?.length ? (
                  <ul className="space-y-2 mb-6">
                    {path.symptoms.map((symptom) => (
                      <li
                        key={symptom}
                        className="type-body text-neutral-600 pl-4 border-l border-neutral-200"
                      >
                        {symptom}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="type-body text-modra2 font-medium mb-3">
                  {path.result}
                </p>
                <p className="type-meta text-neutral-500">{path.leadsTo}</p>
              </article>
            ))}
          </div>
        ) : null}

        <p className="type-body-lg text-modra2 font-medium max-w-4xl">
          {content.closing}
        </p>
      </Reveal>
    </SectionShell>
  );
}
