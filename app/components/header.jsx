import * as motion from "framer-motion/client";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <motion.div
      // initial={{ y: 0, opacity: 100 }}
      // initial={{ y: 100, opacity: 0 }}
      // animate={{ y: 0, opacity: 100 }}
      // whileInView={{ y: 0, opacity: 100 }}
      // transition={{ ease: "easeInOut", duration: 0.3 }}
      // viewport={{ once: true }}
      className={`top-0 sticky bg-modra2 z-30`}
      id="navigation"
    >
      <div className="container flex flex-col flex-wrap max-w-screen-xl p-5 mx-auto items-between md:flex-row text-gray-50">
        <Link className="flex mb-4 md:mb-0 cursor-pointer" href="/">
          <span className="text-xl">Zbyněk Svoboda</span>
        </Link>

        <Navigation />
      </div>
    </motion.div>
  );
}
