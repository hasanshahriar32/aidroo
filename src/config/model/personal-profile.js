import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const PersonalProfile = sequelize.define(
  "PersonalProfile",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM(["Male", "Female", "Other"]),
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
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
    hireTimeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    activeOrderCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PersonalProfile;
