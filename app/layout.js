import localFont from "next/font/local";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/footer";
import Matomo from "./components/matomo";
import "./globals.css";

const montserrat = localFont({
  src: [{ path: "../public/montserrat.woff2", weight: "400", style: "normal" }],
  variable: "--font-montserrat",
  display: "swap",
});

const notoserif = localFont({
  src: [{ path: "../public/noto.woff2", weight: "400", style: "normal" }],
  variable: "--font-notoserif",
  display: "swap",
});

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
    <html
      lang="cs"
      className={`${montserrat.variable} ${notoserif.variable} scroll-smooth textPage`}
    >
      <body>
        {children}
        <Footer />
        {/* <CookieConsent /> */}
        <Matomo />
      </body>
    </html>
  );
}
