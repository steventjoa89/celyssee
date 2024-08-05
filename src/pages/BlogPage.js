import React from "react";
import { useParams } from "react-router-dom";
import { BLOGS } from "../data/blog";
import PageNotFoundPage from "./PageNotFoundPage";
import { formatDate } from "../utils/dateUtil";

function BlogPage() {
  const { id } = useParams();

  const selectedBlog = BLOGS.find((blog) => blog.id === parseInt(id));

  // Redirect to PageNotFound where the perfume ID is not found
  if (!selectedBlog) {
    return <PageNotFoundPage />;
  }

  return (
    <div className="max-w-4xl mx-auto mb-8 px-8 py-6">
      <div className="space-y-6 text-left">
        {/* Title Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/blogs/${selectedBlog.image}`}
          alt={selectedBlog.title}
          className="w-full h-[30vh] md:h-[45vh] lg:h-[50vh] object-cover rounded-lg"
        />

        {/* Title and Date */}
        <div className="text-left">
          <span className="block text-xs text-gray-400 mb-2">
            {formatDate(selectedBlog.createdAt)}
          </span>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            {selectedBlog.title}
          </h1>
        </div>

        {/* Blog Content */}
        {selectedBlog.description.map((item, index) => (
          <div
            key={index}
            className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6"
          >
            {item.type === "paragraph" && <p>{item.content}</p>}
            {item.type === "subtitle" && (
              <h2 className="text-base md:text-lg font-bold">{item.content}</h2>
            )}
            {item.type === "image" && (
              <div className="flex items-center justify-center">
                <img
                  src={`${process.env.PUBLIC_URL}/images/blogs/${item.src}`}
                  alt={selectedBlog.title}
                  className="w-[80vw] sm:w-[60vw] md:w-[50vw] xl:w-[40vw] h-[30vh] sm:h-[35vh] lg:h-[40vh] object-cover rounded-lg"
                />
              </div>
            )}
            {item.type === "list" && item.style === "bullet" && (
              <ul className="list-disc -mt-5 pl-5">
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            )}
            {item.type === "list" && item.style === "numbered" && (
              <ol className="list-decimal -mt-5 pl-5">
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ol>
            )}
          </div>
        ))}

        {/* Author */}
        <div className="text-gray-600 text-sm">
          Written by{" "}
          <span className="font-semibold text-gray-800">
            {selectedBlog.author}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
