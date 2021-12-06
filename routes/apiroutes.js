const router = require("express").Router();
const db = require("../models");

  router.get("/workouts", (req, res) => {
    db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.status(200).json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})
  
  router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, 
    { $push: { exercises: req.body } })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});
    
      router.post("/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then((workout) => {
          res.json(workout);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    });
    
    router.get("/workouts/range", (req, res) => {
      db.Workout.find({})
      .sort({ date: -1 })
      .then((workout) => {
        res.status(200).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  module.exports = router;