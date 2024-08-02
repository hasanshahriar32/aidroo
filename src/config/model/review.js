// models/review.js

import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const Review = sequelize.define("Review", {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  comment: {
    type: DataTypes.TEXT,
  },
  date: DataTypes.STRING,
});
module.exports = Review;
