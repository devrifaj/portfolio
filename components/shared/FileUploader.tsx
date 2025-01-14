"use client";

import { useCallback } from "react";
import { useDropzone, type FileWithPath } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { convertFileToUrl } from "@/lib/utils";

import { MdCloudUpload } from "react-icons/md";
import Image from "next/image";
import { FileUploaderProps } from "@/types";
import { FieldError } from "react-hook-form";

export function FileUploader({
  project_img_url,
  onFieldChange,
  setFiles,
  errors,
}: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFiles(acceptedFiles);
      onFieldChange(convertFileToUrl(acceptedFiles[0]));
    },
    [onFieldChange, setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(["image/*"]),
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex-center h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-bg-3 border border-border-1"
      >
        <input {...getInputProps()} className="cursor-pointer" />

        {project_img_url ? (
          <div className="flex h-full w-full flex-1 justify-center ">
            <Image
              src={project_img_url}
              alt="image"
              width={250}
              height={250}
              className="w-full object-cover object-center"
            />
          </div>
        ) : (
          <div className="flex-center flex-col py-5">
            <MdCloudUpload className="text-neutral-0" size={50} />
            <h4 className="mb-2 mt-2">Drag photo here</h4>
            <p className="text-[14px] font-medium leading-[20px] mb-4">
              SVG, PNG, JPG (max 8MB)
            </p>
            <button
              type="button"
              className="rounded-full bg-primary-1 text-neutral-0 px-3 py-2"
            >
              Select from computer
            </button>
          </div>
        )}
      </div>

      {errors && "message" in errors && (
        <p className="form-validation-error">
          {(errors as FieldError).message}
        </p>
      )}
    </div>
  );
}