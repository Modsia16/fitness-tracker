const app = require("express").Router();
const db = require("../models");

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
  });
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
  });


  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
      ).then((dbWorkout) => {
        res.json(dbWorkout);
      }).
      catch(err => {
        res.status(400).json(err);
      });
    });
  
  module.exports = app;