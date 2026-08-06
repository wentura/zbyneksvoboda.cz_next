/**
 * * Footer — kontakt + LinkedIn (bez FB/IG kvůli positioningu)
 */
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-modra2">
      <div className="container flex flex-col max-w-screen-xl px-5 py-8 mx-auto sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <Link className="nadpisPageWhite" href="/">
            Zbyněk Svoboda
          </Link>
          <div className="mt-4 type-meta text-gray-300 text-center sm:text-left leading-loose md:leading-normal">
            <a
              href="mailto:info@zbyneksvoboda.cz"
              className="odkaz text-gray-300"
            >
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
        <span className="inline-flex justify-center mt-6 sm:mt-0 sm:justify-start">
          <a
            className="text-gray-400"
            href="https://www.linkedin.com/in/zbyneksvoboda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
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
