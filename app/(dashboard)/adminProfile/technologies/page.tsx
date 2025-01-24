"use client";
import { useAppContext } from "@/lib/context/appContext";
import TechnologyForm from "@/components/forms/TechnologyForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import { deleteTechnology } from "@/lib/actions/technology.action";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";

const AdminDashboardBlog = () => {
  const { technologies, fetchTechnology } = useAppContext();
  console.log(technologies);

  // handling delete technology
  const handleDelete = async (id: string) => {
    await deleteTechnology({ technologyId: id });

    await fetchTechnology();
    toast.success("Technology Deleted successfully");
  };

  return (
    <DashboardPageLayout title="Technologies">
      <div className="mb-12">
        <h1 className="text-xl font-medium mb-4 text-secondary-2">
          Create New Technology
        </h1>
        <TechnologyForm type="Create" />
      </div>

      <div>
        <h1 className="text-xl font-medium text-secondary-2">
          All Technologies
        </h1>

        <div className="grid grid-cols-4 gap-4">
          {technologies.map(
            ({
              _id,
              tech_name,
              tech_img_url,
              show_in_hero,
              skill_position,
            }) => (
              <div key={_id} className="flex flex-col justify-stretch">
                <div className="p-4 border border-border-1 bg-bg-3 rounded-lg flex-grow">
                  <div className="mb-4 relative">
                    <div className="absolute flex flex-col gap-4 top-2 right-2 rounded-sm shadow-sm transition-all">
                      <Link
                        href={`/adminProfile/technologies/${_id}`}
                        className="text-neutral-0 hover:text-primary-2"
                      >
                        <FaRegEdit size={22} />
                      </Link>

                      <DeleteConfirmation
                        onConfirm={() => handleDelete(_id)}
                        title="Are you sure you want to delete this technology?"
                      />
                    </div>

                    <img
                      className="w-full h-32"
                      src={tech_img_url}
                      alt="project"
                    />
                  </div>

                  <ul className="mt-4">
                    <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                      <div className="flex justify-between">
                        <p className="mb-0 text-end">Technology Name</p>
                        <p className="text-neutral-300 mb-0 text-end">
                          {tech_name}
                        </p>
                      </div>
                    </li>

                    <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                      <div className="flex justify-between">
                        <p className="mb-0 text-end">Show in hero</p>
                        <p className="text-neutral-300 mb-0 text-end">
                          {show_in_hero == true ? "Yes" : "No"}
                        </p>
                      </div>
                    </li>

                    <li className="text-neutral-0 mb-4 border-b border-border-1 pb-4">
                      <div className="flex justify-between">
                        <p className="mb-0 text-end">Position in Skill</p>
                        <p className="text-neutral-300 mb-0 text-end">
                          {skill_position === "Top" ? "Top" : "Bottom"}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardPageLayout>
  );
};

export default AdminDashboardBlog;
