import { createProject } from "@/lib/actions/project.action";
import { IProject } from "@/types"; // Import the IProject type from your types file

export async function POST(req: Request) {
    try {
        const body = await req.json(); // Get the body from the request
        // Use the correct IProject type here
        const project: IProject = await createProject({ project: body });

        // Return a JSON response using the Response object
        return new Response(JSON.stringify({ project }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to create project" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
