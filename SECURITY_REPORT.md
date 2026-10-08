# Bezpečnostní audit - zbyneksvoboda.cz
## Analýza podle OWASP Top 10 2025

> Historický audit. Aktuální stav: `SECURITY_IMPLEMENTATION.md`.  
> Upstash/Redis rate limit byl později odstraněn — spam řeší honeypot + speed check + Origin.

**Datum:** 2025-01-XX  
**Verze:** 1.0  
**Next.js:** 16.0.7  
**React:** 19.0.0

---

## 🔴 VYSOKÁ RIZIKA - Vyžadují okamžitou akci

### 1. A05:2025 - Injection (XSS) - Email Content

**Závažnost:** VYSOKÁ  
**Lokalita:** `app/api/contact/route.js:100-110`

#### Problém

Email obsahuje neescapované uživatelské vstupy, které jsou vkládány přímo do HTML:

```javascript
const emailContent = `
  <h2>Nová zpráva z kontaktního formuláře</h2>
  <p><strong>Jméno:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
  ${website ? `<p><strong>Web:</strong> ${website}</p>` : ""}
  <p><strong>O čem budeme diskutovat:</strong></p>
  <p>${discussion.replace(/\n/g, "<br>")}</p>
`;
```

**Riziko:**
- Útočník může vložit HTML/JavaScript do polí formuláře
- Pokud je email renderován jako HTML v email klientu, může dojít k XSS útoku
- Útočník může odeslat škodlivý kód, který se spustí při otevření emailu

**Příklad útoku:**
```
Jméno: <img src=x onerror="alert('XSS')">
Email: test@test.com
Discussion: <script>alert('XSS')</script>
```

#### Řešení

**Implementovat HTML escaping funkci:**

```javascript
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Použití:
const emailContent = `
  <h2>Nová zpráva z kontaktního formuláře</h2>
  <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
  ${website ? `<p><strong>Web:</strong> ${escapeHtml(website)}</p>` : ""}
  <p><strong>O čem budeme diskutovat:</strong></p>
  <p>${escapeHtml(discussion).replace(/\n/g, "<br>")}</p>
`;
```

**Alternativně použít knihovnu:**
```bash
npm install he
```

```javascript
import he from 'he';

const emailContent = `
  <h2>Nová zpráva z kontaktního formuláře</h2>
  <p><strong>Jméno:</strong> ${he.encode(name)}</p>
  <p><strong>Email:</strong> ${he.encode(email)}</p>
  ${phone ? `<p><strong>Telefon:</strong> ${he.encode(phone)}</p>` : ""}
  ${website ? `<p><strong>Web:</strong> ${he.encode(website)}</p>` : ""}
  <p><strong>O čem budeme diskutovat:</strong></p>
  <p>${he.encode(discussion).replace(/\n/g, "<br>")}</p>
`;
```

**Dodatečně přidat validaci délky:**
```javascript
// Max délky pro prevenci DoS
const MAX_LENGTHS = {
  name: 200,
  email: 254,
  phone: 50,
  website: 200,
  discussion: 5000
};

if (name.length > MAX_LENGTHS.name) {
  return NextResponse.json(
    { message: "Jméno je příliš dlouhé." },
    { status: 400 }
  );
}
// ... podobně pro ostatní pole
```

---

### 2. A05:2025 - Injection (XSS) - dangerouslySetInnerHTML

**Závažnost:** STŘEDNÍ-VYSOKÁ (závisí na zdroji dat)  
**Lokalita:** 15 výskytů v různých komponentách

#### Problém

Aplikace používá `dangerouslySetInnerHTML` pro renderování HTML z datových souborů:

**Nalezené výskyty:**
- `app/(main)/portfolio/page.jsx:86-88` - `item.caseStudy.studyTextLong`
- `app/(main)/portfolio/page.jsx:137` - `item.shortDecs`
- `app/(main)/portfolio/pripadovaStudie/[slug]/page.jsx:40` - `item.caseStudy.studyTextLong`
- `app/components/portfolioComplete.jsx:61, 92` - `item.shortDecs`
- `app/(main)/recenze/page.jsx:41-43` - `recenze.textShort` / `recenze.text`
- `app/components/portfolio.jsx` - 8 výskytů
- `app/(main)/ckdfaq/page.jsx:38` - `ckd.text`

