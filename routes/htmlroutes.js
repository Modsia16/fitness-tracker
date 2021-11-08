const path = require("path");
const express = require("express");
const router = express.Router();

//module.exports = function(router) {
  // HTML GET Requests
    router.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    router.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    router.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
  // If no matching route is found default to home;

  module.exports = router;