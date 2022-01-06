const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

const db = require("../models")

passport.use(
    new GoogleStrategy({
        clientID: "204650061362-p91694hhsr2d43v6hpd51vbsk2lm2gib.apps.googleusercontent.com",
        clientSecret: "akeokVQntpguRNhOXl-cDbEi",
        callbackURL: "http://localhost:3001/auth/facebook/callback",
    }, 

    async (accessToken, refreshtoken, profile, done) => {
        const [response, created ] = await db.Users.findOrCreate({
            where: {googleId: profile.id, email: profile.emails[0].value},
        })
        if(response && response[0]) {
            return cb(null, user && response[0])
        }
    }

    )
);

passport.serializeUser((user,cb) => {
    console.log("Serializing user: ", user);
    cb(null, user.id);
});

// passport.deserializeUser(async(id,cb) => {
//     Users.findById(id, function(err,user) {
//         done(err,user);
//     });
// })

passport.deserializeUser(async (id, cb) => {
    const user = await Users.findOne({where: { id }}).catch((err) => {
        console.log("Error deserializing ", err);
        cb(err,null);
    });
    
    console.log("Deserialized user ", user);

    if (user) {
        cb(null, user);
    }
});