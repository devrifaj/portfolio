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
import { getAllProjects } from "@/lib/actions/project.action";

interface AppContextProps {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  fetchProjects: () => Promise<void>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const fetchProjects = async () => {
    const fetchedProjects = await getAllProjects();
    setProjects(fetchedProjects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <AppContext.Provider
      value={{ projects, setProjects, fetchProjects }}
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
