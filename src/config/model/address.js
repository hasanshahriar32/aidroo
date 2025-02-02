// models/address.js
import { DataTypes } from "sequelize";
import sequelize from "../sequalize";
// Ensure the path is correct

const Address = sequelize.define(
  "Address",
  {
    // Define attributes
    profileId: {
      type: DataTypes.INTEGER,
      references: {
        model: "PersonalProfiles",
        key: "id",
      },
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
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
