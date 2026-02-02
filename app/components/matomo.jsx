// * Jednoduchý Matomo pixel bez cookies.
"use client";

import React from "react";

// * Export Matomo trackeru bez cookies.
export default function Matomo() {
  return (
    <div aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=1&rec=1&cookie=0"
        className="border-0"
        alt=""
        width={0}
        height={0}
      />
    </div>
  );
}
