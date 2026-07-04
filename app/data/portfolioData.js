// Kurátorovaná verze portfolia podle nové pozice.
// Homepage má ukazovat hlavně projekty s provozním, datovým nebo procesním dopadem.
// Menší prezentační weby, Shoptet úpravy a rozpracované strategické návrhy patří do archivu portfolia, ne do hlavní prodejní vrstvy.

export const portfolioData = [
  {
    title: "UGHighers",
    link: "https://ughighers.com/",
    linkViewMore: "ughighers.com",
    shortDecs:
      "Klientský portál a interní systém pro řízení zakázkové výroby hudebních nosičů.<br /><br />Přes 800 projektů v aplikaci, 10 měsíců ostrého provozu a jedno místo pravdy pro nabídky, schvalování, shipping podklady a provozní řízení zakázek.",
    images: [
      {
        img: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1771523925/zbyneksvoboda/portfolio2/ugh.webp",
        alt: "UGHighers klientský portál a interní systém",
      },
    ],
    hasCaseStudy: true,
    frontpage: true,
    slug: "ughighers",
    colSpan: "lg:col-span-3",
  },
  {
    title: "SvouCestou.info",
    link: "https://svoucestou.info/",
    linkViewMore: "svoucestou.info",
    shortDecs:
      "Školní management, interní systém a rodičovský portál pro plánování výuky, pokrok dětí, docházku, stravné, akce a komunikaci s rodiči.<br /><br />Interní část sjednocuje práci průvodců. Rodičovský portál je připravovaný pro nasazení od září 2026.",
    images: [
      {
        img: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1751903175/zbyneksvoboda/portfolio2/svoucestou.webp",
        alt: "SvouCestou.info školní management a rodičovský portál",
      },
    ],
    hasCaseStudy: true,
    frontpage: true,
    slug: "skolni-system",
    colSpan: "lg:col-span-3",
  },
  {
    title: "Lunaplast",
    link: "#",
    linkViewMore: "strategický návrh webové prezentace",
    shortDecs:
      "Rozpracovaný strategický návrh webové, produktové a datové vrstvy pro výrobní firmu.<br /><br />Vhodné jako podpůrná ukázka analytické a návrhové práce, ne jako hlavní case study, dokud projekt nepřejde do další fáze a nebude mít reálný dopad v provozu.",
    images: [
      {
        img: "/portfolio/lunaplast.webp",
        alt: "Lunaplast strategický návrh webové prezentace",
      },
    ],
    hasCaseStudy: false,
    frontpage: false,
    slug: "lunaplast",
  },
  {
    title: "Harasov a Kokořínsko",
    link: "https://harasov.eu/",
    linkViewMore: "harasov.eu",
    shortDecs:
      "Podpůrná ukázka webové realizace a dlouhodobé správy turistických a ubytovacích projektů.<br /><br />První webová prezentace Harasova, úprava dodaného printového návrhu pro web, responzivní realizace a jednoduchá administrace jídelního lístku s plánovaným zobrazováním podle data.",
    images: [
      {
        img: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1754939908/zbyneksvoboda/portfolio2/harasov.webp",
        alt: "Letovisko Harasov web a administrace jídelního lístku",
      },
    ],
    hasCaseStudy: false,
    frontpage: false,
    slug: "harasov-kokorinsko",
  },
  {
    title: "Doomentia",
    link: "https://doomentia.com/",
    linkViewMore: "doomentia.com",
    shortDecs:
      "Doplňková ukázka cílených Shoptet úprav. Hodí se do archivu portfolia, ne jako hlavní důkaz strategické pozice.",
    images: [
      {
        img: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1778581224/zbyneksvoboda/portfolio2/doomentia.webp",
        alt: "Doomentia Shoptet úpravy",
      },
    ],
    hasCaseStudy: false,
    frontpage: false,
    slug: "doomentia",
  },
  {
    title: "Ergo-product",
    link: "https://www.ergo-product.cz/",
    linkViewMore: "ergo-product.cz",
    shortDecs:
      "Doplňková ukázka Shoptet úprav a vlastního reklamačního formuláře. Hodí se do archivu, ale ne jako primární obchodní důkaz.",
    images: [
      {
        img: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1728840006/zbyneksvoboda/portfolio2/ergoproduct.webp",
        alt: "Ergo-product Shoptet úpravy a reklamační formulář",
      },
    ],
    hasCaseStudy: false,
    frontpage: false,
    slug: "ergo-product",
  },
];

// VYNECHAT z hlavní homepage: FKTR, Cyklovýzvy, Doomentia jako hlavní case study, malé čistě prezentační weby a vlastní nedokončené projekty.
// Důvod: ředí pozici "diagnostika, datově řízené weby, portály, interní systémy a jedno místo pravdy".
