import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiShapeLine } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { RiAwardLine } from "react-icons/ri";
import { RiSkypeFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiWindowLine } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiCloudLine } from "react-icons/ri";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { RiSpeedLine } from "react-icons/ri";
import { RiSpeakLine } from "react-icons/ri";

export const navItems = [
  { name: "About me", link: "#about" },
  { name: "Resume", link: "#resume" },
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
];

export const navSocialItems = [
  { link: "https://facebook.com", icon: RiFacebookCircleFill },
  { link: "https://twitter.com", icon: RiTwitterXFill },
  { link: "http://linkedin.com", icon: RiLinkedinFill },
  { link: "https://github.com/", icon: RiGithubFill },
];

export const heroTechnologies = [
  {
    id: 1,
    name: "NextJS",
    img: "/hero/icon-1.svg",
    officialUrl: "https://nextjs.org",
  },
  {
    id: 2,
    name: "Firebase",
    img: "/hero/icon-2.svg",
    officialUrl: "https://firebase.google.com",
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/hero/icon-3.svg",
    officialUrl: "https://www.mongodb.com",
  },
  {
    id: 4,
    name: "NodeJS",
    img: "/hero/icon-4.svg",
    officialUrl: "https://nodejs.org/en",
  },
  {
    id: 5,
    name: "Tailwind",
    img: "/hero/icon-5.svg",
    officialUrl: "https://tailwindcss.com",
  },
  {
    id: 6,
    name: "React",
    img: "/hero/icon-6.svg",
    officialUrl: "https://react.dev",
  },
  {
    id: 7,
    name: "VueJS",
    img: "/hero/icon-7.svg",
    officialUrl: "https://vuejs.org",
  },
  {
    id: 8,
    name: "Angular",
    img: "/hero/icon-8.svg",
    officialUrl: "https://angular.dev",
  },
  {
    id: 9,
    name: "Laravel",
    img: "/hero/icon-9.svg",
    officialUrl: "https://laravel.com",
  },
];

export const statistics = [
  {
    id: 1,
    count: 12,
    countTag: "Year Experience",
    icon: RiShapeLine,
  },
  {
    id: 2,
    count: 250,
    countTag: "Projects Completed",
    icon: RiComputerLine,
  },
  {
    id: 3,
    count: 680,
    countTag: "Satisfied Clients",
    icon: RiServiceLine,
  },
  {
    id: 4,
    count: 18,
    countTag: "Awards Winner",
    icon: RiAwardLine,
  },
];

export const cooperationContacts = [
  {
    id: 1,
    mediaName: "skype",
    name: "rifaj.dev",
    link: "#",
    icon: RiSkypeFill,
  },
  {
    id: 2,
    mediaName: "phone",
    name: "+8801601016160",
    link: "#",
    icon: RiPhoneFill,
  },
  {
    id: 3,
    mediaName: "email",
    name: "mdrifajulislamrifaj.contact@gmail.com",
    link: "#",
    icon: RiMailFill,
  },
];

export const cooperationBrands = [
  {
    id: 1,
    name: "stripe",
    brandLogo: "/cooperation/brands/stripe.svg",
    left: true,
  },
  {
    id: 2,
    name: "google",
    brandLogo: "/cooperation/brands/google.svg",
    left: true,
  },
  {
    id: 3,
    name: "samsung",
    brandLogo: "/cooperation/brands/samsung.svg",
    left: true,
  },
  {
    id: 4,
    name: "monzo",
    brandLogo: "/cooperation/brands/monzo.svg",
    left: true,
  },
  {
    id: 5,
    name: "gocardless",
    brandLogo: "/cooperation/brands/gocardless.svg",
    right: true,
  },
  {
    id: 6,
    name: "bravodo",
    brandLogo: "/cooperation/brands/bravodo.svg",
    right: true,
  },
  {
    id: 7,
    name: "spotify",
    brandLogo: "/cooperation/brands/spotify.svg",
    right: true,
  },
  {
    id: 8,
    name: "intercom",
    brandLogo: "/cooperation/brands/intercom.svg",
    right: true,
  },
];

export const cooperationGits = [
  {
    id: 1,
    date: "15 Jul",
    title: "Muzzilla-streaming-API-services-for-Python",
  },
  {
    id: 2,
    date: "30 Jun",
    title: "ChatHub-Chat-application-VueJs-Mongodb",
  },
  {
    id: 3,
    date: "26 May",
    title: "DineEasy-coffee-tea-reservation-system",
  },
  {
    id: 4,
    date: "17 Apr",
    title: "FinanceBuddy-Personal-finance-tracker",
  },
  {
    id: 5,
    date: "05 Mar",
    title: "TuneStream-Music-streaming-service-API",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Web & App Development",
    icon: RiWindowLine,
    description:
      "Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
    highlightText: ["HTML", "CSS", "JavaScript", "React", "Angular"],
  },
  {
    id: 2,
    title: "Database Management",
    icon: RiArchiveDrawerLine,
    description:
      "Designing and managing databases with SQL and NoSQL technologies such as MySQL, PostgreSQL, and MongoDB.",
    highlightText: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: 3,
    title: "API Development",
    icon: RiCloudLine,
    description:
      "Creating and integrating RESTful APIs to enable smooth communication between front-end and back-end systems.",
    highlightText: ["RESTful APIs"],
  },
  {
    id: 4,
    title: "Performance Optimization",
    icon: RiSpeedLine,
    description:
      "Improving the speed and performance of web applications to provide a better user experience. Work with Nodejs, Express",
    highlightText: ["Nodejs", "Express"],
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    icon: RiShoppingCart2Line,
    description:
      "Developing scalable and secure payment solutions for e-commerce platforms tailored to your business needs.",
    highlightText: ["e-commerce platforms"],
  },
  {
    id: 6,
    title: "Integrating AI",
    icon: RiSpeakLine,
    description:
      "Boost your applications with AI for improved efficiency, automation, and enhanced user experience",
    highlightText: [""],
  },
];

