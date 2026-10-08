# Deployment checklist – zbyneksvoboda.cz

Kanonická doména: **https://www.zbyneksvoboda.cz**

## 1. DNS / přesměrování (mimo kód)

Apex `zbyneksvoboda.cz` dnes na WEDOS vrací jen HTML meta-refresh homepage a ostatní cesty 404. To musí být **HTTP 301/308** se zachováním cesty:

- `https://zbyneksvoboda.cz/*` → `https://www.zbyneksvoboda.cz/*`
- ideálně i `http://` → `https://www…`

Možnosti:
1. Vercel: apex doménu připojit k projektu a nastavit redirect na `www`
2. WEDOS: 301 redirect / DNS alias tak, aby Vercel obsluhoval i apex

Bez tohoto kroku opraví canonical/sitemap jen část SEO problému.

## 2. Environment variables (Vercel)

Viz `.env.example`:

| Proměnná | Povinné | Účel |
|----------|---------|------|
| `RESEND_API_KEY` | ano | odesílání e-mailů z formuláře |

Ochrana formuláře: honeypot, speed check, Origin allowlist, XSS escape. Redis/Upstash rate limit se nepoužívá.

## 3. Před deployem

```bash
npm run lint
npm run build
```

## 4. Po deployi ověřit

```bash
# Security headers
curl -sSI https://www.zbyneksvoboda.cz/ | rg -i 'content-security-policy|strict-transport-security|x-frame-options'

# Canonical = www
curl -sS https://www.zbyneksvoboda.cz/ | rg -o 'canonical" href="[^"]+'

# Sitemap URL existují
curl -sS https://www.zbyneksvoboda.cz/sitemap.xml

# Apex musí přesměrovat (po DNS úpravě)
curl -sSI https://zbyneksvoboda.cz/portfolio | rg -i '^HTTP|^location'

# /sluzby/* nejsou veřejné
curl -sS -o /dev/null -w '%{http_code}\n' https://www.zbyneksvoboda.cz/sluzby/diagnostika
```

## 5. Co není veřejné

- Detailní stránky `/sluzby/[slug]` — data zůstávají v `app/data/servicesData.js`, routa je odstraněna
