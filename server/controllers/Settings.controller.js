// Import model
import {sequelize, settings } from '../models/index.js';

export function newSettings(req, res){

    var color = req.body.color;
    var userID = req.user.id
    var values = {
        userID: userID,
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
