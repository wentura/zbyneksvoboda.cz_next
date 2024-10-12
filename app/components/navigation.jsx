import Link from "next/link";
import React from "react";
import { navData } from "../components/navigationData";
export default function Navigation() {
  return (
    <nav className="md:flex flex-wrap items-center justify-center text-base md:ml-auto hidden >">
      {navData.map((item, index) => (
        <Link className="mr-5 hover:text-gray-900" key={index} href={item.link}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
