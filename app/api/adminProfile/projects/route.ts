import { CreateProjectParams } from "@/types";
import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _id, ...projectData } = body as CreateProjectParams;

        const { db } = await connectToDatabase();
        const projectsCollection = db.collection("projects");
        
        const result = await projectsCollection.insertOne(projectData);

        const project: CreateProjectParams = {
            ...projectData,
            _id: result.insertedId.toString(),
        };

        return new Response(JSON.stringify({ project }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        handleError(error);
        return new Response(JSON.stringify({ message: "Failed to create project" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
