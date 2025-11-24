import Cenik from "./components/Cenik";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Contact from "./components/contact";
import FitSection from "./components/FitSection";
import Header from "./components/header";
import Hero2 from "./components/hero2";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import RecenzeShort from "./components/recenzeShort";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="max-w-screen-full mx-auto">
      <Header />
      <Hero2 />
      <ProblemSection />
      <Services />
      <ProcessSection />
      <CaseStudiesSection />
      <RecenzeShort />
      <FitSection />
      <Cenik />
      <Contact />
    </main>
  );
}
