"use client"

import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import ProjectForm from "@/components/forms/ProjectForm";
import { useState } from "react";

const AdminProjects = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <DashboardPageLayout title="Projects">
      <ProjectForm type="Create" files={files} setFiles={setFiles}/>
    </DashboardPageLayout>
  );
};

export default AdminProjects;
