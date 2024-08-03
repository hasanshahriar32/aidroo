// sequelize.js

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql", // Change this according to your database type
    dialectModule: require("mysql2"),
    host: process.env.DATABASE_HOST, // Database host
    port: 3306, // Database port
    define: {
      timestamps: true, // Add timestamps (createdAt, updatedAt) to models
    },
  }
);

export default sequelize;
