import { portfolioData } from "./data/portfolioData";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  // Pouze case studies se skutečným obsahem (hasCaseStudy).
  // Detailní stránky /sluzby/* nejsou veřejné — zůstávají jen jako data.
  const caseStudies = portfolioData
    .filter((item) => item.slug && item.hasCaseStudy)
    .map((item) => ({
      url: `${SITE_URL}/portfolio/pripadovaStudie/${item.slug}`,
      lastModified,
    }));

  return [
    { url: `${SITE_URL}/`, lastModified },
    { url: `${SITE_URL}/portfolio`, lastModified },
    { url: `${SITE_URL}/recenze`, lastModified },
    { url: `${SITE_URL}/ckdfaq`, lastModified },
    ...caseStudies,
  ];
}