**Příklad kódu:**
```jsx
<div
  dangerouslySetInnerHTML={{
    __html: item.caseStudy.studyTextLong,
  }}
/>
```

**Riziko:**
- Pokud by data pocházela z externího zdroje (API, databáze, uživatelský vstup), mohlo by dojít k XSS útoku
- Aktuálně jsou data v lokálních souborech (`portfolioData.js`, `recenzeData.js`), což snižuje riziko
- Pokud se v budoucnu přidá admin rozhraní pro editaci, stane se to kritickým rizikem

#### Řešení

**1. Implementovat sanitizaci pomocí DOMPurify:**

```bash
npm install dompurify
npm install --save-dev @types/dompurify
```

**Vytvořit helper komponentu:**

```jsx
// app/components/SafeHtml.jsx
import DOMPurify from 'dompurify';

export default function SafeHtml({ html, className = '' }) {
  if (!html) return null;
  
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'class', 'target', 'rel'],
    ALLOW_DATA_ATTR: false
  });

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
```

**Použití:**
```jsx
// Před:
<div dangerouslySetInnerHTML={{ __html: item.caseStudy.studyTextLong }} />

// Po:
<SafeHtml html={item.caseStudy.studyTextLong} className="..." />
```

**2. Alternativně použít React komponenty místo HTML:**

Pro nový obsah preferovat React komponenty místo raw HTML, pokud je to možné.

**3. Validace při build time:**

Přidat validaci do build procesu, která kontroluje, že HTML v datových souborech neobsahuje nebezpečné tagy:

```javascript
// scripts/validate-html.js
const dangerousTags = ['script', 'iframe', 'object', 'embed', 'link', 'style'];
// ... validace logika
```

---

### 3. A02:2025 - Security Misconfiguration - Chybějící Security Headers

**Závažnost:** VYSOKÁ  
**Lokalita:** `next.config.mjs`, `app/layout.js`

#### Problém

Aplikace neobsahuje žádné security headers v Next.js konfiguraci:

```javascript
// next.config.mjs - aktuální stav
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};
```

**Chybějící headers:**
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

#### Řešení

**Implementovat security headers v `next.config.mjs`:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://matomo.zbyneksvoboda.cz",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://matomo.zbyneksvoboda.cz https://api.resend.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-src 'none'",
              "object-src 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Poznámka:** CSP policy může vyžadovat úpravy podle konkrétních potřeb aplikace. Testovat po implementaci.

**Pro vývojové prostředí použít méně striktní CSP:**

```javascript
const isProduction = process.env.NODE_ENV === 'production';

const cspPolicy = isProduction
  ? [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://matomo.zbyneksvoboda.cz",
      // ... produkční policy
    ].join('; ')
  : [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // ... vývojová policy
    ].join('; ');
```

---

### 4. A01:2025 - Broken Access Control - Rate Limiting

**Závažnost:** VYSOKÁ (v produkci)  
**Lokalita:** `app/api/contact/route.js:4-33`

#### Problém

Rate limiting je implementován pouze in-memory:

```javascript
// Simple in-memory rate limiter: max 5 requests per IP per 10 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  ipHits.set(ip, entry);
  return false;
}
```

**Problémy:**
1. Při restartu serveru se limity resetují
2. V serverless prostředí (Vercel) každá instance má vlastní Map
3. IP adresa může být snadno falšována
4. Neexistuje persistentní storage

#### Řešení

**Pro Vercel použít Upstash Redis:**

```bash
npm install @upstash/ratelimit @upstash/redis
```

```javascript
// app/api/contact/route.js
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "@upstash/ratelimit/contact",
});

export async function POST(request) {
  try {
    // Rate limit check
    const ip = getClientIp(request);
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { 
          message: "Příliš mnoho požadavků. Zkuste to prosím později.",
          retryAfter: reset
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          }
        },
      );
    }
    
    // ... zbytek kódu
  }
}
```

**Nastavení Upstash:**
1. Vytvořit účet na https://upstash.com
2. Vytvořit Redis databázi
3. Přidat do `.env.local`:
```
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

**Alternativně použít Vercel Edge Config:**

```javascript
import { get } from '@vercel/edge-config';

