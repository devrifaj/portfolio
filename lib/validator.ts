import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(8, "Title must be 8 characters"),
  desc: z.string().min(10, "Description must be 10 characters").max(200, "Description must be less than 200 characters"),
  client: z.string(),
  completion_time: z.string(),
  technologies: z.string().array().min(5, "Technologies must contain 5 or more items"),
  slider_img: z.string(),
  live_link: z.string().url(),
  github_ink: z.string().url(),
});