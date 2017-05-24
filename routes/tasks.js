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

// delete a single task
router.delete('/task/:id', function (req, res, next) {
    db.tasks.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

// update a single task
router.put('/task/:id', function (req, res, next) {
    //get info from form first
    var task = req.body;
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }
    if (task.title) {
        updTask.title = task.title;
    }
    if (!updTask) {
        res.status = 400;
        res.json = ({
            "error": "bad data"
        });
    } else {
        db.tasks.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updTask, {}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});


module.exports = router;