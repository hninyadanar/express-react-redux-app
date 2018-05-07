const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const userRepository = require('./api/db/repository/UserRepository');


passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
   async (username, password, done) => {
      try {
        const user = await userRepository.findByEmail(username);
        console.log("user in passport",user);
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }),
  );

passport.serializeUser((user, cb) => {

    cb(null, user.id);

});



passport.deserializeUser(async (id, cb) => {

    try {

        const user = await userRepository.findById(id);

        cb(null, user);

    } catch (err) {

        cb(err);

    }

});



module.exports = passport;