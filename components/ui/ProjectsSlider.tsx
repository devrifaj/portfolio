import { projectSliderData } from "@/data";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";

const ProjectsSlider = () => {
  return (
    <div>
      {projectSliderData.map(
        ({
          id,
          title,
          desc,
          client,
          completion_time,
          technologies,
          slider_img,
          live_link,
          github_ink
        }) => (
          <div key={id} className="relative">
            <div className="lg:p-8 md:p-6 p-4 border border-border-1 mt-8 bg-bg-3">
              <div className="flex">
                {/* Left side */}
                <div className="lg:w-1/2 pr-11">
                  <img className="w-full" src={slider_img} alt="project" />
                </div>

                {/* Right Side */}
                <div className="lg:w-7/12 ps-lg-5 mt-5 mt-lg-0">
                  <h4 className="text-linear-4">{title}</h4>
                  <p>{desc}</p>

                  <div className="mt-4">
                    <p className="text-secondary-2 mb-4 border-b border-border-1 pb-4">
                      Project Info
                    </p>

                    <ul>
                      <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Client</p>
                          <p className="text-neutral-300 mb-0 text-end">
                            {client}
                          </p>
                        </div>
                      </li>

                      <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Completion Time</p>
                          <p className="text-neutral-300 mb-0 text-end">
                            {completion_time}
                          </p>
                        </div>
                      </li>

                      <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-right">Technologies</p>
                          <p className="text-neutral-300 mb-0 text-right">
                            {technologies.map((tech, index) => (
                              <span key={index} className="mr-2">
                                {tech}
                                {index < technologies.length - 1 && ", "}
                              </span>
                            ))}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-7">
                    <Link
                      href={live_link}
                      target="_blank"
                      className="text-neutral-300 border-b border-border-1 px-2 pb-2 flex items-center gap-2 hover:text-primary-2 hover:border-primary-2 transition-all duration-200"
                    >
                      <RiArrowRightUpLine size={24} />
                      Live Demo
                    </Link>

                    <Link
                      href={github_ink}
                      target="_blank"
                      className="text-neutral-300 border-b border-border-1 px-2 pb-2 flex items-center gap-2 hover:text-primary-2 hover:border-primary-2 transition-all duration-300"
                    >
                      <RiGithubFill size={24} />
                      View on Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsSlider;
