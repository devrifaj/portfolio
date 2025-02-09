import ServiceForm from "@/components/forms/ServiceForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getServiceById } from "@/lib/actions/service.action";

type UpdateServiceProps = {
  params: {
    id: string;
  };
};

const UpdateService = async ({ params: { id } }: UpdateServiceProps) => {
  const service = await getServiceById(id);
  
  return (
    <DashboardPageLayout title="Update Service">
      <ServiceForm type="Update" service={service} serviceId={service._id} />
    </DashboardPageLayout>
  );
};

export default UpdateService;
