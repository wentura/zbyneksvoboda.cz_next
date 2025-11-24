# AGENTS – zbyneksvoboda.cz

## 0. Účel projektu

Tento projekt je osobní web **Zbyňka Svobody** – webového konzultanta a digitálního stratéga.

Cíl webu:
- neprezentovat Zbyňka jako „kodéra, co dělá weby pro všechny“
- ale jako **webového konzultanta, strategického partnera a web leadera / fractional CTO**
- web má prodávat zejména:
  - úvodní konzultaci
  - UX / web consulting (audity)
  - Web Leadership (dlouhodobá spolupráce)
  - High-end web / redesign (kompletní řešení)

Web má působit:
- stručně
- sebevědomě
- konzultačně
- lidsky, bez přehnané omáčky
- vizuálně čistě (švýcarský minimalismus, hodně whitespace)

---

## 1. Role asistenta (Cursor / AI)

Jako AI asistent v Cursoru:

1. **Vždy si nejprve přečti:**
   - `WIREFRAME.md` – struktura a layout webu
   - `COPY.md` – texty pro jednotlivé sekce
   - `STYLEGUIDE.md` – vizuální a obsahové zásady
   - `TODO.md` – aktuální úkoly a priority

2. **Primární úkoly:**
   - pomáhat s redesignem homepage a případně dalších podstránek
   - generovat a upravovat komponenty pro Next.js + Tailwind
   - pomáhat udržet konzistenci textů, stylu a struktury
   - navrhovat zlepšení UX / struktury / obsahu v souladu s positioningem

3. **Jazyk:**
   - default: **čeština**
   - tón: vykání, profesionální, lidský, bez přehnaných marketingových klišé
   - někdy je možné použít lehce hovorový tón (např. v blogu), ale stále profesionálně

4. **Co nedělat:**
   - nevymýšlet generické texty typu „jsme dynamický tým…“
   - nepoužívat lorem ipsum, pokud existuje relevantní text v `COPY.md`
   - neměnit zásadní positioning (web consultant & strategist) zpět na „jen webdesigner“
   - nepřidávat složitý vizuální balast, efekty nebo „agenturácký“ styl

---

## 2. Tech stack a směrování

Projekt běží na:
- **Next.js** (App Router, TypeScript)
- **Tailwind CSS**
- může používat:
  - shadcn/ui komponenty
  - jednoduché animace (Framer Motion) – střídmě, jen tam, kde dávají smysl

Zásady:
- čistý, přehledný kód
- pojmenované komponenty podle účelu (např. `HeroSection`, `ServicesSection`, `CaseStudiesSection`, `TestimonialsSection`, `ProcessSection`, `PricingSection`, `ContactSection`)
- kompozice přes malé komponenty, které jsou znovupoužitelné
- Tailwind třídy udržovat čitelné, nepřehánět inline chaos → případně použít menší pomocné komponenty / varianty

---

## 3. Pozicování Zbyňka

Zbyněk NENÍ:
- „levný kodér pro kohokoliv“
- člověk na „web za 5–15 tisíc“
- generátor designu bez strategie

Zbyněk JE:
- **webový konzultant** a **digitální stratég**
- člověk, který vede firmy k výsledku
- partner, který rozumí:
  - technologiím (Next.js, Tailwind, Supabase, Shoptet, Shoptet integrace atd.)
  - UX a strukturování obsahu
  - základní marketingové strategii a pozicování
  - potřebám klienta i jeho zákazníků

Klíčová sdělení:
- „Web není vizitka. Web je nástroj růstu.“
- „Nejen design. Nejen kód. Ale vedení celého procesu.“
- „Od nápadu po měřitelný výsledek.“

---

## 4. Struktura homepage (high-level)

Detailní struktura je v `WIREFRAME.md`, ale shrnutí pro rychlou orientaci:

1. **Hero** – kdo je Zbyněk, co dělá, pro koho, hlavní CTA (konzultace)
2. **Problém – proč většina webů nefunguje** – krátké vysvětlení, že problém není jen v kódu/grafice
3. **Služby / Řešení (3 pilíře)**:
   - UX & Web Consulting (audity, analýzy)
   - Web Leadership (fractional CTO)
   - High-end web / redesign
