# TODO – Redesign zbyneksvoboda.cz

Tento dokument slouží jako pracovní seznam úkolů pro redesign webu **Zbyňka Svobody** a průběžné vylepšování.

---

## 1. Příprava a analýza

- [ ] Záloha aktuální verze webu a repozitáře.
- [ ] Zkontrolovat aktuální strukturu kódu (Next.js verze, layout, komponenty).
- [ ] Projít `AGENTS.md`, `WIREFRAME.md`, `COPY.md`, `STYLEGUIDE.md` a ujasnit si cílový stav.
- [ ] Zhodnotit, které části stávajícího webu se dají znovu použít (komponenty, styly, sekce).

---

## 2. Struktura homepage

- [ ] Vytvořit nové komponenty pro jednotlivé sekce (viz `WIREFRAME.md`):
  - [ ] `HeroSection`
  - [ ] `ProblemSection`
  - [ ] `ServicesSection`
  - [ ] `ProcessSection`
  - [ ] `CaseStudiesSection`
  - [ ] `TestimonialsSection`
  - [ ] `FitSection` (Pro koho jsem / nejsem)
  - [ ] `PricingSection`
  - [ ] `ContactSection`
- [ ] Upravit hlavní stránku (`app/page.tsx` nebo ekvivalent) tak, aby používala tyto komponenty v definovaném pořadí.
- [ ] Aktualizovat navigaci (header) podle nové struktury menu.

---

## 3. Implementace textů

- [ ] Do `HeroSection` vložit texty z `COPY.md` → sekce 1.
- [ ] Do `ProblemSection` vložit texty z `COPY.md` → sekce 2.
- [ ] Do `ServicesSection` vložit 3 pilíře služeb z `COPY.md` → sekce 3.
- [ ] Do `ProcessSection` vložit kroky spolupráce z `COPY.md` → sekce 4.
- [ ] Do `CaseStudiesSection` vložit minimálně 3 případové studie z `COPY.md` → sekce 5.
- [ ] Do `TestimonialsSection` vložit referenční texty z `COPY.md` → sekce 6.
- [ ] Do `FitSection` vložit „Pro koho jsem / nejsem“ z `COPY.md` → sekce 7.
- [ ] Do `PricingSection` vložit orientační ceny z `COPY.md` → sekce 8.
- [ ] Do `ContactSection` vložit text a popisky z `COPY.md` → sekce 9.

---

## 4. Styling a UI

- [ ] Nastavit základní layout sekcí podle `STYLEGUIDE.md` (spacing, max-width, grid).
- [ ] Definovat konzistentní typografii (Tailwind utility) pro:
  - [ ] H1, H2, H3
  - [ ] odstavce
  - [ ] menší text (popisky, meta informace)
- [ ] Vybrat a nastavit barevnou paletu v souladu se `STYLEGUIDE.md` a existující identitou.
- [ ] Definovat komponentu pro primární tlačítko (CTA) a používat ji konzistentně.
- [ ] Stylovat karty služeb, case studies a recenzí podle `STYLEGUIDE.md`.
- [ ] Zajistit dostatečný kontrast textu a pozadí.

---

## 5. Responsivita

- [ ] Otestovat homepage na mobilech (320–480 px).
- [ ] U všech gridů zajistit přepnutí na 1 sloupec na malých šířkách.
- [ ] Ověřit, že CTA tlačítka jsou snadno kliknutelná.
- [ ] Zkontrolovat čitelnost textu na různých zařízeních.

---

## 6. Obsah a case studies

- [ ] Doplnit případové studie o konkrétnější výsledky, pokud jsou k dispozici (čísla, konverze, obsazenost apod.).
- [ ] Případně přidat další 1–2 projekty jako case studies (např. Harasov, SvouCestou apod.).
- [ ] U recenzí doplnit kontext (název projektu, typ spolupráce).

---

## 7. SEO a technické detaily

- [ ] Aktualizovat `<title>` a meta description v layoutu.
- [ ] Zkontrolovat nadpisovou hierarchii (1 × H1 na stránku, logická struktura H2/H3).
- [ ] Přidat základní Open Graph tagy (název, popis, obrázek).
- [ ] Zkontrolovat rychlost načítání a případně optimalizovat:
  - [ ] obrázky (rozměry, formát, lazy loading)
  - [ ] CSS a JS bundle
- [ ] Ověřit správné nastavení favicona a manifestu (pokud je potřeba).

---

## 8. Formulář a odesílání zpráv

- [ ] Navrhnout, jak bude formulář technicky řešen:
  - [ ] jednoduché serverless řešení
  - [ ] e-mail, Supabase, jiná varianta
- [ ] Implementovat backend nebo handler pro odesílání formuláře.
- [ ] Ošetřit validaci vstupních dat na frontendu i backendu.
- [ ] Přidat uživatelskou zpětnou vazbu (loading, success, error stavy).

---

## 9. Testování

- [ ] Projít kompletní homepage a zkontrolovat:
  - [ ] překlepy a jazyk
  - [ ] funkčnost všech odkazů a CTA
  - [ ] konzistenci stylu
- [ ] Otestovat na různých prohlížečích (Chrome, Firefox, Safari).
- [ ] Otestovat na mobilu (iOS, Android).

---

## 10. Další rozvoj (do budoucna)

Není nutné pro první iteraci, ale do TODO můžou přibýt:

- [ ] Vytvořit samostatnou stránku „Případové studie“ s detailnějšími rozbory.
- [ ] Přidat sekci „O mně“ s osobnějším příběhem a propojením na Human Design (role průvodce, konzultanta).
- [ ] Založit blog / články o:
  - [ ] web strategii
  - [ ] UX
  - [ ] práci s AI ve světě webů
  - [ ] případových studiích
- [ ] Vytvořit jazykovou verzi EN (pokud se rozhodneš cílit víc i na zahraničí).

---

## 11. Poznámky k dalším iteracím

- Při větších změnách struktury nebo obsahu aktualizovat:
  - `WIREFRAME.md`
  - `COPY.md`
  - `STYLEGUIDE.md`
- Udržovat TODO realisticky – pokud se něco dlouhodobě neplánuje, raději to z dokumentu odstranit nebo přesunout do sekce „Nápady“.

Tento TODO je výchozí plán.  
Dál se může upřesňovat podle reálného průběhu redesignu a nových nápadů.
