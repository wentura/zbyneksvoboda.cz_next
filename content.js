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
import { siteData } from "./app/data/siteData";
import { formData } from "./app/data/formData";
import { contactData, contactModalData } from "./app/data/contactData";
import { testimonialsData } from "./app/data/testimonialsData";
import { faqData } from "./app/data/faqData";

export const content = {
  name: siteData.name,
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
  contact: contactData,
  form: formData,
  header: siteData.header,
  contactModal: contactModalData,
  testimonials: testimonialsData,
  faq: faqData,
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
  siteData,
  formData,
  contactData,
  testimonialsData,
  faqData,
};
