import AboutPreview from "./components/AboutPreview";
import CaseStudiesPreview from "./components/CaseStudiesPreview";
import Cenik from "./components/Cenik";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import RecenzeShort from "./components/recenzeShort";
import ProofStrip from "./components/ProofStrip";
import Services from "./components/services";
import { content } from "@/content";

export default function Home() {
  return (
    <>
      <Header content_name={content.name} navCta={content.header.navCta} />
      <main>
        <Hero content={content.hero} />
        <ProofStrip content={content.proof} />
        <ProblemSection content={content.problem} />
        <Services content={content.services} />
        <CaseStudiesPreview content={content.caseStudies} />
        <RecenzeShort content={content.testimonials} />
        <ProcessSection content={content.process} />
        <Cenik content={content.cenik} />
        {/* <AboutPreview content={content.about} /> */}
        <Contact contact={content.contact} form={content.form} />
      </main>
    </>
  );
}
