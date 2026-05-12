// * Klientská komponenta kvůli stavu menu.
"use client";
// * Importy pro odkazy, state a data navigace.
import Link from "next/link";
import React, { useState } from "react";
import { navData } from "../data/navigationData";

// * Export mobilní navigace s hamburger menu.
export default function NavigationMobile() {
  // * Stav otevření mobilního menu.
  const [isOpen, setIsOpen] = useState(false);
  // * Toggle pro otevření/zavření menu.
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="mobilniMenu">
      <button className="flex justify-end p-4 text-neutral-400 lg:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          // * Podmíněné zobrazení menu.
          isOpen ? "block" : "hidden"
        } top-0 left-0 right-0 bg-modra2 px-2 pt-2 pb-4 z-50 flex flex-col text-brand-offwhite shadow-md w-full h-screen fixed`}
      >
        <button className="flex justify-end p-4 text-neutral-400" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col gap-y-2 w-full items-center type-body-lg my-2">
          <li className="flex px-8 py-4" key="home">
            <Link href="/" className="heroJmeno text-brand-offwhite">
              Zbyněk Svoboda
            </Link>{" "}
          </li>
          {/* * Smyčka přes položky menu */}
          {navData.map((menu, index) => {
            return (
              <li className="flex py-2" key={index}>
                <Link
                  href={menu.link}
                  className="type-body-lg font-semibold text-brand-offwhite"
                  onClick={toggleMenu}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
          <li className="flex py-4">
            <Link
              href="/#kontakt"
              className="ctaBtnSecondaryDark uppercase tracking-wide text-center mx-auto w-full text-brand-offwhite"
              onClick={toggleMenu}
            >
kontakt            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
