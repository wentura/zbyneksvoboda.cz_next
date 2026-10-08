"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { navData } from "../data/navigationData";

export default function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const openButton = openButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openButton?.focus();
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="mobilniMenu">
      <button
        ref={openButtonRef}
        type="button"
        className="flex justify-end p-4 text-neutral-400 lg:hidden"
        onClick={openMenu}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="Otevřít menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          className="top-0 left-0 right-0 bg-modra2 px-2 pt-2 pb-4 z-50 flex flex-col text-brand-offwhite shadow-md w-full h-screen fixed"
          aria-label="Hlavní menu"
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="flex justify-end p-4 text-neutral-400"
            onClick={closeMenu}
            aria-label="Zavřít menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-y-2 w-full items-center type-body-lg my-2">
            <li className="flex px-8 py-4">
              <Link
                href="/"
                className="heroJmeno text-brand-offwhite"
                onClick={closeMenu}
              >
                Zbyněk Svoboda
              </Link>
            </li>
            {navData.map((menu) => (
              <li className="flex py-2" key={menu.link}>
                <Link
                  href={menu.link}
                  className="type-body-lg font-semibold text-brand-offwhite"
                  onClick={closeMenu}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <li className="flex py-4">
              <Link
                href="/#kontakt"
                className="ctaBtnPrimary text-center mx-auto w-full"
                onClick={closeMenu}
              >
                Probrat konkrétní problém
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
