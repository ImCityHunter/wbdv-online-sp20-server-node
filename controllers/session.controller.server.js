
const usersDao = require('../daos/users.dao.server')
module.exports = (app) =>{
    setSession = (req,res) => {
        const name = req.params.name;
        const value = req.params.value;
        req.session[name] = value;
        res.send(req.session);
    }

    getSession = (req,res) => {
        const value = req.session[req.params.name]
        res.send(value)

    }

    resetSession = (req, res) => {
        req.session.destroy();
        res.status(200)
    }


    currentUser = (req, res)=>{
        res.json(req.session["currentUser"])
    }
    register = (req,res)=>{
        const newUswer = req.body;
        usersDao.createUser(newUswer).then(actualUser => {
            req.session["currentUser"] = actualUser
            res.json(actualUser)
        });
    }
    login = (req,res) =>{
        const username = req.body.username;
        const password = req.body.password;
        usersDao.findUserByCredentials(username, password).then(user =>{
            if(user){
                req.session["currentUser"] = user;
                res.send(user);
            }
            else{
                res.sendStatus(403)
            }
        })
    }

    logout = (req,res) =>{
        req.session.destroy()
        res.sendStatus(200)
    }
    app.get('/api/session/reset',resetSession);
    app.get('/api/session/set/:name/:value',setSession);
    app.get('/api/session/get/:name', getSession);
    app.post('/api/currentUser', currentUser);
    app.post('/api/login', login);
    app.post('/api/register',register);
    app.post('/api/logout',logout);
}
