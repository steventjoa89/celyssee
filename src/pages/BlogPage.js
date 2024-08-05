import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
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
        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/blogs/${selectedBlog.image}`}
          alt={selectedBlog.title}
          className="w-full h-[30vh] md:h-[45vh] lg:h-[50vh] object-cover rounded-lg cursor-pointer"
        />

        {/* Title and Date */}
        <div className="text-left">
          <span className="block text-xs text-gray-500 mb-2">
            {formatDate(selectedBlog.createdAt)}
          </span>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
            {selectedBlog.title}
          </h1>
        </div>

        {/* Paragraphs */}
        <div className="text-gray-700 text-sm md:text-base space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
          {selectedBlog.content.map((item, index) => (
            <div key={index}>{parse(item)}</div>
          ))}
        </div>

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
