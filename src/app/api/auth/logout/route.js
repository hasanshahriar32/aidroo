import connectToDatabase from "@/config/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("first");
  try {
    // Connect to the database
    await connectToDatabase();

    // Create the response object
    const response = NextResponse.json({
      status: 200,
      message: "User logged out successfully",
    });

    // Clear the token cookie
    response.cookies.delete("token");

    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message || "Internal Server Error",
      status: error.status || 500,
    });
  }
}
