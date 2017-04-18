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
                    // Horrible hacky solution but you know yo do what you have to
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
    console.log(req.body);
    var options = {
        owner_id: req.user.id,
        class_id: 1,
        assignment_name: name,
        assignment_description: desc,
        assignment_due: date,
    };
    var newRecord = false;
    console.log(options)
    sequelize.sync().then(function(){
        assignments.create(options).then(function(result){
            console.log("INSERTING...");
            res.send(result);
        });
    });

}
