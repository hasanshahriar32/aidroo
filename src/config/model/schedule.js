// models/schedule.js
import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const Schedule = sequelize.define(
  "Schedule",
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
    day: {
      type: DataTypes.ENUM(
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ),
      allowNull: false,
    },
    openingTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closingTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Schedule;
