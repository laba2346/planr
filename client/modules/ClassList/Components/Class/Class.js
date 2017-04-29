import React, { PropTypes } from 'react';
import styles from './Class.css';
import moment from 'moment';

/**
    Renders an individual class.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/
function Class(props, context) {
    console.log(props._class)
  return (
    <div className={styles['class']}>
        {props._class.class_name}
    </div>
  );
}

Class.propTypes = {
    _class: PropTypes.object.isRequired,
};

export default Class;
