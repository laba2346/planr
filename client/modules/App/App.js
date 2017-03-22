import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Assignments from '../Assignments/Assignments';
import Classes from '../Classes/Classes';
import Calendar from '../Calendar/Calendar';

import styles from './App.css'

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let view = null;
        if (this.props.view === 'assignments') {
            view = <Assignments />;
        }
        else if (this.props.view=== 'calendar'){
            view = <Calendar />;
        }
        else if (this.props.view === 'classes'){
            view = <Classes />;
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
        view: state.sidebar.activeView
    };
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
