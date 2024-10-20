import Footer from "./components/footer";
import "./globals.css";
export const metadata = {
  title: "Zbyněk Svoboda, tvořím weby",
  description: "Zbyněk Svoboda, webový designér a vývojář na volné noze.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth textPage">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
