import copy from "./copy.json";
import { heroData } from "./app/data/heroData";
import { proofData } from "./app/data/proofData";
import { problemData } from "./app/data/problemData";
import { fitData } from "./app/data/fitData";
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
  fit: fitData,
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
    title: "Pojďme probrat konkrétní problém.",
    lead:
      "Napište, co dnes brzdí obchod nebo provoz — a proč to potřebujete řešit právě teď. Ozvu se s návrhem dalšího kroku: krátký hovor, diagnostika, nebo jasné NE, pokud spolupráce nedává smysl.",
  },
  form: copy.form,
  header: {
    navCta: "Probrat problém",
  },
  contactModal: copy.contactModal,
  testimonials: copy.testimonials,
};

export {
  heroData,
  proofData,
  problemData,
  fitData,
  servicesData,
  servicesOverview,
  getServiceBySlug,
  caseStudiesData,
  processData,
  pricingData,
  aboutData,
};
