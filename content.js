import copy from "./copy.json";
import { heroData } from "./app/data/heroData";
import { proofData } from "./app/data/proofData";
import { problemData } from "./app/data/problemData";
import {
  servicesData,
  servicesOverview,
  getServiceBySlug,
} from "./app/data/servicesData";
import { caseStudiesData } from "./app/data/caseStudiesData";
import { processData } from "./app/data/processData";
import { pricingData } from "./app/data/pricingData";
import { aboutData } from "./app/data/aboutData";

export const content = {
  name: copy.name,
  hero: heroData,
  proof: proofData,
  problem: problemData,
  services: {
    ...servicesOverview,
    items: servicesData,
  },
  caseStudies: caseStudiesData,
  process: processData,
  cenik: pricingData,
  about: aboutData,
  contact: {
    ...copy.contact,
    title: "Pojďme zjistit, kde vám digitál brzdí obchod nebo provoz.",
    lead:
      "Napište mi stručně, co dnes řešíte - web, poptávky, zakázky, dokumenty, data, interní komunikaci nebo potřebu portálu či systému. Ozvu se s návrhem dalšího kroku: konzultace, diagnostika, návrh řešení nebo menší první úprava.",
  },
  form: copy.form,
  header: {
    navCta: "Konzultace",
  },
  contactModal: copy.contactModal,
  testimonials: copy.testimonials,
};

export {
  heroData,
  proofData,
  problemData,
  servicesData,
  servicesOverview,
  getServiceBySlug,
  caseStudiesData,
  processData,
  pricingData,
  aboutData,
};
