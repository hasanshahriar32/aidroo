// models/job-post.js
import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const Job = sequelize.define(
  "Job",
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

export default Job;
