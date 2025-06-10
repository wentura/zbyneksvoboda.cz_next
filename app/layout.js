import CookieConsent from "./components/CookieConsent";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "Zbyněk Svoboda, tvořím weby",
  description: "Zbyněk Svoboda, webový designér a vývojář na volné noze.",
  metadataBase: new URL("https://zbyneksvoboda.cz"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth textPage">
      <body>
        {children}
        <Footer />
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}
