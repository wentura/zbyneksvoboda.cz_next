import Link from "next/link";
import React from "react";
import { navData } from "../data/navigationData";
import NavigationMobile from "./navigationMobile";
export default function Navigation() {
  return (
    <div className="">
      <nav className="hidden md:flex flex-wrap items-center justify-center text-sm md:ml-auto md:pt-1">
        {navData.map((item, index) => (
          <Link
            className="mr-5 hover:text-gray-400 hover:underline transition duration-150"
            key={index}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center md:hidden max-h-8">
        <NavigationMobile />
      </div>
    </div>
  );
}
