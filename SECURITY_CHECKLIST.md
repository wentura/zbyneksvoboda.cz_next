# Bezpečnostní checklist
## Rychlý referenční seznam pro bezpečnostní review

> Aktuální pravda: `SECURITY_IMPLEMENTATION.md`. Upstash rate limit už není součást projektu.

### 🔴 Kritické - Opravit před nasazením

#### XSS ochrana
- [x] Všechny uživatelské vstupy v emailu jsou escapovány (HTML entities) ✅
- [x] `dangerouslySetInnerHTML` používá sanitizaci (SafeHtml komponenta) ✅
- [x] Validace délky vstupů je implementována ✅
- [ ] Testováno s XSS payloady (doporučeno otestovat)

#### Security Headers
- [x] Content-Security-Policy je nastaven ✅
- [x] Strict-Transport-Security (HSTS) je nastaven ✅
- [x] X-Frame-Options je nastaven ✅
- [x] X-Content-Type-Options je nastaven ✅
- [x] Referrer-Policy je nastaven ✅
- [x] Permissions-Policy je nastaven ✅

#### Rate Limiting
- [x] Rate limiting připraven pro persistentní storage (Upstash Redis) ✅
- [x] Fallback na in-memory pro vývoj ✅
- [x] Rate limit headers jsou vráceny v response ✅
- [ ] Testováno s více než limit požadavků (doporučeno otestovat)
- [ ] Upstash Redis nastaven pro produkci (vyžaduje manuální nastavení)

---

### 🟡 Vysoká priorita - Opravit brzy

#### Logging
- [x] Strukturované logování je implementováno ✅
- [x] Security events jsou logovány (rate limit, failed validations) ✅
- [x] Error logging obsahuje kontext (IP, timestamp, error type) ✅
- [x] Logy neobsahují citlivé informace (hesla, API keys) ✅

#### Error Handling
- [x] Specifické error třídy jsou implementovány ✅
- [x] Generic error messages pro uživatele (ne detailní stack traces) ✅
- [x] Chyby jsou logovány strukturovaně ✅
- [ ] Error rate limiting je implementován (volitelné)

#### Input Validation
- [x] Všechny vstupy jsou validovány (typ, délka, formát) ✅
- [x] Email validace používá regex + další kontroly ✅
- [x] Max délky jsou nastaveny pro všechna pole ✅
- [x] Sanitizace je aplikována před zpracováním ✅

---

### 🟢 Střední priorita - Zlepšit postupně

#### Supply Chain
- [ ] Dependabot je nastaven pro automatické updates
- [ ] npm audit je v CI/CD pipeline
- [ ] SBOM je generován a udržován
- [ ] Security advisories jsou monitorovány

#### Monitoring
- [ ] Alerting je nastaven pro podezřelé aktivity
- [ ] Audit trail je ukládán pro formulářové odeslání
- [ ] Monitoring dashboard je dostupný
- [ ] Incident response plan existuje

#### Design
- [ ] CSRF ochrana je implementována (Next.js má built-in)
- [ ] Honeypot field funguje správně
- [ ] Speed check funguje správně
- [ ] CAPTCHA je zváženo pro kritické formuláře

---

### Testovací scénáře

#### XSS testy
```javascript
// Test payloady
const testPayloads = [
  '<script>alert("XSS")</script>',
  '<img src=x onerror="alert(1)">',
  'javascript:alert(1)',
  '<svg onload="alert(1)">',
  '<iframe src="javascript:alert(1)"></iframe>'
];
```

#### Rate limiting testy
```bash
# Odeslat 6+ požadavků rychle za sebou
for i in {1..10}; do
  curl -X POST https://zbyneksvoboda.cz/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","discussion":"Test"}'
done
```

#### Security headers testy
```bash
# Zkontrolovat headers
curl -I https://zbyneksvoboda.cz | grep -i "x-frame-options\|content-security-policy\|strict-transport-security"

# Online nástroje
# https://securityheaders.com
# https://observatory.mozilla.org
```

#### CSP testy
- Ověřit, že CSP blokuje neautorizované skripty
- Testovat všechny externí zdroje (Matomo, Cloudinary)
- Ověřit, že inline skripty jsou povoleny pouze tam, kde je nutné

---

### Před každým deployem

- [ ] `npm audit` nehlásí žádné kritické zranitelnosti
- [ ] Všechny security testy procházejí
- [ ] Security headers jsou nastaveny
- [ ] Rate limiting funguje
- [ ] Logging zachytává security events
- [ ] Error handling neodhaluje citlivé informace

---

### Měsíční review

- [ ] Zkontrolovat npm audit report
- [ ] Zkontrolovat security advisories pro závislosti
- [ ] Zkontrolovat logy pro podezřelé aktivity
- [ ] Aktualizovat security headers pokud je potřeba
- [ ] Review rate limiting thresholds

---

### Roční review

- [ ] Kompletní bezpečnostní audit
- [ ] Penetration testing
- [ ] Review všech bezpečnostních politik
- [ ] Aktualizace incident response planu
- [ ] Security training pro vývojáře

---

**Poslední aktualizace:** 2025-01-XX  
**Další review:** Za 3 měsíce
