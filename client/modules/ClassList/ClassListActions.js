import callApi from '../../util/apiCaller';

/**
    Variable with string name to be used in reducer.
*/
export const ADD_CLASSES = 'ADD_CLASSES';
/**
    Variable with string name to be used in reducer.
*/
export const ADD_CLASS = 'ADD_CLASS';

/**
    Variable with string name to be used in reducer.
*/
export const DELETE_CLASS = 'DELETE_CLASS';
/**
    Adds multiple classes to the store
    @param {Object} adds Classes to add to the store
*/
export function addClasses(classes){
    return{
        type: ADD_CLASSES,
        classes
    }
}

/**
    Add single class to the store
    @param {Object} class Class to add to the store
*/
export function addClass(_class){
    return{
        type: ADD_CLASS,
        _class
    }
}

/**
    Sends a request to the server to create a new class for the user
    @param {Object} formState The current state of classform as an object
*/
export function createClassRequest(formState){
    const apiUrl = 'createClass';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if(res){
                dispatch(addClass(res));
            }
        });
    }
}

/**
    Delete class that corresponds to the object _class, which contains id of deleted class
    @param {Object} _class Object containing id of class
*/
export function deleteClass(_class){
    const apiUrl = 'deleteClass';
    return (dispatch) => {
        return callApi(apiUrl, "post", _class).then(res => {
            if(res){
                dispatch(deleteClassFront(_class));
            }
        });
    }
}

export function deleteClassFront(_class){
    return {
        type: DELETE_CLASS,
        _class
    }
}
/**
    Fetches all of the users classes from the server
*/
export function fetchClasses(){
    const apiUrl = 'fetchClasses';
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            if (res){
                dispatch(addClasses(res));
            }
            else{
                //nope
            }
        });
    }
}

export function loadClasses(){
    const apiUrl = 'loadClasses';
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            if (res){
                dispatch(addAssignments(res));
            }
            else{
                // dispatch no assignments yet thing
            }
        });
    }
}
