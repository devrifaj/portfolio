import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import ProjectForm from "@/components/shared/ProjectForm";

const AdminProjects = () => {
  return (
    <DashboardPageLayout title="Projects">
      <ProjectForm />
    </DashboardPageLayout>
  );
};

export default AdminProjects;
