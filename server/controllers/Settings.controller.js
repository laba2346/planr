// Import model
import {sequelize, settings } from '../models/index.js';
import bcrypt from 'bcryptjs';

export function newSettings(req, res){

    var color = req.body.color;
    var user_id = req.user.id;
    var newUser = req.body.username;
    var newEmail = req.body.email;
    var newPassword = req.body.password1;
    var verifyPassword = req.body.password2;
    if (newPassword === verifyPassword){
        var hash = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8), null);
    }
    var values = {
        user_id: user_id,
        color: color
        
    };

    sequelize.sync().then(function(){
        settings.upsert(values).then(function(result){
            res.send(values);
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
