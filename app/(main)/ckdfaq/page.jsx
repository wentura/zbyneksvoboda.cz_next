import React from "react";

export default function Ckdfaq() {
  return (
    <section className="py-10 mx-auto text-gray-600 md:py-20 px-5">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col flex-wrap py-0 mb-20 sm:flex-row">
          <h1 className="mb-2 md:w-1/3 md:mb-2 nadpisPage">
            <span className="nadpisPageDark">Č</span>asto{" "}
            <span className="nadpisPageDark">K</span>ladené{" "}
            <span className="nadpisPageDark">O</span>tázky
            <br />
            <span className="text-lg">
              <span className="nadpisPageDark text-lg">F</span>requently{" "}
              <span className="nadpisPageDark text-lg">A</span>sked{" "}
              <span className="nadpisPageDark text-lg">Q</span>uestion
            </span>
          </h1>
          <p className="pl-0 textPage md:w-2/3">
            Nevíte, jak začít nebo co vše je třeba? Tady jsou odpovědi na
            některé z nejčastějších otázek.
          </p>
        </div>

        <div className="container px-5 py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="nadpisPageDark">JAK</span>
                <span className="mt-1 text-gray-500">probíhá spolupráce?</span>
              </div>
              <div className="md:flex-grow">
                {/* <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Spolupráce začíná úvodní konzultací, během které si projdeme
                  vaše požadavky a cíle. Následně navrhnu řešení na míru vašim
                  potřebám.
                </h2> */}
                <p className="leading-relaxed">
                  Spolupráce začíná úvodní konzultací, během které si projdeme
                  vaše požadavky a cíle.
                  <br />
                  Následně navrhnu řešení na míru vašim potřebám.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
