import { RiShapeLine } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { RiAwardLine } from "react-icons/ri";
import { RiWindowLine } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiCloudLine } from "react-icons/ri";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { RiSpeedLine } from "react-icons/ri";
import { RiSpeakLine } from "react-icons/ri";

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