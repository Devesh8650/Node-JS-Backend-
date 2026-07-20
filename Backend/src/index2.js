const express = require("express");
// Mongoose ko import kiya
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB se Connection (Database ka naam 'portfolioDB' rakha hai)
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

const userRoute = require("./routes/userRoutes");
app.use("/api", userRoute);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "API Route Not Found" });
});
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
