import React from "react";
import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import SectionHeading from "../ui/SectionHeading";
import ProjectsSlider from "../ui/ProjectsSlider";

const Projects = () => {
  return (
    <section className="mb-8">
      <SectionAnimatedBorder>
        <div className="lg:p-16 md:p-10 p-4 relative z-10">
          {/* Section Heading Start */}
          <SectionHeading
            sectionName="Projects"
            headings={[{ title: "My Recent Works" }]}
          />
          {/* Section Heading End */}

          {/* Projects Slider */}
          <ProjectsSlider />
        </div>

        {/* Background Image Start */}
        <img
          className="absolute top-0 left-0 z-0"
          src="/projects/bg.png"
          alt="projects bg"
        />
        {/* Background Image End */}
      </SectionAnimatedBorder>
    </section>
  );
};

export default Projects;
