const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');


passport.serializeUser((user, done) => {
    done(null, user.id);

});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecter,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({
            googleId: profile.id
        }, (err, user) => {
            if (err) {
                return done(err)
            }

            if (user) {
                console.log(`user ${user} exists in bd`)
            } else {
                const newUser = new User({
                    googleId: profile.id
                })
                newUser.save();
                console.log('new user regestered');
                done(null, user);
            }
        });
    }






    // async (accessToken, refreshToken, profile, done) => {
    //     const user = await User.findOne({
    //         googleId: profile.id
    //     });
    //     if (user) {
    //         console.log(`there is such user ${user}`);
    //         done(null, user)
    //     } else {
    //         const newUser = new User({
    //             googleId: profile.id
    //         })
    // newUser.save();
    //         done(null, user);
    //     }
    // }

));