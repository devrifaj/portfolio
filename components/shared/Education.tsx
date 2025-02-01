import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import EducationDetails from "../ui/EducationDetails";
import CooperationGitJournaling from "../ui/CooperationGitJournaling";

const Education = () => {
  return (
    <section id="resume" className="mb-8">
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Left side */}
        <div className="w-full lg:w-2/3 overflow-hidden">
          <EducationDetails />
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/3">
          <CooperationGitJournaling />
        </div>
      </div>
    </section>
  );
};

export default Education;
