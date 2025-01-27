import AdminContactForm from "@/components/forms/AdminContactForm";
import SocialContactForm from "@/components/forms/SocialContactForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";

const page = () => {
  return (
    <DashboardPageLayout title="Contacts">
      <div className="mb-12">
        <h1 className="text-xl font-medium mb-4 text-secondary-2">
          Update Contacts
        </h1>
        <AdminContactForm />
      </div>

      <div>
        <h1 className="text-xl font-medium text-secondary-2">
          Update Social links
        </h1>
        <SocialContactForm />
      </div>
    </DashboardPageLayout>
  );
};

export default page;