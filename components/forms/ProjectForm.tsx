import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectFormSchema } from "@/lib/validator";
import { projectDefaultValues } from "@/constants";
import Dropdown from "../shared/Dropdown";
import { FileUploader } from "../shared/FileUploader";
import { useUploadThing } from "@/lib/uploadthing";

type ProjectFormProps = {
  type: "Create" | "Update";
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const ProjectForm = ({ type, files, setFiles }: ProjectFormProps) => {
  const initialValues = projectDefaultValues;

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = form;

  const project_img_url = watch("project_img_url");

  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    console.log("Form is being submitted", values);
  
    let uploadedImageUrl = values.project_img_url;
  
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
  
      if (!uploadedImages || uploadedImages.length === 0) {
        console.error("Image upload failed");
        return;
      }
  
      uploadedImageUrl = uploadedImages[0].url;
    }
  
    if (type === "Create") {
      try {
        // Prepare the form data to send to the API
        const projectData = {
          ...values,
          project_img_url: uploadedImageUrl,
          technologies: values.technologies, // Ensure correct array handling
        };
  
        // Make the request to the API
        const response = await fetch("/api/adminProfile/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        });
  
        if (response.ok) {
          const result = await response.json();
          reset();
          setFiles([]); // Clear uploaded files after successful submission
          console.log("Project created successfully", result);
        } else {
          const errorResult = await response.text(); // Get the error message from the response
          console.error("Project creation failed:", errorResult);
        }
      } catch (error) {
        console.error("Error while creating project:", error);
      }
    }
  }  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        {/* Project Title */}
        <div>
          <input
            id="title"
            {...register("title")}
            placeholder="Project Title"
            className="form-control"
          />
          {errors.title && (
            <p className="form-validation-error">{errors.title.message}</p>
          )}
        </div>

        {/* Technologies Dropdown */}
        <Dropdown
          register={register}
          setValue={setValue}
          errors={errors.technologies}
        />

        {/* Description */}
        <div>
          <textarea
            id="desc"
            {...register("desc")}
            placeholder="Description"
            className="form-control h-72"
          />
          {errors.desc && (
            <p className="form-validation-error">{errors.desc.message}</p>
          )}
        </div>

        {/* File Uploader */}
        <FileUploader
          onFieldChange={(value) => setValue("project_img_url", value)}
          project_img_url={project_img_url}
          setFiles={setFiles}
        />

        {/* Client */}
        <div>
          <input
            id="client"
            {...register("client")}
            placeholder="Client"
            className="form-control"
          />
          {errors.client && (
            <p className="form-validation-error">{errors.client.message}</p>
          )}
        </div>

        {/* Completion Time */}
        <div>
          <input
            id="completion_time"
            {...register("completion_time")}
            placeholder="Completion Time"
            className="form-control"
          />
          {errors.completion_time && (
            <p className="form-validation-error">
              {errors.completion_time.message}
            </p>
          )}
        </div>

        {/* Live Link */}
        <div>
          <input
            id="live_link"
            {...register("live_link")}
            placeholder="Live Link"
            className="form-control"
          />
          {errors.live_link && (
            <p className="form-validation-error">{errors.live_link.message}</p>
          )}
        </div>

        {/* GitHub Link */}
        <div>
          <input
            id="github_link"
            {...register("github_link")}
            placeholder="GitHub Link"
            className="form-control"
          />
          {errors.github_link && (
            <p className="form-validation-error">
              {errors.github_link.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-neutral-1000 bg-primary-2 text-[14px] font-bold leading-[14px] font-secondary px-3 md:px-6 py-3 md:py-4 text-center rounded-lg"
      >
        {isSubmitting ? "Submitting..." : `${type} Project`}
      </button>
    </form>
  );
};

export default ProjectForm;
