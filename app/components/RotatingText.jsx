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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
        setIsVisible(true);
      }, 200); // Fade out duration
    }, 6500); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition-opacity duration-400 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {rotatingText[currentIndex]}
    </span>
  );
}
