import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { blogData } from "@/data";
import BlogCard from "./ui/BlogCard";

const Blog = () => {
  return (
    <section id="blog" className="relative pb-[60px]">
      {/* Section Heading Start */}
      <SectionHeading
        sectionName="Latest Posts"
        headings={[{ title: "From Blog" }]}
        center={true}
      />
      {/* Section Heading End */}

      <div className="lg:flex gap-6 mt-16">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
