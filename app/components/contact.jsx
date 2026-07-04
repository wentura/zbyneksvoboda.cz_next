"use client";

import SectionShell from "./SectionShell";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactForm";

export default function Contact({ contact, form }) {
  return (
    <SectionShell
      className="bg-modra2"
      id="kontakt"
    >
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="nadpisPageWhite sm:w-full text-left mb-6 md:mb-8">
          {contact.title}
        </h2>
        <p className="type-body-lg text-white mb-4 max-w-4xl">{contact.lead}</p>
      </div>
      <div className="container flex flex-col items-center max-w-screen-xl mx-auto md:flex-row ">
        <div className="flex flex-col text-center lg:flex-grow lg:w-1/2 lg:pr-12 md:pr-8 md:items-start md:text-left md:mb-0">
          <div className="flex flex-col gap-6 my-12 ">
            <a
              href={`mailto:${contact.email}`}
              className="type-h2 text-brand-offwhite underline decoration-2 underline-offset-8 transition-all duration-300 text-2xl md:text-5xl tracking-wide "
            >
              {contact.email}
            </a>{" "}
            <a
              href={contact.phoneHref}
              className="type-h2 text-brand-offwhite underline decoration-2 underline-offset-8 transition-all duration-300 text-3xl md:text-5xl tracking-wider"
            >
              {contact.phoneDisplay}
            </a>
          </div>
          <div className="w-full mx-auto md:px-4">
            <ContactForm form={form} />
          </div>
        </div>
        <div className="mx-auto mt-16 w-full md:w-1/2">
          <div className="flex flex-col text-white gap-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 text-white">
              <div className="md:flex flex-col gap-2 mb-8 hidden">
                {contact.social.map((item) => (
                  <div key={item.href}>
                    <a
                      className="ml-3 text-white odkaz flex gap-2"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon href={item.href} />
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
              <span className="text-white type-body text-center md:text-left pl-4 md:pl-3">
                {contact.ownerName}
                <br />
                {contact.addressLines.map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <span className="type-meta">{contact.notVat}</span>
              </span>
            </div>
            <div className="flex w-full mx-auto text-center items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 6 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  className="object-contain bg-neutral-200 p-2 pb-8 mr-0"
                  alt={contact.imageAlt}
                  src="/ja.jpg"
                  width={400}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SocialIcon({ href }) {
  if (href.includes("facebook"))
    return (
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5 text-white shrink-0"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    );
  if (href.includes("instagram"))
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5 text-white shrink-0"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
    );
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0}
      className="w-5 h-5 text-white shrink-0"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        stroke="none"
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      />
      <circle cx={4} cy={4} r={2} stroke="none" />
    </svg>
  );
}
