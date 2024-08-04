import GoogleStrategy from "passport-google-oauth20";
import configs from ".";
import logger from "../utils/logger";

const googleAuth = (passport) => {
  GoogleStrategy.Strategy;
  passport.use(
    new GoogleStrategy(
      {
        clientID: configs.GOOGLE_CLIENT_ID,
        clientSecret: configs.GOOGLE_CLIENT_SECRET,
        callbackURL: configs.GOOGLE_REDIRECT_URI,
      },
      (accessToken, refreshToken, profile, callback) => {
        console.log(profile);
        return callback(null, profile);
      }
    )
  );

  passport.serializeUser(function(user, done) {
    callback(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      callback(null,id);
    });
  });
};


export {googleAuth};