export const experienceCompanies = [
  {
    id: 1,
    name: "Google",
    logo: "/experience/google.svg",
    from: "2018",
    to: "present",
  },
  {
    id: 2,
    name: "Twitter (X)",
    logo: "/experience/twitter.svg",
    from: "2015",
    to: "2018",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/experience/amazon.svg",
    from: "2012",
    to: "2015",
  },
];

export const experienceCurrentJobDescList = [
  {
    id: 1,
    desc: "Led development of scalable web applications, improving performance and user experience for millions of users.",
    highlightText: ["improving performance"],
  },
  {
    id: 2,
    desc: "Implemented machine learning algorithms to enhance search functionality.",
    highlightText: ["machine learning algorithms"],
  },
  {
    id: 3,
    desc: "Collaborated with cross-functional teams to integrate new features seamlessly.",
    highlightText: "",
  },
];

export const experienceTechnologies = [
  {
    id: 1,
    name: "Python",
  },
  {
    id: 2,
    name: "TensorFlow",
  },
  {
    id: 3,
    name: "Angular",
  },
  {
    id: 4,
    name: "Kubernetes",
  },
  {
    id: 5,
    name: "GCP",
  },
];

export const educationData = [
  {
    id: 1,
    date: "2020-2024",
    institute: "MIT",
    desc: "Bachelor’s Degree in Computer Science",
  },
  {
    id: 2,
    date: "2018-2019",
    institute: "Harvard University",
    desc: "Certification in React and Redux, Node.js Developer Course",
  },
  {
    id: 3,
    date: "2015-2016",
    institute: "Stanford University",
    desc: "Certification in Full Stack Web Development",
  },
  {
    id: 4,
    date: "2013-2015",
    institute: "University of Washington",
    desc: "Certification in React and Redux, Node.js Developer Course",
  },
];

export const researchData = [
  {
    id: 1,
    date: "2023-2024",
    title: "Advanced Data Analytics with Big Data Tools",
    desc: " Utilized big data tools for advanced analytics and insights.",
  },
  {
    id: 2,
    date: "2021-2023",
    title: "Cloud-Native Application Architectures",
    desc: "Studied best practices for designing cloud-native applications.",
  },
  {
    id: 3,
    date: "2019-2020",
    title: "AI-Driven User Experience Personalization",
    desc: "Leveraged AI to personalize user experiences based on behavior.",
  },
];

export const projectSliderData = [
  {
    id: 1,
    title: "Integrate AI into the ecommerce system",
    desc: "Developed an online learning platform with course management, quizzes, and progress tracking.",
    client: "Conceptual JSC",
    completion_time: "6 months",
    technologies: [
      "Node.js", "React", "MongoDB", "Stripe",
    ],
    slider_img: "/projects/img-1.png",
    github_ink: "#",
    live_link: "#",
  },
  /* {
    id: 2,
    title: "Integrate AI into the ecommerce system",
    desc: "Developed an online learning platform with course management, quizzes, and progress tracking.",
    client: "Conceptual JSC",
    completion_time: "6 months",
    technologies: [
      "Node.js", "React", "MongoDB", "Stripe",
    ],
    slider_img: "/projects/img-1.png",
    github_ink: "#",
    live_link: "#",
  }, */
];

export const mySkillsTechnologies = [
  {
    id: 1,
    name: "NextJS",
    img: "/hero/icon-1.svg",
    officialUrl: "https://nextjs.org",
    up: true,
  },
  {
    id: 2,
    name: "Firebase",
    img: "/hero/icon-2.svg",
    officialUrl: "https://firebase.google.com",
    up: true,
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/hero/icon-3.svg",
    officialUrl: "https://www.mongodb.com",
    up: true,
  },
  {
    id: 4,
    name: "NodeJS",
    img: "/hero/icon-4.svg",
    officialUrl: "https://nodejs.org/en",
    up: true,
  },
  {
    id: 5,
    name: "Tailwind",
    img: "/hero/icon-5.svg",
    officialUrl: "https://tailwindcss.com",
    down: true,
  },
  {
    id: 6,
    name: "React",
    img: "/hero/icon-6.svg",
    officialUrl: "https://react.dev",
    up: true,
  },
  {
    id: 7,
    name: "VueJS",
    img: "/hero/icon-7.svg",
    officialUrl: "https://vuejs.org",
    down: true,
  },
  {
    id: 8,
    name: "Angular",
    img: "/hero/icon-8.svg",
    officialUrl: "https://angular.dev",
    down: true,
  },
  {
    id: 9,
    name: "Laravel",
    img: "/hero/icon-9.svg",
    officialUrl: "https://laravel.com",
    down: true,
  },
];

export const mySkills = {
  frontEnd: ["HTML", "CSS", "JavaScript", "React", "Angular"],
  backEnd: ["Node.js", "Express", "Python", "Django"],
  databases: ["MySQL", "PostgreSQL", "MongoDB",],
  toolsAndPlatforms: ["Git", "Docker", "AWS", "Heroku"],
  others: ["RESTful APIs", "GraphQL", "Agile Methodologies"],
};