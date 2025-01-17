import HeroForm from "@/components/forms/HeroForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";

const page = () => {
  return (
    <DashboardPageLayout title="Hero">
      <HeroForm />
      
      have to change the title <br />
      have to change the description <br />
      have to change the technologies <br />
      have to change the resume <br />
      have to change the hero image <br />
    </DashboardPageLayout>
  );
};

export default page;
