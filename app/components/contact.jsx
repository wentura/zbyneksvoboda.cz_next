import React from "react";

export default function Contact() {
  return (
    <section className="py-10 md:py-24">
      <div className="container h-2 max-w-screen-xl px-5 mx-auto mb-20">
        <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
          <h1 className="mb-2 sm:w-1/3 sm:mb-0 nadpisPage">Kontaktujte mě</h1>
          <p className="pl-0 sm:w-2/3 ">
            Máte projekt, o kterém chcete mluvit?
            <br />
            Rád s vámi proberu všechny detaily a najdeme společně to nejlepší
            řešení.
            <br />
            Vyplňte formulář níže, nebo mě kontaktujte přímo na{" "}
            <a href="mailto:info@zbyneksvoboda.cz" className="odkaz">
              info@zbyneksvoboda.cz
            </a>{" "}
            nebo{" "}
            <a href="tel:00420773687792" className="odkaz">
              773 68 77 92
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="mailto:info@zbyneksvoboda.cz"
            className="ctaBtnPrimary text-center"
          >
            info@zbyneksvoboda.cz
          </a>{" "}
          <a href="tel:00420773687792" className="ctaBtnPrimary text-center">
            773 68 77 92
          </a>
        </div>
      </div>
      <div className="container flex flex-col-reverse items-center max-w-screen-xl px-5 mx-auto md:flex-row ">
        <div className="flex flex-col items-center mt-20 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <div className="flex flex-col items-start justify-center w-full md:justify-start">
            {/* <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Kon
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            <div className="relative flex flex-row items-center w-2/3 gap-3 mb-2 text-center mx-auto md:mx-0">
              <label
                htmlFor="name"
                className="hidden text-sm leading-4 text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Vaše jméno"
              />
            </div>
            <div className="relative flex flex-row items-center w-2/3 gap-3 mb-2 mx-auto md:mx-0">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600 hidden"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Vaše e-mail adresa"
              />
            </div>
            <div className="relative flex flex-row items-center w-2/3 gap-3 mb-2  mx-auto md:mx-0">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600 hidden"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                defaultValue={""}
                placeholder="Vaše zpráva..."
              />
            </div>
            <button className="ctaBtnSecondary mx-auto md:mx-0">
              Odeslat zprávu
            </button>
            <p className="mt-3 text-xs text-gray-500 mx-auto md:mx-0">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>

          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
        <div className="w-5/6 mt-80 md:mt-20 lg:max-w-xl lg:w-full md:w-1/2">
          <img
            className="object-cover rounded-2xl drop-shadow-xl"
            alt="Zbyněk Svoboda, já"
            src="/ja.jpg"
          />
        </div>
      </div>
    </section>
  );
}
