import Image from "next/image";
import Link from "next/link";
import React from "react";
import Reveal from "./Reveal";

export default function RecenzeShort({ content }) {
  const { items, otherClients } = content;

  return (
    <section
      id="recenze"
      className="py-20 md:py-28 bg-brand-offwhite scroll-mt-16"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 className="type-h1 text-modra2 mb-4 max-w-2xl">{content.title}</h2>
          {content.intro ? (
            <p className="type-body-lg mb-14 text-neutral-700 max-w-2xl">
              {content.intro}
            </p>
          ) : (
            <div className="mb-14" />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-neutral-200 mb-14">
            {items.map((testimonial, index) => (
              <div
                key={index}
                className="py-10 md:py-12 md:px-8 first:md:pl-0 border-b md:border-b-0 md:border-l border-neutral-200 first:md:border-l-0 flex flex-col"
              >
                <p className="type-body text-neutral-700 mb-8 flex-grow leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-6 border-t border-neutral-200 flex flex-row items-center gap-4">
                  <Image
                    src={testimonial.fotka}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover object-center w-12 h-12"
                  />
                  <div>
                    <p className="font-semibold text-modra2 type-body">
                      {testimonial.name}
                    </p>
                    <p className="type-meta text-neutral-500">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-200">
            <p className="type-body text-neutral-700 mb-6 max-w-3xl">
              {content.clientsLinePrefix}{" "}
              {otherClients.map((client, index) => (
                <React.Fragment key={client}>
                  {index > 0 && ", "}
                  <strong>{client}</strong>
                </React.Fragment>
              ))}{" "}
              {content.clientsLineSuffix}
            </p>
            <Link href="/recenze" className="odkaz type-body text-modra2">
              {content.moreLinkLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
