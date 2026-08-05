const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/crudDB")
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.listen(4000, () => {
  console.log("Server Started!");
});
