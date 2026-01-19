// * Import CookieConsent je zatím vypnutý.
// import CookieConsent from "../components/CookieConsent";
// * Import hlavního headeru.
import Header from "../components/header";

// * Export layoutu pro hlavní stránky.
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
