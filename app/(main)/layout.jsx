// import CookieConsent from "../components/CookieConsent";
import Header from "../components/header";

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
