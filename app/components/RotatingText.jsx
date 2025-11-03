"use client";
import React, { useEffect, useState } from "react";

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

export default function RotatingTextComponent({ rotatingText = whoAmI2 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640); // 640px is sm breakpoint in Tailwind
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
        setIsVisible(true);
      }, 200); // Fade out duration
    }, 3500); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const renderTextWithStyling = (text) => {
    const parts = text.split(/(\*[^*]+\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <span key={index} className="text-red-400">
            {part.slice(1, -1)}
          </span>
        );
      }
      // Handle line breaks only on sm and larger viewports
      if (part.includes('/') && !isMobile) {
        return part.split('/').map((segment, segIndex, array) => (
          <React.Fragment key={`${index}-${segIndex}`}>
            {segment}
            {segIndex < array.length - 1 && <br />}
          </React.Fragment>
        ));
      }
      // On mobile, replace / with space
      if (part.includes('/') && isMobile) {
        return part.replace(/\//g, ' ');
      }
      return part;
    });
  };

  return (
    <span
      className={`transition-opacity duration-400 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {renderTextWithStyling(rotatingText[currentIndex])}
    </span>
  );
}
