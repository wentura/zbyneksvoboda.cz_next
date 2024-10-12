import React from "react";

export default function RecenzeShort() {
  return (
    <section className="py-20 mx-auto text-gray-300 body-font bg-modra2 md:py-40">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="flex flex-col flex-wrap py-0 mb-20 sm:flex-row">
          <h1 className="mb-2 md:w-1/3 md:mb-2 nadpisPageDark">
            Co říkají moji klienti
          </h1>
          <p className="pl-0 textPage md:w-2/3">
            Spolupracuji s klienty, kteří očekávají kvalitu, spolehlivost a
            inovativní přístup.
            <br />
            Podívejte se, co o naší spolupráci říkají.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="pr-8 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full">
              <div className="flex flex-row justify-between">
                {" "}
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-5 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://dummyimage.com/302x302"
                />
                <div className="flex flex-col justify-center pr-8 text-gray-100">
                  <span className="">HOLDEN CAULFIELD</span>
                  <span className="">Senior Product Designer</span>
                </div>
              </div>
              <p className="pb-5">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
            </div>
          </div>
          <div className="pr-8 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full">
              <div className="flex flex-row justify-between">
                {" "}
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-5 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://dummyimage.com/302x302"
                />
                <div className="flex flex-col justify-center pr-8 text-gray-100">
                  <span className="">HOLDEN CAULFIELD</span>
                  <span className="">Senior Product Designer</span>
                </div>
              </div>
              <p className="pb-5">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
            </div>
          </div>
          <div className="pr-8 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full">
              <div className="flex flex-row justify-between">
                {" "}
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-5 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://dummyimage.com/302x302"
                />
                <div className="flex flex-col justify-center pr-8 text-gray-100">
                  <span className="">HOLDEN CAULFIELD</span>
                  <span className="">Senior Product Designer</span>
                </div>
              </div>
              <p className="pb-5">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
