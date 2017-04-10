import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAssignments } from './AssignmentListActions';
import styles from './AssignmentList.css';

class AssignmentList extends Component {
    componentDidMount() {
           this.props.dispatch(fetchAssignments());
    }

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['assignments-list-container']}>
            {
                this.props.assignments.map(item => (
                  <div key={item.key}>
                    {item.assignment_name}
                  </div>
                ))
            }
            </div>
        );
  }
}

AssignmentList.need = [() => { return fetchAssignments(); }];


// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        assignments: state.assignmentlist.assignments
    };
}

AssignmentList.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

AssignmentList.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(AssignmentList);
