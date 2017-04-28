/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import container from './modules/Container/ContainerReducer';
import landing from './modules/Landing/LandingReducer';
import app from './modules/App/AppReducer';
import sidebar from './modules/Sidebar/SidebarReducer';
import header from './modules/Header/HeaderReducer';
import assignmentlist from './modules/AssignmentList/AssignmentListReducer';
import classlist from './modules/ClassList/ClassListReducer.js';
import settings from './modules/Settings/SettingsReducer';
import calendar from './modules/Calendar/CalendarReducer'

// Combine all reducers into one root reducer
export default combineReducers({
    container,
    landing,
    app,
    sidebar,
    header,
    assignmentlist,
    classlist,
    settings,
    calendar,
});
