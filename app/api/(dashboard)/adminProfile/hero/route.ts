import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";
import { heroFormSchema } from "@/lib/validator";

// Get hero
export async function GET() {
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection("hero");

        const hero = await collection.findOne({});
        if (!hero) {
            return new Response(JSON.stringify({ message: "No hero found" }), { status: 404 });
        }

        return new Response(JSON.stringify( hero ), { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}

// Update hero
export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const validateData = heroFormSchema.parse(body);

        const { db } = await connectToDatabase();
        const collection = db.collection("hero");

        const existingHero = await collection.findOne({});
        if (!existingHero) {
            return new Response(JSON.stringify({ message: "No hero found to update" }), { status: 404 });
        }

        await collection.updateOne({ _id: existingHero._id }, { $set: validateData });

        return new Response(JSON.stringify({ message: "Hero updated successfully" }), { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}