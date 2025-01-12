import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .onUploadComplete(async ({ file }) => {

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      // return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;