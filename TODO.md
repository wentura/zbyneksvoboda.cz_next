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

- [x] Vytvořit komponenty pro jednotlivé sekce (viz `WIREFRAME.md`):
  - [x] `Hero` + trust strip
  - [x] `ProofStrip`
  - [x] `ProblemSection`
  - [x] `Services` (4 karty)
  - [x] `CaseStudiesPreview`
  - [x] `ProcessSection`
  - [x] `AboutPreview`
  - [x] `Cenik` (Pricing)
  - [x] `Contact`
- [x] Upravit `app/page.js` podle nové struktury.
- [x] Aktualizovat navigaci (header) podle nové struktury menu.
- [x] Podstránky služeb `/sluzby/[slug]`.
- [ ] `TestimonialsSection` na homepage (recenze zůstávají na `/recenze`).
- [ ] `FitSection` (Pro koho jsem / nejsem) – zatím nahrazeno `AboutPreview`.

---

## 3. Implementace textů

- [x] Texty v `app/data/*.js` (hero, problem, services, case studies, process, pricing, about, contact).
- [ ] Synchronizovat `COPY.md` s novým positioningem (volitelné).
- [ ] Testimonials na homepage (volitelné).

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
