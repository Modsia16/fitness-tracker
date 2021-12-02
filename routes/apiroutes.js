const router = require("express").Router();
const db = require("../models/");

// Get workouts
router.get("/workouts", (req, res) => {
  console.log(Date.now());
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
    
//range information
router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//post new workout
router.put("/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: [req.body] }, $inc: {totalDuration: req.body.duration} }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//update workouts
    router.post('/workouts/', (req, res) => {
      db.Workout.create({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(500).json(err);
        });
});

module.exports = router;