const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "159044113885-9tkitaa6t39uu5lr5bt9d3f88pup3k5i.apps.googleusercontent.com",
    clientSecret: "W7I0g17b47DVNBxSl18cYpos",
    callbackURL: "http://localhost:3000/oauth2callback",
    proxy:true
  },
  function(accessToken, refreshToken, profile, done) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return done(err, user);
    //   });
    return done(null,{googleId:profile.id,displayName:profile.displayName,origin:'google'})
	
}));

// passport.serializeUser(
//     (user,done)=>{
//         return done(null,JSON.stringify(user));
//     }
// )

// passport.deserializeUser(
//     (id,done)=>{
//         return done(null,JSON.parse(id));
//     }
// )

module.exports = passport;