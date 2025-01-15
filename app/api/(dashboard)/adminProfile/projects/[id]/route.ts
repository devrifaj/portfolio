import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";
import { projectFormSchema } from "@/lib/validator";
import { ObjectId } from "mongodb";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid project ID" }), { status: 400 });
    }

    const { db } = await connectToDatabase();
    const project = await db.collection("projects").findOne({ _id: new ObjectId(id) });

    if (!project) {
      return new Response(JSON.stringify({ error: "Project not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    handleError(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid project ID" }), { status: 400 });
    }

    const body = await req.json();
    const validatedData = projectFormSchema.parse(body);

    const { db } = await connectToDatabase();
    const result = await db.collection("projects").updateOne(
      { _id: new ObjectId(id) },
      { $set: validatedData }
    );

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ error: "Project not found or not updated" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Project updated successfully" }), { status: 200 });
  } catch (error) {
    handleError(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}