const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    (username,passport,done)=>{
        return done(null,{username,passport,origin:'local'});

}));

passport.serializeUser(
    (user,done)=>{
        return done(null,JSON.stringify(user));
    }
)

passport.deserializeUser(
    (id,done)=>{
        return done(null,JSON.parse(id));
    }
)

module.exports = passport;