const mongoose = require('mongoose');
const questionsSchema = require('../questions/questions.schema.server')
const quizzesSchema = mongoose.Schema({
    title:String,
    avg: Number,
    questions:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:'QuestionModel'
    }]
}, {collection: 'quizzes'});
//connect to schema//collection

module.exports = quizzesSchema;
