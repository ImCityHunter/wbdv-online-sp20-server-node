
const quizAttemptsDao = require('../daos/quiz-attempts.dao.server')
module.exports = (app) => {
    app.post('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptsDao.submitQuiz( req.params.qid, req.body)
            .then(attempt => res.send(attempt)));
    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptsDao.findAllQuizAttemptForQuz(req.params.qid)
            .then(attempts => res.send(attempts)));
}
