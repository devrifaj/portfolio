import EducationForm from "@/components/forms/EducationForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getEducationById } from "@/lib/actions/education.action";

type UpdateEducationParams = {
  params: {
    id: string;
  };
};

const UpdateEducation = async ({ params: { id } }: UpdateEducationParams) => {
  const education = await getEducationById(id);

  return (
    <DashboardPageLayout title="Update Education">
      <EducationForm
        type="Update"
        education={education}
        educationId={education._id}
      />
    </DashboardPageLayout>
  );
};

export default UpdateEducation;
