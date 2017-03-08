import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import styles from './App.css'

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles['app-container']}>
                <Header />
                <Sidebar />
            </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
    };
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
