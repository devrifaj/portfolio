"use client";
import { useAppContext } from "@/lib/context/appContext";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const Blog = () => {
  const { blogs } = useAppContext();

  return (
    <section id="blog" className="relative pb-[60px]">
      {/* Section Heading Start */}
      <SectionHeading
        sectionName="Latest Posts"
        headings={[{ title: "From Blog" }]}
        center={true}
      />
      {/* Section Heading End */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16">
        {blogs.length > 0 ? (
          blogs.map(
            ({ _id, tag, img_url, date, read_time, title, desc, link }) => (
              <Link
                key={_id}
                href={link}
                className="blog-card rounded-t-md lg:mb-4 md:mb-8 mb-4 group"
                target="_blank"
              >
                {/* Card Image */}
                <div className="relative mb-6">
                  <div className="transform translate-z-0 rounded-md overflow-hidden relative">
                    <Image
                      className="w-full h-full transform transition-transform duration-300 hover:scale-105"
                      src={img_url}
                      alt={title}
                      height={600}
                      width={600}
                    />
                    <span className="absolute bottom-0 left-0 m-4 text-neutral-0 border border-white font-medium px-4 py-1 text-sm bg-neutral-1000 rounded-md hover:text-primary-2 hover:border-primary-2 duration-300">
                      {tag}
                    </span>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 rounded-full inline-flex items-center justify-center text-center align-middle w-10 h-10 leading-10 opacity-0 group-hover:opacity-100">
                      <span className="relative inline-block">
                        <RiArrowRightUpLine
                          size={24}
                          className="transition-transform duration-500 ease-in-out group-hover:animate-hover-icon-exit absolute text-black"
                        />
                        <RiArrowRightUpLine
                          size={24}
                          className="transition-transform duration-500 ease-in-out group-hover:animate-hover-icon-enter text-black"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative text-center">
                  <span className="text-[14px] flex justify-center">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(date))}{" "}
                    • {read_time} read
                  </span>
                  <h6 className="transition-all duration-200 ease-in-out hover:text-primary-2 mt-2">
                    {title}
                  </h6>
                  <p className="text-[14px]">{desc}</p>
                </div>
              </Link>
            )
          )
        ) : (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="blog-card rounded-t-md lg:mb-4 md:mb-8 mb-4"
              >
                <Skeleton height={270} style={{ marginBottom: "20px" }} />
                <Skeleton height={25} style={{ marginBottom: "10px" }} />
                <Skeleton height={45} style={{ marginBottom: "20px" }} />
                <Skeleton count={2} height={20} />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
