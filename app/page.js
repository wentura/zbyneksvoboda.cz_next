import Image from "next/image";
import Cenik from "./components/Cenik";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Portfolio from "./components/portfolio";
import PortfolioComplete from "./components/portfolioComplete";
import PortfolioLandingPage from "./components/PortfolioLandingPage";
import RecenzeShort from "./components/recenzeShort";
import Services from "./components/services";
import Stripe from "./components/Stripe";
export default function Home() {
  return (
    <main>
      <Hero />
      <Stripe text="Přijímám nové výzvy" />
      <Header />
      <Services />
      <PortfolioLandingPage />
      {/* <PortfolioComplete /> */}
      <RecenzeShort />
      <Logos />
      <Cenik />
      <Contact />
    </main>
  );
}
