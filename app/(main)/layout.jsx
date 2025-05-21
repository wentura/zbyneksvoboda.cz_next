// import CookieConsent from "../components/CookieConsent";
import Header from "../components/header";
export default function PortfolioLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto">{children}</main>
    </div>
  );
}
