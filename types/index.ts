import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { projectFormSchema } from "@/lib/validator";
import { z } from "zod";

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export const projectDocumentSchema = projectFormSchema.extend({
  _id: z.string().optional(),
});
export type ProjectDocument = z.infer<typeof projectDocumentSchema>;

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
  project?: ProjectFormData;
  projectId?: string;
}