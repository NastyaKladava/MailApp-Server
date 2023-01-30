const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(express.json());
app.use(cors());

const db = require("./models");

const registerRoute = require("./routes/Register");
const profileRouter = require("./routes/Profile");
const mailsRouter = require("./routes/Mails");

app.use("/register", registerRoute);
app.use("/profile", profileRouter);
app.use("/mails", mailsRouter);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running");
  });
});
