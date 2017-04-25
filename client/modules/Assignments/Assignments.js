import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import AssignmentList from '../AssignmentList/AssignmentList';
import styles from './Assignments.css';

class Assignments extends Component {

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['assignments-container']} >
                <AssignmentList />
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
