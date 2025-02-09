import GitJournalingForm from "@/components/forms/GitJournalingForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getGitById } from "@/lib/actions/gitJournaling.action";

type UpdateGitParams = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

const UpdateGit = async ({ params: { id } }: UpdateGitParams) => {
  const git = await getGitById(id);

  return (
    <DashboardPageLayout title="Update Git">
      <GitJournalingForm type="Update" git={git} gitId={git._id} />
    </DashboardPageLayout>
  );
};

export default UpdateGit;
