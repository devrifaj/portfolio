import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";
import { projectFormSchema } from "@/lib/validator";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = projectFormSchema.parse(body);

        const { db } = await connectToDatabase();
        const result = await db.collection("projects").insertOne(validatedData);

        return new Response(JSON.stringify({ 
            project: { ...validatedData, _id: result.insertedId.toString() }
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        handleError(error);

        return new Response(JSON.stringify({ 
            message: error instanceof z.ZodError ? "Validation failed" : "Failed to create project",
            error: error instanceof z.ZodError ? error.errors : (error as Error).message
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
