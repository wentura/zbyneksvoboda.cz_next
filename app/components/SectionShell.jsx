export default function SectionShell({
  id,
  className = "bg-white",
  children,
}) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-16 ${className}`}>
      <div className="container max-w-screen-xl mx-auto px-4 md:px-2">{children}</div>
    </section>
  );
}
