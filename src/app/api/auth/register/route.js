import connectToDatabase from "@/config/db/db";
import db from "@/config/model";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { Op } from "sequelize";

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    console.log(body);
    // const { error } = registerSchema.validate(body);
    // if (error) {
    //   return NextResponse.json(
    //     { error: "Validation error", details: error.details },
    //     { status: 400 }
    //   );
    // }

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

    const transaction = await db.sequelize.transaction();
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });

    if (existingUser) {
      await transaction.rollback();
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const user = await db.User.create(
      { username, email, password: hashPassword, role },
      { transaction }
    );

    if (role === "personal") {
      await db.PersonalProfile.create(
        { userId: user.id, firstName, lastName, dob, gender },
        { transaction }
      );
    } else if (role === "business") {
      await db.BusinessProfile.create(
        {
          userId: user.id,
          businessName,
          businessType,
          phoneNumber,
          category,
          subcategory,
        },
        { transaction }
      );
    }

    await db.Address.create(
      { userId: user.id, street, city, state, postalCode, country },
      { transaction }
    );

    await transaction.commit();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
