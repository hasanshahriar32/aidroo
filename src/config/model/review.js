// models/review.js
import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const Review = sequelize.define(
  "Review",
  {
    // Define attributes
    personalProfileId: {
      type: DataTypes.INTEGER,
      references: {
        model: "PersonalProfiles",
        key: "id",
      },
    },
    businessProfileId: {
      type: DataTypes.INTEGER,
      references: {
        model: "BusinessProfiles",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

export default Review;
