"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { IProject } from "../database/models/project.model";
import { IHero } from "../database/models/hero.model";
import { getAllProjects } from "@/lib/actions/project.action";
import { getHero } from "@/lib/actions/hero.action";
import { getAllTechnologies } from "../actions/technology.action";
import { ITechnology } from "../database/models/technology.model";
import { IBlog } from "../database/models/blog.model";
import { getAllBlogs } from "../actions/blog.action";

interface AppContextProps {
  projects: IProject[];
  fetchProjects: () => Promise<void>;
  hero: IHero | null;
  fetchHero: () => Promise<void>;
  technologies: ITechnology[];
  fetchTechnology: () => Promise<void>;
  blogs: IBlog[];
  fetchBlogs: () => Promise<void>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [hero, setHero] = useState<IHero | null>(null);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

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

  useEffect(() => {
    fetchProjects();
    fetchHero();
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
