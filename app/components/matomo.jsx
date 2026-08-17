// * Matomo jako jednoduché počítadlo bez cookies (jen img beacon).
"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const MATOMO_URL = "https://matomo.zbyneksvoboda.cz/";
const MATOMO_SITE_ID = "1";

function buildBeaconSrc(pathname, search) {
  const params = new URLSearchParams({
    idsite: MATOMO_SITE_ID,
    rec: "1",
    cookie: "0",
    action_name: typeof document !== "undefined" ? document.title : "",
    url: typeof window !== "undefined" ? window.location.href : "",
    rand: String(Date.now()),
  });
  // pathname/search jen kvůli re-renderu při SPA navigaci
  void pathname;
  void search;
  return `${MATOMO_URL}matomo.php?${params.toString()}`;
}

function MatomoClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? "";
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(buildBeaconSrc(pathname, search));
  }, [pathname, search]);

  if (!src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
      className="pointer-events-none fixed bottom-0 left-0 border-0"
      alt=""
      width={1}
      height={1}
      loading="eager"
      decoding="sync"
    />
  );
}

export default function Matomo() {
  return (
    <Suspense fallback={null}>
      <MatomoClient />
    </Suspense>
  );
}
