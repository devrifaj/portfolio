import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import ProjectForm from "@/components/forms/ProjectForm";

const AdminProjects = () => {
  return (
    <DashboardPageLayout title="Projects">
      <ProjectForm />
    </DashboardPageLayout>
  );
};

export default AdminProjects;
