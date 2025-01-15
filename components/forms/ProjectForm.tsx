"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectFormSchema } from "@/lib/validator";
import { projectDefaultValues } from "@/constants";
import Dropdown from "../shared/Dropdown";
import { FileUploader } from "../shared/FileUploader";
import { useUploadThing } from "@/lib/uploadthing";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { ProjectFormProps } from "@/types";
import { useRouter } from "next/navigation";

const ProjectForm = ({ type, project, projectId }: ProjectFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const initialValues =
    project && type === "Update" ? { ...project } : projectDefaultValues;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues,
  });

  const { startUpload } = useUploadThing("imageUploader");

  const project_img_url = watch("project_img_url");
  const technologies = watch("technologies");

  useEffect(() => {
    if (type === "Update" && project) {
      reset({ ...project });
      setSelectedOptions(project.technologies || []);
      setValue("technologies", project.technologies || []);
    }
  }, [type, project, reset, setValue]);

  useEffect(() => {
    const checkProjectImgUrl = async () => {
      if (files.length > 0) {
        const isOk = await trigger("project_img_url");
        if (isOk) watch("project_img_url");
      }
    };
    checkProjectImgUrl();
  }, [files, trigger, watch]);

  useEffect(() => {
    setValue("technologies", selectedOptions);
  }, [selectedOptions, setValue]);

  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    let uploadedImageUrl = values.project_img_url;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages || uploadedImages.length === 0) {
        toast.error("Image upload failed");
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;
    }

    try {
      const projectData = {
        ...values,
        project_img_url: uploadedImageUrl,
        technologies: selectedOptions,
      };

      const response = await fetch(
        type === "Create"
          ? "/api/adminProfile/projects"
          : `/api/adminProfile/projects/${projectId}`,
        {
          method: type === "Create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectData),
        }
      );

      if (!response.ok) {
        toast.error("No changes made to the project");
      }

      if (response.ok) {
        toast.success(
          type === "Create"
            ? "Project created successfully"
            : "Project updated successfully"
        );
        reset();
        setFiles([]);
        setSelectedOptions([]);
        router.push("/#projects");
      }
    } catch (error) {
      toast.error(
        type === "Create"
          ? "Error while creating project"
          : "Error while updating project"
      );
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
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

        <Dropdown
          register={register}
          setValue={setValue}
          errors={errors.technologies}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />

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

        <FileUploader
          onFieldChange={(value) => setValue("project_img_url", value)}
          project_img_url={project_img_url}
          setFiles={setFiles}
          errors={errors.project_img_url}
        />

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
