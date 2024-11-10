import React from "react";
import SectionAnimatedBorder from "./ui/SectionAnimatedBorder";
import CooperationSlide from "./ui/CooperationSlide";
import CooperationGitJournaling from "./ui/CooperationGitJournaling";
import CooperationRotate from "./ui/CooperationRotate";
import SectionHeading from "./ui/SectionHeading";
import CooperationContacts from "./ui/CooperationContacts";

const Cooperation = () => {
  return (
    <section className="mb-8">
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Cooperation Left Start */}
        <div className="w-full lg:w-2/3 overflow-hidden">
          <SectionAnimatedBorder>
            <div className="lg:p-16 md:p-10 p-4 ">
              {/* Section Heading Start */}
              <SectionHeading
                sectionName="Cooperation"
                headings={[
                  { title: "More than +168", span: "companies" },
                  { title: "trusted", span: "worldwide_" },
                ]}
              />
              {/* Section Heading End */}

              {/* Brand Slide */}
              <div className="my-8 border border-border-1 rounded-md p-3">
                <CooperationSlide />
              </div>

              {/* Cooperation Contact */}
              <CooperationContacts />
            </div>

            {/* Rotate Animation */}
            <CooperationRotate />
          </SectionAnimatedBorder>
        </div>
        {/* Cooperation Left End */}

        {/* Git Journaling Start*/}
        <div className="w-full lg:w-1/3">
          <CooperationGitJournaling />
        </div>
        {/* Git Journaling End */}
      </div>
    </section>
  );
};

export default Cooperation;
