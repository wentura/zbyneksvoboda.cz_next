import Image from "next/image";
export default function Logos() {
  return (
    <div className="hidden md:flex px-4 my-16 mx-auto justify-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-4 row-gap-3 sm:grid-cols-4 lg:grid-cols-6 grayscale">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/doom_gdkhes.webp"
            alt="Doomentia"
            width="200"
            height="100"
            className="invert"
          />
        </div>

        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/ae-logo_qyq20v.webp"
            alt="AntonieEmma"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-32 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/ep_c1fj93.webp"
            alt="Ergo-product"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        {/* <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-22 sm:h-24">
          <Image
            src="/img/logos/fly5.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
          &nbsp;&nbsp;Fly5
        </div> */}
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-28 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/hara_logo_knhqjr.webp"
            alt="Harasov"
            width="200"
            height="100"
            className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/hexfit_r3b9se.png"
            alt="Hexfit"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/kk_moh9mo.jpg"
            alt="Kolem-krku"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/koko_zsssdk.webp"
            alt="Kokostezky"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-40 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532416/zbyneksvoboda/logos/zv_f1j3ro.webp"
            alt="Zodpovědná Výuka"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-16 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532416/zbyneksvoboda/logos/zoe_dsa2vv.png"
            alt="Zoe8"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-32 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532415/zbyneksvoboda/logos/krakatit_hnijj1.webp"
            alt="Krakatit"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-26 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/fly5_ss5m87.webp"
            alt="Fly5"
            width="200"
            height="100"
            // className="invert"
          />
          &nbsp;&nbsp;Fly5
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-40 sm:h-24">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532416/zbyneksvoboda/logos/zh_wyyf4l.webp"
            alt="Zodpovědný Hub"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
      </div>
    </div>
  );
}
