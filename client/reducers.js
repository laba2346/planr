/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import landing from './modules/Landing/LandingReducer';
// Combine all reducers into one root reducer
export default combineReducers({
  app,
  landing
});
