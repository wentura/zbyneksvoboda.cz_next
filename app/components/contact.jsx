import Image from "next/image";
import React from "react";
import ContactForm from "./contactForm";
import MailSvg from "./mail";
import PhoneSvg from "./phone";

export default function Contact() {
  return (
    <section
      className="py-10 md:py-24 bg-modra2 px-5 xl:px-0 scroll-mt-12 md:scroll-mt-2"
      id="kontakt"
    >
      <div className="container max-w-screen-xl mx-auto">
        <h1 className="nadpisPageDark leading-snug sm:w-full">
          Pojďme si promluvit
        </h1>
        <h2 className="mb-2 nadpisPageDark2 leading-snug sm:w-full sm:mb-8 text-red-400">
          {" "}
          a <span className="font-bold text-white">nezávazně</span> proberme váš
          projekt
        </h2>
      </div>
      <div className="container flex flex-col items-center max-w-screen-xl mx-auto md:flex-row ">
        <div className="flex flex-col text-center lg:flex-grow lg:w-1/2 lg:pr-12 md:pr-8 md:items-start md:text-left md:mb-0">
          <div className="flex flex-col gap-4 my-12">
            <a
              href="mailto:info@zbyneksvoboda.cz"
              className="nadpisPageDark2 leading-snug  text-xl md:text-3xl lg:text-4xl hover:text-white hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300"
            >
              {/* <MailSvg /> */}
              info@zbyneksvoboda.cz
            </a>{" "}
            <a
              href="tel:00420773687792"
              className="nadpisPageDark2 leading-snug text-xl md:text-3xl lg:text-4xl hover:text-white hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300"
            >
              {/* <PhoneSvg /> */}
              773687792
            </a>
          </div>
          <div className="w-full mx-auto md:px-4">
            <ContactForm />
          </div>
        </div>
        <div className="mx-auto mt-16 w-full md:w-1/2">
          <div className="flex flex-col text-white gap-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 text-white">
              <div className="md:flex flex-col gap-2 mb-8 hidden">
                {/* <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start"> */}
                <div>
                  <a
                    className="ml-3 text-white odkaz flex gap-2"
                    href="https://www.facebook.com/profile.php?id=100093105173892"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>{" "}
                    Zbynek.Svoboda
                  </a>
                </div>
                <div>
                  <a
                    className="ml-3 text-white odkaz flex gap-2"
                    href="https://www.instagram.com/zbyndasvoboda/"
                    target="_blank"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5 text-white"
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
                    className="ml-3 text-white odkaz flex gap-2"
                    href="https://www.linkedin.com/in/zbyneksvoboda/"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5 text-white"
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
              <span className="text-white text-center md:text-left pl-4 md:pl-3">
                Zbyněk Svoboda
                <br />
                Nebužely 3<br />
                277 34, Nebužely
                <br />
                IČ: 74811002
                <br />
                <span className="text-xs">Nejsem plátcem DPH</span>
              </span>
            </div>
            <div className="flex w-full mx-auto text-center items-center justify-center">
              <Image
                className="object-cover rounded-2xl drop-shadow-xl mr-0"
                alt="Zbyněk Svoboda, já"
                src="/ja.jpg"
                width={400}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
    </section>
  );
}
