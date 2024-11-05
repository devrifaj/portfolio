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

export const technologies = [
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
  }
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