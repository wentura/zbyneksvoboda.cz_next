# TODO – Redesign zbyneksvoboda.cz

Pracovní seznam. Live texty jsou v `app/data/*.js`. Kanonická doména: **www.zbyneksvoboda.cz**.

---

## Hotovo (stav 2026)

- [x] Homepage sekce: Hero, Problem, SolutionOptions, CaseStudies, Services, Process, Cenik, Fit, FAQ, RecenzeShort, Contact
- [x] Content v `app/data/*.js` + agregace `content.js`
- [x] Kontaktní formulář (Resend) + honeypot + speed check + Origin + XSS escape
- [x] Security headers v `next.config.mjs` (CSP, HSTS, …)
- [x] Formulář bez Redis: honeypot + speed check + Origin (Upstash odstraněn)
- [x] SafeHtml přes `sanitize-html`
- [x] Case studies: UGHighers + Svou Cestou (`/portfolio/pripadovaStudie/…`)
- [x] Recenze na homepage (`RecenzeShort`) + `/recenze`
- [x] Kanonické URL / sitemap / robots na `https://www.zbyneksvoboda.cz`
- [x] Veřejné `/sluzby/[slug]` odstraněny ze sitemap i routy (detail copy zůstává v datech)
- [x] ESLint flat config (`eslint .`) pro Next.js 16
- [x] Mobilní hero: text + CTA před vizuálem; menu s a11y (aria, Escape, scroll lock)
- [x] Deployment checklist: `DEPLOYMENT.md` + `.env.example`

---

## Aktivní – před / po deployi

- [ ] **DNS:** 301/308 z `zbyneksvoboda.cz/*` → `www.zbyneksvoboda.cz/*` (WEDOS/Vercel) — meta-refresh nestačí
- [ ] **Vercel ENV:** `RESEND_API_KEY` (Upstash ENV už nejsou potřeba — případně smazat ze Vercelu)
- [ ] Po deployi smoke test podle `DEPLOYMENT.md` (headers, canonical, sitemap, formulář)

---

## UX / obsah (volitelné)

- [ ] ProofStrip — data existují; zapnout jen pokud dávají smysl nad hero (čísla už jsou v case studies)
- [ ] Obnovit veřejné `/sluzby/[slug]` až budou připravené a odkazované z homepage
- [ ] Doplnit další case study až po reálném dopadu (např. LunaPlast)
- [ ] Doladit mobilní spacing na 320–480 px po ostrém deployi

---

## Odloženo (neblokuje)

- [ ] Blog / thought leadership
- [ ] EN verze
- [ ] Gradual TypeScript migrace
- [ ] Samostatná „O mně“ stránka
- [ ] Analytics dashboard / A/B testy

---

## Poznámky

- Nepoužívané komponenty smazané (2026 stabilizace): `Stripe`, `StartSection`, `AboutPreview`, `PortfolioImpactSection`, `CaseStudiesSection`, `mail`, `phone`
- Zachováno pro budoucnost: `ServiceDetailPage`, `ProofStrip`, `servicesData.detail`
- Při větších změnách aktualizovat `WIREFRAME.md`, `COPY.md`, `STYLEGUIDE.md`, `DEPLOYMENT.md`
