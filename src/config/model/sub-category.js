import { DataTypes } from "sequelize";
import sequelize from "../sequalize"; // Ensure the correct path to your database configuration

const SubCategory = sequelize.define(
  "SubCategory",
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SubCategory;
