// Import model
import {sequelize, assignments} from '../models/index.js';

/**
    This fetches the assignments from the database for the user with id stored in req.user
    @param {Object} req This is the Express req object
    @param {Object} res This is the Express res object
*/
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
            // Array of objects corresponding to date
            var dates = [];
            for(var i=0; i < result.length; i++){
                var newDate = true;
                if (dates[dates.length-1]){
                    if (dates[dates.length-1].date === (new Date(result[i].assignment_due)).setHours(0,0,0,0)){
                        dates[dates.length-1].assignments.push(result[i]);
                        newDate = false;
                    }
                }
                if(newDate){
                    var date = (new Date(result[i].assignment_due)).setHours(0,0,0,0);
                    var newDate = {
                        date: date,
                        assignments: [result[i]],
                    };
                    dates.push(newDate);
                }
            }
            res.send(dates);
        });
    });
}

/**
    Creates an assignment in the database for the user with id in req.user
    @param {Object} req This is the Express req object
    @param {Object} res This is the Express res object
*/
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

export function deleteAssignment(req, res){
    console.log('in deleteAssignment serverside');
    var id = req.body.id;
    var options = {
        where: {
            id: id
        },
    };
    sequelize.sync().then(function(){
        assignments.destroy(options);
        res.json({success:true});
    });
}
