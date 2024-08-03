import { NextResponse } from "next/server";

import connectToDatabase from "@/config/db/db";
import db from "@/config/model";
import ApiError from "@/utils/ApiError";
import { generateToken } from "@/utils/jwt";
import bcrypt from "bcrypt";
import { Op } from "sequelize";

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
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new NextResponse(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    // Set cookie options
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies only in production
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    };

    // Create a response
    const response = NextResponse.json({
      message: "User logged in successfully",
    });
    response.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Secure=${options.secure}; SameSite=${options.sameSite}; Path=${options.path}; Max-Age=${options.maxAge}`
    );

    return response;
  } catch (error) {
    console.error("Error in POST /api/auth/login:", error);
    throw new ApiError(501, "something went wrong");
  }
}
