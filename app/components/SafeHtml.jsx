import sanitizeHtml from "sanitize-html";

/**
 * Bezpečné renderování HTML přes sanitize-html (allowlist tagů/atributů).
 * DOMPurify není nutný — sanitize-html pokrývá současné use-casy (recenze, portfolio).
 */
export default function SafeHtml({ html, className = "" }) {
  if (!html) return null;

  const sanitizedHtml = sanitizeHtml(String(html), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height", "loading", "decoding"],
      a: ["href", "name", "target", "rel"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
  });

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
