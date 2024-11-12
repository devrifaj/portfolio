import React from "react";
import SectionAnimatedBorder from "./ui/SectionAnimatedBorder";
import SectionHeading from "./ui/SectionHeading";
import {
  experienceCompanies,
  experienceCurrentJobDescList,
  experienceTechnologies,
} from "@/data";

const Experience = () => {
  return (
    <section id="portfolio">
      <SectionAnimatedBorder>
        <div className="lg:p-16 md:p-10 p-4 relative z-50">
          {/* Section Heading Start */}
          <SectionHeading
            sectionName="Experience"
            headings={[
              { title: "+12", span: "years of" },
              { title: "passion", span: "for programming techniques" },
            ]}
          />
          {/* Section Heading End */}

          {/* Experience Content Start */}
          <div className="lg:flex mt-8">
            {/* Experience Companies Start */}
            <div className="lg:w-1/3">
              <div className="flex flex-col gap-2">
                {experienceCompanies.map(({ id, name, logo, from, to }) => (
                  <a
                    key={id}
                    href="#"
                    className="border border-border-1 rounded-lg p-4 hover:bg-border-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <img src={logo} alt={name} />
                      <div className="flex flex-col ml-2">
                        <h5 className="mb-1">{name}</h5>
                        <span className="text-neutral-300">
                          {from} - {to}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Experience Companies End */}

            {/* Experience Description Start */}
            <div className="lg:w-2/3 lg:pl-10 mt-8 lg:mt-0">
              <h6 className="text-linear-4">Senior Software Engineer</h6>

              <ul className="mt-6 pl-4">
                {experienceCurrentJobDescList.map(
                  ({ id, desc, highlightText }) => (
                    <li
                      key={id}
                      className="text-neutral-0 mb-4 before-item-dot experience-item-dot relative"
                      dangerouslySetInnerHTML={{
                        __html: (Array.isArray(highlightText)
                          ? highlightText
                          : []
                        ).reduce((text, phrase) => {
                          if (phrase) {
                            const regex = new RegExp(`(${phrase})`, "gi");
                            return text.replace(
                              regex,
                              '<span class="text-secondary-2">$1</span>'
                            );
                          }
                          return text;
                        }, desc),
                      }}
                    ></li>
                  )
                )}
              </ul>

              <div className="flex flex-wrap items-center gap-4 mt-12">
                {experienceTechnologies.map(({ id, name }) => (
                  <button
                    key={id}
                    className="text-neutral-300 border border-border-1 px-4 py-1"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            {/* Experience Description End */}
          </div>
          {/* Experience Content End */}
        </div>

        <img className="absolute top-0 left-0 z-0" src="/services/bg.png" alt="zelio"/>
      </SectionAnimatedBorder>
    </section>
  );
};

export default Experience;
