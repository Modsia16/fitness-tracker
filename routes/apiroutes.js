const db = require('../models');

module.exports = function(app) {
  // Get all workouts
  app.get('/api/workouts', (req, res) => {
      db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
      }) .catch(err => {
        res.json(err);
      });
    });
  //range information
  app.get('/api/workouts/range', ({}, res) => {
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
    //update workout
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findByIdAndUpdate(
            {_id: req.params.id}, req.body).then(dbWorkout => {
            res.json(dbWorkout);
        }) .catch(err => {
            res.json(err);
        });
});
};
