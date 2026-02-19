// * Importy sekcí homepage.
import Cenik from "./components/Cenik";
import CollaborationFitSection from "./components/CollaborationFitSection";
import Contact from "./components/contact";
import FitSection from "./components/FitSection";
import Header from "./components/header";
import Hero from "./components/hero";
import PortfolioImpactSection from "./components/PortfolioImpactSection";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import StartSection from "./components/StartSection";
import RecenzeShort from "./components/recenzeShort";
import Services from "./components/services";
import { content } from "@/content";
// * Export hlavní homepage s poskládanými sekcemi.
export default function Home() {
  return (
    <main className="max-w-screen-full mx-auto">
      <Header content_name={content.name}/>
      <Hero content={content.hero}/>
      {/* <div className="w-full bg-gray-500 py-12"> */}
      <ProblemSection content={content.problem}/>
      <StartSection content={content.start}/>
      {/* </div> */}
      <Services content={content.services}/>
      {/* <CollaborationFitSection /> */}
      <ProcessSection content={ content.process}/>
      {/* <CaseStudiesSection /> */}
      <PortfolioImpactSection content={content.portfolioImpact} />
      <RecenzeShort />
      <FitSection content={content.fit} />
      <Cenik content={content.cenik} />
      <Contact />
    </main>
  );
}
