// Import model 
var models = require('../models');
import bcrypt from 'bcrypt';

export function newUser(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    var email = req.body.email;
    models.sequelize.sync().then(function(){
        models.users.create({
            username: username,
            password: hash,
            email: email,
        });
    });
    res.end();
}
