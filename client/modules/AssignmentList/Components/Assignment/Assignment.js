import React, { PropTypes } from 'react';
import styles from './Assignment.css';
import moment from 'moment';

/**
    Renders individual assignment.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/
function Assignment(props, context) {
    var date = new Date(props.assignment.assignment_due);
    var time = moment(date).format(" h:mm a");
  return (
    <div className={styles['assignment']}>
        {props.assignment.assignment_name}
        <label className={styles['time-label']}> {time} </label>
    </div>
  );
}

Assignment.propTypes = {
    assignment: PropTypes.object.isRequired,
};

export default Assignment;
