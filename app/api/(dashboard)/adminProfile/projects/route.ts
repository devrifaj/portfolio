import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";
import { projectFormSchema } from "@/lib/validator";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = projectFormSchema.parse(body);

        const { db } = await connectToDatabase();
        const result = await db.collection("projects").insertOne(validatedData);

        return new Response(JSON.stringify({ 
            project: { ...validatedData, _id: result.insertedId.toString() }
        }));

    } catch (error) {
        handleError(error);
    }
}