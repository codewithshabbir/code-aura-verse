import React from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import BlogCards from "../components/BlogCards";

interface BlogCardsTypes {
  title: string;
  author: { name: string; profileImage: string };
  categories: { title: string };
  date: string;
  mainImage: string;
  slug: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const page = async () => {
  const blogsQuery: BlogCardsTypes[] = await client.fetch(`
        *[_type == 'blogPost']{
            title,
            author->{name, profileImage},
            categories->{title},
            date,
            mainImage,
            'slug': slug.current,
        }
    `);

  return (
    <div className="mx-10 my-10 md:mx-[120px]">
      <div className="flex flex-wrap gap-6 mx-auto">
        {blogsQuery.map((blogsContent) => {
          return (
            <BlogCards
              key={blogsContent.title}
              title={blogsContent.title}
              author={blogsContent.author.name}
              category={blogsContent.categories.title}
              date={formatDate(blogsContent.date)}
              mainImage={urlFor(blogsContent.mainImage).url()}
              profileImage={urlFor(blogsContent.author.profileImage).url()}
              slug={blogsContent.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;