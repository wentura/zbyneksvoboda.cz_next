import * as motion from "framer-motion/client";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <div className={`top-0 sticky bg-modra2 z-30 max-h-16`} id="navigation">
      <div className="container flex flex-wrap max-w-screen-xl p-4 mx-auto justify-between flex-row text-gray-50">
        <Link className="flex mb-4 md:mb-0 cursor-pointer" href="/">
          <span className="text-xl nadpisPageWhite">Zbyněk Svoboda</span>
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
