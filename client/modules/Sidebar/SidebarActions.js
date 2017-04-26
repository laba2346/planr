/**
    A constant containing the string 'CHANGE_VIEW'; used in reducer
*/
export const CHANGE_VIEW = 'CHANGE_VIEW';

/**
    Returns an object with type CHANGE_VIEW and the new view -- page -- that the user is going to visit.
    @param {String} view String with name of new view
*/
export function changeView(view){
    return {
        type: CHANGE_VIEW,
        view
    }
}
