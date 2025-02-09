import ProjectForm from "@/components/forms/ProjectForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getProjectById } from "@/lib/actions/project.action";

type UpdateProjectProps = {
  params: {
    id: string;
  };
};

const UpdateProject = async ({ params: { id } }: UpdateProjectProps) => {
  const project = await getProjectById(id);
  
  return (
    <DashboardPageLayout title="Update Project">
      <ProjectForm type="Update" project={project} projectId={project._id} />
    </DashboardPageLayout>
  );
};

export default UpdateProject;
