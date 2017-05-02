import {ADD_CLASSES, ADD_CLASS} from './ClassListActions';

// Initial State
const initialState = { classes: [] };

const DateExistsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CLASS:
            return Object.assign({}, state, {
                _class: [],
            });
        default:
            return state;
    }
};

/**
    The reducer for the ClassList. Adds or removes classes from the store
    @param {Object} state State is the current active state
    @param {Object} action The action to do.
*/
const ClassListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLASS:
            return {
                classes: [action._class, ...state.classes],
            };
        case ADD_CLASSES:
            console.log(action.classes);
            return Object.assign({}, state, {
                classes: action.classes
            });
        default:
            return state;
    }
};

// Export Reducer`
export default ClassListReducer;

/*if(newDate){
    var date = (new Date(result[i].assignment_due)).setHours(0,0,0,0);
    var newDate = {
        date: date,
        classes: [result[i]],
    };
    dates.push(newDate);
}*/