// Implementace rate limiting s Edge Config
```

**Dodatečné zlepšení - kombinovat více faktorů:**

```javascript
// Kombinovat IP + email pro lepší ochranu
const identifier = `${ip}:${email}`;
const { success } = await ratelimit.limit(identifier);
```

---

## 🟡 STŘEDNÍ RIZIKA

### 5. A09:2025 - Security Logging & Alerting Failures

**Závažnost:** STŘEDNÍ  
**Lokalita:** `app/api/contact/route.js:49, 123, 137`

#### Problém

Aplikace používá `console.error()` místo strukturovaného logování:

```javascript
console.error("RESEND_API_KEY is not set");
console.error("Resend error:", error);
console.error("Contact form error:", error);
```

**Chybějící:**
- Strukturované logování
- Logování security events (rate limit hits, failed validations)
- Alerting pro podezřelé aktivity
- Audit trail

#### Řešení

**Implementovat strukturované logování:**

```bash
npm install pino pino-pretty
```

```javascript
// lib/logger.js
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  ...(process.env.NODE_ENV === 'development' && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  })
});

export default logger;
```

**Použití v API route:**

```javascript
import logger from '@/lib/logger';

export async function POST(request) {
  const ip = getClientIp(request);
  const startTime = Date.now();
  
  try {
    // Rate limit check
    if (isRateLimited(ip)) {
      logger.warn({
        event: 'rate_limit_exceeded',
        ip,
        path: '/api/contact'
      });
      return NextResponse.json(/* ... */);
    }
    
    // ... validace
    
    // Log successful submission
    logger.info({
      event: 'contact_form_submitted',
      ip,
      email: email.substring(0, 3) + '***', // Partial email for privacy
      duration: Date.now() - startTime
    });
    
  } catch (error) {
    logger.error({
      event: 'contact_form_error',
      ip,
      error: error.message,
      stack: error.stack
    });
  }
}
```

**Pro produkci použít Vercel Logs nebo externí službu:**

```javascript
// Integrace s Vercel Logs nebo Datadog/Sentry
if (process.env.VERCEL_ENV === 'production') {
  // Poslat do externího logování
}
```

---

### 6. A10:2025 - Mishandling Exceptional Conditions

**Závažnost:** STŘEDNÍ  
**Lokalita:** `app/api/contact/route.js:136-142`

#### Problém

Generic error handling bez konkrétních typů chyb:

```javascript
} catch (error) {
  console.error("Contact form error:", error);
  return NextResponse.json(
    { message: "Něco se pokazilo. Zkuste to prosím znovu." },
    { status: 500 },
  );
}
```

#### Řešení

**Implementovat specifické error handling:**

```javascript
// lib/errors.js
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

export class RateLimitError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RateLimitError';
    this.statusCode = 429;
  }
}

export class ExternalServiceError extends Error {
  constructor(message, service) {
    super(message);
    this.name = 'ExternalServiceError';
    this.statusCode = 502;
    this.service = service;
  }
}
```

**Použití:**

```javascript
import { ValidationError, ExternalServiceError } from '@/lib/errors';
import logger from '@/lib/logger';

