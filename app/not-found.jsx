import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10 py-20 md:py-40">
        <div className="text-center">
          <p className="uppercase tracking-widest text-sm text-black/50">404</p>
          <h1 className="nadpisPage mt-2">Stránka nenalezena</h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Je nám líto, ale stránka, kterou hledáte, neexistuje nebo byla
            přesunuta. Zkuste se vrátit na úvodní stránku nebo mě kontaktujte.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="ctaBtnDark text-center">
              Zpět na úvod
            </Link>
            <Link href="/#kontakt" className="ctaBtnDarkSecondary text-center">
              Kontaktujte mě
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
