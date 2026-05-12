import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecenzeShort({ content }) {
  const { items, otherClients } = content;

  return (
    <section id="recenze" className="py-16 md:py-24 bg-white scroll-mt-12">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8 text-left">{content.title}</h2>
        <p className="type-body-lg mb-12 text-gray-700">
          {content.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col"
            >
              <div className="mb-4">
                <p className="type-body text-gray-700 mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-200 flex flex-row items-center gap-2 justify-between">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </p>
                  <p className="type-meta text-gray-600">
                    {testimonial.project}
                  </p>
                </div>
                <Image
                  src={testimonial.fotka}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover object-center w-16 h-16 mr-1"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="type-body text-gray-700 mb-6">
            {content.clientsLinePrefix}{" "}
            {otherClients.map((client, index) => (
              <React.Fragment key={client}>
                {index > 0 && index < otherClients.length && ", "}
                <strong>{client}</strong>
              </React.Fragment>
            ))}{" "}
            {content.clientsLineSuffix}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/recenze" className="odkaz type-body">
            {content.moreLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
