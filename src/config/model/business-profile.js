// models/business-profile.js
import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const BusinessProfile = sequelize.define(
  "BusinessProfile",
  {
    // Define attributes
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false,
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(["approved", "pending", "deleted"]),
      defaultValue: "pending",
    },

    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      min: 0,
      max: 5,
      validate: {
        isFloat: {
          args: true,
          msg: "Rating must be a floating-point number.",
        },
      },
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    guaranteed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    claimed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

export default BusinessProfile;
