const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now
},
exercises: {
    type: {
        type: String,
        trim: true,
        required: 'Exercise type is required'
    },
    name: {
        type: String,
        trim: true,
        required: 'Exercise name is required'
    },
    duration: {
        type: Number,
        required: 'Exercise duration is required'
    },
    weight: {
        type: Number
    }, 
    reps: {
        type: Number
    }, 
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
}
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;