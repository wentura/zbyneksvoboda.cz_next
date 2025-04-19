import Image from "next/image";

const LOGOS = [
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/doom_gdkhes.webp",
    alt: "Doomentia",
    width: "200",
    height: "100",
    invert: true,
    widthClass: "w-24",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/ae-logo_qyq20v.webp",
    alt: "AntonieEmma",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-24",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/ep_c1fj93.webp",
    alt: "Ergo-product",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-32",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/hexfit_r3b9se.png",
    alt: "Hexfit",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-24",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/kk_moh9mo.jpg",
    alt: "Kolem-krku",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-24",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/koko_zsssdk.webp",
    alt: "Kokostezky",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-24",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532416/zbyneksvoboda/logos/zv_f1j3ro.webp",
    alt: "Zodpovědná Výuka",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-44",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532416/zbyneksvoboda/logos/zoe_dsa2vv.png",
    alt: "Zoe8",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-16",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/krakatit_hnijj1.webp",
    alt: "Krakatit",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-32",
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/fly5_ss5m87.webp",
    alt: "Fly5",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-26",
    showText: true,
  },
  {
    src: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532416/zbyneksvoboda/logos/zh_wyyf4l.webp",
    alt: "Zodpovědný Hub",
    width: "200",
    height: "100",
    invert: false,
    widthClass: "w-40",
  },
];

export default function Logos() {
  return (
    <div className="relative overflow-hidden bg-white py-12">
      <div className="animate-scroll whitespace-nowrap hidden md:flex">
        {/* First set of logos */}
        <div className="flex items-center md:space-x-44 md:pl-44 pl-12 space-x-12">
          {LOGOS.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-12 h-12 md:w-32 md:h-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.widthClass} ${
                  logo.invert ? "invert" : ""
                } grayscale hover:grayscale-0 transition-all md:duration-300 duration-100`}
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-44 pl-44">
          {LOGOS.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center w-12 h-12 md:w-32 md:h-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.widthClass} ${
                  logo.invert ? "invert" : ""
                } grayscale hover:grayscale-0 transition-all md:duration-300 duration-100`}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-44 pl-44">
          {LOGOS.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center w-12 h-12 md:w-32 md:h-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.widthClass} ${
                  logo.invert ? "invert" : ""
                } grayscale hover:grayscale-0 transition-all md:duration-300 duration-100`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container flex justify-center w-full mx-auto text-centerr">
        <div className="grid grid-cols-2 gap-2 md:hidden justify-center content-center text-center items-center">
          {LOGOS.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`${
                logo.invert ? "invert" : ""
              } grayscale hover:grayscale-0 transition-all duration-100 w-auto h-8 mx-auto mt-2`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
