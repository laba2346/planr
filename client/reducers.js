// Root reducer
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer.js';

// Combine all reducers into one root reducer
export default function(){
    return combineReducers({
        app,
    });
};
