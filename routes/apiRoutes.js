const db = require("../models");
module.exports = function (app) {


    app.post("/api/workouts", function (req, res) {
        db.workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });


    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    }
    )
    app.put("/api/workouts/:id", (req, res) => {    
        const id = req.params.id;
        const body = req.body;
        db.workout.findByIdAndUpdate({ _id: id }, { $push: { exercises: body } })
          .then(workoutResults => {
            res.json(workoutResults);
          })
          .catch(err => {
            res.json(err);
          });
      });

    app.get("/api/workouts/range", (req, res) => {
        db.workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
}