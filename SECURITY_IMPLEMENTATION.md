# Implementované bezpečnostní opravy

**Status:** kritické a vysoké priority hotové. Produkční checklist: `DEPLOYMENT.md`.

---

## Hotovo

### 1. XSS v e-mailu
- `escapeHtml()` v `lib/utils.js`
- validace délek (`MAX_LENGTHS`)
- všechny vstupy ve `app/api/contact/route.js` escapované

### 2. Sanitizace HTML na webu
- `app/components/SafeHtml.jsx` + `sanitize-html` (allowlist)

### 3. Security headers
- `next.config.mjs`: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- ověřeno na `https://www.zbyneksvoboda.cz`

### 4. Kontaktní formulář — spam / bot ochrana
- honeypot (`company`)
- speed check (`formStartedAt`, 3 s – 24 h)
- Origin/Referer allowlist
- Resend (`RESEND_API_KEY`)
- **bez Upstash/Redis rate limitu** (záměrně; nízký objem + honeypot stačí)

### 5. Logování a chyby
- `lib/logger.js` (JSON)
- `lib/errors.js` (`ValidationError`, `ExternalServiceError`, `ConfigurationError`)

---

## Provozní akce (mimo kód)

1. Nastavit `RESEND_API_KEY` na Vercelu
2. HTTP 301/308 z apex `zbyneksvoboda.cz` → `www` se zachováním cesty
3. Po deployi: kontroly v `DEPLOYMENT.md`

---

## Soubory

| Soubor | Účel |
|--------|------|
| `lib/utils.js` | escapeHtml, validace délek |
| `lib/errors.js` | chybové třídy |
| `lib/logger.js` | strukturované logy |
| `lib/site.js` | kanonická `SITE_URL` (www) |
| `app/components/SafeHtml.jsx` | sanitizace HTML |
| `next.config.mjs` | security headers |
| `.env.example` | šablona ENV |
