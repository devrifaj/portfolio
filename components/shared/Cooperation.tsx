import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import CooperationSlide from "../ui/CooperationSlide";
import RotateAnimation from "../ui/RotateAnimation";
import SectionHeading from "../ui/SectionHeading";
import CooperationContacts from "../ui/CooperationContacts";

const Cooperation = () => {
  return (
    <section className="mb-8">
        {/* Cooperation Left Start */}
        <div>
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
            <RotateAnimation />
          </SectionAnimatedBorder>
        </div>
        {/* Cooperation Left End */}
    </section>
  );
};

export default Cooperation;
