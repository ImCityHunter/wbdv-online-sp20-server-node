const userDao = require('../daos/users.dao.server')
module.exports = (app) => {
    app.get('/api/users',(req,res)=>{
        userDao.findAllUsers().then(results => res.json(results))
    })

    app.post('/api/users',(req,res)=>{
        const user = req.body;
        userDao.createUser(user).then(actualUser => res.json(actualUser))
    })
}
