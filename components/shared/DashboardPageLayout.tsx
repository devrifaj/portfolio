import React from "react";

const DashboardPageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div>
      <h3 className="text-center mb-6">{title} Dashboard</h3>
      {children}
    </div>
  );
};

export default DashboardPageLayout;
