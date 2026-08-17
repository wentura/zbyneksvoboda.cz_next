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
import { solutionOptionsData } from "./app/data/solutionOptionsData";

export const content = {
  name: copy.name,
  hero: heroData,
  proof: proofData,
  problem: problemData,
  solutionOptions: solutionOptionsData,
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
    title: "Popište mi, kde se dnes ztrácí čas, informace nebo obchod.",
    lead:
      "Nemusíte vědět, jestli potřebujete automatizaci, nový web nebo interní systém. Napište mi, jak dnes proces funguje, kde se zasekává a proč ho potřebujete řešit. Ozvu se s návrhem vhodného dalšího kroku.",
  },
  form: copy.form,
  header: {
    navCta: "Probrat konkrétní problém",
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
  solutionOptionsData,
};
