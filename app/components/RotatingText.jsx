// * Klientská komponenta kvůli intervalům a měření viewportu.
"use client";
// * Importy React hooků pro animaci textu.
import React, { useEffect, useState } from "react";

// * Výchozí varianty textu.
const whoAmI = [
  "webový konzultant",
  "vývojář digitálních řešení",
  "tvůrce webů s přesahem",
  "digitální strategický partner",
  "partner pro smysluplné projekty",
];
const whoAmI2 = [
  "Vytvářím weby a webové aplikace, které vydělávají.",
  "Srozumitelně. Smysluplně. Tvořím web, co vám pomůže.",
  "Pomáhám firmám pochopit, co je v digitálním světě důležité.",
  "Udělejme z webu silný nástroj pro vaše podnikání.",
];

// * Export rotujícího textu s jednoduchým fade efektem.
export default function RotatingTextComponent({ rotatingText = whoAmI2 }) {
  // * Stav indexu a viditelnosti textu.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // * Detekce šířky viewportu pro mobilní zobrazení.
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640); // 640px is sm breakpoint in Tailwind
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    // * Interval pro rotaci textů s fade efektem.
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
        setIsVisible(true);
      }, 200); // Fade out duration
    }, 1800); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // * Render textu s inline stylingem a zalomením.
  const renderTextWithStyling = (text) => {
    const parts = text.split(/(\*[^*]+\*)/);
    return parts.map((part, index) => {
      // * Zvýraznění textu mezi hvězdičkami.
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <span key={index} className="text-red-400">
            {part.slice(1, -1)}
          </span>
        );
      }
      // * Zalomení jen na větších obrazovkách.
      if (part.includes('/') && !isMobile) {
        return part.split('/').map((segment, segIndex, array) => (
          <React.Fragment key={`${index}-${segIndex}`}>
            {segment}
            {segIndex < array.length - 1 && <br />}
          </React.Fragment>
        ));
      }
      // * Na mobilu nahraď / mezerou.
      if (part.includes('/') && isMobile) {
        return part.replace(/\//g, ' ');
      }
      return part;
    });
  };

  return (
    <span
      className={`transition-opacity duration-400 ${
        // * Fade in/out podle viditelnosti.
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {renderTextWithStyling(rotatingText[currentIndex])}
    </span>
  );
}
