const mongoose = require('mongoose');
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
