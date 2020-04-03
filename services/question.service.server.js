let questions = require("./questions")


findQuestionsForQuiz = (quizId) => {
    return questions.filter(question => question.quizId === quizId)
}

module.exports = {
    findQuestionsForQuiz
}
