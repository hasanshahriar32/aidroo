import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const SubCategory = sequelize.define(
  "SubCategory",
  {
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SubCategory;
