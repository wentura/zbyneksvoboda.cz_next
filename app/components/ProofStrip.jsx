import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function ProofStrip({ content }) {
  if (!content?.items?.length) return null;

  return (
<<<<<<< HEAD
    <SectionShell className="bg-brand-offwhite py-10 md:py-12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {content.items.map((item) => (
          <li
            key={item}
            className="type-body text-modra2 border-l-2 border-brand-accent lg:first:border-l-0 :pl-0 pl-4"
          >
            {item}
          </li>
        ))}
      </ul>
=======
    <SectionShell className="bg-brand-offwhite !py-12 md:!py-14">
      <Reveal>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
>>>>>>> cerven
    </SectionShell>
  );
}
