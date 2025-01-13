import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { projectFormSchema } from "@/lib/validator";
import { z } from "zod";

// Infer the TypeScript type from the projectFormSchema
type ProjectFormData = z.infer<typeof projectFormSchema>;

export interface DropdownProps {
  register: UseFormRegister<ProjectFormData>;
  setValue: UseFormSetValue<ProjectFormData>;
  errors?: FieldErrors<ProjectFormData>
}