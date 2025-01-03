import { client } from "@/sanity/lib/client";
import BlogCards from "@/components/BlogCards";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

interface BlogCardsTypes {
  title: string;
  author: { name: string, profileImage: string };
  categories: { title: string };
  date: string;
  mainImage: string;
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
    let blogsQuery: BlogCardsTypes[] = await client.fetch(`
          *[_type == 'blogPost']{
              title,
              author->{name, profileImage},
              categories->{title},
              date,
              mainImage,
          }
      `);

  return (
    <div className="mx-32">
      <div className="flex flex-wrap">
        {
          blogsQuery.map((blogsContent) => {
            return(
              <BlogCards
              key={blogsContent.title}
              title={blogsContent.title}
              author={blogsContent.author.name}
              category={blogsContent.categories.title}
              date={formatDate(blogsContent.date)}
              mainImage={urlFor(blogsContent.mainImage).url()}
              profileImage={urlFor(blogsContent.author.profileImage).url()}/>
            )
          })
        }
      </div>
    </div>
    
  );
}
