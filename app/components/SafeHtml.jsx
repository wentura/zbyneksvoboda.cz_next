// * Klientská komponenta kvůli useEffect.
"use client";

// * Importy React hooků pro sanitizaci HTML.
import { useEffect, useState } from "react";

/**
 * Bezpečná komponenta pro renderování HTML s sanitizací
 * Pro produkci použít DOMPurify, prozatím základní sanitizace
 */
// * Export bezpečné komponenty pro render HTML.
export default function SafeHtml({ html, className = '' }) {
  const [sanitizedHtml, setSanitizedHtml] = useState('');

  useEffect(() => {
    // * Pokud HTML chybí, vymaž obsah.
    if (!html) {
      setSanitizedHtml('');
      return;
    }

    // * Základní sanitizace - odstranění nebezpečných tagů.
    // * Pro produkci doporučeno použít DOMPurify: npm install dompurify.
    let sanitized = String(html);
    
    // * Odstranit script tagy a jejich obsah.
    sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // * Odstranit iframe tagy.
    sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
    
    // * Odstranit object a embed tagy.
    sanitized = sanitized.replace(/<(object|embed)\b[^<]*(?:(?!<\/\1>)<[^<]*)*<\/\1>/gi, '');
    
    // * Odstranit javascript: v atributech.
    sanitized = sanitized.replace(/javascript:/gi, '');
    
    // * Odstranit onerror, onload a další event handlery.
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, '');

    setSanitizedHtml(sanitized);
  }, [html]);

  // * Pokud není nic k zobrazení, vrať null.
  if (!sanitizedHtml) return null;

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
