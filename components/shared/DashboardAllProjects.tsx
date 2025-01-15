"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectDocument } from "@/types";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import DeleteConfirmation from "./DeleteConfirmation";
import { useRouter } from "next/navigation";

const DashboardAllProjects = () => {
  const [projects, setProjects] = useState<ProjectDocument[]>([]);

  const router = useRouter();

  // Fetching Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/adminProfile/projects");

        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects);
        }
      } catch (error) {
        console.log("Error while fetching all projects", error);
      }
    };

    fetchProjects();
  }, []);

  // Delete Project
  const handleDelete = async (id: string | undefined) => {
    try {
      const response = await fetch("/api/adminProfile/projects", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to delete project");

      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );

      toast.success("Project deleted successfully!");
    } catch (error) {
      toast.error("Error while deleting project");
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map(
        ({
          _id,
          title,
          desc,
          client,
          completion_time,
          technologies,
          project_img_url,
        }) => (
          <div key={_id} className="flex flex-col justify-stretch">
            <div className="p-4 border border-border-1 bg-bg-3 rounded-lg flex-grow">
              {/* Top Side */}
              <div className="mb-4 relative">
                <div className="absolute flex flex-col gap-4 top-2 right-2 rounded-sm shadow-sm transition-all">
                  <button onClick={() => router.push(`/adminProfile/projects/${_id}`)} className="text-neutral-0 hover:text-primary-2">
                    <FaRegEdit size={22} />
                  </button>

                  <DeleteConfirmation
                    onConfirm={() => handleDelete(_id)}
                    title="Are you sure you want to delete this project?"
                  />
                </div>

                <Image
                  className="w-full rounded-md"
                  src={project_img_url}
                  alt="project"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>

              {/* Bottom Side */}
              <div className="">
                <h5 className="text-primary-1">{title}</h5>
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
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DashboardAllProjects;
