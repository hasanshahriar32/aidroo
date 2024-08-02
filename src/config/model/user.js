import { DataTypes, Op } from "sequelize";
import sequelize from "../sequalize";
import CryptoJS from "crypto-js";
import ApiError from "@/utils/ApiError";
import bcrypt from "bcrypt";
const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("personal", "business", "admin"),
      allowNull: false,
    },
    profileThumb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passwordResetTokenExpire: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

// Method to generate and save reset password token
User.prototype.createResetPassword = async function () {
  const resetToken = CryptoJS.lib.WordArray.random(32).toString(
    CryptoJS.enc.Hex
  );
  this.passwordResetToken = CryptoJS.SHA256(resetToken).toString(
    CryptoJS.enc.Hex
  );
  this.passwordResetTokenExpire = Date.now() + 3600000;
  await this.save({ validateBeforeSave: false });
  return resetToken;
};

// Method to reset the password
User.resetPassword = async function (token, newPassword, confirmPassword) {
  if (newPassword !== confirmPassword) {
    throw new Error("Password and confirm password do not match!");
  }

  const hashedToken = CryptoJS.SHA256(token).toString(CryptoJS.enc.Hex);

  const user = await User.findOne({
    where: {
      passwordResetToken: hashedToken,
      passwordResetTokenExpire: {
        [Op.gt]: Date.now(),
      },
    },
  });

  if (!user) {
    throw new ApiError(
      405,
      "Invalid token or your reset password link has expired"
    );
  }

  user.password = await bcrypt.hash(newPassword, 10);
  //  clear the reset token and reset token expiration
  user.passwordResetToken = "";
  user.passwordResetTokenExpire = null;
  await user.save();
};

// Method to handle user login
User.prototype.login = async function () {
  this.isActive = true;
  await this.save({ validateBeforeSave: false });
};

// Method to handle user logout
User.prototype.logout = async function () {
  this.isActive = false;
  await this.save({ validateBeforeSave: false });
};

export default User;
