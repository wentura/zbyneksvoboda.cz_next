export const caseStudiesData = {
  title: "Výsledky, kde nejde jen o web",
  description:
    "Dvě aplikace postavené kolem skutečné práce lidí: jedna pomáhá řídit více než tisíc klientských projektů, druhá propojuje výuku a každodenní provoz školy. U obou jsem řešil proces, data, rozhraní i vývoj.",
  cta: "Více projektů",
  ctaHref: "/portfolio",
  labels: {
    type: "Typ řešení",
    problem: "Problém",
    solution: "Řešení",
    contribution: "Co jsem navrhl a dodal",
    scope: "Co systém řeší",
    approach: "Jak řešení vzniklo",
    takeaway: "Co si z projektu odnést",
    result: "Dopad / stav",
    role: "Moje role",
    more: "Zjistit více",
  },
  items: [
    {
      slug: "ughighers",
      client: "UGHighers",
      title: "Zakázky od nabídky po podklady k expedici v jednom systému",
      visualTitle: "Jeden projekt. Jasný stav pro tým i klienta.",
      visualSteps: ["Nabídka", "Schválení", "Produkční podklady"],
      visualTone: "dark",
      metaDescription:
        "Jak vznikl interní systém a klientský portál UGHighers, který propojuje nabídky, schvalování a podklady pro více než 1 000 klientských projektů.",
      type: "Provozní digitalizace",
      problem:
        "Nabídky, schvalování, shipping podklady a komunikace byly rozdělené mezi e-mail, tabulky a jednotlivé lidi.",
      problemShort:
        "Nabídky, schvalování a podklady k zakázkám byly rozdělené mezi e-mail, tabulky a jednotlivé lidi.",
      contributionShort:
        "Navrhl jsem proces a vyvinul interní systém s klientským portálem pro zakázky, nabídky a schvalování.",
      solution:
        "Navrhl a vyvinul jsem klientský portál a interní systém, který sjednotil projekty, nabídky, schvalování, provozní data a fakturační podklady.",
      context:
        "UGHighers zajišťuje zakázkovou výrobu hudebních nosičů. U každého klientského projektu se potkává nabídka, produkční specifikace, schválení a podklady k odeslání. S rostoucím počtem projektů už nebylo praktické držet jejich stav v e-mailech, tabulkách a paměti jednotlivých lidí.",
      approach: [
        {
          title: "Proces dřív než obrazovky",
          text: "Zmapoval jsem cestu klientského projektu a rozdělil, které informace potřebuje tým a které klient. Na tom vznikla struktura projektu, stavů, rolí a navazujících kroků.",
        },
        {
          title: "Interní řízení i klientský pohled",
          text: "Vyvinul jsem systém, v němž na sebe navazují klienti, projekty, nabídky, schvalování a produkční podklady. Klientský portál dává zákazníkovi přístup k informacím, které se týkají jeho projektu.",
        },
        {
          title: "Podklady na jednom místě",
          text: "Do práce se zakázkou patří také provozní, fakturační a expediční podklady. Tým je dohledá ve vazbě na konkrétní projekt místo hledání v různých souborech a vláknech.",
        },
      ],
      takeaway:
        "I malý tým může řídit velký počet zakázkových projektů bez toho, aby každý další projekt přidával další tabulku a další místo, kde se ztrácejí informace.",
      closingPrompt:
        "Řídíte zakázky přes e-mail, tabulky a zkušenosti několika lidí? Pojďme projít jeden konkrétní proces a zjistit, co má smysl sjednotit.",
      scope: [
        "projekty, nabídky a schvalování na jednom místě",
        "společné podklady pro interní tým a klienty",
        "provozní a fakturační podklady navázané na zakázky",
      ],
      result:
        "1 000+ klientských projektů v systému. Interní tým i klienti pracují s informacemi na jednom místě.",
      resultHighlight:
        "1 000+ klientských projektů v systému. Interní tým i klienti pracují s informacemi na jednom místě.",
      role: "návrh procesu, UX struktury, datového modelu, aplikační logiky a vývoj systému",
      metric: "1 000+",
      metricLabel: "klientských projektů v systému",
      showcaseImage:
        "/portfolio/case-studies/ughighers-projects-anonymized.webp",
      showcaseImageHeight: 351,
      showcaseImageAlt:
        "Anonymizovaný přehled klientských projektů v systému UGHighers",
      image: "/portfolio/case-studies/ughighers-projects-anonymized.webp",
      metricsQuestions: [
        "Kolik lidí systém denně používá?",
        "Co se dříve muselo přepisovat mezi e-mailem a Excelem?",
        "Jak dlouho trvalo vytvoření a schválení nabídky předtím a potom?",
        "Kolik informací si klient dnes dohledá sám bez statusového e-mailu?",
      ],
    },
    {
      slug: "skolni-system",
      client: "Svou Cestou",
      title: "Školní provoz v jednom systému: výuka, pokrok a docházka",
      visualTitle: "Výuka a provoz na společných datech.",
      visualSteps: ["Plánování výuky", "Pokrok dětí", "Docházka a provoz"],
      visualTone: "light",
      metaDescription:
        "Jak vznikla aplikace pro Montessori školu, která propojuje plánování výuky, pokrok dětí, docházku a práci vedení, průvodců a rodičů.",
      type: "Interní systém",
      problem:
        "Plánování výuky, záznamy o pokroku, docházka a provozní agenda byly rozdělené mezi tabulky, zprávy a poznámky.",
      problemShort:
        "Plánování výuky, pokrok dětí a docházka byly rozdělené mezi tabulky, zprávy a poznámky.",
      contributionShort:
        "Navrhl jsem procesy, datový model a aplikaci s oddělenými přístupy pro vedení, průvodce a rodiče.",
      solution:
        "Interní systém sjednocuje práci průvodců, plánování výuky, pokrok dětí, docházku, stravné a další provozní agendu.",
      context:
        "Montessori škola potřebuje sledovat víc než rozvrh a docházku. Průvodci zaznamenávají práci dětí a jejich pokrok, vedení řeší školní rok a provoz a rodiče potřebují přístup k vybraným údajům o vlastních dětech. Když každá agenda žije jinde, tým musí informace znovu hledat a předávat.",
      approach: [
        {
          title: "Výuka podle skutečné práce školy",
          text: "Navrhl jsem strukturu předmětů a lekcí i způsob, jak u každého dítěte zaznamenávat postupný pokrok. Data tak navazují na běžnou práci průvodců.",
        },
        {
          title: "Každodenní agenda na společných datech",
          text: "Do aplikace jsem propojil docházku, školní kalendář, stravné a další provozní přehledy. Vedení a průvodci pracují se stejným základem údajů.",
        },
        {
          title: "Přístup podle odpovědnosti",
          text: "Rozhraní rozlišuje vedení, průvodce a rodiče. Rodičovská část pracuje s údaji přiřazených dětí; interní správa zůstává oddělená.",
        },
      ],
      takeaway:
        "Složitý provoz školy lze převést do přehledného systému, když se nejdřív pochopí práce jednotlivých lidí, vazby mezi daty a pravidla přístupu.",
      testimonial: {
        text: "Potřebovali jsme sjednotit interní práci týmu — plánování, pokrok dětí a provozní agendu. Spolupráce vedla k systému, který odpovídá tomu, jak škola skutečně funguje.",
        author: "Běla Šestáková, Svou Cestou",
      },
      closingPrompt:
        "Řešíte provoz školy nebo organizace v několika tabulkách? Podíváme se, jak propojit údaje, práci týmu a přístupy jednotlivých rolí.",
      scope: [
        "plánování výuky a záznamy o pokroku dětí",
        "docházka a navazující provozní agenda",
        "oddělené přístupy pro vedení, průvodce a rodiče",
      ],
      result:
        "Tým školy pracuje se společnými daty o výuce, docházce a provozu.",
      resultHighlight:
        "Tým školy pracuje se společnými daty o výuce, docházce a provozu.",
      role: "návrh procesů, datového modelu, UX logiky, stavového modelu výuky a vývoj systému",
      metric: "3 role",
      metricLabel: "vedení, průvodci a rodiče",
      showcaseImage:
        "/portfolio/case-studies/svou-cestou-progress-anonymized.webp",
      showcaseImageHeight: 401,
      showcaseImageAlt:
        "Anonymizovaný přehled pokroku ve školním systému Svou Cestou",
      image: "/portfolio/case-studies/svou-cestou-progress-anonymized.webp",
    },
  ],
};
