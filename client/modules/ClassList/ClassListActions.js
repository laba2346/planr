import callApi from '../../util/apiCaller';

export const ADD_CLASSES = 'ADD_CLASSES';

export function addClasses(classes){
    return{
        type: ADD_CLASSES,
        classes
    }
}

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
