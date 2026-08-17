import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function ProofStrip({ content }) {
  if (!content?.items?.length) return null;

  return (
    <SectionShell className="bg-brand-offwhite !py-12 md:!py-16">
      <Reveal>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {content.items.map((item, index) => (
            <li
              key={item.value}
              className={
                index > 0
                  ? "sm:border-l sm:border-neutral-200 sm:pl-8"
                  : undefined
              }
            >
              <p className="type-display-num mb-2">{item.value}</p>
              <p className="type-body text-neutral-700">{item.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionShell>
  );
}
