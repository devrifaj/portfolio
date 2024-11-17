import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface Blog {
  id: number;
  tag: string;
  img: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  blogLink: string;
}

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const { img, title, desc, date, readTime, tag, blogLink } = blog;

  return (
    <div className="lg:w-1/3">
      <div className="blog-card rounded-t-md lg:mb-4 md:mb-8 mb-4 group">
        {/* Card Image */}
        <div className="relative">
          <div className="transform translate-z-0 rounded-md overflow-hidden relative">
            <img
              className="w-full h-full transform transition-transform duration-300 hover:scale-105"
              src={img}
              alt="zelio"
            />
            <Link
              className="absolute bottom-0 left-0 m-4 text-neutral-0 border border-white font-medium px-4 py-1 text-sm bg-neutral-1000 rounded-md hover:text-primary-2 hover:border-primary-2 duration-300"
              href="#"
            >
              {tag}
            </Link>

            <Link
              href={blogLink}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 rounded-full inline-flex items-center justify-center text-center align-middle w-10 h-10 leading-10 opacity-0 group-hover:opacity-100"
            >
              <RiArrowRightUpLine size={24} className="text-black" />
            </Link>
          </div>
        </div>

        {/* Card Content */}
        <Link href={blogLink} className="relative text-center mt-6">
          <span className="text-[14px]">
            {date} • {readTime} read
          </span>
            <h6 className="transition-all duration-200 ease-in-out hover:text-primary-2 mt-2">
              {title}
            </h6>
          <p className="text-[14px]">{desc}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
