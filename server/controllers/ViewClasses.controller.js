//<--
//
//Import model
import {sequelize, classes} from '../models/index.js';
/**
    Creates a new class with the form included in the req object and inserts into the database
    @param {Object} req This is the Express req object
    @param {Object} res This is the Express res object
*/
export function createClass(req, res){

    var name= req.body.name;
    var info= req.body.desc;
    var times= req.body.times;
    var color= req.body.color;
    var options = {
        class_name: name,
        class_info: info,
        class_color: color,
        class_times: times,
        user_id: req.user.id,

    };
    console.log(options);
    sequelize.sync().then(function(){
        classes.create(options).then(function(err){
            var response = {};
            if(err){
                response = {
                    newClass: false,
                };
            }
            else{
                response = {
                    newClass: true,
                };
            }
            res.send(response);
        });
    });
}

export function fetchClasses(req, res){
    var options = {
        where: {
            user_id: req.user.id
        },
        order: ['class_name'],
    };
    sequelize.sync().then(function(){
        classes.findAll(options).then(function(result){
            var classes = result;
            res.send(classes);
        });
    });
}
