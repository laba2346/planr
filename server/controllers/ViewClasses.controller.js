//<--
//
//Import model
import {sequelize, classes} from '../models/index.js';

export function createClass(req, res){

    var name= req.body.name;
    var info= req.body.desc;
    var times= req.body.date;
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
    sequelize.sync().then(function(){
        users.findOrCreate(options).then(function(result){
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
