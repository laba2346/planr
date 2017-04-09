var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var models = require('../models/index.js');
import bcrypt from 'bcrypt';

passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(username, password, done) {
            var query = {
                where: {
                    // This is horribly confusing I know
                    email: username,
                }
            }
            models.sequelize.sync().then(function(){
                models.users.findOne(query).then(function(result){
                    if(result == null){
                        done(null, false);
                    }
                    else{
                        bcrypt.compare(password, result.password, function(err, validLogin) {
                            if(validLogin){
                                done(null, result);
                            }
                            else{
                                done(null, false);
                            }
                        });
                    }
                });
            });
        }

));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(user, done) {
    models.sequelize.sync().then(function(){
        models.users.findById(user).then(function(result){
            done(null, result);
        });
    });
});


export default passport;
