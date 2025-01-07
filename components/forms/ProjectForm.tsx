"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectFormSchema } from "@/lib/validator";
import { projectDefaultValues } from "@/constants";
import Dropdown from "../shared/Dropdown";
import FileUploader from "../shared/FileUploader";

const ProjectForm = () => {
  const initialValues = projectDefaultValues;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    console.log(values);
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

        <Dropdown />

        <div>
          <textarea
            id="desc"
            {...register("desc")}
            placeholder="Description"
            className="form-control !min-h-[205px]"
          />
          {errors.desc && (
            <p className="form-validation-error">{errors.desc.message}</p>
          )}
        </div>

        <FileUploader />

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
            placeholder="Github Link"
            className="form-control"
          />
          {errors.github_link && (
            <p className="form-validation-error">{errors.github_link.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-neutral-1000 bg-primary-2 text-[14px] font-bold leading-[14px] font-secondary px-3 md:px-6 py-3 md:py-4 text-center rounded-lg"
      >
        {isSubmitting ? "Submitting" : "Create Project"}
      </button>
    </form>
  );
};

export default ProjectForm;
