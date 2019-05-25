const   passport =          require('passport'),
        FortyTwoStrategy =  require('passport-42').Strategy
const keys = require('../config/keys');
const UserModel = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id)
        .then(user => done(null, user))
});

// OAuth: 42  
passport.use(new FortyTwoStrategy({
    clientID: keys.fortyTwoClientID,
    clientSecret: keys.fortyTwoClientSecret,
    callbackURL: '/auth/42/callback'
    }, 
    async (accessToken, refreshToken, profile, done) => {
        try {
            const existingUser =  await UserModel.findOne({ fortyTwoId: profile.id})

            if (existingUser){ 
                return done(null, existingUser);
            } 
            const user = await new UserModel({
                login: profile._json.login,
                firstname: profile._json.first_name,
                lastname: profile._json.last_name,
                email: profile._json.email,
                img: profile._json.image_url,
                fortyTwoId: profile._json.id,
            }).save()
            done(null, user);
        } catch (err) {
            return done(null, false);
        }
    }
));
