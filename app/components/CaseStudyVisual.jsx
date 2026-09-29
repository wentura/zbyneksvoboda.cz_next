export default function CaseStudyVisual({ study, large = false }) {
  const light = study.visualTone === "light";

  return (
    <div
      className={`flex flex-col justify-between overflow-hidden ${
        large
          ? "min-h-[360px] md:min-h-[460px] p-7 md:p-12"
          : "aspect-[16/10] p-5 md:p-7"
      } ${light ? "bg-neutral-100 text-modra2" : "bg-modra2 text-white"}`}
    >
      <p className={`label-meta ${light ? "text-modra2/60" : "text-white/60"}`}>
        {study.client} · cesta informací
      </p>

      <div>
        <p
          className={`font-semibold tracking-tight leading-tight max-w-xl mb-8 ${
            large ? "text-3xl md:text-5xl" : "text-xl md:text-3xl"
          }`}
        >
          {study.visualTitle}
        </p>
        <ol
          className={`grid grid-cols-3 gap-3 border-t pt-4 ${light ? "border-modra2/20" : "border-white/25"}`}
        >
          {study.visualSteps.map((step, index) => (
            <li key={step} className="min-w-0">
              <span
                className={`label-meta block mb-2 ${light ? "text-modra2/50" : "text-white/50"}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`${large ? "text-sm md:text-lg" : "text-xs md:text-sm"} font-medium leading-snug`}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
