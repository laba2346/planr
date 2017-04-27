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
    Sends a request to the server to create a new assignment for the user
    @param {Object} formState The current state of NewAssignmentForm as an object
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
    Fetches all of the users assignments from the server
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
