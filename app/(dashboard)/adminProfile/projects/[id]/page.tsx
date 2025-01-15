"use client";

import { useEffect, useState } from "react";
import ProjectForm from "@/components/forms/ProjectForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { ProjectDocument } from "@/types";

const UpdateProject = ({ params: { id } }: { params: { id: string } }) => {
  const [project, setProject] = useState<ProjectDocument>();

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch(`/api/adminProfile/projects/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProject(data);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    }

    fetchProject();
  }, [id]);

  return (
    <DashboardPageLayout title="Update Project">
      <ProjectForm type="Update" project={project} projectId={id} />
    </DashboardPageLayout>
  );
};

export default UpdateProject;
