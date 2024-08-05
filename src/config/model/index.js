import sequelize from "../sequalize";
import Address from "./address";
import BusinessProfile from "./business-profile";
import Category from "./category";
import SubCategory from "./subCategory";
import PersonalProfile from "./personal-profile";
import User from "./user";
import Job from "./Job";
import Review from "./review";
import Schedule from "./schedule";

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

db.JobPost = Job;
db.Review = Review;
db.Schedule = Schedule;

// Define associations

// user and personal profile

db.User.hasOne(db.PersonalProfile, {
  foreignKey: "userId",
  as: "personalProfile",
});
db.PersonalProfile.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

// user and business profile
db.User.hasOne(db.BusinessProfile, {
  foreignKey: "userId",
  as: "businessProfile",
});
db.BusinessProfile.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});
// PersonalProfile and Address

db.PersonalProfile.hasMany(db.Address, {
  foreignKey: "profileId",
  as: "addresses",
});
db.Address.belongsTo(db.PersonalProfile, {
  foreignKey: "profileId",
  as: "personalProfile",
});
// BusinessProfile and Address
db.BusinessProfile.hasMany(db.Address, {
  foreignKey: "profileId",
  as: "addresses",
});
db.Address.belongsTo(db.BusinessProfile, {
  foreignKey: "profileId",
  as: "businessProfile",
});
// PersonalProfile and Schedule
db.PersonalProfile.hasMany(db.Schedule, {
  foreignKey: "personalProfileId",
  as: "schedules",
});
db.Schedule.belongsTo(db.PersonalProfile, {
  foreignKey: "personalProfileId",
  as: "personalProfile",
});
// BusinessProfile and Schedule
db.BusinessProfile.hasMany(db.Schedule, {
  foreignKey: "businessProfileId",
  as: "schedules",
});
db.Schedule.belongsTo(db.BusinessProfile, {
  foreignKey: "businessProfileId",
  as: "businessProfile",
});
// PersonalProfile and JobPost
db.PersonalProfile.hasMany(db.JobPost, {
  foreignKey: "personalProfileId",
  as: "jobPosts",
});
db.JobPost.belongsTo(db.PersonalProfile, {
  foreignKey: "personalProfileId",
  as: "personalProfile",
});
// BusinessProfile and JobPost
db.BusinessProfile.hasMany(db.JobPost, {
  foreignKey: "businessProfileId",
  as: "jobPosts",
});
db.JobPost.belongsTo(db.BusinessProfile, {
  foreignKey: "businessProfileId",
  as: "businessProfile",
});
// PersonalProfile and Review

db.PersonalProfile.hasMany(db.Review, {
  foreignKey: "personalProfileId",
  as: "reviews",
});
db.Review.belongsTo(db.PersonalProfile, {
  foreignKey: "personalProfileId",
  as: "personalProfile",
});
// BusinessProfile and Review
db.BusinessProfile.hasMany(db.Review, {
  foreignKey: "businessProfileId",
  as: "reviews",
});
db.Review.belongsTo(db.BusinessProfile, {
  foreignKey: "businessProfileId",
  as: "businessProfile",
});
// Category and SubCategory
db.Category.hasMany(db.Subcategory, {
  foreignKey: "categoryId",
  as: "subcategories",
});
db.Subcategory.belongsTo(db.Category, {
  foreignKey: "categoryId",
  as: "category",
});

// db.User.hasOne(db.PersonalProfile, {
//   foreignKey: "userId",
//   as: "personalProfile",
// });
// db.PersonalProfile.belongsTo(db.User, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.User.hasOne(db.BusinessProfile, {
//   foreignKey: "userId",
//   as: "businessProfile",
// });
// db.BusinessProfile.belongsTo(db.User, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.User.hasMany(db.Address, {
//   foreignKey: "userId",
//   as: "addresses",
// });
// db.Address.belongsTo(db.User, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.User.hasMany(db.Schedule, {
//   foreignKey: "userId",
//   as: "schedule",
// });
// db.Schedule.belongsTo(db.User, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.User.hasMany(db.JobPost, {
//   foreignKey: "userId",
//   as: "jobPost",
// });
// db.JobPost.belongsTo(db.User, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.User.hasMany(db.Review, {
//   foreignKey: "userId",
//   as: "review",
// });
// db.Review.belongsTo(db.User, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.Category.hasMany(db.Subcategory, {
//   foreignKey: "categoryId",
//   as: "subcategories",
// });
// db.Subcategory.belongsTo(db.Category, {
//   foreignKey: "categoryId",
//   as: "category",
// });

export default db;
