"use client";

import React, { useEffect, useState } from "react";

export default function Matomo() {
  const [enabled, setEnabled] = useState(false);

  const refreshConsent = () => {
    try {
      const saved = localStorage.getItem("cookieConsent");
      if (!saved) {
        setEnabled(false);
        return;
      }
      const parsed = JSON.parse(saved);
      setEnabled(Boolean(parsed?.analytics));
    } catch (e) {
      setEnabled(false);
    }
  };

  useEffect(() => {
    refreshConsent();
    const handler = () => refreshConsent();
    window.addEventListener("cookieConsentUpdated", handler);
    return () => window.removeEventListener("cookieConsentUpdated", handler);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=1&rec=1"
        className="border-0"
        alt=""
        width={0}
        height={0}
      />
    </div>
  );
}
