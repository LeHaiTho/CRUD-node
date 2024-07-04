// sync-db.js
const sequelize = require("../config/database.js");
const User = require("../models/user.js");

async function syncDatabase() {
  try {
    // Đồng bộ hóa các model với cơ sở dữ liệu
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize the database:", error);
  } finally {
    // Đóng kết nối khi đã hoàn thành
    await sequelize.close();
  }
}

// Gọi hàm đồng bộ hóa
syncDatabase();
