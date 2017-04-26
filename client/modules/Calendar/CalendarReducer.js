import {ADD_EVENTS} from './CalendarActions';

// Initial State
const initialState = { events: []};

/**
    The reducer for the Calendar. Adds or removes events from the calendar
    @param {Object} state State is the current active state
    @param {Object} action The action to do.
*/
const CalendarReducer= (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENTS:
            return Object.assign({}, state, {
                events: action.events
            });
        default:
            return state;
    }
};

/* Selectors */

// Export Reducer`
export default CalendarReducer;
