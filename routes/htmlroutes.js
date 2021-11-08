const path = require("path");
const app = require('express').Router();

//module.exports = function(app) {
  // HTML GET Requests
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
  // If no matching route is found default to home};

  module.exports = app;