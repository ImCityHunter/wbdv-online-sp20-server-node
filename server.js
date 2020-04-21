var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const mongoose = require('mongoose') //27017

//const local =  'mongodb://localhost:27017/whiteboard-cs5610-online-spring20';


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

// res.header('Access-Control-Allow-Origin', 'http://hokangyu-angular-project.herokuapp.com');
// res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
app.use(function (req,res, next) {
    var allowedOrigins = ['http://localhost:4200', 'http://localhost:8020', 'http://hokangyu-angular-project.herokuapp.com', 'http://localhost:9000',`https://assignment0809-angular.herokuapp.com`];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`process is listening on port: ${PORT}`);
})
