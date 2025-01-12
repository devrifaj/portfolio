import { CreateProjectParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";

export async function createProject({ project }: CreateProjectParams) {
  try {
    const { db } = await connectToDatabase(); // Getting db connection

    const projectsCollection = db.collection("projects"); // Specify the collection name

    // Remove _id from the project if it exists, since MongoDB will generate it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...projectData } = project;

    // Insert the project into the database (no _id provided)
    const result = await projectsCollection.insertOne(projectData);

    // Return the inserted project with _id converted to string
    return {
      ...projectData,
      _id: result.insertedId.toString(), // Convert _id (ObjectId) to string
    };
  } catch (error) {
    handleError(error);
    throw new Error("Failed to create project");
  }
}