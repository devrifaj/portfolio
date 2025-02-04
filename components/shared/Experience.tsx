"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/lib/context/appContext";
import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import SectionHeading from "../ui/SectionHeading";
import Skeleton from "react-loading-skeleton";

const Experience = () => {
  const { experienceTitle, experiences } = useAppContext();
  const [selectedCompany, setSelectedCompany] = useState(
    experiences?.[0] || null
  );

  useEffect(() => {
    if (experiences?.length > 0) {
      setSelectedCompany(experiences[0]);
    }
  }, [experiences]);

  return (
    <section id="portfolio" className="mb-8">
      <SectionAnimatedBorder>
        <div className="lg:p-16 md:p-10 p-4 relative z-50">
          {/* Section Heading */}
          {experienceTitle ? (
            <SectionHeading
              sectionName="Experience"
              headings={[
                {
                  title: `${experienceTitle.first_title}`,
                  span: `${experienceTitle.second_title}`,
                },
                {
                  title: `${experienceTitle.third_title}`,
                  span: `${experienceTitle.fourth_title}`,
                },
              ]}
            />
          ) : (
            <div className="xl:w-2/3">
              <Skeleton height={30} style={{ marginBottom: "10px" }} />
              <Skeleton height={60} />
            </div>
          )}

          {/* Experience Content */}
          <div className="lg:flex mt-8">
            {/* Experience Companies List */}
            <div className="lg:w-1/3">
              {experiences.length > 0 ? (<div className="flex flex-col gap-2">
                {experiences.map((company) => (
                  <button
                    key={company._id}
                    onClick={() => setSelectedCompany(company)}
                    className={`border border-border-1 rounded-lg p-4 transition-all duration-300 ${
                      selectedCompany?._id === company._id
                        ? "bg-border-1"
                        : "hover:bg-border-1"
                    } focus:outline-none`}
                  >
                    <div className="flex items-center gap-3">
                      {company.company_logo_url && (
                        <img
                          src={company.company_logo_url}
                          alt={company.company_name}
                          className="w-10 h-10 object-contain"
                        />
                      )}
                      <div className="flex flex-col">
                        <h5 className="mb-1 text-[18px] md:text-[24px] text-left">
                          {company.company_name}
                        </h5>
                        <span className="text-neutral-300">
                          {new Date(company.job_start_date).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              year: "numeric",
                            }
                          )}{" "}
                          -{" "}
                          {company.isPresent
                            ? "Present"
                            : company.job_end_date
                            ? new Date(company.job_end_date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  year: "numeric",
                                }
                              )
                            : ""}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>) : (
                <Skeleton count={3} height={80} style={{marginBottom: "10px"}}/>
              )}
            </div>

            {/* Experience Details */}
            {selectedCompany ? (
              <div className="lg:w-2/3 lg:pl-10 mt-8 lg:mt-0">
                <h6 className="text-linear-4 text-[18px] sm:text-[20px]">
                  {selectedCompany.role || "Software Engineer"}
                </h6>

                <ul className="mt-6 pl-4">
                  {selectedCompany.job_desc_list.map((desc, index) => (
                    <li
                      key={index}
                      className="text-neutral-0 mb-4 before-item-dot experience-item-dot relative"
                      dangerouslySetInnerHTML={{
                        __html: desc.highlight
                          ? desc.text.replace(
                              new RegExp(`(${desc.highlight})`, "gi"),
                              '<span class="text-secondary-2">$1</span>'
                            )
                          : desc.text,
                      }}
                    ></li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 mt-12">
                  {selectedCompany.experi_technologies.map((tech, index) => (
                    <button
                      key={index}
                      className="text-neutral-300 border border-border-1 px-4 py-1"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="lg:w-2/3 lg:pl-10 mt-8 lg:mt-0">
                <Skeleton height={45} style={{marginBottom: "20px"}}/>
                <Skeleton count={3} height={30} style={{marginBottom: "10px"}}/>
                <Skeleton height={40} style={{marginTop: "30px"}}/>
              </div>
            )}
          </div>
        </div>
      </SectionAnimatedBorder>
    </section>
  );
};

export default Experience;
