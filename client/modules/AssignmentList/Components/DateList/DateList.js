import React, { PropTypes } from 'react';
import Assignment from '../Assignment/Assignment';
import styles from './DateList.css';
import datejs from 'date.js';

function DateList(props, context) {
    var date = new Date(props.assignments[0].assignment_due);
    var day = date.getDay()+1;
    var monthNames = new Array();
        monthNames[0] = "January";
        monthNames[1] = "February";
        monthNames[2] = "March";
        monthNames[3] = "April";
        monthNames[4] = "May";
        monthNames[5] = "June";
        monthNames[6] = "July";
        monthNames[7] = "August";
        monthNames[8] = "September";
        monthNames[9] = "October";
        monthNames[10] = "November";
        monthNames[11] = "December";
    var month = monthNames[date.getMonth()];
    
    return (
        <div className={styles['date-list']}>
            <h3>{month} {day}</h3>
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
