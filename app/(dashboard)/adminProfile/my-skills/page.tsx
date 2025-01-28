import MySkillForm from "@/components/forms/MySkillForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import React from "react";

const page = () => {
  return (
    <DashboardPageLayout title="My Skills">
      <MySkillForm />
    </DashboardPageLayout>
  );
};

export default page;
