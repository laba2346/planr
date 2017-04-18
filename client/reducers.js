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
import createassignment from './modules/CreateAssignment/CreateAssignmentReducer';
import assignmentlist from './modules/AssignmentList/AssignmentListReducer';
import classes from './modules/Classes/ClassesReducer.js';
import createclass from './modules/CreateClass/CreateClassReducer'
// Combine all reducers into one root reducer
export default combineReducers({
    container,
    landing,
    app,
    sidebar,
    header,
    createassignment,
    assignmentlist,
    createclass,
    classes
});
