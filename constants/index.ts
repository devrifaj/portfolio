import { RiSkypeFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiMap2Fill } from "react-icons/ri";

export const navItems = [
  { label: "About me", route: "#about" },
  { label: "Resume", route: "#resume" },
  { label: "Projects", route: "#projects" },
  { label: "Portfolio", route: "#portfolio" },
  { label: "Blog", route: "#blog" },
  { label: "Contact", route: "#contact" },
];

export const skillDisplayNames: { [key: string]: string } = {
  frontEnd: "Front-End",
  backEnd: "Back-End",
  databases: "Databases",
  toolsAndPlatforms: "Tools & Platforms",
  others: "Others",
};

export const combinedContactListData = [
  {
    id: 1,
    mediaName: "phone number",
    mediaData: "+8801601016160",
    link: "tel:+8801601016160",
    icon: RiPhoneFill,
  },
  {
    id: 2,
    mediaName: "email",
    mediaData: "mdrifajulislamrifaj.contact@gmail.com",
    link: "mailto:mdrifajulislamrifaj.contact@gmail.com",
    icon: RiMailFill,
  },
  {
    id: 3,
    mediaName: "skype",
    mediaData: "rifaj.dev",
    link: "skype:SKYPENAME?add",
    icon: RiSkypeFill,
  },
  {
    id: 4,
    mediaName: "address",
    mediaData: "0811 Erdman Prairie, Joaville CA",
    link: "https://maps.app.goo.gl/rxe9RaCbPbN2HYnN8",
    icon: RiMap2Fill,
  },
];

export const projectDefaultValues = {
  title: "",
  desc: "",
  completion_time: "",
  technologies: [],
  project_img_url: "",
  live_link: "",
  github_link: "",
};

export const heroDefaultValues = {
  headline: "",
  first_title: "",
  middle_title: "",
  hero_img_url: "",
  hero_pdf_url: "",
  last_title: "",
  desc: "",
  desc_highlighted_text: "",
};

export const technologyDefaultValues = {
  tech_name: "",
  tech_img_url: "",
  tech_official_url: "",
  show_in_hero: false,
  skill_position: "",
};

export const blogDefaultValues = {
  tag: "",
  img_url: "",
  date: new Date(),
  read_time: "",
  title: "",
  desc: "",
  link: "",
};

export const contactDefaultValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

export const adminContactDefaultValues = {
  phone_number: "",
  email: "",
  skype: "",
  address: "",
}