
//const quizService = require('../services/quiz.service.server')

const quizService = require('../services/quizzes.service.server') //use mongo


// module is a key word
module.exports = function(app){

// return a quiz bases on quiz id
    app.get(`/api/quizzes/:qid`,(req,res)=>{
        const quizId = req.params['qid']
        quizService.findQuizById(quizId).then(quiz=>res.json(quiz));
    })

    app.get('/api/quizzes/:qid/questions',(req,res)=>{
        const quizId = req.params['qid']
        quizService.findQuizById(quizId).then(quiz=>res.json(quiz.questions));

    })

    // app.delete('/api/quizzes/:qid', (req,res) => {
    //     const quizId = req.params['qid'];
    //     quizService.deleteQuiz(quizId);
    //     res.send(200)
    // })


    // return all quizzes
    app.get('/api/quizzes',(req,res)=>{
        quizService.findAllQuizzes().then(allQuizzes => res.send(allQuizzes));
    })

    //create a quiz
    // app.post('/api/quizzes',(req,res)=>{
    //     const quiz = req.body;
    //     quiz._id = (new Date()).getTime() + "";
    //     quizService.createQuiz(quiz)
    //     res.send(quiz);
    // })
}
