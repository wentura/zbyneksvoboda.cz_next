export default function Stripe({ text = "Sample Text" }) {
  return (
    <div className="hidden md:block md:absolute top-0 right-0 w-full z-50">
      <div className="bg-red-400 text-white flex items-center justify-center h-8 md:h-12 shadow-lg font-bold">
        <span className="text-base text-center tracking-wide">
          Přijímám nové výzvy a spolupráci -{" "}
          <a
            href="/#kontakt"
            className="underline hover:no-underline hover:text-white"
          >
            kontaktujte mě
          </a>
        </span>
      </div>
    </div>
  );
}
