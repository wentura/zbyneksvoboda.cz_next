// * Importy pro fonty, globální styly a layout komponenty.
import localFont from "next/font/local";
import "./globals.css";
// import { content } from "@/content";
// import Header from "./components/header";
import Matomo from "./components/matomo";
import Footer from "./components/footer";

// * Lokální font Montserrat.
const montserrat = localFont({
  src: [{ path: "../public/montserrat.woff2", weight: "400", style: "normal" }],
  variable: "--font-montserrat",
  display: "swap",
});

// * Lokální font Noto Serif.
const notoserif = localFont({
  src: [{ path: "../public/noto.woff2", weight: "400", style: "normal" }],
  variable: "--font-notoserif",
  display: "swap",
});

// * Metadata pro SEO.
export const metadata = {
  title: "Zbyněk Svoboda - digitální strategie, firemní weby a interní systémy",
  description:
    "Pomáhám malým a středním firmám sjednotit web, data a interní procesy do funkčního digitálního systému. Navrhuji firemní weby, klientské portály a interní aplikace.",
  metadataBase: new URL("https://zbyneksvoboda.cz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zbyněk Svoboda - digitální strategie, firemní weby a interní systémy",
    description:
      "Pomáhám malým a středním firmám sjednotit web, data a interní procesy do funkčního digitálního systému. Navrhuji firemní weby, klientské portály a interní aplikace.",
    url: "https://zbyneksvoboda.cz",
    siteName: "Zbyněk Svoboda",
    images: [
      {
        url: "/ja.jpg",
        width: 400,
        height: 600,
        alt: "Zbyněk Svoboda",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zbyněk Svoboda - digitální strategie, firemní weby a interní systémy",
    description:
      "Pomáhám malým a středním firmám sjednotit web, data a interní procesy do funkčního digitálního systému. Navrhuji firemní weby, klientské portály a interní aplikace.",
    images: ["/ja.jpg"],
  },
};

// * Export root layoutu aplikace.
export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Zbyněk Svoboda",
        url: "https://zbyneksvoboda.cz",
        jobTitle: "Digitální stratég, webový konzultant a vývojář",
        email: "info@zbyneksvoboda.cz",
        telephone: "+420773687792",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nebužely 3",
          postalCode: "277 34",
          addressLocality: "Nebužely",
          addressCountry: "CZ",
        },
      },
      {
        "@type": "WebSite",
        name: "Zbyněk Svoboda",
        url: "https://zbyneksvoboda.cz",
      },
    ],
  };

  return (
    <html
      lang="cs"
      className={`${montserrat.variable} ${notoserif.variable} scroll-smooth`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Footer />
        <Matomo />
      </body>
    </html>
  );
}
