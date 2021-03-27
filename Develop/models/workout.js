const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [{
        type: {
            type: String,
            enum: ['Resistance', 'Cardio']
        },
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
        duration: Number
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
