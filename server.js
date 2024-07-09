require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(port, () => {
  console.log("Server running on port", port);
});
