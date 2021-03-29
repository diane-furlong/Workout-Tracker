const db = require('../models')

// Routes
module.exports = (app) => {

  // Get route for retrieving all workouts
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then(dbWorkouts => {
            dbWorkouts.forEach(workout => {
                let total = 0
                workout.exercises.forEach(e => {
                    total += e.duration
                }
                )
                workout.totalDuration = total
            })
            res.json(dbWorkouts)
        }) 
    })

  // Get route for returning workouts of a range
  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).then(dbWorkouts => {
        res.json(dbWorkouts)
    })
  })
    
    
//     ({
//       where: {
//         category: req.params.category,
//       }
//     }).then((dbWorkouts) => res.json(dbWorkouts))
//   })

//  Create a new workout
    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body).then((dbWorkouts) => {
            res.json(dbWorkouts)
        })
    })

  // Updating posts
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findOneAndUpdate({
            _id: req.params.id
        },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }
        ).then((dbWorkouts) => res.json(dbWorkouts))
    })

  // Delete a workout
    app.delete('/api/workouts/:id', (req, res) => {
        db.Workout.destroy({
            where: 
            {
                _id: req.params.id
            }
        }).then((dbWorkouts) => res.json(dbWorkouts))
    })
}