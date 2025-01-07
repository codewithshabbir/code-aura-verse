import { client } from "@/sanity/lib/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "next-sanity";
import CommentSection from "@/app/components/CommentSection";
import { components } from "@/app/components/CustomComponent";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export const generateStaticParams = async () => {
  const query = `*[_type == 'blogPost']{
  'slug':slug.current
}`;
  const slugs = await client.fetch(query);
  const slugRoutes:string[] = slugs.map((slug:{slug:string})=>(slug.slug));
  return slugRoutes.map((slug:string)=>({slug}))
};

async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blogQuery = `*[_type == 'blogPost' && slug.current=="${slug}"]{
    title,
    mainImage,
    author->{name, profileImage},
    categories->{title},
    date,
    mainImage,
    content,
  }[0]`;

  const post = await client.fetch(blogQuery);

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div
        key={post.slug}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div className="ml-6 mt-6 rounded-lg px-6 py-2 bg-indigo-600 text-white text-sm font-medium uppercase tracking-wide inline-block">
          {post.categories.title}
        </div>

        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <div className="flex items-center">
              <Image
                src={urlFor(post.author.profileImage).url()}
                alt={post.author.name}
                width={80}
                height={80}
                className="w-12 h-12 rounded-full" />
              <span className="ml-2">{post.author.name}</span>
            </div>
            <span>{new Date(post.date).toDateString()}</span>
          </div>
        </div>

        <div>
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover" />
        </div>

        <div className="p-6">
          <div className="prose prose-lg prose-gray">
            <PortableText value={post.content} components={components} />
          </div>
        </div>
      </div>
      <CommentSection/>
    </div>
  );
}

export default BlogPage;