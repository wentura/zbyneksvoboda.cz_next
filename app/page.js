import CaseStudiesPreview from "./components/CaseStudiesPreview";
import Cenik from "./components/Cenik";
import Contact from "./components/contact";
import FitSection from "./components/FitSection";
import FaqSection from "./components/FaqSection";
import Header from "./components/header";
import Hero from "./components/hero";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import RecenzeShort from "./components/recenzeShort";
import SolutionOptionsSection from "./components/SolutionOptionsSection";
import Services from "./components/services";
import { content } from "@/content";

export default function Home() {
  // ProofStrip zůstává vypnutý: čísla jsou v case studies (UGHighers),
  // samostatný strip zatím nepřidává konverzní hodnotu nad hero.
  return (
    <>
      <Header content_name={content.name} navCta={content.header.navCta} />
      <main>
        <Hero content={content.hero} />
        <ProblemSection content={content.problem} />
        <SolutionOptionsSection content={content.solutionOptions} />
        <CaseStudiesPreview content={content.caseStudies} />
        <Services content={content.services} />
        <ProcessSection content={content.process} />
        <Cenik content={content.cenik} />
        <FitSection content={content.fit} />
        <FaqSection content={content.faq} />
        <RecenzeShort content={content.testimonials} />
        <Contact contact={content.contact} form={content.form} />
      </main>
    </>
  );
}
