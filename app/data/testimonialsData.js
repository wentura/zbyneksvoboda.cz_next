import { recenzeData } from "./recenzeData";

const homepageNames = [
  "Jan Svárovský",
  "Běla Šestáková",
  "Kateřina Hrabíková",
];

function toHomepageItem(name) {
  const review = recenzeData.find((item) => item.kdo === name);
  return {
    name: review.kdo,
    project: review.co,
    text: review.textShort,
    fotka: review.fotka,
  };
}

export const testimonialsData = {
  title: "Co o spolupráci říkají klienti",
  intro:
    "Nejde jen o hezký web. Jde o to, jestli jsme nejdřív pochopili problém - a pak navrhli řešení, které dává smysl v provozu.",
  clientsLinePrefix: "Spolupracoval jsem i s klienty:",
  clientsLineSuffix: "a dalšími...",
  moreLinkLabel: "zobrazit více recenzí",
  items: homepageNames.map(toHomepageItem),
  otherClients: [
    "Doomentia",
    "Ergo-product.cz",
    "UGHighers",
    "SvouCestou.info",
    "Letovisko Harasov",
    "Kokostezky",
    "Zodpovědná výuka",
    "Biozahájí",
    "Autokemp Kokořín",
    "Diavita",
    "Nikola Smejkalová",
    "Arboristika Svarovský",
    "Pohřební ústav Kralupy",
    "Kolem-krku.cz",
    "Hexfit.eu",
  ],
};
