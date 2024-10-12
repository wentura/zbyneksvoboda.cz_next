import React from "react";
import { portfolioData } from "../../../components/portfolioData";
export default function PripadovaStudie({ params }) {
  const item = portfolioData.find((item) => item.slug === params.slug);

  return (
    <div className="container px-5 py-24 mx-auto">
      Pripadova Studie {item.title}
    </div>
  );
}
