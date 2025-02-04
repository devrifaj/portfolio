"use client";
import SectionHeading from "../ui/SectionHeading";
import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import Link from "next/link";
import { useAppContext } from "@/lib/context/appContext";
import * as RiIcons from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const Services = () => {
  const { services } = useAppContext();

  return (
    <section id="services" className="mb-8">
      <SectionAnimatedBorder className="lg:p-8 p-4 md:p-6">
        {/* Section Heading Start */}
        <SectionHeading
          sectionName="Cooperation"
          headings={[
            { title: "Designing solutions", span: "customized" },
            { span: "to meet your requirements" },
          ]}
          center={true}
        />
        {/* Section Heading End */}

        {/* Services Content Start */}
        <div className="mt-7 relative z-20">
          {/* Service Card Start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.length > 0 ? (
              services.map(({ _id, title, icon_name, desc, highlightText }) => {
                const IconComponent =
                  RiIcons[icon_name as keyof typeof RiIcons];

                return (
                  <div
                    key={_id}
                    className="lg:px-[42px] px-[35px] lg:pt-[93px] pt-[70px] lg:pb-[42px] pb-[35px] bg-bg-3 border border-border-1 rounded-md h-full transition-all duration-300 ease-in-out hover:translate-y-[-8px] group"
                  >
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 text-neutral-0 group-hover:text-primary-2 transition-all duration-300" />
                    ) : null}

                    <h6 className="my-4 font-medium text-[20px] leading-tight">
                      {title}
                    </h6>

                    {/* Description with Highlighted Text */}
                    <p
                      className="text-base text-neutral-300 mb-4 font-normal leading-normal"
                      dangerouslySetInnerHTML={{
                        __html: highlightText
                          ? (desc || "").replace(
                              new RegExp(
                                `(${highlightText.split(" ").join("|")})`,
                                "gi"
                              ),
                              '<span class="text-secondary-2">$1</span>'
                            )
                          : desc || "",
                      }}
                    ></p>
                  </div>
                );
              })
            ) : (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:px-[42px] px-[35px] lg:pt-[93px] pt-[70px] lg:pb-[42px] pb-[35px] bg-bg-3 border border-border-1 rounded-md h-full transition-all duration-300 ease-in-out hover:translate-y-[-8px] group"
                  >
                    <Skeleton
                      height={30}
                      containerClassName="flex-1"
                      style={{ marginBottom: "15px" }}
                    />
                    <Skeleton
                      height={40}
                      containerClassName="flex-1"
                      style={{ marginBottom: "15px" }}
                    />
                    <Skeleton
                      count={3}
                      height={20}
                      containerClassName="flex-1"
                      style={{ marginBottom: "5px" }}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
          {/* Service Card End */}

          {/* More Services Text */}
          <div className="text-center pt-[60px]">
            <p className="text-neutral-300 text-[16px]">
              Excited to take on{" "}
              <span className="text-neutral-0">new projects</span> and
              collaborate.
              <br />
              Let&apos;s chat about your ideas.{" "}
              <Link href="/#contact" className="text-primary-2">
                Reach out!
              </Link>
            </p>
          </div>
        </div>
        {/* Services Content End */}

        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full dark:invert"
          style={{ backgroundImage: 'url("/services/bg.png")' }}
        ></div>
      </SectionAnimatedBorder>
    </section>
  );
};

export default Services;
