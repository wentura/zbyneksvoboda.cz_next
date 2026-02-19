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
  title: "Zbyněk Svoboda – webový konzultant a digitální stratég",
  description:
    "Pomáhám firmám ujasnit směr, postavit funkční web a dlouhodobě ho rozvíjet tak, aby podporoval jejich byznys.",
  metadataBase: new URL("https://zbyneksvoboda.cz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zbyněk Svoboda – webový konzultant a digitální stratég",
    description:
      "Pomáhám firmám ujasnit směr, postavit funkční web a dlouhodobě ho rozvíjet tak, aby podporoval jejich byznys.",
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
    title: "Zbyněk Svoboda – webový konzultant a digitální stratég",
    description:
      "Pomáhám firmám ujasnit směr, postavit funkční web a dlouhodobě ho rozvíjet tak, aby podporoval jejich byznys.",
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
        jobTitle: "Webový konzultant a digitální stratég",
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
