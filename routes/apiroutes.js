const router = require("express").Router();
const db = require("../models");

  router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      dbWorkout.forEach(workout => {
        var total = 0;
        workout.exercises.forEach(exercise => {
          total += exercise.duration;
    })
    workout.totalDuration = total;
    }); res.json(dbWorkout);
  })
    .catch(err => {
      res.status(400).json(err);
    });
  });
  
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { 
        $push: { exercises: req.body },
        $inc: { totalDuration: req.body.duration }
      },
      { new: true }).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
    
      router.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then((dbWorkout => {
          res.json(dbWorkout);
        })).catch(err => {
          res.status(400).json(err);
        });
      });
    
    router.get("/api/workouts/range", (req, res) => {
      db.Workout.find({}).then((dbWorkout => {
        res.json(dbWorkout);
      })).catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;