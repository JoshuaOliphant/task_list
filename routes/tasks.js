var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://josh:josh@ds041939.mlab.com:41939/mytasklistjosh', ['tasks']);

// localhost:3000/api/tasks
router.get('/tasks', function(req, res, next) {
    db.tasks.find(function(err, tasks) {
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;