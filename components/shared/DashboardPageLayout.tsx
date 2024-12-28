import React from "react";

const DashboardPageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="container py-5">
      <h3 className="text-center">{title}</h3>
      {children}
    </div>
  );
};

export default DashboardPageLayout;
