import React from "react";
import { portfolioData } from "../../../components/portfolioData";
export default function PripadovaStudie({ params }) {
  const item = portfolioData.find((item) => item.slug === params.slug);

  return <div>Pripadova Studie {item.title}</div>;
}
