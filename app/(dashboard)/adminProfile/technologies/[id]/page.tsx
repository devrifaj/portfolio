import TechnologyForm from "@/components/forms/TechnologyForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getTechnologyById } from "@/lib/actions/technology.action";

type UpdateTechnologyParams = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

const UpdateTechnology = async ({ params: { id } }: UpdateTechnologyParams) => {
  const technology = await getTechnologyById(id);

  return (
    <DashboardPageLayout title="Update Technology">
      <TechnologyForm
        type="Update"
        technology={technology}
        technologyId={technology._id}
      />
    </DashboardPageLayout>
  );
};

export default UpdateTechnology;