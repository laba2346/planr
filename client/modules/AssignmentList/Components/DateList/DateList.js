import React, { PropTypes } from 'react';
import Assignment from '../Assignment/Assignment';
import styles from './DateList.css';
import moment from 'moment';
function DateList(props, context) {
    var date = new Date(props.assignments[0].assignment_due);
    //var day = moment(date).format("dddd, MMMM Do");
    var dayOfWeek = moment(date).format("ddd");
    var day = moment(date).format("D");
    return (
        <div className={styles['date-list']}>
            <div className={styles['day-block']}>
                <label className={styles['dayOfWeek-label']}>{dayOfWeek}</label>
                <label className={styles['day-label']}>{day}</label>
            </div>
            <div className={styles['assignment-list-container']}>
            {
                props.assignments.map(assignment => (
                  <div key={assignment.id}>
                    <Assignment
                        assignment={assignment}
                    />
                  </div>
                ))
            }
            </div>
        </div>
    );
}

DateList.propTypes = {
  assignments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        assignment_name: PropTypes.string.isRequired,
        assignment_description: PropTypes.string.isRequired,
        assignment_due: PropTypes.string.isRequired,
  })).isRequired,
};

export default DateList;
