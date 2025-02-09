import BlogForm from "@/components/forms/BlogForm";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import { getBlogById } from "@/lib/actions/blog.action";

type UpdateBlogProps = {
  params: {
    id: string;
  };
};

const UpdateBlog = async ({ params: { id } }: UpdateBlogProps) => {
  const blog = await getBlogById(id);

  return (
    <DashboardPageLayout title="Update Blog">
      <BlogForm type="Update" blog={blog} blogId={blog._id} />
    </DashboardPageLayout>
  );
};

export default UpdateBlog;
