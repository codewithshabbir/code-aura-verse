import Image from "next/image";
import Blogs from "@/app/Blogs/page";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { BlogSingleCard } from "./components/BlogCards";

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

export default async function Home() {
  const latestBlog: BlogCardsTypes[] = await client.fetch(`
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
    <div>
      <div className="mx-10 my-10 md:mx-[120px]">
        <div className="flex flex-wrap gap-6 mx-auto">
              <BlogSingleCard
                key={latestBlog[0].title}
                title={latestBlog[0].title}
                author={latestBlog[0].author.name}
                category={latestBlog[0].categories.title}
                date={formatDate(latestBlog[0].date)}
                mainImage={urlFor(latestBlog[0].mainImage).url()}
                profileImage={urlFor(latestBlog[0].author.profileImage).url()}
                slug={latestBlog[0].slug}
              />
        </div>
      </div>
      <Blogs />
    </div>
  );
}
