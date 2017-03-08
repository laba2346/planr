import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import styles from './App.css'

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                hello from app.js
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
