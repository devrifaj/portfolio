import React from "react";
import SectionAnimatedBorder from "./ui/SectionAnimatedBorder";
import CooperationSlide from "./ui/CooperationSlide";
import CooperationGitJournaling from "./ui/CooperationGitJournaling";
import CooperationRotate from "./ui/CooperationRotate";
import CooperationHeading from "./ui/CooperationHeading";
import CooperationContacts from "./ui/CooperationContacts";

const Cooperation = () => {
  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Cooperation start */}
        <div className="w-full lg:w-2/3 overflow-hidden">
          <SectionAnimatedBorder>
            <div className="lg:p-16 md:p-10 p-4 ">
              {/* Cooperation heading start */}
              <CooperationHeading text="Cooperation" />

              <h3 className="font-medium text-[23px] md:text-[35px] leading-tight">
                More than +168{" "}
                <span className="text-neutral-300">
                  companies <br />
                </span>
                trusted <span className="text-neutral-300">worldwide_</span>
              </h3>
              {/* Cooperation heading end */}

              {/* brand slide start */}
              <div className="my-8 border border-border-1 rounded-md p-3">
                <CooperationSlide />
              </div>
              {/* brand slide end */}

              {/* Cooperation contact start */}
              <CooperationContacts />
              {/* Cooperation contact end */}
            </div>

            {/* rotate animation start */}
            <CooperationRotate />
            {/* rotate animation end */}
          </SectionAnimatedBorder>
        </div>
        {/* Cooperation end */}

        {/* Git Journaling start*/}
        <div className="w-full lg:w-1/3">
          <CooperationGitJournaling />
        </div>
        {/* Git Journaling end*/}
      </div>
    </section>
  );
};

export default Cooperation;
