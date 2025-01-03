import React from "react";

interface BlogCardsProps {
    title: string;
    author: string;
    category: string;
    date: string;
    mainImage: string;
    profileImage: string;
  }

const BlogCards:React.FC<BlogCardsProps> = ({title, author, category, date, mainImage, profileImage}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={mainImage}
        alt="Blog Thumbnail"
      />

      <div className="p-4">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
          {category}
        </span>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>

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
  );
};

export default BlogCards;
