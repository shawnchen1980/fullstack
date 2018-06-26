const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const GitHubStrategy = require('passport-github').Strategy;

passport.use('mygithub',new OAuth2Strategy({
    authorizationURL: 'https://github.com/login/oauth/authorize',
    tokenURL: 'https://github.com/login/oauth/access_token',
    clientID: "5b6db388fb9d1a5fe234",
    clientSecret: "fb9f69762abe63bff24dfec6f7b14a9744f25a8e",
    callbackURL: "http://localhost:3000/callback/github"
  },
  function(accessToken, refreshToken, profile, done) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return done(err, user);
    //   });
    console.log(profile)
    console.log(accessToken);
    return done(null,{githubId:profile.id,displayName:profile.displayName,origin:'github'})
	
}));

passport.use(new GitHubStrategy({
    clientID: "5b6db388fb9d1a5fe234",
    clientSecret: "fb9f69762abe63bff24dfec6f7b14a9744f25a8e",
    callbackURL: "http://localhost:3000/callback/github"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    console.log(accessToken);
    return done(null,{githubId:profile.id,displayName:profile.displayName,origin:'github'})
  }
));
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