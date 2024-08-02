import { NextResponse } from "next/server";

import db from "@/config/model";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/jwt";
import { Op } from "sequelize";
import connectToDatabase from "@/config/db/db";

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse request body
    const { email, username, password } = await req.json();

    // Find the user
    const user = await db.User.findOne({
      where: {
        [Op.or]: [email ? { email } : {}, username ? { username } : {}],
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user.id);

    // Set cookie options
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies only in production
    };

    // Create a response
    const response = NextResponse.json({
      message: "User logged in successfully",
    });
    response.cookie("token", token, options);

    return response;
  } catch (error) {
    console.error("Error in POST /api/auth/login:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
