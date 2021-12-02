const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", 
{ useNewUrlParser: true,
useUnifiedTopology: false }).then(res => res.connection.getClient());

const db = require("./models");

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
