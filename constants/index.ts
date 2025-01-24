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