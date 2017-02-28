// Import model 
var models = require('../models');

export function newUser(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    models.sequelize.sync().then(function(){
        models.users.create({
            username: username,
            password: password,
            email: email,
        });
    });
    res.end();
}
