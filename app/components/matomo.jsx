// * Matomo tracking bez cookies (SPA pageview).
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const MATOMO_URL = "https://matomo.zbyneksvoboda.cz/";
const MATOMO_SITE_ID = "1";

// * Export Matomo trackeru bez cookies.
export default function Matomo() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window;
    w._paq = w._paq || [];
    w._paq.push(["disableCookies"]);
    w._paq.push(["enableLinkTracking"]);
    w._paq.push(["setTrackerUrl", `${MATOMO_URL}matomo.php`]);
    w._paq.push(["setSiteId", MATOMO_SITE_ID]);

    if (w.__matomoScriptAdded) return;
    const d = document;
    const g = d.createElement("script");
    const s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = `${MATOMO_URL}matomo.js`;
    g.setAttribute("data-matomo", "true");
    s.parentNode.insertBefore(g, s);
    w.__matomoScriptAdded = true;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window;
    if (!w._paq) return;
    w._paq.push(["setCustomUrl", window.location.href]);
    w._paq.push(["setDocumentTitle", document.title]);
    w._paq.push(["trackPageView"]);
  }, [pathname, searchParams]);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src={`${MATOMO_URL}matomo.php?idsite=${MATOMO_SITE_ID}&rec=1&cookie=0`}
        className="border-0"
        alt=""
        width={0}
        height={0}
      />
    </noscript>
  );
}
