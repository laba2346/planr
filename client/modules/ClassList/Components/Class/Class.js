import React, { PropTypes } from 'react';
import styles from './Class.css';
import moment from 'moment';

/**
    Renders an individual class.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/

function Class(props, context) {
     var stripeStyle = {
            backgroundColor: props._class.class_color
        }

  return (
    <div className={styles['class']}>
        <div className={styles['class-text']}>
        {props._class.class_name}
        <br/>
        {props._class.class_info}
        <br/>
        {props._class.class_times}
        </div>
        <div style={stripeStyle} className={styles['class-color']}>
        </div>
    </div>
  );
}

Class.propTypes = {
    _class: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
};

export default Class;
