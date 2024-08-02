// Ensure the correct path to your database configuration

import { DataTypes } from "sequelize";
import sequelize from "../sequalize";

const Address = sequelize.define(
  "Address",
  {
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Address;
