import React, { PropTypes } from 'react';
import styles from './Class.css';
import moment from 'moment';

/**
    Renders an individual class.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/
function Class(props, context) {
    var date = new Date(props._class.class_due);
    var time = moment(date).format(" h:mm a");
  return (
    <div className={styles['class']}>
        {props._class.class_name}
        <label className={styles['time-label']}> {time} </label>
    </div>
  );
}

Class.propTypes = {
    _class: PropTypes.object.isRequired,
};

export default Class;
