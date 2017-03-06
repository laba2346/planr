// Import model
var models = require('../models');
import bcrypt from 'bcrypt';

export function login(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    var query = {
        where: {
            email: email,
        }
    }
    models.sequelize.sync().then(function(){
        models.users.findOne(query).then(function(result){
            if(result == null){
                res.send(false);
            }
            else{
                bcrypt.compare(password, result.password, function(err, validLogin) {
                    var response = validLogin
                    res.send(response);
                });
            }
        });
    });

}
