const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/config/database.js");

const userRoutes = require("./src/routes/user.js");

const app = express();
const port = 3100;

// Middleware to parse JSON request bodies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
});
