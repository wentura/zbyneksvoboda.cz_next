// * Import Link pro CTA v pruhu.
import Link from "next/link";

// * Export horního promo proužku.
export default function Stripe({ text = "Sample Text" }) {
  return (
    // * <div className="hidden md:block md:absolute top-0 right-0 w-full z-50">
    <div className="block absolute top-0 right-0 w-full z-50">
      <div className="bg-red-400 text-white flex items-center justify-center h-12 shadow-lg font-medium">
        <span className="text-xs sm:text-base text-center tracking-tight">
          Přijímám nové výzvy a spolupráci{" "}
          <span className="hidden sm:inline">-</span>{" "}
          <br className="md:hidden block" />
          <Link
            href="/#kontakt"
            className="underline hover:no-underline hover:text-white"
          >
            kontaktujte mě
          </Link>
        </span>
      </div>
    </div>
  );
}
