import Image from "next/image";
import Cenik from "./components/Cenik";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Logos from "./components/logos";
import Portfolio from "./components/portfolio";
import PortfolioComplete from "./components/portfolioComplete";
import PortfolioLandingPage from "./components/PortfolioLandingPage";
import RecenzeShort from "./components/recenzeShort";
import Services from "./components/services";
import Stripe from "./components/Stripe";
export default function Home() {
  return (
    <main className="max-w-screen-full mx-auto">
      <Hero2 />
      {/* <Hero /> */}
      {/* <Stripe text="Přijímám nové výzvy" /> */}
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
