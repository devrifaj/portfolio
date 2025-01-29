"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { RiPhoneFill, RiMailFill, RiSkypeFill, RiMap2Fill, RiFacebookCircleFill, RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { IProject } from "../database/models/project.model";
import { IHero } from "../database/models/hero.model";
import { getAllProjects } from "@/lib/actions/project.action";
import { getHero } from "@/lib/actions/hero.action";
import { getAllTechnologies } from "../actions/technology.action";
import { ITechnology } from "../database/models/technology.model";
import { IBlog } from "../database/models/blog.model";
import { getAllBlogs } from "../actions/blog.action";
import { IAdminContact } from "../database/models/adminContact.model";
import { getAdminContacts } from "../actions/adminContact.action";
import { CombinedContactData, CombinedSocialContactData } from "@/types";
import { getSocialContacts } from "../actions/socialContact.action";
import { ISocialContacts } from "../database/models/socialContacts.model";
import { IMySkill } from "../database/models/mySkill.model";
import { getSkills } from "../actions/mySkill.action";

interface AppContextProps {
  projects: IProject[];
  fetchProjects: () => Promise<void>;
  hero: IHero | null;
  fetchHero: () => Promise<void>;
  technologies: ITechnology[];
  fetchTechnology: () => Promise<void>;
  blogs: IBlog[];
  fetchBlogs: () => Promise<void>;
  adminContacts: IAdminContact | null;
  fetchAdminContacts: () => Promise<void>;
  combinedContactListData: CombinedContactData[];
  socialContacts: ISocialContacts | null;
  fetchSocialContacts: () => Promise<void>;
  combinedSocialLinkData: CombinedSocialContactData[];
  skills: IMySkill | null;
  fetchSkills: () => Promise<void>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [hero, setHero] = useState<IHero | null>(null);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [adminContacts, setAdminContacts] = useState<IAdminContact | null>(
    null
  );
  const [combinedContactListData, setCombinedContactListData] = useState<
    CombinedContactData[]
  >([]);
  const [socialContacts, setSocialContacts] = useState<ISocialContacts | null>(
    null
  );
  const [combinedSocialLinkData, setCombinedSocialLinkData] = useState<
  CombinedSocialContactData[]
  >([]);
  const [skills, setSkills] = useState<IMySkill | null>(null);

  const fetchProjects = async () => {
    const fetchedProjects = await getAllProjects();
    setProjects(fetchedProjects);
  };

  const fetchHero = async () => {
    const fetchedHero = await getHero();
    setHero(fetchedHero);
  };

  const fetchTechnology = async () => {
    const fetchedTechnology = await getAllTechnologies();
    setTechnologies(fetchedTechnology);
  };

  const fetchBlogs = async () => {
    const fetchedBlogs = await getAllBlogs();
    setBlogs(fetchedBlogs);
  };

  const fetchAdminContacts = async () => {
    try {
      const fetchedAdminContacts = await getAdminContacts();
      setAdminContacts(fetchedAdminContacts);

      // Combine MongoDB data with default structure
      const combinedData = [
        {
          id: 1,
          mediaName: "phone number",
          mediaData: fetchedAdminContacts.phone_number,
          link: `tel:${fetchedAdminContacts.phone_number}`,
          icon: RiPhoneFill,
        },
        {
          id: 2,
          mediaName: "email",
          mediaData: fetchedAdminContacts.email,
          link: `mailto:${fetchedAdminContacts.email}`,
          icon: RiMailFill,
        },
        {
          id: 3,
          mediaName: "skype",
          mediaData: fetchedAdminContacts.skype,
          link: `skype:${fetchedAdminContacts.skype}?add`,
          icon: RiSkypeFill,
        },
        {
          id: 4,
          mediaName: "address",
          mediaData: fetchedAdminContacts.address,
          link: "https://maps.app.goo.gl/XT4Dd4TYtF6LS9Yq7",
          icon: RiMap2Fill,
        },
      ];
      setCombinedContactListData(combinedData);
    } catch (error) {
      console.error("Error fetching admin contacts:", error);
    }
  };

  const fetchSocialContacts = async () => {
    try {
      const fetchedSocialContacts = await getSocialContacts();
      setSocialContacts(fetchedSocialContacts);

      // Combine MongoDB data with default structure
      const combineData = [
         { id:1, link: fetchedSocialContacts.facebook_link, icon: RiFacebookCircleFill },
          { id:2, link: fetchedSocialContacts.twitter_link, icon: RiTwitterXFill },
          { id:3, link: fetchedSocialContacts.linkedin_link, icon: RiLinkedinFill },
          { id:4, link: fetchedSocialContacts.github_link, icon: RiGithubFill },
      ]
      setCombinedSocialLinkData(combineData);
    } catch (error) {
      console.error("Error fetching social contacts:", error);
    }
  };

  const fetchSkills = async () => {
    const fetchedSkills = await getSkills();
    setSkills(fetchedSkills)
  }

  useEffect(() => {
    fetchProjects();
    fetchHero();
    fetchTechnology();
    fetchBlogs();
    fetchAdminContacts();
    fetchSocialContacts();
    fetchSkills();
  }, []);

  return (
    <AppContext.Provider
      value={{
        projects,
        fetchProjects,
        hero,
        fetchHero,
        technologies,
        fetchTechnology,
        blogs,
        fetchBlogs,
        adminContacts,
        fetchAdminContacts,
        combinedContactListData,
        socialContacts,
        fetchSocialContacts,
        combinedSocialLinkData,
        skills,
        fetchSkills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
