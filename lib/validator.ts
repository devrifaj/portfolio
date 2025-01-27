import { array, boolean, date, object, string } from "zod";

export const projectFormSchema = object({
  title: string().nonempty("Title is required"),
  desc: string().nonempty("Description is required"),
  client: string().nonempty("Client is required"),
  completion_time: string().nonempty("Completion time is required"),
  technologies: array(string()).min(1, "At least one technology is required"),
  project_img_url: string().url("Image is required"),
  live_link: string().url("Invalid live link URL"),
  github_link: string().url("Invalid GitHub link URL"),
});

export const heroFormSchema = object({
  headline: string().nonempty("Headline is required"),
  first_title: string().nonempty("First Title is required"),
  middle_title: string().nonempty("Middle Title is required"),
  hero_img_url: string().url("Image is required"),
  hero_pdf_url: string().url("Pdf is required"),
  last_title: string().nonempty("Last Title is required"),
  desc: string().nonempty("Description is required"),
  desc_highlighted_text: string().optional(),
});

export const technologyFormSchema = object({
  tech_name: string().nonempty("Name is required"),
  tech_img_url: string().url("Image is required"),
  tech_official_url: string().url("Invalid URL"),
  show_in_hero: boolean().optional(),
  skill_position: string().nonempty("Position in Skill is required"),
});

export const blogFormSchema = object({
  tag: string().nonempty("Tag is required"),
  img_url: string().url("Image is required"),
  date: date(),
  read_time: string().nonempty("Read time is required"),
  title: string().nonempty("Title is required"),
  desc: string().nonempty("Description is required"),
  link: string().url("Invalid URL"),
});

export const contactFormSchema = object({
  name: string().nonempty("Please provide your name."),
  phone: string().optional(),
  email: string().email("Please provide your email."),
  subject: string().nonempty("Please give a subject."),
  message: string().min(
    30,
    "Please provide your message with min 30 characters."
  ),
});

export const adminContactFormSchema = object({
  phone_number: string().nonempty("Phone number is required"),
  email: string().email("Email is required"),
  skype: string().nonempty("Skype is required"),
  address: string().nonempty("Address is required"),
});