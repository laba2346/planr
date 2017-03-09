/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import container from './modules/Container/ContainerReducer';
import landing from './modules/Landing/LandingReducer';
import app from './modules/App/AppReducer';
import sidebar from './modules/App/components/Sidebar/SidebarReducer';
// Combine all reducers into one root reducer
export default combineReducers({
  container,
  landing,
  app,
  sidebar,
});
