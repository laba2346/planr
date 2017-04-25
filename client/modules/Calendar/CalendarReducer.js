import {ADD_EVENTS} from './CalendarActions';

// Initial State
const initialState = { events: []};
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
