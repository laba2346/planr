import React, { PropTypes } from 'react';
import styles from './Class.css';
import moment from 'moment';

/**
    Renders an individual class.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/

function Class(props, context) {
     var backgroundStyle = {
            backgroundColor: props.color
        }
        
    console.log(props._class)
    console.log(props.color)
  return (
    <div className={styles['class']} style={backgroundStyle}>
        {props._class.class_name}
    </div>
  );
}

Class.propTypes = {
    _class: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
};

export default Class;
