import connectToDatabase from "@/config/db/db";
import db from "@/config/model";
import paginationCalculator from "@/utils/paginationCalculator";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

export async function GET(req) {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);

  // Extract query parameters
  const businessName = searchParams.get("businessName");
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const minRating = searchParams.get("minRating");
  const maxRating = searchParams.get("maxRating");
  const verified = searchParams.get("verified");
  const claimed = searchParams.get("claimed");
  const guaranteed = searchParams.get("guaranteed");
  const city = searchParams.get("city");
  const country = searchParams.get("country");

  // Extract pagination options
  const paginationOptions = {
    page: searchParams.get("page"),
    limit: searchParams.get("limit"),
    sortBy: searchParams.get("sortBy"),
    sortOrder: searchParams.get("sortOrder"),
  };

  const { page, limit, offset, sortBy, sortOrder } =
    paginationCalculator(paginationOptions);

  // Define filtering conditions
  const whereConditions = {
    ...(businessName && { businessName: { [Op.like]: `%${businessName}%` } }),
    ...(category && { category }),
    ...(subcategory && { subcategory }),
    ...(minRating && { rating: { [Op.gte]: minRating } }),
    ...(maxRating && { rating: { [Op.lte]: maxRating } }),
    ...(verified !== null && { verified: verified === "true" }),
    ...(claimed !== null && { claimed: claimed === "true" }),
    ...(guaranteed !== null && { guaranteed: guaranteed === "true" }),
  };

  // Define address filtering conditions
  const addressConditions = {
    ...(country && { country }),
    ...(city && { city }),
  };

  try {
    // Fetch business profiles
    const { rows: businessProfiles, count: totalRecords } =
      await db.BusinessProfile.findAndCountAll({
        where: whereConditions,
        include: [
          {
            model: db.Address,
            as: "addresses ",
            where: addressConditions,
            required: false,
          },
        ],
        limit,
        offset,
        order: [[sortBy, sortOrder]],
      });

    return NextResponse.json({
      businessProfiles,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: parseInt(page, 10),
      status: 200,
      message: "Business profiles fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      error: error.message || "Internal Server Error",
      status: error.status || 500,
    });
  }
}
