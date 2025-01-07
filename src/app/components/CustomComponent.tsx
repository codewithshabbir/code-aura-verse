import imageUrlBuilder from "@sanity/image-url";
import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: string; alt?: string } }) => {
      const imageUrl = urlFor(value.asset).url();
      return (
        <div className="my-10">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog Image"}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl font-extrabold my-6 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold my-5 tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-semibold my-4 tracking-wide">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-medium my-3 tracking-wide">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl font-medium my-2 tracking-wide">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-medium my-1 tracking-wide">{children}</h6>
    ),
    normal: ({ children }) => <p className="text-lg my-2">{children}</p>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-6 list-disc my-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  },
};
