import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function ProofStrip({ content }) {
  if (!content?.items?.length) return null;

  return (
    <SectionShell className="bg-brand-offwhite !py-12 md:!py-14">
      <Reveal>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {content.items.map((item, index) => (
            <li
              key={item}
              className={`type-body text-modra2 ${
                index > 0 ? "sm:border-l sm:border-neutral-200 sm:pl-8" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionShell>
  );
}
