import SectionShell from "./SectionShell";

export default function AboutPreview({ content }) {
  return (
    <SectionShell id="o-mne" className="bg-brand-offwhite">
      <h2 className="type-h1 text-modra2 mb-8">{content.title}</h2>
      <div className="space-y-4 max-w-3xl">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="type-body-lg text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}
