/**
 * * Footer komponenta - patička webu
 * * Obsahuje logo, odkazy na sociální sítě (Facebook, Instagram, LinkedIn)
 * * Obsahuje logo a odkazy na sociální sítě
 */
// * Importy pro linky, React a analytics.
import Link from "next/link";
import React from "react";

// * Export Footer komponenty s odkazy a Matomo trackingem.
export default function Footer() {
  return (
    <footer className="text-gray-400 bg-modra2">
      <div className="container flex flex-col max-w-screen-xl px-5 py-8 mx-auto sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <Link className="nadpisPageWhite" href="/">
            Zbyněk Svoboda
          </Link>
          <div className="mt-4 type-meta text-gray-300 text-center sm:text-left leading-loose md:leading-normal">
            <a href="mailto:info@zbyneksvoboda.cz" className="odkaz text-gray-300">
              info@zbyneksvoboda.cz
            </a>
            <br />
            <a href="tel:+420773687792" className="odkaz text-gray-300">
              +420 773 687 792
            </a>
            <br />
            Nebužely 3, 277 34 Nebužely
            <br />
            IČ: 74811002
            <br />
            Nejsem plátcem DPH
          </div>
        </div>
        {/* * Sekce s odkazy na sociální sítě */}
        <span className="inline-flex justify-center mt-6 sm:mt-0 sm:justify-start">
          {/* * Facebook odkaz */}
          <a
            className="text-gray-400"
            href="https://www.facebook.com/profile.php?id=100093105173892"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          {/* * Instagram odkaz */}
          <a
            className="ml-3"
            href="https://www.instagram.com/zbyndasvoboda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          {/* * LinkedIn odkaz */}
          <a
            className="ml-3"
            href="https://www.linkedin.com/in/zbyneksvoboda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
