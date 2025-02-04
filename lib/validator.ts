import { array, boolean, date, object, string } from "zod";

export const projectFormSchema = object({
  title: string().nonempty("Title is required"),
  desc: string().nonempty("Description is required"),
  client: string().nonempty("Client is required"),
  completion_time: string().nonempty("Completion time is required"),
  technologies: array(string()).min(1, "At least one technology is required"),
  project_img_url: string().url("Project image is required"),
  live_link: string().url("Invalid live link URL"),
  github_link: string().url("Invalid GitHub link URL"),
});

export const heroFormSchema = object({
  headline: string().nonempty("Headline is required"),
  first_title: string().nonempty("First Title is required"),
  middle_title: string().nonempty("Middle Title is required"),
  hero_img_url: string().url("Hero image is required"),
  hero_pdf_url: string().url("Resume Pdf is required"),
  last_title: string().nonempty("Last Title is required"),
  desc: string().nonempty("Hero Description is required"),
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
  date: date().max(new Date(), "Blog date cannot be in the future"),
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
    "Please provide your message with minimum 30 characters."
  ),
});

export const adminContactFormSchema = object({
  phone_number: string().nonempty("Phone number is required"),
  email: string().email("Email is required"),
  skype: string().nonempty("Skype is required"),
  address: string().nonempty("Address is required"),
});

export const socialContactFormSchema = object({
  facebook_link: string()
    .nonempty("Facebook link is required")
    .url("Invalid URL"),
  twitter_link: string()
    .nonempty("Twitter link is required")
    .url("Invalid URL"),
  linkedin_link: string()
    .nonempty("Linkedin link is required")
    .url("Invalid URL"),
  github_link: string().nonempty("Github link is required").url("Invalid URL"),
});

export const mySkillFormSchema = object({
  front_end_technologies: array(string()).min(
    1,
    "At least one technology is required"
  ),
  back_end_technologies: array(string()).min(
    1,
    "At least one technology is required"
  ),
  database_technologies: array(string()).min(
    1,
    "At least one technology is required"
  ),
  tools_platform_technologies: array(string()).min(
    1,
    "At least one technology is required"
  ),
  others_technologies: array(string()).min(
    1,
    "At least one technology is required"
  ),
});

export const educationFormSchema = object({
  institute: string().nonempty("Institute is required"),
  desc: string().nonempty("Description is required"),
  start_date: date({
    required_error: "Start date is required",
    invalid_type_error: "Start date must be a valid date",
  }),
  end_date: date({
    required_error: "End date is required",
    invalid_type_error: "End date must be a valid date",
  }).optional(),
  isPresent: boolean().default(false),
})
  .refine((data) => !data.end_date || data.end_date >= data.start_date, {
    path: ["end_date"],
    message: "End date cannot be earlier than the start date",
  })
  .refine((data) => data.isPresent || !!data.end_date, {
    path: ["end_date"],
    message: "End date is required unless 'Present' is checked",
  });

export const gitJournalingFormSchema = object({
  date: date({
    required_error: "Date is required",
    invalid_type_error: "Date must be a valid date",
  }),
  title: string().nonempty("Title is required"),
});

export const experienceTitleFormSchema = object({
  first_title: string().nonempty("First title is required"),
  second_title: string().nonempty("Second title is required"),
  third_title: string().nonempty("Third title is required"),
  fourth_title: string().nonempty("Fourth title is required"),
});

export const experienceFormSchema = object({
  job_desc_list: array(
    object({
      text: string().min(1, "Description is required"),
      highlight: string().optional(),
    })
  ).min(1, "At least one description is required"),
  experi_technologies: array(string())
    .min(1, "At least one technology must be added.")
    ,
  company_name: string().nonempty("Company name is required"),
  company_logo_url: string().url("Company logo is required"),
  role: string().nonempty("Role is required"),

  job_start_date: date({
    required_error: "Job start date is required",
    invalid_type_error: "Job start date must be a valid date",
  }),
  job_end_date: date({
    required_error: "Job end date is required",
    invalid_type_error: "Job end date must be a valid date",
  }).optional(),
  isPresent: boolean().default(false),
})
  .refine(
    (data) => !data.job_end_date || data.job_end_date >= data.job_start_date,
    {
      path: ["job_end_date"],
      message: "End date cannot be earlier than the start date",
    }
  )
  .refine((data) => data.isPresent || !!data.job_end_date, {
    path: ["job_end_date"],
    message: "End date is required unless 'Present' is checked",
  });
