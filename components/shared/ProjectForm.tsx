"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectFormSchema } from "@/lib/validator";
import { projectDefaultValues } from "@/constants";

const ProjectForm = () => {
  const initialValues = projectDefaultValues;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 md:flex-row">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>

        <input
          id="name"
          {...register("name")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}{" "}
      </div>

      <div className="mb-4">
        {" "}
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>{" "}
        <input
          id="email"
          {...register("email")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
        />{" "}
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}{" "}
      </div>
      
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>{" "}
    </form>
  );
};

export default ProjectForm;
