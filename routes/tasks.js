var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://josh:josh@ds041939.mlab.com:41939/mytasklistjosh', ['tasks']);

// localhost:3000/api/tasks
// get all tasks
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

// get a single task
router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

// save a task
router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    } else {
        db.tasks.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        })
    }
});

module.exports = router;