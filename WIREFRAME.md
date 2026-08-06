# WIREFRAME – zbyneksvoboda.cz

Tento dokument popisuje cílovou strukturu webu **zbyneksvoboda.cz** po repositioningu na **webového konzultanta a digitálního stratéga**.

Nejde o pixel-perfect design, ale o **logiku sekcí, hierarchii informací a layout**.

---

## 1. Globální prvky

### 1.1 Navigace (header) – aktuální stav (2026)

**Obsah:**
- Logo / jméno: `Zbyněk Svoboda`
- Menu položky:
  - Služby (`/#sluzby`)
  - Případové studie (`/#pripadove-studie`)
  - O mně (`/#o-mne`)
  - Kontakt (`/#kontakt`)
- CTA tlačítko: **Konzultace** → `/#kontakt`
- Články: zatím bez položky v menu (blog neexistuje)
- Recenze a ceník: dostupné na homepage přes scroll, ne v hlavním menu

**Layout (desktop):**
- vlevo: logo / jméno
- vpravo: horizontální menu
- poslední položka „Konzultace“ jako výrazné tlačítko (např. outline/filled)

**Layout (mobile):**
- nahoře bar s logem vlevo
- vpravo hamburger menu
- po otevření jednoduché full-screen menu nebo slide-over

---

### 1.2 Footer

**Obsah:**
- Jméno: Zbyněk Svoboda
- Kontaktní údaje:
  - e-mail
  - telefon
  - adresa
  - IČ
  - info o DPH (neplátce)
- případně odkazy:
  - LinkedIn / GitHub (pokud se hodí)
- drobný copyright

Layout: jednoduchý, dvousloupcový (desktop), jednokolonový (mobile).

---

## 2. Homepage – sekce (implementováno)

**Pořadí sekcí:**
1. Header
2. Hero (problém + filtr trust strip + product vizuál)
3. Proof strip (konkrétní důkazy)
4. Problem — krátký framing
5. Fit — Pro koho ano / ne
6. Case studies preview — důkaz před nabídkou
7. Services — 3 karty + ceny
8. Recenze
9. Process — 6 kroků
10. Pricing — orientační ceny + retainer
11. Contact — kvalifikovaný formulář

**Data:** `app/data/*.js` agregovaná přes `content.js`.

---

### 2.1 Hero sekce

**Cíl:**  
Během 3–5 vteřin sdělit:
- kdo Zbyněk je
- co dělá
- pro koho to dělá
- co je další krok (CTA)

**Layout (desktop):**
- 2 sloupce:
  - levý: text
  - pravý: fotka Zbyňka nebo minimalistický „author card“ (jméno, role, krátké shrnutí)
- případně lehký background accent (subtilní, ne přehnaný)

**Obsah (shrnutí):**
- H1: hlavní benefit („Weby, které mají strategii, strukturu a přinášejí výsledky.“)
- Subheadline: kdo je Zbyněk a co dělá (consultant & strategist)
- Bulletpointy (3–4): co klient získá
- Primární CTA: „Domluvit nezávaznou konzultaci“
- Sekundární CTA: „Podívat se na případové studie“

---

### 2.2 Sekce „Proč většina webů nefunguje“

**Cíl:**  
Nastavit problém – a tím připravit půdu pro služby.

**Layout:**
- Jeden širší textový blok (nadpis + odstavec)
- Pod ním 3–4 boxy v gridu (2 sloupce na desktopu, 1 na mobilu)

**Obsah boxů (příklady):**
- Není jasné, co nabízíte
- Web mluví o vás, ne o zákazníkovi
- Chybí struktura a logická cesta
- Nikdo neměří, co funguje

Na konci krátké shrnutí typu:
> Moje práce začíná tam, kde klasická „tvorba webů“ končí.

---

### 2.3 Sekce „S čím vám pomůžu“ (Služby / Řešení)

**Cíl:**  
Prezentovat tři hlavní pilíře služeb (AI a automatizace jsou součástí, ne čtvrtý obor).

**Layout:**
- Nadpis + krátký úvodní odstavec
- Pod tím 3 karty vedle sebe (na desktopu), na mobilu pod sebou:
  1. Diagnostika digitálního problému
  2. Datově řízený web
  3. Klientský portál / interní systém

Každá karta obsahuje:
- název služby
- situace + výsledek
- bullet list „Co získáte“
- CTA sekce → kontakt

Data: `app/data/servicesData.js`

---

### 2.4 Sekce „Jak spolupráce probíhá“ (Proces)

**Cíl:**  
Snížit nejistotu, ukázat, že spolupráce má jasné kroky.

**Layout:**
- Nadpis
- Chronologický seznam kroků (1–6) – může být timeline, nebo očíslované boxy.

**Kroky (shrnutí):**
1. Nezávazná konzultace (30 min)
2. Analýza a audit
3. Návrh strategie a řešení
4. Realizace / vedení projektu
5. Ladění a měření
6. Dlouhodobá podpora (volitelné)

UX: každý krok krátký, 1–2 věty, úsporné.

---

### 2.5 Sekce „Případové studie“

**Cíl:**  
Ukázat konkrétní výsledky u reálných klientů, ne jen galerii screenshotů.

**Layout:**
- Nadpis
- 2–4 case study boxy, na desktopu 2 × 2, nebo vertikální seznam.

