"use client";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import { MdCloudUpload } from "react-icons/md";

const FileUploader = () => {
  return (
    <div className="flex-center h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-bg-3 border border-border-1">
      {/* <input className="cursor-pointer" />

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
          <MdCloudUpload size={50} />
          <h4 className="mb-2 mt-2">Drag photo here</h4>
          <p className="text-[14px] font-medium leading-[20px] mb-4">SVG, PNG, JPG</p>
          <button type="button" className="rounded-full bg-primary-1 text-neutral-0 px-3 py-2">
            Select from computer
          </button>
        </div>
      )} */}

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default FileUploader;
