import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Assignments from './components/Assignments/Assignments';
import Classes from './components/Classes/Classes';
import Calendar from './components/Calendar/Calendar';

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
