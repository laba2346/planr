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
    var values = {}

    if(name !== ''){
        values.class_name = name;
    }

    if(info !== ''){
        values.class_info = info;
    }

    if(times !== ''){
        values.color = color;
    }

    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    values.class_color = getRandomColor();

    console.log(values);
    sequelize.sync().then(function(){
        classes.create(values).then(function(err){
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
