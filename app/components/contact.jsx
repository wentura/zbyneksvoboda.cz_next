import React from "react";
import MailSvg from "./mail";
import PhoneSvg from "./phone";

export default function Contact() {
  return (
    <section className="py-10 md:py-24">
      <div className="container h-2 max-w-screen-xl px-5 mx-auto mb-20">
        <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
          <h1 className="mb-2 sm:w-1/3 sm:mb-0 nadpisPage">Kontaktujte mě</h1>
          <p className="pl-0 sm:w-2/3 text-lg leading-8">
            Máte projekt, o kterém chcete mluvit?
            <br />
            Rád s vámi proberu všechny detaily a najdeme společně to nejlepší
            řešení.
          </p>
        </div>
      </div>
      <div className="container flex flex-col-reverse items-center max-w-screen-xl px-5 mx-auto md:flex-row ">
        <div className="flex flex-col items-center mt-20 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <div className="flex flex-col items-start justify-center w-full md:justify-start">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-4 mb-12">
                <a
                  href="mailto:info@zbyneksvoboda.cz"
                  className="flex align-middle items-center gap-2 text-xl font-medium odkaz"
                >
                  <MailSvg />
                  info@zbyneksvoboda.cz
                </a>{" "}
                <a
                  href="tel:00420773687792"
                  className="flex align-middle items-center gap-2 text-xl font-medium odkaz"
                >
                  <PhoneSvg />
                  773 68 77 92
                </a>
              </div>
              <div className="flex flex-col gap-2 mb-8">
                {/* <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start"> */}
                <div>
                  <a
                    className="ml-3 text-modra2 odkaz flex inline-flex gap-2"
                    href="https://www.facebook.com/profile.php?id=100093105173892"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5 text-modra2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>{" "}
                    Zbynek.Svoboda
                  </a>
                </div>
                <div>
                  <a
                    className="ml-3 text-modra2 odkaz flex inline-flex gap-2"
                    href="https://www.instagram.com/zbyndasvoboda/"
                    target="_blank"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5 text-modra2"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>{" "}
                    ZbyndaSvoboda
                  </a>
                </div>
                <div className="">
                  <a
                    className="ml-3 text-modra2 odkaz flex inline-flex gap-2"
                    href="https://www.linkedin.com/in/zbyneksvoboda/"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5 text-modra2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                    Zbyneksvoboda
                  </a>
                </div>
              </div>
              <span className="text-modra2">
                <strong>Kancelář</strong>
                <br />
                dobré, tiché kavárny na Mělníku, nebo
                <br />
                Nebužely 3, 277 34
              </span>
              <span className="text-modra2">
                <strong>Fakturační údaje</strong>
                <br />
                Zbyněk Svoboda
                <br />
                Nebužely 3<br />
                277 34, Nebužely
                <br />
                IČ: 74811002
              </span>
              {/* <a
                href="mailto:info@zbyneksvoboda.cz"
                className="ctaBtnPrimary text-center"
              >
                info@zbyneksvoboda.cz
              </a>{" "}
              <a
                href="tel:00420773687792"
                className="ctaBtnPrimary text-center"
              >
                773 68 77 92
              </a> */}
            </div>
            {/* <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Kon
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            {/* <div className="relative flex flex-row items-center w-2/3 gap-3 mb-2 text-center mx-auto md:mx-0">
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
            </p> */}
          </div>

          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
        <div className="w-5/6 mt-80 md:mt-56 xl:mt-40 lg:max-w-xl lg:w-full md:w-1/2">
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
