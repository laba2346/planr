import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//import styles from './Calendar.css';

class Calendar extends Component {

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                Calendar view
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Calendar.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Calendar.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Calendar);
