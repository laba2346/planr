// Import model 
var models = require('../models');
import bcrypt from 'bcrypt';

export function newUser(req, res){

    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

    console.log(req);
    var options = {
        where: {
            $or: [{username: username}, {email: email}] 
        },
        defaults: {
            username: username,
            password: hash,
            email: email
        }
    };
    var newRecord = false;
    models.sequelize.sync().then(function(){
        models.users.findOrCreate(options).then(function(result){
            newRecord = result[1];   
            if (!newRecord){
                var response = {};
                if (username == result[0].dataValues.username){
                    response = {
                        newUser: false,
                        existingField: 'username'
                    }; 
                }
                else{
                    response = {
                        newUser: false,
                        existingField: 'email'
                    }
                }
                res.send(response);
            }
            else{
                var response = {
                    newUser: true,
                };
                res.send(response);
            }
        });
    });
}
