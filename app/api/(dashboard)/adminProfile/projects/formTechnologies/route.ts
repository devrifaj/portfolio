import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { db } = await connectToDatabase();
    const result = await db.collection("formTechnologies").insertOne(body);

    return new Response(
      JSON.stringify({
        formTechnology: { ...body, _id: result.insertedId.toString()},
      })
    );
  } catch (error) {
    handleError(error);
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const technologies = await db
      .collection("formTechnologies")
      .find({}).sort({ _id: -1 })
      .toArray();

    return new Response(
      JSON.stringify({
        technologies,
      })
    );
  } catch (error) {
    handleError(error);
  }
}