const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    identityCard: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(15),
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: "Users", // Tên của bảng trong cơ sở dữ liệu
    timestamps: true, // Tạo cột createdAt và updatedAt tự động
    createdAt: "createdAt", // Đặt tên cột cho createdAt
    updatedAt: "updatedAt", // Đặt tên cột cho updatedAt
  }
);

module.exports = User;
