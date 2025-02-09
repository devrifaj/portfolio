import ExperienceForm from "@/components/forms/ExperienceForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getExperienceById } from "@/lib/actions/experience.action";

type UpdateExperienceParams = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

const UpdateExperience = async ({ params: { id } }: UpdateExperienceParams) => {
  const experience = await getExperienceById(id);

  return (
    <DashboardPageLayout title="Update Experience">
      <ExperienceForm
        type="Update"
        experience={experience}
        experienceId={experience._id}
      />
    </DashboardPageLayout>
  );
};

export default UpdateExperience;
