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

const ProjectForm = ({ type, files, setFiles }: ProjectFormProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // (state for dropdown)
  const initialValues = projectDefaultValues; // (for updating)
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

  // refreshing the validation after if a image is selected
  useEffect(() => {
    const checkProjectImgUrl = async () => {
      if (files.length > 0) {
        const isOk = await trigger("project_img_url");
        if (isOk) watch("project_img_url");
      }
    };
    checkProjectImgUrl();
  }, [files, trigger, watch]);

  // Handling the on Submit function
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

    // Creating Project
    if (type === "Create") {
      try {
        const projectData = {
          ...values,
          project_img_url: uploadedImageUrl,
          technologies: values.technologies,
        };

        const response = await fetch("/api/adminProfile/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        });

        if (response.ok) {
          reset();
          setFiles([]);
          toast.success("Project created successfully");
          setSelectedOptions([]);
        }
      } catch (error) {
        toast.error("Error while creating project:");
        console.error(error);
      }
    }

    // Updating Project
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
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
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
          errors={errors.project_img_url}
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
