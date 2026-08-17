"use client";

import Link from "next/link";

export default function MobileStickyCta({
  label = "Probrat konkrétní problém",
  href = "/#kontakt",
}) {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-modra2/95 backdrop-blur px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Link href={href} className="ctaBtnPrimary w-full text-center">
        {label}
      </Link>
    </div>
  );
}
