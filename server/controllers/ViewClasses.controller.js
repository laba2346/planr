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
    var user_id = req.user.id;
    var values = {}
    values.user_id = user_id

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
        var letters = '0123456789abcdef';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    values.class_color = getRandomColor();

    sequelize.sync().then(function(){
        classes.create(values).then(function(response){
            console.log(response);
            res.json(response);
        });
    });
}

export function fetchClasses(req, res){
    if (req.user){
    var options = {
        where: {
            user_id: req.user.id
        },
        order: ['class_name'],
    };
    sequelize.sync().then(function(){
        classes.findAll(options).then(function(result){
            var classes = result;
            console.log(classes);
            res.send(classes);
        });
    });
}
/**
    Delete a class id provided by req
    @param {Object} req This is the Express req object
    @param {Object} res This is the Express res object
*/
export function deleteClass(req, res){
    var classId = req.body.id;
    sequelize.sync().then(function(){
        classes.destroy({ where: { id: classId } });
    });
}
