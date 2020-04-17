const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts.models.server')



const submitQuiz = (qid, attempt) => {
    return quizAttemptsModel.create({ quiz: qid, answers: attempt, score: scoreQuiz(attempt) }) //insert
}


const findAllQuizAttemptForQuz = (qzid) => quizAttemptsModel.find({quiz: qzid}).populate('quiz', 'title _id')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    return 100 * numberOfCorrectQuestions / questions.length }



module.exports = {
    submitQuiz, findAllQuizAttemptForQuz
}
