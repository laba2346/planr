// Import model
import {sequelize, settings } from '../models/index.js';

export function newSettings(req, res){

    var color = req.body.color;
    var userID = 1 //placeholder for testing
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
