let quizzes = require('./quizzes')
const findAllQuizzes = () =>{
    return quizzes;
}

const findQuizByID = (quizId) =>{
    return quizzes.find(quiz=>quiz._id === quizId)
}
const deleteQuiz = (quizId) =>{
    quizzes = quizzes.filter(quiz=>quiz._id !== quizId)
}
const createQuiz = (quiz) =>
    quizzes.push(quiz)

const api = {
    findAllQuizzes,
    findQuizByID,
    createQuiz,
    deleteQuiz
}

module.exports = api
