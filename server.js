var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular stuff
app.use(express.static(path.join(__dirname, 'client')));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//homepage(associated with index file listed above)
app.use('/', index);
//tasks
app.use('/api', tasks);

app.listen(port, function() {
    console.log("Server started on port " + port);
});