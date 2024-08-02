import sequelize from "../sequalize";

import Address from "./address";
import BusinessProfile from "./business-profile";
import Category from "./category";
import JobPost from "./jobPost";
import PersonalProfile from "./personal-profile";
import Review from "./review";
import Schedule from "./schedule";
import SubCategory from "./sub-category";
import User from "./user";

// Initialize models
const db = {};

db.Sequelize = sequelize.Sequelize;
db.sequelize = sequelize;

db.User = User;
db.PersonalProfile = PersonalProfile;
db.BusinessProfile = BusinessProfile;
db.Address = Address;
db.Category = Category;
db.Subcategory = SubCategory;
db.JobPost = JobPost;
db.Review = Review;
db.Schedule = Schedule;

// Define associations
db.User.hasOne(db.PersonalProfile, {
  foreignKey: "userId",
  as: "personalProfile",
});
db.PersonalProfile.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.User.hasOne(db.BusinessProfile, {
  foreignKey: "userId",
  as: "businessProfile",
});
db.BusinessProfile.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.User.hasMany(db.Address, {
  foreignKey: "userId",
  as: "addresses",
});
db.Address.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.User.hasMany(db.Schedule, {
  foreignKey: "userId",
  as: "schedule",
});
db.Schedule.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.User.hasMany(db.JobPost, {
  foreignKey: "userId",
  as: "jobPost",
});
db.JobPost.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.User.hasMany(db.Review, {
  foreignKey: "userId",
  as: "review",
});
db.Review.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.Category.hasMany(db.Subcategory, {
  foreignKey: "categoryId",
  as: "subcategories",
});
db.Subcategory.belongsTo(db.Category, {
  foreignKey: "categoryId",
  as: "category",
});

export default db;
