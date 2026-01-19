// * Importy pro odkazy a data navigace.
import Link from "next/link";
import React from "react";
import { navData } from "../data/navigationData";
import NavigationMobile from "./navigationMobile";
// * Export navigace s desktop a mobile variantou.
export default function Navigation() {
  return (
    <div className="">
      <nav className="hidden lg:flex flex-wrap items-center justify-center text-sm md:ml-auto md:pt-1">
        {/* * Smyčka přes položky menu */}
        {navData.map((item, index) => (
          <Link
            className="mr-5 hover:text-gray-600 hover:underline transition duration-200 underline-offset-4 decoration-4 decoration-red-400"
            key={index}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {/* * Mobilní navigace */}
      <div className="flex items-center lg:hidden max-h-8">
        <NavigationMobile />
      </div>
    </div>
  );
}
