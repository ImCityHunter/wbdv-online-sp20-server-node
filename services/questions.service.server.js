// use mongo,

const questionsDao = require('../daos/questions.dao.server');

const findAllQuestions = () => questionsDao.findAllQuestion();

module.exports = {
    findAllQuestions
}
