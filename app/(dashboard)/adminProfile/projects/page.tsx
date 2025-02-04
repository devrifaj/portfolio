"use client";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import ProjectForm from "@/components/forms/ProjectForm";
import { useAppContext } from "@/lib/context/appContext";
import { useRouter } from "next/navigation";
import { deleteProject } from "@/lib/actions/project.action";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import Image from "next/image";

const AdminDashboardProjects = () => {
  const { projects, fetchProjects } = useAppContext();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    await deleteProject({ projectId: id });

    await fetchProjects();
    toast.success("Project Deleted successfully");
    router.push("/#projects");
  };
  return (
    <DashboardPageLayout title="Projects">
      <div className="mb-12">
        <h1 className="form-heading">
          Create New Project
        </h1>
        <ProjectForm type="Create" />
      </div>

      <div>
        <h1 className="form-heading">All Projects</h1>
        <div className="form-container">
          {projects.map(
            ({
              _id,
              project_img_url,
              title,
              desc,
              client,
              completion_time,
              technologies,
            }) => (
              <div key={_id} className="flex flex-col justify-stretch">
                <div className="p-4 border border-border-1 bg-bg-3 rounded-lg flex-grow">
                  {/* Top Side */}
                  <div className="mb-4 relative">
                    <div className="absolute flex flex-col gap-4 top-2 right-2 rounded-sm shadow-sm transition-all">
                      <Link
                        href={`/adminProfile/projects/${_id}`}
                        className="text-neutral-0 hover:text-primary-2"
                      >
                        <FaRegEdit size={22} />
                      </Link>

                      <DeleteConfirmation
                        onConfirm={() => handleDelete(_id)}
                        title="Are you sure you want to delete this project?"
                      />
                    </div>

                    <Image
                      className="w-full rounded-md"
                      src={project_img_url}
                      alt="project"
                      width={500}
                      height={300}
                    />
                  </div>

                  {/* Bottom Side */}
                  <div>
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
      </div>
    </DashboardPageLayout>
  );
};

export default AdminDashboardProjects;
