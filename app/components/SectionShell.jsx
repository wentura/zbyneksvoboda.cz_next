export default function SectionShell({
  id,
  className = "bg-white",
  children,
}) {
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-16 ${className}`}>
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
