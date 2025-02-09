"use server";

import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/database/dbConnect";
import User from "@/lib/database/models/user.model";

export async function registerUser(email: string, password: string) {
  await connectToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) return { error: "User already exists" };

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });

  return { success: true, user: newUser };
}