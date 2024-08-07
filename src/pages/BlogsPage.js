import React from "react";
import { BLOGS } from "../data/blog";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import TitleManager from "../components/TitleManager/TitleManager";

function BlogCard({ id, image, title, description }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(ROUTES.BLOG(id));
  };

  return (
    <div data-aos="fade-up" className="text-left overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/images/blogs/${image}`}
        alt={title}
        className="w-full h-52 object-cover rounded-xl cursor-pointer"
        onClick={handleOnClick}
      />
      <div className="mt-1">
        <h1 className="pt-4 pb-0 text-lg font-bold line-clamp-2">{title}</h1>
        <p className="mt-2 text-gray-500 text-base line-clamp-3">
          {description}
        </p>
        <div
          className="mt-3 text-sm underline underline-offset-4 line-clamp-1 cursor-pointer"
          onClick={handleOnClick}
        >
          See More
        </div>
      </div>
    </div>
  );
}

function BlogsPage() {
  return (
    <>
      <TitleManager templateKey="BLOGS" />
      <div className="mx-8 md:mx-12 lg:mx-20 my-8 md:my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
        {BLOGS.map((item, index) => (
          <BlogCard
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.sneakPeek}
          />
        ))}
      </div>
    </>
  );
}

export default BlogsPage;
