import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";
import { projectFormSchema } from "@/lib/validator";
import { ObjectId } from "mongodb";

// create new project
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = projectFormSchema.parse(body);

    const { db } = await connectToDatabase();
    const result = await db.collection("projects").insertOne(validatedData);

    return new Response(
      JSON.stringify({
        project: { ...validatedData, _id: result.insertedId.toString() },
      })
    );
  } catch (error) {
    handleError(error);
  }
}

// get all projects
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const projects = await db.collection("projects").find({}).sort({ _id: -1 }).toArray();

    return new Response(JSON.stringify({ projects }));
  } catch (error) {
    handleError(error);
  }
}

// delete project
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    
    if (!id) {
      return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    const { db } = await connectToDatabase();
    const result = await db.collection("projects").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Project not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Project deleted successfully" }), { status: 200 });
  } catch (error) {
    handleError(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}