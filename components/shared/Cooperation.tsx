"use client";
import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import CooperationSlide from "../ui/CooperationSlide";
import RotateAnimation from "../ui/RotateAnimation";
import SectionHeading from "../ui/SectionHeading";
import CooperationContacts from "../ui/CooperationContacts";
import { useAppContext } from "@/lib/context/appContext";
import Skeleton from "react-loading-skeleton";

const Cooperation = () => {
  const { cooperationTitle } = useAppContext();

  return (
    <section className="mb-8">
      {/* Cooperation Left Start */}
      <div>
        <SectionAnimatedBorder>
          <div className="lg:p-16 md:p-10 p-4 ">
            {/* Section Heading Start */}
            {cooperationTitle ? (
              <SectionHeading
                sectionName="Cooperation"
                headings={[
                  {
                    title: `${cooperationTitle.first_title}`,
                    span: `${cooperationTitle.second_title}`,
                  },
                  {
                    title: `${cooperationTitle.third_title}`,
                    span: `${cooperationTitle.fourth_title}`,
                  },
                ]}
              />
            ) : (
              <div className="xl:w-2/3">
                <Skeleton height={30} style={{ marginBottom: "10px" }} />
                <Skeleton height={60} />
              </div>
            )}
            {/* Section Heading End */}

            {/* Brand Slide */}
            <div className="my-8 border border-border-1 rounded-md p-3 lg:w-3/4 mx-auto">
              <CooperationSlide />
            </div>

            {/* Cooperation Contact */}
            <CooperationContacts />
          </div>

          {/* Rotate Animation */}
          <RotateAnimation />
        </SectionAnimatedBorder>
      </div>
      {/* Cooperation Left End */}
    </section>
  );
};

export default Cooperation;
