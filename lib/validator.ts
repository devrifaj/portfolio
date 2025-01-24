import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().nonempty("Title is required"),
  desc: z.string().nonempty("Description is required"),
  client: z.string().nonempty("Client is required"),
  completion_time: z.string().nonempty("Completion time is required"),
  technologies: z
    .array(z.string())
    .min(1, "At least one technology is required"),
  project_img_url: z.string().url("Image is required"),
  live_link: z.string().url("Invalid live link URL"),
  github_link: z.string().url("Invalid GitHub link URL"),
});

export const heroFormSchema = z.object({
  headline: z.string().nonempty("Headline is required"),
  first_title: z.string().nonempty("First Title is required"),
  middle_title: z.string().nonempty("Middle Title is required"),
  hero_img_url: z.string().url("Image is required"),
  hero_pdf_url: z.string().url("Pdf is required"),
  last_title: z.string().nonempty("Last Title is required"),
  desc: z.string().nonempty("Description is required"),
  desc_highlighted_text: z.string().optional(),
});

export const technologyFormSchema = z.object({
  tech_name: z.string().nonempty("Name is required"),
  tech_img_url: z.string().url("Image is required"),
  tech_official_url: z.string().url("Invalid URL"),
  show_in_hero: z.boolean().optional(),
  skill_position: z.string().nonempty("Position in Skill is required"),
});

export const blogFormSchema = z.object({
  tag: z.string().nonempty("Tag is required"),
  img_url: z.string().url("Image is required"),
  date: z.date(),
  read_time: z.string().nonempty("Read time is required"),
  title: z.string().nonempty("Title is required"),
  desc: z.string().nonempty("Description is required"),
  link: z.string().url("Invalid URL"),
});

export const contactFormSchema = z.object({
  name: z.string().nonempty("Please provide your name."),
  phone: z.string().optional(),
  email: z.string().email("Please provide your email."),
  subject: z.string().nonempty("Please give a subject."),
  message: z.string().min(30, "Please provide your message with min 30 characters."),
})