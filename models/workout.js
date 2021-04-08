const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String,
            required: "Enter the type of exercise you wish to add"
        },
        name:{
            type: String,
            trim: true,
            required: "Enter the name of the exercise you wish to add"
        },
        duration: {
            type: Number,
            required: "Enter the duration of this exercise"
        },
        weight: {
            type: Number,
            required: "Enter the weight performed in this exercise"
        },
        reps: {
            type: Number,
            required: "Enter the number of reps perfomed"
        },
        sets: {
            type: Number,
            required: "Enter the sets performed"
        },
        distance: {
            type: Number,
            required: "Enter the distance traveled"
        }
    }]
});

const workout = mongoose.model("workout", WorkoutSchema);
module.exports = workout;