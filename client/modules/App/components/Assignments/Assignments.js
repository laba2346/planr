import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//import styles from './Assignments.css';

class Assignments extends Component {

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                Assignments view
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Assignments.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Assignments.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Assignments);
