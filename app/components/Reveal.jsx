export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`reveal ${className}`.trim()}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
