const passportLocal = require('../auth/Local');
const passportGoogle = require('../auth/Google');
const passportGithub = require('../auth/Github');
const passportBaidu = require('../auth/Baidu');
module.exports = (app) => {
    app.get("/",(req,res)=>{
        if(req.user){
            res.json(req.user)
        }
        else {
            res.send('not login in yet!')
        }
        //res.send(process.env.NODE_ENV);
    });
    app.get("/local",(req,res)=>{
        res.send("hello world!");
    })
    app.post("/auth/local",passportLocal.authenticate('local'),(req,res)=>{
        res.redirect('/')
    });
    //app.get
    app.get('/auth/google',passportGoogle.authenticate('google',{ scope: ['https://www.googleapis.com/auth/plus.login'] }));
	app.get('/oauth2callback',passportGoogle.authenticate('google', { failureRedirect: '/auth/local' }),(req,res)=>{
        res.redirect('/');
    })
    app.get('/auth/github',passportGithub.authenticate('github',{ scope: ['repo','user'] }));
	app.get('/callback/github',passportGithub.authenticate('github', { failureRedirect: '/auth/local' }),(req,res)=>{
        res.redirect('/');
    })
    app.get('/auth/baidu',passportBaidu.authenticate('baidu'));
	app.get('/callback/baidu',passportBaidu.authenticate('baidu', { failureRedirect: '/auth/local' }),(req,res)=>{
        res.redirect('/');
    })
}