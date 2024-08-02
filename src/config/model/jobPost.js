import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

// models/post.js
const JobPost = sequelize.define(
  "JobPost",
  {
    title: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
export default JobPost;
