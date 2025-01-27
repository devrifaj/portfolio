"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { RiPhoneFill, RiMailFill, RiSkypeFill, RiMap2Fill } from "react-icons/ri";
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
import { CombinedContactData } from "@/types";

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

  const fetchProjects = async () => {
    const fetchedProjects = await getAllProjects();
    setProjects(fetchedProjects);
  };

  const fetchHero = async () => {
    const fetchedHero = await getHero();
    setHero(fetchedHero);
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

  const fetchTechnology = async () => {
    const fetchedTechnology = await getAllTechnologies();
    setTechnologies(fetchedTechnology);
  };

  const fetchBlogs = async () => {
    const fetchedBlogs = await getAllBlogs();
    setBlogs(fetchedBlogs);
  };

  useEffect(() => {
    fetchProjects();
    fetchHero();
    fetchAdminContacts();
    fetchTechnology();
    fetchBlogs();
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
