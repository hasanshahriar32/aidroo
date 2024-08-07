// sequelize.js

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("aidroo_db", "aidroo_admin", "Aidroo@#_3", {
  dialect: "mysql", // Change this according to your database type
  dialectModule: require("mysql2"),
  host: "38.45.71.124", // Database host
  port: 3306, // Database port
  logging: false,
  define: {
    timestamps: true, // Add timestamps (createdAt, updatedAt) to models
  },
});
// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "mysql", // Change this according to your database type
//   dialectModule: require("mysql2"),
//   logging: false,
// });

export default sequelize;
