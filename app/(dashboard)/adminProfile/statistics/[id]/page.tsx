import StatisticsForm from "@/components/forms/StatisticsForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getStatisticsById } from "@/lib/actions/statistics.action";

type UpdateStatisticsProps = {
  params: {
    id: string;
  };
};

const UpdateStatistics = async ({ params: { id } }: UpdateStatisticsProps) => {
  const statistic = await getStatisticsById(id);
  
  return (
    <DashboardPageLayout title="Update Statistics">
      <StatisticsForm type="Update" statistic={statistic} statisticId={statistic._id} />
    </DashboardPageLayout>
  );
};

export default UpdateStatistics;
