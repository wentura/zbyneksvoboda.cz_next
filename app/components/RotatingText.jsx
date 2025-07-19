"use client";
import React, { useEffect, useState } from "react";

const whoAmI = ["webový konzultant", "vývojář digitálních řešení"];

export default function RotatingTextComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % whoAmI.length);
        setIsVisible(true);
      }, 400); // Fade out duration
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-modra2 font-medium transition-opacity duration-400 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {whoAmI[currentIndex]}
    </span>
  );
}
