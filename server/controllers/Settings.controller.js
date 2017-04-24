// Import model
import {sequelize, users } from '../models/index.js';
import bcrypt from 'bcryptjs';

export function newSettings(req, res){

    var color = req.body.color;
    var user_id = req.user.id;
    var newUser = req.body.username;
    var newEmail = req.body.email;
    var newPassword = req.body.password1;
    var verifyPassword = req.body.password2;
    var hash = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8), null);
    var values = {};
    if(color !== ''){
        values.color = color;
    }
    if(newUser !== ''){
        values.username = newUser;
    }
    if(newEmail !== ''){
        values.email = newEmail;
    }
    if(newPassword !== '' && hash !== null){
        values.password = hash;
    }

    sequelize.sync().then(function(){
        users.update(values, { where: { id: user_id } }).then(function(result){
            if(result){
                res.json({success: true});
            }
        });
    });
}

export function loadSettings(req, res){

    sequelize.sync().then(function(){
        settings.findOne( { where: { userID: req.user.id} }).then(function(result){
            res.send(result);
        });
    });
}
