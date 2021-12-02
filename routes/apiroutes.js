const db = require("../models");

module.exports = function (app) {

// Get workouts
app.get("/api/workouts", (req, res) => {
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
app.get("/api/workouts/range", (req, res) => {
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
router.put("/api/workouts/:id", ({body, params}, res) => {
  const workoutId = params.id;
  let savedWorkout = [];
  db.Workout.find({_id: workoutId})
    .then((dbWorkout) => {
      savedWorkout = dbWorkout[0].exercises;
      res.json(dbWorkout)[0].exercises;
      let allWorkouts = [...savedWorkout, body];
      console.log(allWorkouts);
      updateWorkout(allWorkouts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
function updateWorkout(exercises) {
  db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }
  });
}
});

//update workouts
    router.post('/api/workouts', async (req, res) => {
      try {
      const response = await db.Workout.create({ type: 'workout' });
      res.json(response);
      } catch (err) {
      res.json(err);
      }
    });
};

