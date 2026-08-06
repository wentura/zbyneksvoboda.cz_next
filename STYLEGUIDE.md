# STYLEGUIDE – zbyneksvoboda.cz

Tento dokument definuje vizuální, typografické a obsahové zásady pro web **Zbyňka Svobody** jako webového konzultanta a digitálního stratéga.

---

## 1. Brand a pocit z webu

Web má působit:

- profesionálně
- klidně
- sebevědomě
- jednoduchým a čistým dojmem (švýcarský / minimalistický styl)
- ne jako velká agentura, ale jako **silný individuální expert**

Žádné:
- přepálené gradienty
- blikající efekty
- generické „startupové“ ilustrace

---

## 2. Typografie

Konkrétní fonty se můžou řídit aktuální implementací, ale obecná pravidla:

- **Základní text (body):** čistý bezpatkový font (např. Inter, system sans)
- **Nadpisy (H1–H3):** stejný font, jen jiné řezy (bold/semibold) a velikosti
- **Řádkování:** dostatečně vzdušné, klidně `leading-relaxed` nebo `leading-loose`
- **Max šířka textu:** kolem `max-w-prose` až `max-w-3xl` pro dlouhé texty (lepší kratší řádky)

Tailwind orientačně:
- H1: `text-3xl md:text-5xl font-bold`
- H2: `text-2xl md:text-3xl font-semibold`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg`
- Menší pomocný text: `text-sm`

---

## 3. Barvy

Barvy se mají držet:

- existující vizuální identity (pokud je definovaná)
- neutrální, klidné palety (šedé, tmavě modré / inkoustové, jeden akcent)

- **Background:** světlý cool neutrál (`#F5F6F8`) + bílá
- **Text:** téměř černý (`#111`)
- **Navy:** `#0D1824` (hero, kontakt, primární CTA ve světlých sekcích)
- **Akcent:** ztlumený terracotta `#C45A3A` — střídmě (hero CTA)
- **Sekundární:** šedé hairlines, bez neonů

Zakázáno:
- více než jedna výrazná akcentní barva
- teplý krém / okrová jako hlavní surface
- pill tlačítka a těžké stíny karet

---

## 4. Layout & spacing

Zásady rozvržení:

- hodně whitespace kolem obsahu
- sekce oddělené výrazným vertikálním odstupem (`py-16` až `py-24`)
- obsah zarovnaný do středového kontejneru (`max-w-5xl` až `max-w-6xl`, `mx-auto`, `px-4` / `px-6`)

Příklad:
```tsx
<section className="py-16 md:py-24">
  <div className="max-w-5xl mx-auto px-4 md:px-6">
    {/* obsah */}
  </div>
</section>
```

Gridy:
- pro 2 sloupce: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`
- pro 3 sloupce: `grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8`

---

## 5. Komponenty a UI prvky

### 5.1 Tlačítka (CTA)

Primární tlačítko:
- nejdůležitější akce (konzultace / odeslat)
- **navy** fill nebo ztlumený terracotta akcent (`#C45A3A`)
- ostré / mírně ostré rohy (`rounded-sm` / `rounded-none`) — ne pill
- na jednom viewportu max 1 silný akcentní CTA

Sekundární CTA:
- outline nebo textový odkaz
- např. „Ukázat výsledky“

---

### 5.2 Karty a oddělení obsahu (Nordic / Swiss)

Preferovat:
- **hairline** oddělovače (`border-t border-neutral-200`)
- sloupcový grid + whitespace
- case studies: full-bleed image + text pod ním

Vyhnout se:
- `shadow-sm` / `rounded-2xl` kartám jako defaultu
- hustým border boxům kolem každého bloku

---

### 5.3 Navigace

- sticky header, světlé nebo transparentní pozadí
- jednoduché textové odkazy, jedna CTA

---

### 5.4 Animace

- CSS fade / translate, střídmě
- respektovat `prefers-reduced-motion`
- žádný parallax ani scroll-jacking

---

## 6. Copy / tone of voice

### 6.1 Tón

- profesionální, ale lidský
- asertivní, ne podlézavý
- bez zbytečného hype
- mluví k člověku, který má firmu / projekt, ne k IT publiku

### 6.2 Gramatika a styl

- vykání (vy / vám / vaše)
- preferovat kratší věty
- používat českou interpunkci a diakritiku (žádné „angličtinářské“ uvozovky nebo psaní bez háčků/čárek)
- vyhnout se přehnanému používání vykřičníků

### 6.3 Zakázané fráze

Vyhýbat se frázím typu:

- „jsme mladý dynamický tým“
- „nabízíme komplexní služby v oblasti…“
- „na míru od A do Z“ (pokud není opravdu nutné)
- „vyšperkuji váš web k dokonalosti“

Místo toho preferuj:

- konkrétní přínosy („Pomůžu vám zjistit, proč web nefunguje, a navrhnu konkrétní kroky.“)
- konkrétní situace („Když se klienti na webu ztrácejí, najdeme a opravíme slabá místa.“)

---

## 7. Obsahové principy

- **Od problému k řešení:** nejdřív popsat, co klient trápí, pak teprve řešení.
- **Důkazy místo slibů:** recenze, případové studie, konkrétní příklady.
- **Jasná CTA:** v každé větší sekci by ideálně mělo být něco, co vede k akci (konzultace, kontakt, posun dál).

---

## 8. Obrázky a vizuální obsah

- primárně reálné screenshoty webů / projektů (u case studies)
- fotky Zbyňka: ideálně jednoduchý portrét, žádný stock
- žádné generické stock fotky „týmu v kanceláři“ apod.

Styling:
- screenshoty v zaoblených kartách
- nenechávat hrany nalepené na okraj, vždy s paddingem a stínem

---

## 9. Responsivita

- obsah musí být plně čitelný na mobilu (i starším)
- žádné horizontální scroll bary
- gridy se na mobilu skládají do jednoho sloupce
- CTA tlačítka musí být snadno kliknutelná (dostatečná výška, spacing)

---

## 10. Iterace a rozšíření

Při případném přidání dalších stránek (blog, detailní case studies, „O mně“):

- držet stejný typografický a vizuální systém
- opakovaně používat existující komponenty (karty, CTA, sekce)
- udržet tón – Zbyněk jako konzultant, ne jako anonymní agentura

---

Tento STYLEGUIDE slouží jako základ.  
Jakékoli větší změny (nové barvy, jiný typ layoutu) by měly být promyšlené a konzistentní se značkou a pozicováním Zbyňka Svobody.
