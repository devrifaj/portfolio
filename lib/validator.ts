import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  desc: z.string().min(1, "Description is required"),
  client: z.string().min(1, "Client is required"),
  completion_time: z.string().min(1, "Completion time is required"),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
  project_img_url: z.string().url("Image is required"),
  live_link: z.string().url("Invalid live link URL"),
  github_link: z.string().url("Invalid GitHub link URL"),
});

export const heroFormSchema = z.object({
  headline: z.string().nonempty("Headline is required"),
  first_title: z.string().nonempty("First Title is required"),
  middle_title: z.string().nonempty("Middle Title is required"),
  hero_img_url: z.string().url({ message: "Image is required"}),
  hero_pdf_url: z.string().url({ message: "Invalid document URL" }),
  last_title: z.string().nonempty("Last Title is required"),
  desc: z.string().nonempty("Description is required"),
  desc_highlighted_text: z.string().optional(),
});