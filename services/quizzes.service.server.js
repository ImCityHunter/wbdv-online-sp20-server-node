const quizzesDao = require('../daos/quizzes.dao.server')

const findAllQuizzes = () =>
   quizzesDao.findAllQuizzes()


const findQuizById = (qid) => quizzesDao.findQuizById(qid);

const createQuiz = (quiz) => {}

module.exports = {
    findAllQuizzes, findQuizById, createQuiz
}
