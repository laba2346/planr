// Import model
import {sequelize, assignments} from '../models/index.js';

export function fetchAssignments(req, res){
    // fetch req.user's assignments from db and return
    var options = {
        where: {
            owner_id: req.user.id
        },
        order: ['assignment_due', 'assignment_name'],
    };
    sequelize.sync().then(function(){
        assignments.findAll(options).then(function(result){
            var i = 0
            var assignments = [];
            while (i < result.length){
                var temp = [result[i]];
                i++;
                if (i < result.length){
                    while((new Date(result[i].assignment_due)).setHours(0,0,0,0) == (new Date(result[i-1].assignment_due)).setHours(0,0,0,0)){
                        temp.push(result[i]);
                        i++;
                    }
                }
                assignments.push(temp);
            }
            res.send(assignments);
        });
    });
}

export function createAssignment(req, res){
    var name= req.body.name;
    var desc= req.body.desc;
    var date= req.body.date;
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
        assignments.findOrCreate(options).then(function(result){
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
