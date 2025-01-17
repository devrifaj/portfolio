"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { heroFormSchema } from "@/lib/validator";
import { FileUploader } from "../shared/FileUploader";
import { useEffect, useState } from "react";

const HeroForm = () => {
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    // defaultValues: initialValues,
  });

  // immediately checking the validation of image
  useEffect(() => {
    const checkHeroImgUrl = async () => {
      if (imgFiles.length > 0) {
        const isOk = await trigger("hero_img_url");
        if (isOk) watch("hero_img_url");
      }
    };
    checkHeroImgUrl();
  }, [imgFiles, trigger, watch]);

  // immediately checking the validation of pdf
  useEffect(() => {
    const checkHeroPdfUrl = async () => {
      if (pdfFiles.length > 0) {
        const isOk = await trigger("hero_pdf_url");
        if (isOk) watch("hero_pdf_url");
      }
    };
    checkHeroPdfUrl();
  }, [pdfFiles, trigger, watch]);

  async function onSubmit(values: z.infer<typeof heroFormSchema>) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        {/* Headline */}
        <div>
          <p className="form-label">Hero headline</p>
          <input
            {...register("headline")}
            id="headline"
            placeholder="Headline"
            className="form-control"
          />
          {errors.headline && (
            <p className="form-validation-error">{errors.headline.message}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <p className="form-label">First part of Title</p>
          <input
            {...register("first_title")}
            id="first_title"
            placeholder="First Title"
            className="form-control"
          />
          {errors.first_title && (
            <p className="form-validation-error">
              {errors.first_title.message}
            </p>
          )}
        </div>

        <div>
          <p className="form-label">Second part of Title</p>
          <input
            {...register("middle_title")}
            id="middle_title"
            placeholder="Middle Title"
            className="form-control"
          />
          {errors.middle_title && (
            <p className="form-validation-error">
              {errors.middle_title.message}
            </p>
          )}
        </div>

        <div>
          <p className="form-label">Third part of Title</p>
          <input
            {...register("last_title")}
            id="last_title"
            placeholder="Last Title"
            className="form-control"
          />
          {errors.last_title && (
            <p className="form-validation-error">{errors.last_title.message}</p>
          )}
        </div>

        {/* Hero Image uploader */}
        <div>
          <p className="form-label">Hero Image</p>
          <FileUploader
            onFieldChange={(value) => setValue("hero_img_url", value)}
            fileUrl={watch("hero_img_url")}
            setFiles={setImgFiles}
            errors={errors.hero_img_url}
          />
        </div>

        {/* Hero PDF uploader */}
        <div>
          <p className="form-label">Hero Resume PDF</p>
          <FileUploader
            onFieldChange={(value) => setValue("hero_pdf_url", value)}
            fileUrl={watch("hero_pdf_url")}
            setFiles={setPdfFiles}
            errors={errors.hero_pdf_url}
            acceptTypes={["application/pdf"]}
            maxFileSize={10 * 1024 * 1024}
          />
        </div>

        {/* Description */}
        <div>
          <p className="form-label">Description</p>
          <textarea
            {...register("desc")}
            id="desc"
            placeholder="Description"
            className="form-control h-72"
          />
          {errors.desc && (
            <p className="form-validation-error">{errors.desc.message}</p>
          )}
        </div>

        <div>
          <p className="form-label">
            Highlighted Text in Description (optional)
          </p>
          <input
            {...register("desc_highlighted_text")}
            id="desc_highlighted_text"
            placeholder="Description highlighted Text"
            className="form-control"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-neutral-1000 bg-primary-2 text-[14px] font-bold leading-[14px] font-secondary px-3 md:px-6 py-3 md:py-4 text-center rounded-lg"
      >
        {isSubmitting ? "Submitting..." : "Update Hero"}
      </button>
    </form>
  );
};

export default HeroForm;
