import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Assignments from '../Assignments/Assignments';
import Classes from '../Classes/Classes';
import {fetchClasses} from '../ClassList/ClassListActions';
import Calendar from '../Calendar/Calendar';
import Settings from '../Settings/Settings';
import {importSettings} from '../Settings/SettingsActions.js';
import styles from './App.css'

class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(importSettings());
        this.props.dispatch(fetchClasses());
    }

    render() {
        let view = null;
        console.log(this.props.color);
        if(this.props.color === 'david' && require('./david.css')){
            
        }
        if (this.props.view === 'assignments') {
            view = <Assignments />;
        }
        else if (this.props.view=== 'calendar'){
            view = <Calendar />;
        }
        else if (this.props.view === 'classes'){
            view = <Classes />;
        }
        else if (this.props.view === 'settings'){
            view = <Settings />;
        }

        return (
            <div className={styles['app-container']}>
                <Header />
                <Sidebar />
                <div className={styles['view-container']}>
                    {view}
                </div>
            </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        view: state.sidebar.activeView,
        classes: state.classlist.classes,
        color: state.settings.color,
    };
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
