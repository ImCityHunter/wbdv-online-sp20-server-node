var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const mongoose = require('mongoose') //27017

var url = process.env.MONGODB_URI ||'mongodb://localhost:27017/whiteboard-cs5610-online-spring20';

var mongo = "mongodb+srv://test:test@cluster1.buatw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',
        'http://localhost:4200');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials',
        'true');
    next();
});
var session = require('express-session')

app.use(session({
    secret: 'any string',
    resave: false,
    saveUninitialized: true
}));

//style 1
const quizController = require('./controllers/quiz.controller.server')
quizController(app)

//style 2
require('./controllers/question.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/session.controller.server')(app)
require('./controllers/quiz.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)




//default
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.listen(3000)
