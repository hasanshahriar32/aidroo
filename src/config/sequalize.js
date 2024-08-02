// sequelize.js

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db", "root", "password", {
  dialect: "mysql", // Change this according to your database type
  dialectModule: require("mysql2"),
  host: "localhost", // Database host
  port: 3306, // Database port
  define: {
    timestamps: true, // Add timestamps (createdAt, updatedAt) to models
  },
});

export default sequelize;

// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     logging: false,
//   }
// );

// export default sequelize;
