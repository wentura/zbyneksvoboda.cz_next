import Image from "next/image";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Portfolio from "./components/portfolio";
import PortfolioComplete from "./components/portfolioComplete";
import RecenzeShort from "./components/recenzeShort";
import Services from "./components/services";
export default function Home() {
  return (
    <main>
      <Hero />

      <Header />

      <Services />
      <Portfolio />
      {/* <PortfolioComplete /> */}
      <RecenzeShort />
      <Logos />
      <Contact />
    </main>
  );
}
