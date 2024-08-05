import blog from "../assets/blog.json"; // Adjust the path as necessary

export const BLOGS = blog.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);
