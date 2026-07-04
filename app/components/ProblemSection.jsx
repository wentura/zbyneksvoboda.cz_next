import SectionShell from "./SectionShell";

export default function ProblemSection({ content }) {
  return (
    <SectionShell className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
      <h2 className="type-h1 text-modra2 mb-6 max-w-3xl">{content.title}</h2>
      <div className="space-y-4 mb-10 type-body-lg text-gray-700 max-w-3xl">
        {content.introParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      </div>

      <div className="mb-8">
        <p className="type-body font-semibold text-gray-900 mb-4">
          {content.listLead}
        </p>
        <ul className="grid grid-cols-1 gap-3 max-w-md">
          {content.bulletpoints.map((bulletpoint, index) => (
            <li
              key={index}
              className="flex items-start type-body text-gray-700"
            >
              <span className="text-brand-accent mr-2 shrink-0">•</span>
              <span>{bulletpoint}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="type-body-lg text-gray-700 font-medium md:col-span-2">
        {content.closing}
      </p>
    </div>
    </SectionShell>
  );
}
