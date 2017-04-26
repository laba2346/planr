import callApi from '../../util/apiCaller';

/**
    Variable with string name to be used in reducer.
*/
export const ADD_EVENTS = 'ADD_EVENTS';

/**
    Converts assignments datafrom the store to correct format to be display on calendar
    @param {Object} assignments Assignment object from store.
*/
export function convertAssignments(assignments){
    var length = assignments.length;
    console.log(assignments)
    var events = []
    for(var i = 0; i < length; i++){
        var daysAssignments = assignments[i].assignments;
        var numAssignments = daysAssignments.length
        for(var j = 0; j < numAssignments; j++){
            var newObj = {"title": daysAssignments[j].assignment_name,
                            "start": daysAssignments[j].assignment_due,
                            "end": daysAssignments[j].assignment_due};
            events.push(newObj)
        }
        console.log("one day done")
    }
    return{
        type: ADD_EVENTS,
        events
    }
}
