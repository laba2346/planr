// Import model
import {sequelize, users } from '../models/index.js';
import bcrypt from 'bcryptjs';
/**
    Creates a new user with the form included in the req object and inserts into the database
    @param {Object} req This is the Express req object
    @param {Object} res This is the Express res object
*/
export function newUser(req, res){

    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    var options = {
        where: {
            $or: [{username: username}, {email: email}]
        },
        defaults: {
            username: username,
            password: hash,
            email: email,
            color: "#705e8b",
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
