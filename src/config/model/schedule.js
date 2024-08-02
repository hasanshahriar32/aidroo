import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const Schedule = sequelize.define(
  "Schedule",
  {
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

module.exports = Schedule;
