// * Klientská komponenta kvůli localStorage a eventům.
"use client";

// * Importy React hooků pro stav cookie souhlasu.
import { useEffect, useState } from "react";

// * Export komponenty pro správu cookie souhlasu.
export default function CookieConsent() {
  // * Stav zobrazení banneru a preferencí.
  const [showConsent, setShowConsent] = useState(true); // Start with true to show in dev
  const [showPreferences, setShowPreferences] = useState(true);
  // * Stav uloženého souhlasu.
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // * Kontrola, zda už má uživatel uložený souhlas.
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
      setShowConsent(false);
    }
  }, []);

  // * Notifikace ostatních částí aplikace o změně souhlasu.
  const notifyConsentUpdated = () => {
    try {
      window.dispatchEvent(new Event("cookieConsentUpdated"));
    } catch (_) {}
  };

  // * Handler pro přijetí všech cookies.
  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setShowConsent(false);
    notifyConsentUpdated();
  };

  // * Handler pro uložení vybraných preferencí.
  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowPreferences(false);
    setShowConsent(false);
    notifyConsentUpdated();
  };

  // * Handler pro odmítnutí všech volitelných cookies.
  const handleRejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setShowConsent(false);
    notifyConsentUpdated();
  };

  // * Pokud jsou preference i banner skryté, zobraz jen tlačítko nastavení.
  if (!showConsent && !showPreferences) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowPreferences(true)}
          className="type-meta text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          Změnit nastavení cookies
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-99 p-4 bg-white border-t border-gray-200 shadow-lg cookie-consent">
      <div className="container max-w-screen-xl mx-auto z-99">
        {/* * Přepínání mezi preferencemi a zjednodušeným bannerem */}
        {showPreferences ? (
          <div className="space-y-4">
            <h2 className="type-h3 font-semibold">Nastavení cookies</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="type-meta text-gray-600 flex flex-row gap-1 items-center">
                  <h3 className="font-medium">Nezbytné</h3>
                  <p className="type-meta text-gray-600">
                    - nutné pro fungování webu a nelze je vypnout.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.necessary}
                  disabled
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="type-meta text-gray-600 flex flex-row gap-1 items-center">
                  <h3 className="font-medium">Analytické</h3>
                  <p className="type-meta text-gray-600">
                    - pomáhají zlepšovat web.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  // * Změna souhlasu pro analytické cookies.
                  onChange={(e) =>
                    setConsent({ ...consent, analytics: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="type-meta text-gray-600 flex flex-row gap-1 items-center">
                  <h3 className="font-medium">Marketingové</h3>
                  <p className="type-meta text-gray-600">
                    - sledování účinnosti reklamy.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  // * Změna souhlasu pro marketingové cookies.
                  onChange={(e) =>
                    setConsent({ ...consent, marketing: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 type-meta text-gray-600 hover:text-gray-800"
              >
                Zrušit
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 type-meta text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Uložit nastavení
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="max-w-2xl">
              {/* * <h2 className="text-lg font-semibold">Používáme cookies</h2> */}
              <p className="type-meta text-gray-600">
                Používáme cookies pro zlepšení vašeho zážitku na našem webu.
                Můžete si vybrat, které cookies chcete povolit.
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 type-meta text-gray-600 hover:text-gray-800"
              >
                Odmítnout vše
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 type-meta text-gray-600 hover:text-gray-800"
              >
                Nastavení
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 type-meta text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
