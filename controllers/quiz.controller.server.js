
const quizService = require('../services/quiz.service.server')


// module is a key word
module.exports = function(app){

// return a quiz bases on quiz id
    app.get(`/api/quizzes/:qid`,(req,res)=>{
        const quizId = req.params['qid']
        const quiz = quizService.findQuizByID(quizId)
        res.json(quiz)
    })

    app.delete('/api/quizzes/:qid', (req,res) => {
        const quizId = req.params['qid'];
        quizService.deleteQuiz(quizId);
        res.send(200)
    })
// return all quizzes
    app.get('/api/quizzes',(req,res)=>{
        const quizzes = quizService.findAllQuizzes()
        res.send(quizzes)
    })

    //create a quiz
    app.post('/api/quizzes',(req,res)=>{
        const quiz = req.body;
        quiz._id = (new Date()).getTime() + "";
        quizService.createQuiz(quiz)
        res.send(quiz);
    })
}
