import React from "react";
import SectionHeading from "./ui/SectionHeading";
import SectionAnimatedBorder from "./ui/SectionAnimatedBorder";
import { servicesData } from "@/data";
import Link from "next/link";

const Services = () => {
  return (
    <section className="mb-8">
      <SectionAnimatedBorder className="lg:p-8 p-4 md:p-6">
        <div className="relative z-50">
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
          <div className="mt-7">
            {/* Service Card Start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map(
                ({ id, title, icon: Icon, description, highlightText }) => (
                  <div
                    key={id}
                    className="lg:px-[42px] px-[35px] lg:pt-[93px] pt-[70px] lg:pb-[42px] pb-[35px] bg-bg-3 border border-border-1 rounded-md h-full transition-all duration-300 ease-in-out hover:translate-y-[-3px] group"
                  >
                    <Icon
                      size={24}
                      className="text-neutral-0 group-hover:text-primary-2 transition-all duration-300"
                    />

                    <h6 className="my-4 font-medium text-[20px] leading-tight">
                      {title}
                    </h6>

                    {/* Description with Highlighted Text */}
                    <p
                      className="text-[14px] text-neutral-300 mb-4 font-normal leading-normal"
                      dangerouslySetInnerHTML={{
                        __html: highlightText.reduce((text, phrase) => {
                          const regex = new RegExp(`(${phrase})`, "gi");
                          return text.replace(
                            regex,
                            '<span class="text-secondary-2">$1</span>'
                          );
                        }, description),
                      }}
                    ></p>
                  </div>
                )
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
                <Link href="#" className="text-primary-2">
                  Reach out!
                </Link>
              </p>
            </div>
          </div>
          {/* Services Content End */}
        </div>

        <img className="absolute top-0 left-0 z-0" src="/services/bg.png" alt="zelio"/>
      </SectionAnimatedBorder>
    </section>
  );
};

export default Services;
