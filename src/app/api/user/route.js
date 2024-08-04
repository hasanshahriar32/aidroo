import connectToDatabase from "@/config/db/db";
import db from "@/config/model";
import ApiError from "@/utils/ApiError";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { Op } from "sequelize";
export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();

  const {
    username,
    email,
    password,
    role,
    firstName,
    lastName,
    dob,
    gender,
    businessName,
    businessType,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    country,
    category,
    subcategory,
  } = body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json({ status: 400, message: "User already exists" });
    }

    const user = await db.User.create({
      username,
      email,
      password: hashPassword,
      role,
    });

    // Send response to the client immediately after user registration
    const response = NextResponse.json(
      { status: 201, message: "User registered successfully" },
      { status: 201 }
    );

    // Perform additional operations asynchronously
    (async () => {
      try {
        if (role === "personal") {
          await db.PersonalProfile.create({
            userId: user.id,
            firstName,
            lastName,
            dob,
            gender,
          });
        } else if (role === "business") {
          await db.BusinessProfile.create({
            userId: user.id,
            businessName,
            businessType,
            phoneNumber,
            category,
            subcategory,
          });
        }

        await db.Address.create({
          userId: user.id,
          street,
          city,
          state,
          postalCode,
          country,
        });
      } catch (error) {
        console.error("Error registering user profiles or address:", error);
      }
    })();

    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  try {
    let response;

    if (username) {
      response = await db.User.findOne({
        where: { username },
        attributes: ["email", "username"],
      });

      if (!response) {
        return NextResponse.json("User not found", 404);
      }

      return NextResponse.json({
        user: response,
        status: 200,
        message: "User fetched successfully",
      });
    } else {
      response = await db.User.findAll({
        attributes: ["email", "username"],
      });

      if (!response.length) {
        throw new ApiError("No users found", 404);
      }

      return NextResponse.json({
        users: response,
        status: 200,
        message: "Users fetched successfully",
      });
    }
  } catch (error) {
    console.error("Error fetching user(s):", error);
    return NextResponse.json({
      error: error.message || "Internal Server Error",
      status: error.status || 500,
    });
  }
}
