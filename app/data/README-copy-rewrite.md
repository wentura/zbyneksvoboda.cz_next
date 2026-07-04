# Poznámky k přepisu copy a designu

## Hlavní změna

Pozice se mění z obecného „webový konzultant / weby, portály a systémy“ na konkrétnější nabídku:

> Interní systémy, klientské portály a datově řízené weby, které nahrazují chaos v e-mailech, Excelech a ruční komunikaci jedním místem pravdy.

To je ostřejší, méně zaměnitelné a lépe navazuje na UGHighers, školní systém a Lunaplast.

## Design

Nedělat plný redesign. Teď není problém vizuální kvalita, ale obchodní ostrost nabídky a distribuce.

Doporučené malé zásahy:

1. Hero musí mít silnější headline, subheadline a konkrétní proof strip.
2. Služby se mají tvářit jako postup spolupráce, ne jako čtyři rovnocenné možnosti.
3. Case studies musí jít výš a být kratší, tvrdší, s dopadem.
4. Pricing musí odstranit nízké kotvy 3 000 Kč, 10 000 Kč a 17 000 Kč.
5. V navigaci stačí Služby, Výsledky, Ceny, Kontakt.
6. CTA změnit z „Domluvit konzultaci“ na „Zmapovat digitální chaos“ nebo „Ověřit vhodnost spolupráce“.

## VYNECHAT z homepage

- FKTR
- Cyklovýzvy
- Doomentia jako hlavní case study
- malé čistě prezentační weby
- obecné recenze o hezkém designu a rychlé práci
- levné vstupní ceny pro web a aplikaci
- formulace „domluvit konzultaci“ jako hlavní CTA

Tyto věci nejsou špatné, ale ředí novou pozici.

## Technická poznámka

Soubor `caseStudiesData.js` a `portfolioData.js` obsahují Lunaplast s obrázkem `/portfolio/lunaplast.webp`. Doplň reálný screenshot dokumentu, wireframu nebo vhodný vizuál. Alternativa je upravit komponentu tak, aby uměla fallback bez obrázku.

## Doporučené pořadí homepage

1. Hero
2. Proof strip
3. Problém
4. Služby jako postup řešení
5. Případové studie
6. Ceník
7. Pro koho / pro koho ne
8. Proces
9. Reference
10. Kontakt

---

## Oprava v2 - recenze místo sekce O mně

Na základě kontroly po první úpravě je samostatná sekce `O mně` označená jako `VYNECHAT`.

Důvod:
- odbornost má být zřejmá z celé struktury webu,
- samostatné představení zbytečně opakuje to, co už říká hero, problémová sekce, proces a případové studie,
- místo této sekce má homepage vrátit samostatnou důkazní vrstvu recenzí.

Doporučené pořadí na homepage:
1. Hero
2. Problém / digitální chaos
3. Služby jako postup spolupráce
4. Případové studie / výsledky
5. Recenze klientů
6. Ceny
7. Kontakt

Soubor `recenzeData.js` je obnoven jako kompletní vrstva recenzí.

Doporučené použití:
- `homepage: true` = vhodné pro hlavní stránku,
- `homepage: false` = ponechat pro rozšířenou stránku nebo carousel mimo hlavní prodejní tok,
- položka se značkou `VYNECHAT z homepage` = nezobrazovat na hlavní prodejní stránce.

V `copy.json` je sekce `testimonials` rozšířena o hlavní recenze, sekundární recenze a poznámku, co vynechat z homepage.

Designově není nutný redesign. Stačí vrátit blok recenzí do layoutu a odstranit nebo skrýt blok `O mně`.
