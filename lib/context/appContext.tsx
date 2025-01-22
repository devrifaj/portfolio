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

interface AppContextProps {
  projects: IProject[];
  fetchProjects: () => Promise<void>;
  hero: IHero | null;
  fetchHero: () => Promise<void>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [hero, setHero] = useState<IHero | null>(null);

  const fetchProjects = async () => {
    const fetchedProjects = await getAllProjects();
    setProjects(fetchedProjects);
  };

  const fetchHero = async () => {
    const fetchedHero = await getHero();
    setHero(fetchedHero);
  };

  useEffect(() => {
    fetchProjects();
    fetchHero();
  }, []);

  return (
    <AppContext.Provider
      value={{ projects, fetchProjects, hero, fetchHero }}
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