4. **Jak pracuji (proces)** – kroky spolupráce
5. **Případové studie** – 2–4 klíčové projekty s problémem → řešením → výsledkem
6. **Recenze** – vybrané reference od klientů
7. **Pro koho jsem / nejsem** – filtrování klientů
8. **Orientační ceník**
9. **Kontakt / konzultace** – formulář + kontakty

---

## 5. Pravidla pro texty (copywriting)

Vždy respektuj:

- Je to web jednoho člověka, ne agentury.
- „Já“ je v pořádku (Zbyněk jako autor), ale střídá se s „my“ jen pokud se mluví o spolupráci s klienty. Ideálně se držet „já“.
- Vykání klientům – používat „vy / vám / vaše“, případně velké V podle kontextu (ale hlavně konzistentně).
- Kratší věty, jasná sdělení.
- Místo abstraktních frází preferuj konkrétní přínosy:
  - „Pomůžu vám zjistit, proč váš web nefunguje – a co s tím.“
  - „Navrhnu strukturu, která klientům pomůže se rychle rozhodnout.“
  - „Vezmu si na starost technické vedení vašeho webu.“

Zakázané / nežádoucí:
- generické „jsme tým mladých profesionálů…“
- přehnaně květnaté, nafouklé texty
- vykřičníky v každé větě
- emotikony

---

## 6. Design & UX principy

Detailně rozepsáno ve `STYLEGUIDE.md`, ale klíčové body:

- švýcarský / minimalistický styl
- hodně whitespace
- jednoduchá typografie (bez patkový font pro text, případně výraznější font pro nadpisy)
- přehledné sekce, žádný chaos
- důraz na čitelnost (kontrast, velikost písma)
- CTA prvky jasné, ale nepřeřvané

Asistent by měl při návrzích kódu:
- dodržovat definovaný design systém
- nepřidávat nové barvy, které nejsou v paletě
- nezavádět nové vizuální styly bez důvodu

---

## 7. Práce s WIREFRAME.md a COPY.md

- Pokud už existuje text v `COPY.md`, PRIORITNĚ ho používej.
- Úpravy textu dělej v duchu `STYLEGUIDE.md`.
- Pokud je potřeba text rozšířit, dodržuj:
  - tón (konzultant, ne agentura),
  - cílovku (malé a střední firmy, projekty s ambicí růstu),
  - pozicování Zbyňka (web consultant & strategist, ne jen kóder).

---

## 8. TODO a workflow

Když asistent řeší konkrétní úkol:
- Podívej se do `TODO.md`, zda už je tam daný úkol zapsaný.
- Pokud vznikne nové větší téma (např. nová podstránka, blog, nový typ case study), navrhni jeho doplnění do `TODO.md` a / nebo `WIREFRAME.md`.
- Udržuj soubory aktualizované, pokud děláš větší změny struktury nebo obsahu.

---

## 9. Příklady úkolů, se kterými můžeš pomoct

- Přepsat konkrétní sekci homepage podle `STYLEGUIDE.md`
- Vytvořit React/Next.js komponentu pro konkrétní sekci (`HeroSection`, `ServicesSection`, …)
- Připravit HTML strukturu + Tailwind třídy dle `WIREFRAME.md`
- Upravit texty v `COPY.md` podle změn pozicování nebo nových služeb
- Navrhnout, jak z existujícího portfolia udělat „případové studie“ (problem → solution → result)
- Optimalizovat strukturu navigace nebo CTA

---

## 10. Shrnutí

- Zbyněk je **web consultant & strategist**, ne „kodér na webíky“.
- Web má prodávat **konzultaci** a **strategická řešení**, ne jen grafickou podobu.
- Asistent má být:
  - konkrétní
  - konzistentní
  - respektovat existující soubory: `WIREFRAME.md`, `COPY.md`, `STYLEGUIDE.md`, `TODO.md`
- Jakékoliv změny, které by rozbíjely pozicování nebo styl, se mají dělat opatrně a vědomě – ideálně s komentářem v TODO, proč k nim došlo.
