import callApi from '../../util/apiCaller';

/**
    Variable with string name to be used in reducer.
*/
export const ADD_CLASSES = 'ADD_CLASSES';

/**
    Sends classes to the reducer to be added to store.
    @param {Object} classes The classes to add
*/
export function addClasses(classes){
    return{
        type: ADD_CLASSES,
        classes
    }
}

/**
    Sends request to server to get user's classes from database.
*/
export function fetchClasses(){
    const apiUrl = 'fetchClasses';
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            if (res){
                console.log(res);
                dispatch(addClasses(res));
            }
            else{
                // dispatch no classes yet thing. oh yeah
            }
        });
    }
}
