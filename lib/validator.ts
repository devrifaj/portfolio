import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  desc: z.string().min(1, "Description is required"),
  client: z.string().min(1, "Client is required"),
  completion_time: z.string().min(1, "Completion time is required"),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
  project_img_url: z.string().url("Invalid image URL"),
  live_link: z.string().url("Invalid live link URL"),
  github_link: z.string().url("Invalid GitHub link URL"),
});