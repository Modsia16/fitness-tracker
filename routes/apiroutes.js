const db = require('../models');
const app = require('express').Router();

  // Get all workouts
  app.get('/api/workouts', (req, res) => {

      db.Workout.find({}).then(dbWorkout => {
        var total = 0;
        workout.forEach(workout => {
          total += workout.duration;
        });
        res.json(dbWorkout);
      }) .catch(err => {
        res.json(err);
      });
    });
    
  //range information
  app.get('/api/workouts/range', (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    }) .catch(err => {
      res.json(err);
    });
  })

  //post new workout
  app.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body).then(dbWorkout => {
      res.json(dbWorkout);
    }) .catch(err => {
      res.json(err);
    });
  });

    //update workouts
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findByIdAndUpdate(
            {_id: req.params.id}, {
            $incriment: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
          },
           { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
    });
});

  //delete workout
  app.delete('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id).then(dbWorkout => {
      res.json(dbWorkout);
    }) .catch(err => {
      res.json(err);
    });
  });

module.exports = app;