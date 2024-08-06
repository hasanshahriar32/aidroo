import { NextResponse } from "next/server";

import connectToDatabase from "@/config/db/db";
import db from "@/config/model";
import ApiError from "@/utils/ApiError";
import { generateToken } from "@/utils/jwt";
import bcrypt from "bcryptjs";

import BusinessProfile from "@/config/model/business-profile";
import PersonalProfile from "@/config/model/personal-profile";

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse request body
    const { email, password } = await req.json();

    const user = await db.User.findOne({
      where: { email },
      include: [
        {
          model: BusinessProfile,
          as: "businessProfile",
          required: false,
        },
        {
          model: PersonalProfile,
          as: "personalProfile",
          required: false,
        },
      ],
    });

    if (!user) {
      return NextResponse.json({ status: 404, message: "user not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ status: 401, message: "Invalid password" });
    }

    // Generate JWT token
    const token = await generateToken(user.id);

    // Set cookie options
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies only in production
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    };
    const userData = {
      userId: user?.id,
      username: user?.username,
      name:
        user.personalProfile?.firstName +
          " " +
          user.personalProfile?.lastName || user?.businessProfile?.businessName,
    };
    // Create a response
    const response = NextResponse.json({
      user: userData,
      status: 200,
      message: "User logged in successfully",
    });
    response.cookies.set("token", token, options);
    return response;
  } catch (error) {
    console.error("Error in POST /api/auth/login:", error);
    throw new ApiError(501, error.message);
  }
}
