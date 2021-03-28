const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [{
        type: {
            type: String,
            enum: ['Resistance', 'Cardio'],
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        duration: {
            type: Number,
            trim: true
        },
        weight: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        },
        duration: {
            type: Number,
            trim: true
        },
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
