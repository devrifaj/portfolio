"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// modules
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import ProjectsSliderNavButton from "./ProjectsSliderNavButton";
import Link from "next/link";
import { RiArrowRightUpLine, RiGithubFill } from "react-icons/ri";
import { IProject } from "@/lib/database/models/project.model";
import { useAppContext } from "@/lib/context/appContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const ProjectsSlider = () => {
  const { projects } = useAppContext();
  // const projects = []

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Keyboard, Navigation, Autoplay]}
      className="relative"
    >
      {projects.length > 0 ? (
        projects.map((project: IProject) => (
          <SwiperSlide key={project._id} className="relative">
            <div className="lg:p-8 md:p-6 p-4 border border-border-1 mt-8 bg-bg-3 min-h-[570px]">
              <div className="xl:flex items-center gap-11">
                {/* Left side */}
                <div className="xl:w-1/2 lg:w-3/4 mx-auto">
                  <Image
                    layout="responsive"
                    width={800}
                    height={600}
                    className="w-full"
                    src={project.project_img_url}
                    alt="project"
                  />
                </div>

                {/* Right Side */}
                <div className="xl:w-7/12 lg:w-3/4 mx-auto mt-8 xl:mt-0">
                  <h4 className="text-linear-4">{project.title}</h4>
                  <p>{project.desc}</p>

                  <div className="mt-4">
                    <p className="text-secondary-2 mb-4 border-b border-border-1 pb-4">
                      Project Info
                    </p>

                    <ul>
                      <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Client</p>
                          <p className="text-neutral-300 mb-0 text-end">
                            {project.client}
                          </p>
                        </div>
                      </li>

                      <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Completion Time</p>
                          <p className="text-neutral-300 mb-0 text-end">
                            {project.completion_time}
                          </p>
                        </div>
                      </li>

                      <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-right">Technologies</p>
                          <p className="text-neutral-300 mb-0 text-right">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="mr-2">
                                {tech}
                                {index < project.technologies.length - 1 &&
                                  ", "}
                              </span>
                            ))}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-end gap-4 mt-10">
                    <Link
                      href={project.live_link}
                      target="_blank"
                      className="text-neutral-300 border-b border-border-1 px-2 pb-2 flex items-center gap-2 hover:text-primary-2 hover:border-primary-2 transition-all duration-200"
                    >
                      <RiArrowRightUpLine size={24} />
                      Live Demo
                    </Link>

                    <Link
                      href={project.github_link}
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
          </SwiperSlide>
        ))
      ) : (
        <div className="lg:p-8 md:p-6 p-4 border border-border-1 mt-8 bg-bg-3 min-h-[570px]">
          <div className="xl:flex items-center gap-11">
            {/* Left side Skeleton */}
            <div className="xl:w-1/2 lg:w-3/4 mx-auto">
              <Skeleton className="h-[340px] lg:h-[470px]" />
            </div>

            {/* Right Side Skeleton */}
            <div className="xl:w-7/12 lg:w-3/4 mx-auto mt-8 xl:mt-0">
              {/* Title Skeleton */}
              <Skeleton height={60} style={{marginBottom: 15}} />

              {/* Description Skeleton */}
              <Skeleton height={20} count={2} style={{marginBottom: 8}} />

              {/* List Items Skeleton */}
              <div>
                <Skeleton height={30} style={{marginBottom: 4}}/>
                <div className="mt-4 mb-0 border-b border-border-1"></div>

                <ul className="py-2">
                  {[...Array(3)].map((_, index) => (
                    <li
                      key={index}
                      className="text-neutral-0 mb-4 border-b border-border-1 pb-4"
                    >
                      <div className="flex gap-8 justify-between">
                        <Skeleton
                          height={30}
                          containerClassName="mb-0 flex-1"
                        />
                        <Skeleton
                          height={30}
                          containerClassName="mb-0 flex-1"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links Skeleton */}
              <div className="flex flex-wrap items-end gap-4 lg:w-1/2">
                {[...Array(2)].map((_, index) => (
                  <Skeleton
                    key={index}
                    height={30}
                    containerClassName="mb-0 border-b border-border-1 flex-1"
                    style={{marginBottom: 8}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ProjectsSliderNavButton />
    </Swiper>
  );
};

export default ProjectsSlider;
