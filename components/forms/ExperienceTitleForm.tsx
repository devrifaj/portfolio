"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { experienceTitleFormSchema } from "@/lib/validator";
import { experienceTitleDefaultValues } from "@/constants";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context/appContext";
import { updateExperienceTitle } from "@/lib/actions/experienceTitle.action";
import { useEffect } from "react";

const ExperienceTitleForm = () => {
  const { experienceTitle, fetchExperienceTitle } = useAppContext();
  const router = useRouter();

  const initialValues = experienceTitle
    ? experienceTitle
    : experienceTitleDefaultValues;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<z.infer<typeof experienceTitleFormSchema>>({
    resolver: zodResolver(experienceTitleFormSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (experienceTitle) {
      reset(experienceTitle);
    }
  }, [experienceTitle, reset]);

  // handling form submit
  async function onSubmit(values: z.infer<typeof experienceTitleFormSchema>) {
    if (!isDirty) {
      toast.error("No changes detected.");
      return;
    }

    try {
      await updateExperienceTitle(values);

      await fetchExperienceTitle();
      reset();
      router.push("/#portfolio");
      toast.success("Experience title updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error while updating experience title");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* First Title */}
        <div>
          <p className="form-label">First Title</p>
          <input
            {...register("first_title")}
            placeholder="First Title"
            className="form-control"
          />
          {errors.first_title && (
            <p className="form-validation-error">
              {errors.first_title.message}
            </p>
          )}
        </div>

        {/* Second Title */}
        <div>
          <p className="form-label">Second Title</p>
          <input
            {...register("second_title")}
            placeholder="Second Title"
            className="form-control"
          />
          {errors.second_title && (
            <p className="form-validation-error">
              {errors.second_title.message}
            </p>
          )}
        </div>

        {/* Third Title */}
        <div>
          <p className="form-label">Third Title</p>
          <input
            {...register("third_title")}
            placeholder="Third Title"
            className="form-control"
          />
          {errors.third_title && (
            <p className="form-validation-error">
              {errors.third_title.message}
            </p>
          )}
        </div>

        {/* Fourth Title */}
        <div>
          <p className="form-label">Fourth Title</p>
          <input
            {...register("fourth_title")}
            placeholder="Fourth Title"
            className="form-control"
          />
          {errors.fourth_title && (
            <p className="form-validation-error">
              {errors.fourth_title.message}
            </p>
          )}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? "Submitting..." : "Update Experience Title"}
      </button>
    </form>
  );
};

export default ExperienceTitleForm;
