const express = require('express');
const app = express();
const router = require('./routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');

app.use(morgan('common'));
//对应Content-type:application/json
app.use(bodyParser.json());
//对应Content-type:application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session1',
    keys: ['key1', 'key2']
  }));
app.use(passport.initialize());
app.use(passport.session());
router(app);
app.use('/auth/local',express.static(__dirname+"\\views"))
console.log(process.env.NODE_ENV)
module.exports = app;