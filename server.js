const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3308;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
const apiRoutes = require("./routes/apiroutes.js");
const displayRoutes = require("./routes/htmlroutes.js");

app.use("/api", apiRoutes);
app.use("/", displayRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});