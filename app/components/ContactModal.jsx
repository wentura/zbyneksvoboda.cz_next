// * Klientská komponenta kvůli modalu.
"use client";
// * Importy pro React a kontaktní formulář.
import React, { useState } from "react";
import ContactForm from "./contactForm";

// * Export modalu pro kontakt.
export default function ContactModal({ isOpen, onClose }) {
  // * Pokud modal není otevřený, nic nerenderuj.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-modra2 rounded-lg shadow-lg max-w-lg w-full relative p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 type-body-lg font-bold"
          aria-label="Zavřít"
        >
          ×
        </button>
        <h2 className="type-h2 font-bold mb-4 text-center text-neutral-100">
          Dohodněme si konzultaci
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
