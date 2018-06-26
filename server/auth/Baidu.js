const passport = require('passport');
const BaiduStrategy = require('passport-baidu').Strategy;

passport.use(new BaiduStrategy({
    clientID: "BGmkgbXQoFjxulzfsKmcIFMi",
    clientSecret: "1bwgU78bCRe8mFI2njActndtj0Hq5Hwz",
    callbackURL: "http://localhost:3000/callback/baidu",
    proxy:true
  },
  function(accessToken, refreshToken, profile, done) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return done(err, user);
    //   });
    console.log(profile)
    return done(null,{baidu:profile.id,displayName:profile.displayName,origin:'baidu'})
	
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