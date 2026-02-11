import { portfolioData } from "./data/portfolioData";

export default function sitemap() {
  const baseUrl = "https://zbyneksvoboda.cz";
  const lastModified = new Date();

  const caseStudies = portfolioData
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${baseUrl}/portfolio/pripadovaStudie/${item.slug}`,
      lastModified,
    }));

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/portfolio`, lastModified },
    { url: `${baseUrl}/recenze`, lastModified },
    { url: `${baseUrl}/ckdfaq`, lastModified },
    ...caseStudies,
  ];
}
