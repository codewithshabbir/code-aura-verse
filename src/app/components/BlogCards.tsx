import Link from "next/link";
import React from "react";

interface BlogCardsProps {
  title: string;
  author: string;
  category: string;
  date: string;
  mainImage: string;
  profileImage: string;
  slug: string;
}

export const BlogCards: React.FC<BlogCardsProps> = ({
  title,
  author,
  category,
  date,
  mainImage,
  profileImage,
  slug,
}) => {
  return (
    <Link
      href={`/Blogs/${slug}`}
      className="w-full md:w-[48%] lg:w-[31.68%] bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        className="w-full p-2 h-56 object-cover rounded-2xl"
        src={mainImage}
        alt="Blog Thumbnail"
      />

      <div className="p-4 h-[200px] flex flex-col justify-between">
        <div>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
            {category}
          </span>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={profileImage}
              alt="Author"
            />
            <h3 className="font-medium">{author}</h3>
          </div>

          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export const BlogSingleCard: React.FC<BlogCardsProps> = ({
  title,
  author,
  category,
  date,
  mainImage,
  profileImage,
  slug,
}) => {
  return (
    <Link
      href={`/Blogs/${slug}`}
      className="w-full relative bg-white rounded-lg shadow-lg mb-24 mt-6"
    >
      <img
        className="w-full h-80 object-cover rounded-2xl"
        src={mainImage}
        alt="Blog Thumbnail"
      />

      <div className="md:p-10 h-auto w-full md:w-[55%] left-0 md:left-10 absolute -bottom-24">
        <div className="mx-4 p-6 bg-white flex flex-col justify-between rounded-lg shadow-lg">
          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
              {category}
            </span>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={profileImage}
                alt="Author"
              />
              <h3 className="font-medium">{author}</h3>
            </div>

            <p>{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
