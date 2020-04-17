const mongoose = require('mongoose')
const quizzesSchema = require('./quizzes.schema.server')
const quizzesModel = mongoose.model('QuizzesModel', quizzesSchema) //use the collection/schema

module.exports = quizzesModel;
