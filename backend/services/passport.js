const   passport =          require('passport'),
        FortyTwoStrategy =  require('passport-42').Strategy
const keys = require('../config/keys');

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

// OAuth: 42  
passport.use(new FortyTwoStrategy({
    clientID: keys.fortyTwoClientID,
    clientSecret: keys.fortyTwoClientSecret,
    callbackURL: 'http://localhost:7777/api/login/42/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's 42 profile is supplied as the user
    // record.  In a production-quality application, the 42 profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));