export async function POST(request) {
  try {
    // ... validace
    if (!name || !email || !discussion) {
      throw new ValidationError("Všechna povinná pole musí být vyplněna.");
    }
    
    // ... odeslání emailu
    if (error) {
      throw new ExternalServiceError("Chyba při odesílání emailu", "Resend");
    }
    
  } catch (error) {
    // Log error s kontextem
    logger.error({
      event: 'api_error',
      errorType: error.name,
      message: error.message,
      statusCode: error.statusCode || 500,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
    
    // Return appropriate response
    const statusCode = error.statusCode || 500;
    const message = statusCode >= 500 
      ? "Něco se pokazilo. Zkuste to prosím znovu."
      : error.message;
    
    return NextResponse.json(
      { message },
      { status: statusCode }
    );
  }
}
```

---

### 7. A04:2025 - Cryptographic Failures - Email Content

**Závažnost:** STŘEDNÍ (souvisí s XSS)  
**Lokalita:** `app/api/contact/route.js:100-110`

#### Problém

Email obsahuje neescapované vstupy (viz sekce 1). Dodatečně chybí validace délky.

#### Řešení

Viz řešení v sekci 1 (XSS - Email Content). Dodatečně přidat:

```javascript
// Validace délky před zpracováním
const MAX_LENGTHS = {
  name: 200,
  email: 254, // RFC 5321
  phone: 50,
  website: 200,
  discussion: 5000
};

function validateLength(field, value, maxLength) {
  if (value && value.length > maxLength) {
    throw new ValidationError(`${field} je příliš dlouhé (max ${maxLength} znaků).`);
  }
}

// Použití před vytvořením emailu
validateLength('Jméno', name, MAX_LENGTHS.name);
validateLength('Email', email, MAX_LENGTHS.email);
validateLength('Telefon', phone, MAX_LENGTHS.phone);
validateLength('Web', website, MAX_LENGTHS.website);
validateLength('Zpráva', discussion, MAX_LENGTHS.discussion);
```

---

## 🟢 NÍZKÁ RIZIKA / DOPORUČENÍ

### 8. A03:2025 - Software Supply Chain Failures

**Status:** ✅ Dobře spravováno  
**Doporučení:**

1. **Nastavit Dependabot:**
   Vytvořit `.github/dependabot.yml`:
   ```yaml
   version: 2
   updates:
     - package-ecosystem: "npm"
       directory: "/"
       schedule:
         interval: "weekly"
       open-pull-requests-limit: 10
   ```

2. **Přidat npm audit do CI/CD:**
   ```json
   {
     "scripts": {
       "security:audit": "npm audit --audit-level=moderate",
       "security:fix": "npm audit fix"
     }
   }
   ```

3. **Vytvořit SBOM:**
   ```bash
   npm install -g @cyclonedx/cyclonedx-npm
   cyclonedx-npm --output-file sbom.json
   ```

---

### 9. A06:2025 - Insecure Design

**Status:** ✅ Dobře navrženo  
**Pozitivní:**
- Honeypot field implementován
- Speed check (form timing)
- Rate limiting implementován

**Doporučení:**
- Zvážit přidání CSRF tokenu (Next.js má built-in ochranu, ale explicitní token může pomoci)
- Pro kritické formuláře zvážit CAPTCHA (např. hCaptcha)

---

### 10. A08:2025 - Software and Data Integrity Failures

**Závažnost:** NÍZKÁ  
**Lokalita:** `app/components/matomo.jsx:36`

#### Problém

Matomo tracking používá externí URL bez integrity check.

#### Řešení

Pro tracking pixel není SRI relevantní (je to img tag, ne script). Pro budoucí externí skripty použít SRI:

```html
<script 
  src="https://example.com/script.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```

---

## Implementační checklist

### Priorita 1 - OKAMŽITĚ
- [ ] Opravit XSS v emailu (escapování HTML)
- [ ] Přidat validaci délky vstupů
- [ ] Implementovat security headers (CSP, HSTS, atd.)

### Priorita 2 - VYSOKÁ
- [ ] Opravit rate limiting pro produkci (Upstash Redis)
- [ ] Implementovat sanitizaci pro `dangerouslySetInnerHTML` (DOMPurify)
- [ ] Přidat strukturované logování

### Priorita 3 - STŘEDNÍ
- [ ] Zlepšit error handling (specifické error třídy)
- [ ] Přidat audit trail pro formulářové odeslání
- [ ] Nastavit alerting pro podezřelé aktivity

### Priorita 4 - NÍZKÁ
- [ ] Nastavit Dependabot pro automatické security updates
- [ ] Přidat npm audit do CI/CD pipeline
- [ ] Vytvořit SBOM

---

## Testování bezpečnosti

### Po implementaci otestovat:

1. **XSS testy:**
   ```javascript
   // Test payloady pro formulář
   const xssPayloads = [
     '<script>alert("XSS")</script>',
     '<img src=x onerror="alert(1)">',
     'javascript:alert(1)',
     '<svg onload="alert(1)">'
   ];
   ```

2. **Rate limiting testy:**
   - Odeslat více než 5 požadavků za 10 minut
   - Ověřit, že limit je enforced napříč instancemi

3. **Security headers testy:**
   ```bash
   curl -I https://zbyneksvoboda.cz | grep -i "x-frame-options\|content-security-policy\|strict-transport-security"
   ```

4. **CSP testy:**
   - Ověřit, že CSP blokuje neautorizované skripty
   - Testovat všechny externí zdroje (Matomo, Cloudinary)

---

## Zdroje

- [OWASP Top 10 2025](https://owasp.org/Top10/)
- [Next.js Security Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)
- [Upstash Rate Limiting](https://upstash.com/docs/redis/features/ratelimiting)

---

**Report vytvořen:** 2025-01-XX  
**Další review:** Doporučeno za 3 měsíce nebo po významných změnách
