const questionsModel = require('../models/questions/questions.model.server');

const findAllQuestion = () =>
    questionsModel.find();


module.exports = {
    findAllQuestion
}
