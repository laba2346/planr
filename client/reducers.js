/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import container from './modules/Container/ContainerReducer';
import landing from './modules/Landing/LandingReducer';
// Combine all reducers into one root reducer
export default combineReducers({
  container,
  landing
});
