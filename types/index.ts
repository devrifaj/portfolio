import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { projectFormSchema } from "@/lib/validator";
import { z } from "zod";

// Infer the TypeScript type from the projectFormSchema
type ProjectFormData = z.infer<typeof projectFormSchema>;

export interface DropdownProps {
  register: UseFormRegister<ProjectFormData>;
  setValue: UseFormSetValue<ProjectFormData>;
  errors?: FieldErrors<ProjectFormData>
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedOptions: string[];
}

export interface FileUploaderProps {
  onFieldChange: (url: string) => void;
  project_img_url: string;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  errors?: FieldErrors<ProjectFormData>
}

export interface ProjectFormProps {
  type: "Create" | "Update";
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}