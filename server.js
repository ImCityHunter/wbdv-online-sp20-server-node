var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


//style 1
const quizController = require('./controllers/quiz.controller.server')
quizController(app)

//style 2
require('./controllers/question.controller.server')(app)
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)
