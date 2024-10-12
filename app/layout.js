import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Tvořím weby",
  description: "Zbyněk Svoboda, webový designér a vývojář na volné noze.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* <Header /> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
