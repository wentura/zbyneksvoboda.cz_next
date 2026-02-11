// * Importy pro data, obrázky a bezpečný HTML render.
import { portfolioData } from "@/app/data/portfolioData";
import Image from "next/image";
import React from "react";
import SafeHtml from "@/app/components/SafeHtml";
// * Export detailu případové studie podle slugu.
const stripHtml = (value) =>
  String(value || "").replace(/<[^>]*>/g, "").trim();

export function generateMetadata({ params }) {
  const { slug } = params;
  const item = portfolioData.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "Případová studie – Zbyněk Svoboda",
      description: "Detailní případová studie z webových projektů.",
      alternates: {
        canonical: `/portfolio/pripadovaStudie/${slug}`,
      },
    };
  }

  const title = `${item.title} – případová studie`;
  const description =
    stripHtml(item.caseStudy?.studyTextShort) ||
    stripHtml(item.shortDecs) ||
    "Detailní případová studie z webových projektů.";
  const image =
    item.caseStudy?.images?.[0]?.img || item.images?.[0]?.img || "/ja.jpg";

  return {
    title,
    description,
    alternates: { canonical: `/portfolio/pripadovaStudie/${item.slug}` },
    openGraph: {
      title,
      description,
      url: `https://zbyneksvoboda.cz/portfolio/pripadovaStudie/${item.slug}`,
      images: [{ url: image }],
      type: "article",
      locale: "cs_CZ",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function PripadovaStudie({ params }) {
  // * Načtení slugu z routy.
  const { slug } = await params;
  // * Výběr konkrétního projektu z dat.
  const item = portfolioData.find((item) => item.slug === slug);

  return (
    <section className="container px-5 py-24 mx-auto flex flex-col">
      {/* <div className="h-96 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-top h-full w-full"
          src={item.caseStudy.images[0].img}
        />
      </div> */}
      <h1 className="nadpisPage">{item.caseStudy.title}</h1>
      <h2 className="nadpisPortfolio mt-4">{item.title}</h2>
      <p></p>
      <div className="flex flex-col sm:flex-row mt-10 flex-col-reverse">
        <div className={`sm:w-1/3 text-center sm:pr-8 sm:py-8 divide-y-8`}>
          <Image
            alt="content"
            className="pb-12"
            src={item.caseStudy.images[0].img}
            width={600}
            height={1000}
          />
          <Image
            alt="content"
            className="pt-12"
            src={item.caseStudy.images[1].img}
            width={600}
            height={1000}
          />
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0text-left  leading-relaxed">
          <SafeHtml html={item.caseStudy.studyTextLong} />

          <div className="flex flex-col items-center text-center justify-center md:w-1/2 mx-auto mt-12">
            {/* <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Phoebe Caulfield
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