Struktura jedné case study:
- Název projektu + název klienta
- Tag / kategorie (např. „Redesign webu“, „E-shop“, „Konzultace“)
- Podnadpis typu „Od X k Y“ (např. „Od starého webu k plné sezóně“)
- 3 části:
  - **Co klient řešil** (problém)
  - **Co jsem udělal** (řešení)
  - **Výsledek** (výsledek – ideálně co nejkonkrétnější, i kvalitativně)

Možno doplnit náhledy nebo malé screenshoty, ale důraz je na text.

---

### 2.6 Sekce „Recenze“

**Cíl:**  
Posílit důvěru pomocí autentických referencí.

**Layout:**
- Nadpis
- Úvodní odstavec (věta nebo dvě)
- 3–4 větší testimonial karty (jméno + projekt + text)
- Pod tím loga nebo názvy dalších klientů (grid, menší styl)

Na mobile: karty pod sebou, loga jako grid 2–3 sloupce.

---

### 2.7 Sekce „Pro koho jsem / nejsem“

**Cíl:**  
Vyfiltrovat nevhodné klienty, posílit pocit „tohle je pro nás“ u těch správných.

**Layout:**
- Nadpis
- Dva sloupce:
  - vlevo: „Pro koho jsem“
  - vpravo: „Pro koho nejsem“
- mobil: stacked, nejdřív „pro koho jsem“, pak „pro koho nejsem“

Každý sloupec: 3–5 bodů, krátké, čitelné.

---

### 2.8 Sekce „Orientační ceník“

**Cíl:**  
Nastavit očekávání, ukázat úroveň cen, ale nezabíjet flexibilitu.

**Layout:**
- Nadpis
- Krátké vysvětlení, že cena závisí na problému a odpovědnosti výsledku
- 5 boxů + callout úvodního posouzení:
  1. Diagnostika — od 9 000 Kč
  2. Automatizace konkrétního procesu — od 25 000 Kč
  3. Datově řízený web — od 55 000 Kč
  4. Klientský portál / interní systém — od 90 000 Kč
  5. Průběžný digitální rozvoj — od 12 000 Kč / měsíc
  6. Úvodní posouzení vhodnosti — zdarma

Data: `app/data/pricingData.js`

---

### 2.9 Sekce „Kontakt / konzultace“

**Cíl:**  
Jasná výzva k akci – domluvit konzultaci / napsat zprávu.

**Layout:**
- Nadpis
- Krátký text typu „Máte pocit, že váš web může fungovat lépe?“
- Jednoduchý formulář:
  - Jméno a příjmení
  - E-mail
  - Název firmy / webu (volitelné)
  - Co aktuálně řešíte? (textarea)
- tlačítko „Odeslat zprávu“ nebo „Nezávazně poptat konzultaci“
- vedle nebo pod tím statické kontakty:
  - e-mail
  - telefon
  - fakturační údaje (IČ, adresa, DPH)

Na mobilu vše pod sebou.

---

## 3. Další stránky (do budoucna, volitelné)

Zatím není nutné, ale do budoucna je možné přidat:

- Samostatnou stránku „Případové studie“ s detailnějšími rozbory projektů
- Stránku „O mně“ s osobnějším příběhem (propojení s Human Design / rolí průvodce)
- Blog / články:
  - o web strategii
  - UX
  - case studies
  - práci s AI a web vývojem

Tyto části zatím ber jako potenciál, ne nutnou součást první verze redesignu.

---

## 4. Responzivita a priority obsahu

- Na mobilu se jednotlivé sekce skládají **pod sebe v logickém pořadí**:
  1. Hero
  2. Problém
  3. Služby
  4. Proces
  5. Případové studie
  6. Recenze
  7. Pro koho jsem / nejsem
  8. Ceník
  9. Kontakt
- CTA „Domluvit konzultaci“ by mělo být:
  - v hero sekci
  - ve službách (např. pod kartami)
  - na konci stránky (kontakt)

---

## 5. Technické poznámky k implementaci wireframu

- Každou sekci je vhodné mít jako **samostatnou React komponentu**:
  - `HeroSection.tsx`
  - `ProblemSection.tsx`
  - `ServicesSection.tsx`
  - `ProcessSection.tsx`
  - `CaseStudiesSection.tsx`
  - `TestimonialsSection.tsx`
  - `FitSection.tsx` (pro koho jsem / nejsem)
  - `PricingSection.tsx`
  - `ContactSection.tsx`
- Next.js App Router:
  - homepage `/` využije tyto komponenty v jednom layoutu
- Tailwind:
  - používat jednoduché grid/ flex layouty
  - udržovat konzistentní spacing (definováno ve `STYLEGUIDE.md`)
  - sekce oddělovat dostatečným paddingem (`py-16`+)

---

## 6. Shrnutí

Tento wireframe:
- překlápí původní „portfolio webdesignéra“ na **konzultační web**
- staví obsah kolem:
  - problému klienta
  - řešení Zbyňkem
  - konkrétních výsledků
- připravuje jasnou cestu:
  - pochopit → uvědomit si problém → vidět řešení → získat důvěru → kontaktovat

Asistent by měl při jakýchkoli návrzích změn ověřovat, zda:
- odpovídají této struktuře
- nepodkopávají pozicování Zbyňka jako konzultanta a leadera
