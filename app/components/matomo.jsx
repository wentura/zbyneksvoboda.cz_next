// * Klientská komponenta kvůli localStorage a eventům.
"use client";

// * Importy React hooků pro správu souhlasu.
import React, { useEffect, useState } from "react";

// * Export Matomo trackeru s respektem k souhlasu.
export default function Matomo() {
  // * Stav, zda je měření povoleno.
  const [enabled, setEnabled] = useState(false);

  // * Načtení souhlasu z localStorage.
  const refreshConsent = () => {
    try {
      const saved = localStorage.getItem("cookieConsent");
      // * Pokud souhlas chybí, vypnout tracking.
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
    // * Načti souhlas při mountu a poslouchej změny.
    refreshConsent();
    const handler = () => refreshConsent();
    window.addEventListener("cookieConsentUpdated", handler);
    return () => window.removeEventListener("cookieConsentUpdated", handler);
  }, []);

  // * Pokud není souhlas, nic nerenderuj.
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
