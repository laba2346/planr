import React, { PropTypes } from 'react';
import styles from './Assignment.css';


function Assignment(props, context) {
  return (
    <div className={styles['assignment']}>
        {props.assignment.assignment_name}
    </div>
  );
}

Assignment.propTypes = {
    assignment: PropTypes.object.isRequired,
};

export default Assignment;
