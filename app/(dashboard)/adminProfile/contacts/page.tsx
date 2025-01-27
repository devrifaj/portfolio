import AdminContactForm from "@/components/forms/AdminContactForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";

const page = () => {
  return (
    <DashboardPageLayout title="Contacts">
      <AdminContactForm />
    </DashboardPageLayout>
  );
};

export default page;
