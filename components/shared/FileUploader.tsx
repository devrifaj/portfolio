"use client";

import { useCallback } from "react";
import { useDropzone, type FileWithPath } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { MdCloudUpload } from "react-icons/md";
import Image from "next/image";
import { FieldError } from "react-hook-form";
import { ImageUploaderProps } from "@/types";
import toast from "react-hot-toast";

export function FileUploader({
  fileUrl,
  onFieldChange,
  setFiles,
  errors,
  acceptTypes = ["image/*"],
  maxFileSize = 4 * 1024 * 1024,
}: ImageUploaderProps & { acceptTypes?: string[]; maxFileSize?: number }) {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const file = acceptedFiles[0];

      if (file.size > maxFileSize) {
        toast.error(`File exceeds ${maxFileSize / (1024 * 1024)} MB`);
        return;
      }

      setFiles(acceptedFiles);
      onFieldChange(URL.createObjectURL(file));
    },
    [onFieldChange, setFiles, maxFileSize]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(acceptTypes),
    multiple: false,
  });

  const isBlobUrl = fileUrl?.startsWith("blob:");

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex-center h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-bg-3 border border-border-1"
      >
        <input {...getInputProps()} className="cursor-pointer" />

        {fileUrl ? (
          <div className="flex h-full w-full flex-1 justify-center items-center">
            {/* Image Preview */}
            {acceptTypes.includes("image/*") &&
            (isBlobUrl || fileUrl.startsWith("http")) ? (
              <Image
                src={fileUrl}
                alt="Uploaded image"
                width={250}
                height={250}
                className="w-full object-cover object-center"
              />
            ) : acceptTypes.includes("application/pdf") &&
              (isBlobUrl || fileUrl.startsWith("http")) ? (
              // PDF Preview
              <iframe
                src={fileUrl}
                className="w-full h-full border-0"
                title="PDF Preview"
              />
            ) : (
              // File Name Fallback
              <p className="text-center text-neutral-700">{fileUrl}</p>
            )}
          </div>
        ) : (
          // Default UI
          <div className="flex-center flex-col py-5">
            <MdCloudUpload className="text-neutral-0" size={50} />
            <h4 className="mb-2 mt-2">Drag file here</h4>
            <p className="text-[14px] font-medium leading-[20px] mb-4">
              {acceptTypes.join(", ")} (max {maxFileSize / (1024 * 1024)}MB)
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
