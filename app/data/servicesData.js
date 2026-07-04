export const servicesOverview = {
  title: "Nejdřív problém. Potom správné řešení.",
  description:
    "Nezačínám výběrem technologie ani hotovým balíčkem. Nejdřív zjistíme, kde firma ztrácí čas, přehled nebo obchodní příležitosti. Podle toho navrhnu web, portál, interní systém nebo menší první fázi.",
  gainTitle: "Co získáte",
  cta: "Ověřit vhodnost spolupráce",
  ctaHref: "/#kontakt",
  detailLinkLabel: "Zjistit více",
  longTermTitle: "Možnost dlouhodobé spolupráce",
  longTermDescription:
    "Po první fázi můžu dál pomáhat s prioritami, rozvojem a technickou návazností. Ne jako náhodná podpora, ale jako partner, který zná kontext firmy.",
};

export const servicesData = [
  {
    slug: "diagnostika",
    title: "Diagnostika digitálního problému",
    situation:
      "Není jasné, jestli má firma řešit web, portál, interní systém nebo jen lépe nastavit proces?",
    outcome:
      "Zmapujeme současný stav, pojmenujeme hlavní ztráty a určím nejmenší smysluplný další krok.",
    benefits: [
      "přehled současného stavu",
      "hlavní ztráty a rizika",
      "priority pro další fázi",
      "podklad pro rozhodnutí vedení",
    ],
    detailHref: "/sluzby/diagnostika",
    detail: {
      metaDescription:
        "Diagnostika digitálního problému ve firmě. Zmapování webu, procesů, dat, dokumentů a návrh dalšího smysluplného kroku.",
      intro:
        "Než firma investuje do webu, portálu nebo systému, potřebuje vědět, kde digitál skutečně brzdí obchod nebo provoz.",
      forWho:
        "Pro firmy, školy a specializované provozy, kde důležité informace běží přes web, e-maily, tabulky, sdílené složky nebo ruční koordinaci.",
      includes: [
        "zmapování webu, poptávek, zakázek, klientů, dokumentů a odpovědností",
        "pojmenování hlavních ztrát a slabých míst",
        "návrh priorit a první realistické fáze",
      ],
      deliverable:
        "Rozhodovací dokument s hlavními zjištěními, doporučeným rozsahem první fáze a návrhem dalšího postupu.",
      priceHint: "od 15 000 Kč",
      priceHref: "/#cenik",
    },
  },
  {
    slug: "web-redesign",
    title: "Datově řízený web",
    situation:
      "Web má vysvětlit složitější nabídku, produkty, dokumenty nebo použití, ale dnes působí jako statická brožura?",
    outcome:
      "Vznikne web s jasnou strukturou, lepší poptávkovou cestou a obsahem, který se dá dlouhodobě rozvíjet.",
    benefits: [
      "jasná struktura nabídky",
      "lepší cesta k poptávce",
      "produktové a dokumentové stránky",
      "příprava na další datovou vrstvu",
    ],
    detailHref: "/sluzby/web-redesign",
    detail: {
      metaDescription:
        "Datově řízený web pro B2B, technické a specializované firmy. Struktura nabídky, produkty, dokumenty, poptávky a další rozvoj.",
      intro:
        "U technických a B2B firem web často není jen prezentace. Musí vysvětlit nabídku, podpořit obchod a unést další rozvoj.",
      forWho:
        "Pro firmy, které potřebují lépe strukturovat služby, produkty, použití, dokumenty, reference a poptávkovou cestu.",
      includes: [
        "návrh informační architektury",
        "struktura typů stránek a obsahu",
        "UX návrh klíčových cest návštěvníka",
        "technická realizace podle rozsahu",
      ],
      deliverable:
        "Web, který funguje jako obchodní a obsahová vrstva firmy, ne jen jako vizitka.",
      priceHint: "od 75 000 Kč",
      priceHref: "/#cenik",
    },
  },
  {
    slug: "portal-system",
    title: "Klientský portál / interní systém",
    situation:
      "Zakázky, klienti, dokumenty, stavy nebo úkoly se řeší přes e-maily, tabulky a ruční dohledávání?",
    outcome:
      "Navrhnu a postavím systém, který sjednotí proces, data, role a komunikaci do jednoho použitelného prostředí.",
    benefits: [
      "jedno místo pravdy",
      "datový a procesní model",
      "role, stavy a odpovědnosti",
      "méně ruční koordinace",
    ],
    detailHref: "/sluzby/portal-system",
    detail: {
      metaDescription:
        "Návrh a vývoj klientských portálů a interních systémů pro zakázky, klienty, dokumenty, workflow a provozní data.",
      intro:
        "Když tabulky a e-maily přestanou stačit, firma potřebuje systém navržený podle skutečného provozu.",
      forWho:
        "Pro firmy, které řídí zakázky, klienty, nabídky, dokumenty, školní agendu nebo interní procesy ručně.",
      includes: [
        "návrh datového a procesního modelu",
        "UX struktura a aplikační logika",
        "role, oprávnění, stavy a notifikace",
        "vývoj na vhodném technickém stacku",
      ],
      deliverable:
        "Funkční portál nebo interní systém připravený pro reálný provoz a další rozvoj.",
      priceHint: "obvykle od 120 000 Kč",
      priceHref: "/#cenik",
    },
  },
];

export function getServiceBySlug(slug) {
  return servicesData.find((service) => service.slug === slug) ?? null;
}