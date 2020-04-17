const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    title: {type: String, default: "New Question"},
    type: {type: String, enum:["TRUE_FALSE", "MULTIPLE_CHOICE","ESSAY","FILL_BLANKS"]},
    question: String,
    answer: String,
    correct: String,
    options:[String]
},{collection: "questions"})

module.exports = questionsSchema;
