var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const mongoose = require('mongoose') //27017

const local =  'mongodb://localhost:27017/whiteboard-cs5610-online-spring20';

const PORT = process.env.PORT || 3000;
var mongo = "mongodb://testing1:testing1@ds153752.mlab.com:53752/heroku_tnrk6m8c";
var url = process.env.MONGODB_URI || mongo;
mongoose.connect(mongo,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>{console.log('connected to mongo!')})
    .catch(err=> console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// res.header('Access-Control-Allow-Origin',
//     'http://localhost:4200');
// http://hokangyu-angular-project.herokuapp.com/
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',
        'http://hokangyu-angular-project.herokuapp.com/');
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
app.listen(PORT, ()=>{
    console.log(`process is listening on port: ${PORT}`);
})
