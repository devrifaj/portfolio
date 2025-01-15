import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import ProjectForm from "@/components/forms/ProjectForm";
import DashboardAllProjects from "@/components/shared/DashboardAllProjects";

const AdminProjects = () => {
  return (
    <DashboardPageLayout title="Projects">
      <div className="mb-12">
        <h1 className="text-xl font-medium mb-4 text-secondary-2">
          Create New Project
        </h1>
        <ProjectForm type="Create"/>
      </div>

      <div>
        <h1 className="text-xl font-medium text-secondary-2">
          All Projects
        </h1>
        <DashboardAllProjects/>
      </div>
    </DashboardPageLayout>
  );
};

export default AdminProjects;
