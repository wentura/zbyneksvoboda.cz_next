import SectionShell from "./SectionShell";

export default function ProofStrip({ content }) {
  if (!content?.items?.length) return null;

  return (
    <SectionShell className="bg-brand-offwhite py-10 md:py-12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {content.items.map((item) => (
          <li
            key={item}
            className="type-body text-modra2 border-l-2 border-brand-accent first:border-l-0 pl-4"
          >
            {item}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
